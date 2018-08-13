import React, { Component } from 'react'

class CoverArticle extends Component {
  render () {
    const textLimit = 80
    const classList = [
      'coverArticle',
      this.props.index === 2 ? 'last' : ''
    ]
    return (
      <div 
        onMouseOver={() => this.props.handleHover(this.props.index)}
        onClick={() => this.props.handleHover(this.props.index)}
        className={classList.join(' ')}>
        <h2>0{this.props.index + 1}</h2>
        {
          this.props.title ?
          <h3>
            {
              this.props.title.slice(0, this.props.title.length > textLimit ? 
                textLimit : 
              this.props.title.length)
            }
          </h3> :
          ''
        }
        
      </div>
    )
  }
}

export default CoverArticle