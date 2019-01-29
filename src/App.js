import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

//image imports
import blackpanther from "./images/blackpanther.gif"
import spiderman from "./images/spiderman.gif"
import deadpool from "./images/deadpool.gif"
import wolverine from "./images/wolverine.gif"
import harleyquinn from "./images/harleyquinn.gif"
import professorx from "./images/professorx.gif"
import hulk from "./images/hulk.gif"
import batman from "./images/batman.gif"
import superman from "./images/superman.gif"
import wonderwoman from "./images/wonderwoman.gif"
import thor from "./images/thor.gif"
import storm from "./images/storm.gif"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

//Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "Black Panther":
        return `${blackpanther}`
      case "Spider Man":
        return `${spiderman}`
      case "Deadpool":
        return `${deadpool}`
      case "Wolverine":
        return `${wolverine}`
      case "Harley Quinn":
        return `${harleyquinn}`
      case "Professor X":
        return `${professorx}`
      case "Hulk":
        return `${hulk}`
      case "Batman":
        return `${batman}`
      case "Superman":
        return `${superman}`
      case "Wonder Woman":
        return `${wonderwoman}`
      case "Thor":
        return `${thor}`
      case "Storm":
        return `${storm}`
      default:
        return `${storm}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
