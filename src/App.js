import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import ListBox from './ListBox';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    const colors = shuffle(Array.from(this.props.allColors));
    const boxes = colors.map((c, index) => (
      c = {id: index, color: c, status:0}
      ));
    this.state = {
      boxes: boxes,
      numBox: 0,
      noClick: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  
  onClick(id){
    const numBox = this.state.numBox + 1;
    const boxes = this.state.boxes.map((b, index) => (
        id === b.id ? b = {id: id, color: b.color, status: b.status === 0 ? 1 : b.status} : b
    ));
    const box = boxes.filter(b => b.id === id);
    if (box[0].status === 2) {return}
    const boxVisible = boxes.filter(b => b.status === 1);
    if (boxVisible.length === 1 && numBox === 2) {return}
    const noClick = this.state.noClick;
    if (noClick) {return}
    this.setState({boxes, numBox, noClick: numBox === 2 ? true : false});
    if (numBox === 2) { 
      const status = boxes.filter(b => b.status === 1);
      if (status[0].color === status[1].color) {
        this.setState({boxes: boxes.map((b, index) => (b.status === 1 ? b = {id: b.id, color: b.color, status: 2} : b)), numBox: 0, noClick: false});
      }
      else
        {
          this.setState({boxes, numBox: 2}, () => {
            setTimeout( () => {
            this.setState({boxes: boxes.map((b, index) => (b.status === 1 ? b = {id: b.id, color: b.color, status: 0} : b)), numBox: 0, noClick: false});
          }, 500);
          });
          
        }
    }
}

  handleNewGame(){
     const colors = shuffle(Array.from(this.props.allColors));
     const boxes = colors.map((c, index) => (
       c = {id: index, color: c, status:0}
      ));
    this.setState({boxes, numBox:0, noClick: false});
  }
  
  render() {
    return (
      <div className="App">
        <Navbar onNewGame={this.handleNewGame}/>
        <ListBox onClick={this.onClick} boxes={this.state.boxes}/>
      </div>
    );
  }
}

App.defaultProps = {
  // allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
  //             "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
  //             "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
  //             "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
  //             "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
  //             "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
  //             "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
  //             "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
  //             "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
  //             "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
  //             "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
  //             "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
  //             "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
  //             "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
  //             "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  //             "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
  //             "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
  //             "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
  //             "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
  //             "Yellow","YellowGreen"]
  allColors: ["Blue","Yellow","Green","Pink","Orange","Red","Violet","Grey","Blue","Yellow","Green","Pink","Orange","Red","Violet","Grey"]
};

export default App;
