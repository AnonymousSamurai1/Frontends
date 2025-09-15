import React, { useState } from 'react';
import styled from 'styled-components';
import addImage from '../assets/Add.png';
import Remove from '../assets/cancel_1.png';
import { Fade } from 'react-reveal';

function DashProducts() {
  const [load, setLoader] = useState(false);

  const handleToggleIn = () => {
    setLoader(true);
  };
  const handleToggleOut = () => {
    setLoader(false);
  };

  return (
    <Container>
      <div className="product">
        <Fade duration={1000}>
          <h1 className="header">Products</h1>
          <img
            src={addImage}
            alt="add"
            className="add"
            onClick={handleToggleIn}
          />
        </Fade>
      </div>
      {load && (
        <div className="inputMain">
          <Fade bottom duration={1000}>
            <div className="productMain">
              <img
                src={Remove}
                alt="Remove"
                className="cancelProduct"
                onClick={handleToggleOut}
              />
              <div className="productInput">
                <h1>Product Creation</h1>
                <p>All fields are required</p>
                <form>
                  <div className="main-input">
                    <label htmlFor="">Product Name:</label>
                    <input
                      type="text"
                      name=""
                      className="input-box"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div className="main-input">
                    <label htmlFor="">Description:</label>
                    <textarea placeholder="Enter your message" name="message" />
                  </div>
                  <div className="category">
                    <div className="main-input">
                      <select name="Category" className="input-box-sub">
                        <option value="">Select Category</option>
                        <option value="Herbicide">Herbicide</option>
                        <option value="Fungicide">Fungicide</option>
                        <option value="Fertilizer">Fertilizer</option>
                        <option value="Fungicide">Others</option>
                      </select>
                    </div>
                    <div className="main-input">
                      <select name="SubCategory" className="input-box-sub">
                        <option value="">Select Sub-Category</option>
                        <option value="Selective">Selective</option>
                        <option value="Non-Selective">Non-Selective</option>
                      </select>
                    </div>
                  </div>

                  <div className="main-input">
                    <label htmlFor="">Product Image</label>
                    <div className="file">
                      <input type="file" name="image" className="input-file" />
                    </div>
                  </div>

                  <div className="main-input">
                    <label htmlFor="">Product Ingredients</label>
                    <input
                      type="text"
                      name=""
                      className="input-box"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div className="main-input">
                    <input type="submit" value="Submit" className="input-submit"/>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      )}
      <Fade duration={1000}>
        <form className="searchMain">
          <input
            type="text"
            name=""
            className="search"
            placeholder="Search by name"
          />
        </form>
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  width: 59vh;
  padding: 4% 0%;
  .product {
    display: flex;
  }
  .header {
    padding: 5% 100%;
    color: gray;
    font-family: 'Poppins', sans-serif;
  }
  .searchMain{
    padding: 2% 60%;
  }
  .inputs {
      width: 500px;
      height: 35px;
      border: 2px solid rgba(128, 128, 128, 0.91);
      outline: none;
      resize: none;
      border-radius: 10px;
      font-family: 'Rubik';
      text-indent: 3%;
      color: gray;
    }
  }
  .search {
    width: 500px;
    height: 35px;
    padding: 1% 10%;
    border: 2px solid rgba(128, 128, 128, 0.91);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
    text-indent: 3%;
    color: gray;
  }
  .add {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    }
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
  .productInput{
    flex: 1;
    overflow-y: auto; 
    padding: 0% 2%;
      h1{
        text-align: center;
        font-family: "Kanit";
        line-height: 90px;
        color: gray;
        overflow-y: auto;   
        padding-right: 8px; 
      }
    }
    .productInput::-webkit-scrollbar {
      width: 6px;
    }
    .productInput::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    .productInput::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .main-input{
    padding: 2% 0%;
    }
  .input-box{
    width: 700px;
    height: 30px;
    padding: 1% 2%;
    border: 2px solid rgba(128, 128, 128, 0.81);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  textarea{
    width: 700px;
    height: 80px;
    padding: 2%;
    border: 2px solid rgba(128, 128, 128, 0.81);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  label{
    font-family: "Kanit";
    color: grey;
    font-size: 15px;
    font-weight: normal;
  }
  .input-box-sub{
    width: 350px;
    height: 60px;
    padding: 1% 2%;
    border: 2px solid rgba(128, 128, 128, 0.81);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  .category{
    display: flex;
    justify-content: space-between;
  }
    .input-file {
      font-family: inherit;
      font-size: 14px;
      color: #555;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 12px;
      background: #f9fafb;
      cursor: pointer;
      transition: border 0.2s ease, box-shadow 0.2s ease;
      width: 700px;
      border: 2px solid rgba(128, 128, 128, 0.81);
    }

    .input-file::file-selector-button {
      background: linear-gradient(90deg, #6ee7b7, #3b82f6);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 8px 14px;
      margin-right: 10px;
      cursor: pointer;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .input-file::file-selector-button:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-1px);
    }
    .input-file::file-selector-button:active {
      transform: translateY(1px);
      box-shadow: none;
    }
    .input-file:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
    .input-submit{
      width: 730px;
      height: 60px;
      border: none;
      border-radius: 10px;
      font-family: 'Kanit';
      background: #44B302;
      color: white;
      font-size: 20px;
      :hover{
        cursor: pointer;
        color: #44B302;
        border: 2px solid #44B302;
        background: #ffffff03;
      }
  }
`;

export default DashProducts;
