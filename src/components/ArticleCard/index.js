import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./index.scss";

const ArticleCard = ({ article }) => {
  const maxSummaryLimit = 150;
  return (
    <div className="articleCard">
      <div className="imageContainer">
        <img src={article.thumbnailImage.url} />
      </div>
      <div className="infoContainer">
        <span className="category">{article.tags.map(v => v.title)}</span>
        <h2>{article.title}</h2>
        <p>
          {article.excerpt.slice(
            0,
            article.excerpt.length > maxSummaryLimit
              ? maxSummaryLimit
              : article.excerpt.length
          )}
        </p>
        <div className="divider" />
        <div className="footer">
          <div>发布于 {moment(article._publishedAt).format("LL")}</div>
          <Link to={`/blog/${article.slug}`}>阅读更多</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
