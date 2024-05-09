import React from "react";
import "./Jelajah.css";

function Card (){
    return(
        <div className="card">
            <img src="../images/background3.jpg" className="card-img" alt="#"/>
            <div className="card-body">        
            <h1 className="card-title">JUDUL</h1>
            <p className="card-sub-title">sub judul</p>    
            <p className="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quis sapiente magnam nemo error nam incidunt ipsa magni beatae inventore.</p>    
            <button className="card-btn">CLICK HERE</button> 
            </div>
        </div>
    )
}

export default Card;