import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light mx-5 my-2">
        <a class="navbar-brand" href="/home">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link ml-5" href="/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-5" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-5" href="/blogs">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-5" href="/contacts" >Contacts</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
          <li class="list-inline-item pr-2">
              <a href="#" class="dark-text ml-3">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="list-inline-item pr-2">
              <a href="#" class="blue-text ml-3">
                <i class="fab fa-facebook-f pr-1"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="blue-text ml-3">
                <i class="fab fa-twitter pr-1"> </i>
              </a>
            </li>
                
            </ul>
        </div>
      </nav>
    );
};

export default Navbar;