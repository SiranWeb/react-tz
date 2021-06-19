import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setNews } from "../../store/actions";
import newsAPI from "../../api/newsAPI";
import NewsItem from "./NewsItem";
import './style.css';

function NewsPage() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.list);

  useEffect(() => {
    (async () => {
      const newsData = await newsAPI.getNews();
      dispatch(setNews(newsData));
    })();
  }, [dispatch]);

  const showNews = () => newsList.map((item) => <NewsItem
    title={item.title}
    description={item.description}
    key={item.id}
  />);

  return (
    <div>
      <h1 className="news_title">News</h1>
      <div className="news_list">
        {newsList ? showNews() : 'Loading...'}
      </div>
    </div>

  )
}

export default NewsPage;