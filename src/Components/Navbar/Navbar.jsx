import  CartWidget  from "../CartWidget/CartWidget";
import * as React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
        
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg bg-secondary">
  <div class="container-fluid">
    <Link to="/">
    <a class="navbar-brand" href="#"><img src="logoPag.png"  /></a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to="/" class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </Link>
        <Link to="/category/NBA" class="nav-item">
          <a class="nav-link" href="#">NBA</a>
        </Link>
        <Link to="/category/NFL" class="nav-item">
          <a class="nav-link" href="#">NFL</a>
        </Link>
        <Link to="/category/MLB" class="nav-item">
          <a class="nav-link" href="#">MLB</a>
        </Link>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
  )
}


