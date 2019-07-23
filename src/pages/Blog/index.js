import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getBlogContent } from "../../queries/blogs";

function BlogPage({ apollo, location }) {
  const [blog, setBlog] = useState({});
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

  console.log(blog);
  return (
    <div>
      <div>{blog.title}</div>
    </div>
  );
}

export default withRouter(BlogPage);
