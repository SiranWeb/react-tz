import React from "react";
import './style.css';

function NewsItem({ title, description }) {
  return (
    <div className="news_item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default NewsItem;