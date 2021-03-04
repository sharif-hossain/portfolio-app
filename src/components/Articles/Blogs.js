import React, { useEffect, useState } from "react";
import "./Blogs.css";
import ArticleInfo from '../../fakeData/ArticleInfo';
import Articles from "./Articles";
import { useHistory } from "react-router-dom";

const Blogs = () => {
    const [articles, setArticles] = useState(ArticleInfo);
    const history = useHistory();
   console.log(articles)
    useEffect(()=>{
     
    },[])

    const handleClick=(id) =>{
        console.log('clicked', id)
        // history.push(`/blogs/${id}`)
        history.push(`/blog/${id}`)
      }

  return (
    <div className="text-header text-center">
      <h1 className="my-5">Latest Articles</h1>
      <div className="row mx-5">
          {
              articles.map(article => <Articles article={article} handleClick={handleClick}></Articles>)
          }
      </div>
    </div>
  );
};

export default Blogs;
