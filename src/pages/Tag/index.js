import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getBlogContent, getBlogByTag } from "../../queries/blogs";
import moment from "moment";
import "./index.scss";
import { getTag } from "../../queries/tags";

function TagPage({ apollo, location }) {
  const [tag, setTag] = useState({});
  console.log("123");
  useEffect(() => {
    const fetchTagContent = async () => {
      const data = await apollo.query({
        query: getTag,
        variables: { slug: location.pathname.split("/")[2] }
      });
      console.log(data);
      setTag(data.data.tag);
    };
    fetchTagContent();
  });
  useEffect(() => {
    const fetchTagBlogs = async () => {
      const data = await apollo({
        query: getBlogByTag,
        variables: { tag: location.pathname.split("/")[2]}
      })
    }
  })

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <h1>{tag.title}</h1>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default withRouter(TagPage);
