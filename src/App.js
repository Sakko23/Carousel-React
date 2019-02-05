import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const slides = [
  {
    content:
      "« We had the chance to work with AgenceMe four times on various projects for the web or mobile applications. What we liked was their swiftness and the great quality their design that will always get you that 'wow' effect »",
    author: "Rick Sanchez",
    source: "Product Manager"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];







class Carousel extends Component {
  state = {
    activeIndex: this.props.activeIndex,
  }
  goToSlide = (index) => {
    index = Math.abs(index);
    index = (index) % 7;
    console.log(index);
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    return (
      <div className="carousel">
        <div className="carousel-btn" id="btn-left" onClick={() => this.goToSlide(this.state.activeIndex+6)}>
          <img src="https://image.flaticon.com/icons/svg/118/118744.svg"/>
        </div>



        <div className="carousel-display">
          <div className="carousel-logo">
            <img src="https://codebusters.team/images/avatar.png"></img>
          </div>
          <div className="carousel-text">
            {this.props.slides[this.state.activeIndex].content}
          </div>
          <div className="carousel-header">{this.props.slides[this.state.activeIndex].author}</div>
          <div className="carousel-prof">{this.props.slides[this.state.activeIndex].source}</div>
        </div>
        
        <div className="carousel-btn" id="btn-right" onClick={() => this.goToSlide(this.state.activeIndex+1)}>
          <img src="https://image.flaticon.com/icons/svg/118/118745.svg"></img>
        </div>

      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slides: slides,
    }
  }

  render() {
    return (
      <div className="App">
        <Carousel
          activeIndex={this.state.activeIndex}
          slides={this.state.slides}
        />

      </div>
    );
  }
}

export default App;
