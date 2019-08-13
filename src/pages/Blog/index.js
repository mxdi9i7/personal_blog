import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getBlogContent } from "../../queries/blogs";
import moment from "moment";
import "./index.scss";
import Body from "./Body";

function BlogPage({ apollo, location }) {
  const [blog, setBlog] = useState({ heroImage: {} });
  useEffect(() => {
    const fetchBlogContent = async () => {
      const data = await apollo.query({
        query: getBlogContent,
        variables: { slug: location.pathname.split("/")[2] }
      });
      setBlog(data.data.blog);
    };
    fetchBlogContent();
  });
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <img src={blog.heroImage.url} alt="" />
        <div className="header">
          <h1>{blog.title}</h1>
          <p>{moment(blog._publishedAt).format("LLL")}</p>
        </div>
        <div className="excerpt">{blog.excerpt}</div>
        <hr />
        <Body data={blog.articleBody} />
        <div className="body" dangerouslySetInnerHTML={{ __html: blog.body }} />
      </div>
    </div>
  );
}

export default withRouter(BlogPage);
