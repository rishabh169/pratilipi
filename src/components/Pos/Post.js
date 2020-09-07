import React from 'react';
import {
 Link
} from "react-router-dom";
// import { Button } from 'react-bootstrap';


const Post = () => {
  return(
    
    <div className="cards" style={{textAlign: "center"}}>
      <div className = "card">
        <img src="https://images-na.ssl-images-amazon.com/images/I/616%2BhLzWEuL.jpg" alt = "myPic" className="card_img"/>
        <div className ="card_info">
          <span className = "card_category">NETFLIX ORIGINAL SERIES</span>
          <h3 className="card_title">DARK</h3>
  

          <Link to = "dark"> Click here to read post</Link> 

        </div>
      </div>
      <div className = "card">
        <img src="https://images-na.ssl-images-amazon.com/images/I/616%2BhLzWEuL.jpg" alt = "myPic" className="card_img"/>
        <div className ="card_info">
          <span className = "card_category">NETFLIX ORIGINAL SERIES</span>
          <h3 className="card_title">LIGHT</h3>
  

          <Link to = "light"> Click here to read post</Link> 

        </div>
      </div>
    </div>
   
  );
}

export default Post;