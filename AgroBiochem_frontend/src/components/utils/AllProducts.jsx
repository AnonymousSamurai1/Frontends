import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

function AllProducts(props) {
  const [detail, setDetail] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        'http://localhost:5612/agrobiochem/api/products/'
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log('API response:', data);

      if (data.success && Array.isArray(data.data)) {
        setProducts(data.data);
        setFilteredProducts(data.data);
      } else {
        setProducts([]);
        setFilteredProducts([]);
        toast.error(data.message || 'No products available');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setProducts([]);
      setFilteredProducts([]);
      toast.error('Unable to fetch products. Please check your server.');
    }
  };

  const fetchProductDetails = async (id) => {
    setDetail(true);
    try {
      const res = await fetch(
        `http://localhost:5612/agrobiochem/api/products/${id}`
      );
      const data = await res.json();

      if (data.success) {
        setSelectedProduct(data.data);
      } else {
        toast.error(data.message || 'Failed to fetch product details');
      }
    } catch (error) {
      toast.error('Something went wrong while fetching details');
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
    if (value.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Fade duration={1000}>
        <form>
          <input
            type="text"
            className="search"
            placeholder="Search by name"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </Fade>
      <div className="productsGrid">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div className="carder">
                <div
              key={prod._id}
              className="productCard"
              onClick={() => fetchProductDetails(prod._id)}
            >
              <img
                src={`${prod.image}`}
                alt={prod.name}
                className="productImg"
              />
              <p className='title'>{prod.name}</p>
              <p>Click to view details</p>
            </div>
            </div>
          ))
        ) : (
          <p className="paragraph">No products found</p>
        )}
      </div>
      {detail && (
        <div className="inputMain">
          <Fade bottom duration={1000}>
            <div className="productMain">
              <img
                src={props.remove}
                alt="Remove"
                className="cancelProduct"
                onClick={() => setDetail(false)}
              />
              {selectedProduct ? (
                <div className="productDetail-main">
                  <div className="imageDetails">
                    {selectedProduct.image && (
                      <img
                        src={`${selectedProduct.image}`}
                        alt={selectedProduct.name}
                        width="200"
                      />
                    )}
                  </div>
                  <div className="detail-description">
                    <h2>{selectedProduct.name}</h2>
                    <p>{selectedProduct.description}</p>
                    <p>Category: {selectedProduct.category}</p>
                    <p>Sub-Category: {selectedProduct.categoryType}</p>
                    <p>Ingredients: {selectedProduct.ingredient}</p>
                  </div>
                </div>
              ) : (
                <p>Click a product to view details</p>
              )}
            </div>
          </Fade>
        </div>
      )}
      ;
    </Container>
  );
}

const Container = styled.div`
.search {
    width: 700px;
    height: 35px;
    padding: 1% 0%;
    background: red;
    border: 2px solid rgba(128, 128, 128, 0.91);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
    text-indent: 3%;
    color: gray;
  }
 
  .inputMain {
    background: rgba(199, 199, 199, 0.86);
    position: absolute;
    top: 0;
    width: 50%;
    height: 95%;
    z-index: 5;
    backdrop-filter: blur(10px);
    overflow: hidden; 
    padding: 1% 10%;
  }
  .productMain {
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    position: relative; 
}
.cancelProduct {
    position: absolute;
    top: 16px;      
    right: 16px;    
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
}
.cancelProduct:hover {
    transform: scale(1.1);
}
  .productsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; 
  max-height: 60vh; 
  overflow-y: scroll;   
  overflow-x: hidden;   
  scrollbar-width: none; 
  .paragraph{
    font-family: 'Kanit';
    color: gray;
  }
}
  .carder{
    padding: 4% 0%;
  }
.productCard{
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
}
.productImg {
    width: 200px;
    height: 250px;
}
.productDetail-main{
  display: flex;
  img{
    width: 40px;
    height: 40px;
  }
}
`;
export default AllProducts;
