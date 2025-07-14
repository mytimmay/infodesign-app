import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import designerimage from "./img/Designer.png";
import forscherimage from "./img/Forscher.png";
import programmiererimage from "./img/Programmierer.png";
import lehrerimage from "./img/Lehrer.png";
import Studyimage from "./img/studieninteressierteR.png";
import Workimage from "./img/arbeitgeberIn.png";
import Title from "./img/Title.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldsofwork: [
        {
          name: "Wir sind Designer",
          text:
            "Unsere Spielwiese ob analog oder digital, ist gefüllt mit Farben und Forme aller Art.",
          text2:
            "Als Informationsdesigner gestalten wir alles von Webseiten, über Apps, Plakate und Flyer bis hin zu Produkten. Wir achten auf eine gute Formensprache, genauso wie auf ein harmonisches Zusammenspiel von Farben und Schriften.",
          image: designerimage
        },

        {
          name: "Wir sind Forscher",
          text:
            "Unser Labor ist die Welt, unser Forschungsobjekt der Mensch mit seinen Bedürfnissen.",
          text2:
            "Als Informationsdesigner legen wir unser Augenmerk immer auf die Nutzer. Für optimale Ergebnisse führen wir ausführliche Recherchen durch und erheben Daten mithilfe von User Tests.",
          image: forscherimage
        },

        {
          name: "Wir sind Macher",
          text:
            "Unsere Bastelei erfolgt mal analog, mal digital, mal ist sie grob, mal ist sie detailliert.",
          text2:
            "Als Informationsdesigner erschaffen wir schnell erste Prototypen, die das Verständnis für das Konzept vertiefen. Während eines Projektes durchlaufen die Prototypen mehrere Iterationen und wachsen mit den Anforderungen mit.",
          image: programmiererimage
        },

        {
          name: "Wir sind Konzepter",
          text:
            "Unsere Ideen entstehen im Kopf, für die Welt bannen wir sie mit Stiften, auf Papier.",
          text2:
            "Als Informationsdesigner können wir schnell Ideen generieren und durch Skizzen oder Wireframes anschaulich darstellen. Dabei berücksichtigen wir die Anforderungen unseres Auftraggebers und suchen nach der passenden Lösung.",
          image: lehrerimage
        }
      ]
    };
  }

  /**
   * The FieldsofWork consist of an image, a headline and two texts.
   * Creates one div, if the fieldsofWorkName is called
   */
  createFieldsofWorkDiv = fieldsofWorkName => {
    const current_FieldsofWork = this.state.fieldsofwork.find(element => {
      return element.name === fieldsofWorkName;
    });
    return (
      <div className="Infobox">
        <img src={current_FieldsofWork.image} alt="imageAlt" />
        <h2 className="Titleinfos">{current_FieldsofWork.name}</h2>
        <p>
          {current_FieldsofWork.text}
          <br />
          <br />
          {current_FieldsofWork.text2}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <div className="Title">
          <img src={Title} alt="imageAlt" />
          <span className="Titelhead">Informationen ohne Design?</span>
          <span className="Titeltext">
            Als Informationsdesigner sind wir Experten darin Informationen
            zielgruppengerecht aufzubereiten und strukturiert darzustellen.
          </span>
        </div>

        <div className="Boxes">
          {this.createFieldsofWorkDiv("Wir sind Designer")}
          {this.createFieldsofWorkDiv("Wir sind Forscher")}
          {this.createFieldsofWorkDiv("Wir sind Macher")}
          {this.createFieldsofWorkDiv("Wir sind Konzepter")}
        </div>

        <h2 className="Question">Möchtest du mehr erfahren?</h2>
        <div className="NavStart">
          <div className="Study">
            <Link to="/survey">
              <img src={Studyimage} alt="imageAlt" />
              <span>Fragebogen für Studieninteressierte</span>
            </Link>
          </div>

          <div className="Work">
            <Link to="/services">
              <img src={Workimage} alt="imageAlt" />
              <span>Kompetenzübersicht für Arbeitgeber</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
