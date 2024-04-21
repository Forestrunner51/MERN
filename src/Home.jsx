import React from "react";
import Header from "./components/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home(){
    return(
        <div>
        <Header/>
        <div className="card text-center" style={{ width: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">Welcome to Song Preview Site</h5>
          <p className="card-text">
Cards
          </p>

        </div>
      </div>
      </div>
      
    )
}

export default Home;