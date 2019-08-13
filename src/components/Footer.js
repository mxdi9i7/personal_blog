import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import { fetchAllTags } from "../queries/tags";

class Footer extends Component {
  state = {
    tags: []
  };
  async componentDidMount() {
    const tags = await this.props.apollo.query({
      query: fetchAllTags
    });
    this.setState({ tags: tags.data.allTags });
  }
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerContent">
          <div className="titleContainer">订阅我的周刊</div>
          <div className="footerGrid">
            <div className="subsContainer">
              <p>如果你想每周收到我的博客更新的话，可以在这里留下你的邮箱 :)</p>
              <div className="inputContainer">
                <input placeholder="你的邮箱" type="text" />
                <button>订阅</button>
              </div>
            </div>
            <div className="interestContainer">
              <p>选择一个你感兴趣的主题吧</p>
              <div className="blockContainer">
                {this.state.tags.map((v, i) => (
                  <Link key={i} to={`/tags/${v.slug}`} className="block">
                    {v.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
