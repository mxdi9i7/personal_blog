import React, { Component } from 'react'
import Slider from 'react-slick';

class ArticleSlide extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {
          this.props.articles.map((article, i) => (
            <div>{article.title}</div>
          ))
        }
      </Slider>
    );
  }
}

export default ArticleSlide