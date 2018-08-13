import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import ArticleCard from '../components/ArticleCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CoverArticle from '../components/CoverArticle'
import '../styles/Landing.css'
import {articles} from '../seeds/articles';


export default class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
      coverIndex: 0,
      popular: [{image: ''},{image: ''},{image: ''}]
    }
    this.handleCoverArticleHover = this.handleCoverArticleHover.bind(this)
  }

  async componentDidMount () {
    await this.loadArticles()
    this.loadPopularArticles()
  }
  
  loadArticles() {
    const data = articles
    this.setState({articles: data})
  }

  loadPopularArticles() {
    const articles = this.state.articles
    articles.sort((a, b) => a.views - b.views)
    this.setState({
      popular: articles.slice(0, 3)
    })
  }
  
  handleCoverArticleHover(i) {
    this.setState({coverIndex: i})
  }
  
  render() {
    const currentCoverBg = this.state.popular[this.state.coverIndex].image
    const preloadCover = `
      body::after{
        position: absolute; width:0; height:0; overflow:hidden; z-index:-1;
        content:url(${this.state.popular[0].image}) url(${this.state.popular[1].image}) url(${this.state.popular[2].image});
      }
    `

    return (
      <div className="page">
        <style>
          {preloadCover}
        </style>
        <Navbar />
          <div  
            style={{
              backgroundImage: `url(${currentCoverBg})`
            }}
            className="topContainer">
            <div className="topContainerOverlay"></div>
            <div className="titleContainer">
              <span>Top stories</span>
              <h1>{this.state.popular[this.state.coverIndex].title}</h1>
              <Link to="/">Continue Reading</Link>
              <div className="articlesContainer">
                {
                  this.state.popular.map((article, i) => (
                    <CoverArticle 
                      handleHover={this.handleCoverArticleHover}
                      title={article.title} 
                      index={i} 
                      key={i} />
                  ))
                }
              </div>
            </div>
          </div> 
          <div className="articleList">
            <h3>Recent Articles</h3>
            <div className="articlesContainer">
              {
                this.state.articles.map((article, i) => (
                  <ArticleCard key={i} article={article} />
                ))
              }
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
