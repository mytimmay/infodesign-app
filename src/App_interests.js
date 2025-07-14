import React, { Component } from "react";
import "./App_interests.css";
import negativSmiley from "./img/negativSmiley.png";
import neutralSmiley from "./img/neutralSmiley.png";
import positivSmiley from "./img/positivSmiley.png";
import drawWordsImage from "./img/Choosewords.png";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import * as Constants from "./Constants.js";

class App_interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interests: [
        { name: "Zeichnen", category: Constants.UnorderedSquare, bgcolor: "" },
        {
          name: "Programmieren",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        {
          name: "Visuell schön zu gestalten",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        {
          name: "Kreativität",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        { name: "Basteln", category: Constants.UnorderedSquare, bgcolor: "" },
        {
          name: "Neue Leute kennenlernen",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        {
          name: "Texte verfassen",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        { name: "Teamwork", category: Constants.UnorderedSquare, bgcolor: "" },
        {
          name: "Logisches Denken",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        {
          name: "Erforschen",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        {
          name: "Anderen etwas beibringen",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        },
        { name: "Mathe", category: Constants.UnorderedSquare, bgcolor: "" },
        { name: "Planen", category: Constants.UnorderedSquare, bgcolor: "" },
        {
          name: "Teamleitung übernehmen",
          category: Constants.UnorderedSquare,
          bgcolor: ""
        }
      ]
    };
  }

  /**
   * One Service consist of an image, a headline and an odered Line.
   * Creates one div, if the fieldsofWorkName is called
   */
  componentWillMount() {
    let interestsFromCookies = this.props.cookies.get("interests");

    if (interestsFromCookies != null) {
      this.setState({
        ...this.state,
        interests: interestsFromCookies
      });
    }
  }
  componentWillUnmount() {
    this.props.cookies.set("interests", JSON.stringify(this.state.interests), {
      path: "/"
    });
  }
  onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = (event, cat) => {
    let id = event.dataTransfer.getData("id");

    let interests = this.state.interests.map(interest => {
      if (interest.name === id) {
        interest.category = cat;
      }
      return interest;
    });

    this.setState({
      ...this.state,
      interests: interests
    });
  };

  createInterestDiv = interest => {
    return (
      <div
        key={interest.name}
        onDragStart={event => this.onDragStart(event, interest.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: interest.bgcolor }}
      >
        {interest.name}
      </div>
    );
  };

  createCategoryDiv = (category, image, imageAlt, headerText) => {
    return (
      <div className="Destination">
        <span className="task-header">
          {headerText === null ? (
            <img draggable="false" src={image} alt={imageAlt} />
          ) : (
            headerText
          )}
        </span>
        <div
          className={category}
          onDragOver={event => this.onDragOver(event)}
          onDrop={event => this.onDrop(event, category)}
        >
          {this.state.interests
            .filter(interests => {
              return interests.category === category;
            })
            .map(interests => this.createInterestDiv(interests))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App_interests">
        <div className="Nav">
          <div className="Button">
            <Link to="/">
              <button>Zurück zur Startseite</button>
            </Link>
          </div>
        </div>

        <div className="PageText">
          <p>
            Wenn du wissen möchtest, welcher Schwerpunkt von Informationsdesign
            am besten zu dir und deinen Interessen passt, dann nimm dir eine
            Minute Zeit und füll diesen kurzen Fragebogen aus. Danach bekommst
            du eine priorisierte Liste der Schwerpunkte angezeigt.
          </p>

          <div className="ColoredLine" />
        </div>

        <div className="container-drag">
          <h1 className="header">Was magst du gerne?</h1>

          <div className="Squares">
            <div className="Leftsite">
              {this.createCategoryDiv(
                Constants.GreenSquare,
                positivSmiley,
                "Passt zu mir",
                null
              )}
              {this.createCategoryDiv(
                Constants.YellowSquare,
                neutralSmiley,
                "Passt zu mir nicht",
                null
              )}
              {this.createCategoryDiv(
                Constants.RedSquare,
                negativSmiley,
                "Passt zu mir garnicht",
                null
              )}
            </div>
            <div className="DrawImage">
              <img
                draggable="false"
                src={drawWordsImage}
                alt="Ziehe die Wörter"
              />
            </div>
            {this.createCategoryDiv(
              Constants.UnorderedSquare,
              null,
              null,
              null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(App_interests);
