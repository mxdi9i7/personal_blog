import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { withRouter } from "react-router";

import ArticleCard from "../components/ArticleCard/index";
import CoverArticle from "../components/CoverArticle";

import { getRecentBlogs, getFeaturedBlogs } from "../queries/blogs";
import "../components/ArticleCard/index.scss";
import "../styles/Landing.scss";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverIndex: 0,
      recentBlogs: [],
      featuredBlogs: [{ heroImage: { url: "" } }]
    };
  }

  handleCoverArticleHover = i => {
    this.setState({ coverIndex: i });
  };

  componentDidMount = async () => {
    const feature = await this.fetchFeaturedBlogs();
    const recent = await this.fetchRecentBlogs();

    this.setState({
      featuredBlogs: feature.data.allBlogs,
      recentBlogs: recent.data.allBlogs
    });
  };

  fetchFeaturedBlogs = async () => {
    return this.props.apollo.query({ query: getFeaturedBlogs });
  };

  fetchRecentBlogs = async () => {
    return this.props.apollo.query({ query: getRecentBlogs });
  };

  render() {
    const { featuredBlogs, recentBlogs, coverIndex } = this.state;

    return (
      <div className="page">
        <div
          style={{
            backgroundImage: `url(${featuredBlogs[coverIndex].heroImage.url})`
          }}
          className="topContainer"
        >
          <div className="topContainerOverlay" />
          <div className="titleContainer">
            <span>置顶博客</span>
            <h1>{featuredBlogs[coverIndex].title}</h1>
            <Link to={`/blog/${featuredBlogs[coverIndex].slug}`}>阅读更多</Link>
            <div className="articlesContainer">
              {featuredBlogs.map((article, i) => (
                <CoverArticle
                  handleHover={this.handleCoverArticleHover}
                  title={article.title}
                  index={i}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="articleList">
          <h3>最新博客</h3>
          <div className="articlesContainer">
            {recentBlogs.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
