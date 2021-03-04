import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Nabvar/Navbar";
import "./ArticlesInfo.css";
import ArticleInfo from "../../../fakeData/ArticleInfo";
import { Link, useParams } from "react-router-dom";
const ArticlesInfo = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState({});
  useEffect(() => {
    const article = ArticleInfo.find((blog) => blog.id === parseInt(id));
    setArticles(article);
  }, [id]);
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="mx-5 background px-5">
        <h1 className="text-center pt-5" id="title">
          {articles.title}
        </h1>
        <div className="para">
        <p className="p-5">{articles.description}</p>
        </div>
        <div className="dummy-code">
            <pre className="text-gold">
           {
               `
               import React, { useState } from 'react';

               function Example() {
               // Declare a new state variable, which we'll call "count"
               const [count, setCount] = useState(0);

               return (
                   <div>
                   <p>You clicked {count} times</p>
                   <button onClick={() => setCount(count + 1)}>
                       Click me
                   </button>
                   </div>
               );
               }
               `
           }
            </pre>
        </div>
        <div>
            <img className="img-fluid" src={articles.img} alt=""/>
        </div>
        <div className="text-center">
            <Link to="/home"><div className="btn btn-primary">Blogs</div></Link>
            
        </div>
      </div> */}
    </div>
  );
};

export default ArticlesInfo;
