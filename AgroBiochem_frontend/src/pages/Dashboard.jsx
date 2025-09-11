import React, { useState } from "react";
import styled from "styled-components";
import DashHome from "../components/DashHome";
import DashQuestion from "../components/DashQuestion";
import DashProduct from "../components/DashProduct";


function Dashboard() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <div className="navigation">
        <nav>
          <ol>
            <li onClick={() => navigate("home")}>Home</li>
            <li onClick={() => navigate("question")}>Questions</li>
            <li onClick={() => navigate("product")}>Products</li>
          </ol>
        </nav>
      </div>

      <div className="category">
        {currentPage === "home" && <DashHome />}
        {currentPage === "question" && <DashQuestion />}
        {currentPage === "product" && <DashProduct />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  .navigation{
  background: green;
  width: 30%;
  height: 100vh;
  }
  nav {
    display: flex;
    margin: 0;
      height: 100vh;
      justify-content: center;
      align-items: center;
    ol {
      text-decoration: none;
      list-style-type: none;
      li {
        color: white;
        padding: 20% 0%;
        font-family: "Poppins", sans-serif;
      }
      li:hover {
        cursor: pointer;
        color: yellow;
        transform: scale(1.1);
        transition: 0.3s (ease-in-out);
      }
    }
  }
`;
export default Dashboard;
