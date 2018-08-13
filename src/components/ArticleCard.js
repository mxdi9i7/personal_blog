import React, { Component } from 'react'
import moment from 'moment'
import '../styles/ArticleCard.css'

class ArticleCard extends Component {
  render () {
    const maxSummaryLimit = 150
    return (
      <div className="articleCard">
        <div className="imageContainer">
          <img src={this.props.article.thumbnail} />
        </div>
        <div className="infoContainer">
          <span className="category">
            {this.props.article.category}
          </span>
          <h2>{this.props.article.title}</h2>
          <p>{
            this.props.article.summary.slice(
              0, 
              this.props.article.summary.length > maxSummaryLimit ? 
              maxSummaryLimit : 
              this.props.article.summary.length)
          }</p>
          <div className="divider"></div>
          <div className="footer">
            <div>{moment(this.props.article.createdAt, 'YYYYMMDD').fromNow()}</div>
            <div>{this.props.article.views}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard