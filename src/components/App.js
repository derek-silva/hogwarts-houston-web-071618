import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog.js";
import Filters from "./Filters.js";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      hogCards: hogs.map(hog => <Hog hog={hog} />),

      filters: {
        type: "all"
      }
    };
  }

  handleClick = e => {
    let option =
      e.target.parentElement.previousElementSibling.children[0].value;

    switch (option) {
      case "all":
        this.setState({ hogCards: hogs.map(hog => <Hog hog={hog} />) });
        break;
      case "filtergrease":
        let sortedHogs = hogs.filter(hog => hog.greased === true);
        this.setState({ hogCards: sortedHogs.map(hog => <Hog hog={hog} />) });
        break;
      case "sortname":
        let namedHogs = hogs.sort(function(hog1, hog2) {
          if (hog1.name < hog2.name) return -1;
          if (hog1.name > hog2.name) return 1;
          return 0;
        });
        this.setState({ hogCards: namedHogs.map(hog => <Hog hog={hog} />) });
        break;
      case "sortweight":
        let weightedHogs = hogs.sort(function(hog1, hog2) {
          if (
            hog1[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] <
            hog2[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          )
            return -1;
          if (
            hog1[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] >
            hog2[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          )
            return 1;
          return 0;
        });
        this.setState({ hogCards: weightedHogs.map(hog => <Hog hog={hog} />) });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters onFilterPigsClick={this.handleClick} />
        <br />
        <div className="ui grid container">{this.state.hogCards}</div>
      </div>
    );
  }
}

export default App;
