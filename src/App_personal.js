import React, { Component } from "react";
import "./App_personal.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";

const genSlideStyle = value => {
  return {
    attribute_point: {
      left: `calc(${value * 16.66666666666667}% - ${10 + 1 * value}px)`
    },
    attribute_range: {
      width: `${value * 16.66666666666667}%`
    }
  };
};

class App_personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: [
        { name: "Offen für Neues", value: "3", bgcolor: "" },

        { name: "Organisiert", value: "3", bgcolor: "" },

        { name: "Zuverlässig", value: "3", bgcolor: "" },

        { name: "Gesellig", value: "3", bgcolor: "blue" },

        { name: "Durchsetzungsfähig", value: "3", bgcolor: "blue" },

        { name: "Mitfühlend", value: "3", bgcolor: "blue" },

        { name: "Selbstsicher", value: "3", bgcolor: "red" }
      ]
    };
  }
  /**
   * Get Cookies as soon as the component will mount
   */
  componentWillMount() {
    let attributesFromCookies = this.props.cookies.get("attributes");

    if (attributesFromCookies != null) {
      this.setState({
        ...this.state,
        attributes: attributesFromCookies
      });
    }
  }

  /**
   * Get Cookies as soon as the component will unmount
   */
  componentWillUnmount() {
    this.props.cookies.set(
      "attributes",
      JSON.stringify(this.state.attributes),
      {
        path: "/"
      }
    );
  }

  /**
   * Check value of each attribute
   */
  handleChange = event => {
    let input = event.target;
    let new_attributes = this.state.attributes.map(attribute => {
      if (attribute.name === input.name) {
        attribute.value = input.value;
      }
    });

    this.setState({
      ...this.state,
      new_attributes
    });
  };

  /**
   * The Slider consist of an headline, an inputfield with bullets,the Slidervalue and Text.
   * Creates one Sliderdiv, if the sliderName is called
   */
  createSliderDiv = sliderName => {
    const current_attribute = this.state.attributes.find(element => {
      return element.name === sliderName;
    });
    const slideStyle = genSlideStyle(current_attribute.value);
    return (
      <div className="Slider">
        <h2 className="Slidername">{current_attribute.name}</h2>
        <input
          className="Slider-input"
          name={current_attribute.name}
          type="range"
          min="0"
          max="6"
          value={current_attribute.value}
          step="1"
          onChange={this.handleChange}
        />
        <div className="Sliderline">
          <span className="bullet-1" />
          <span className="bullet-2" />
          <span className="bullet-3" />
          <span className="bullet-4" />
          <span className="bullet-5" />
          <span className="bullet-6" />
          <span className="bullet-7" />
          <span className="Slider-value" style={slideStyle.attribute_range} />
          <span className="label" style={slideStyle.attribute_point} />
        </div>
        <div className="Text">
          <span className="Textleft">gar nicht</span>
          <span className="Textright">sehr</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App_personal">
        <div className="container-slide">
          <h1 className="header">Was passt zu dir?</h1>
          {this.createSliderDiv("Offen für Neues")}
          {this.createSliderDiv("Organisiert")}
          {this.createSliderDiv("Zuverlässig")}
          {this.createSliderDiv("Gesellig")}
          {this.createSliderDiv("Durchsetzungsfähig")}
          {this.createSliderDiv("Mitfühlend")}
          {this.createSliderDiv("Selbstsicher")}
        </div>
        <div className="Nav">
          <div className="Button">
            <Link to="/">
              <button>Zurück zur Startseite</button>
            </Link>
          </div>
          <div className="Button">
            <Link to="/result">
              <button>Auswerten</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withCookies(App_personal);
