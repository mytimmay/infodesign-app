import React, { Component } from "react";
import "./App_company.css";
import { Link } from "react-router-dom";
import title from "./img/Title.png";
import designerimage from "./img/Designer.png";
import forscherimage from "./img/Forscher.png";
import programmiererimage from "./img/Programmierer.png";
import lehrerimage from "./img/Lehrer.png";
import circle1 from "./img/circle1.png";
import circle2 from "./img/circle2.png";
import circle3 from "./img/circle3.png";
import circle4 from "./img/circle4.png";
import dottedLine from "./img/dottedLine.png";

export default class App_company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          name: "Konzept",
          text: ["Print", "Digital", "Kommunikationskonzept", "Ausstellungen"],
          image: designerimage
        },

        {
          name: "Protoyping",
          text: ["LoFi Prototypen", "HiFi Prototypen"],
          image: forscherimage
        },

        {
          name: "Design",
          text: [" Digital", " Print", " Ausstellungen"],
          image: programmiererimage
        },

        {
          name: "Research",
          text: [
            "Benchmarkig",
            "Nutzerbefragungen (formativ)",
            "Nutzertests (summativ)"
          ],
          image: lehrerimage
        }
      ],

      productprocess: [
        {
          name: "Vorentwicklung",
          text:
            "Es werden erste Ideen zu einem neuen Produkt entwickelt. Als Informationsdesigner führen wir in dieser Phase Benchmarking durch und versuchen durch Nachforschungen und Interviews, die Bedürfnisse der späteren Nutzer zu ergründen. Auf diese Weise stellen wir sicher, dass das Produkt einen Mehrwert auf dem Markt haben wird. Zum Ende dieser Phase können wir auch ein Lastenheft mit den Anforderungen an das neue Produkt erstellen. Schließlich wird noch ein grober Projektplan erstellt um auch das Zeit und Ressourcenmanagement im Blick zu behalten.",
          image: circle1
        },

        {
          name: "Konzeptphase",
          text:
            "Wir vertiefen unser Wissen über die Bedürfnisse der Nutzer und erstellen erste Skizzen und Ideen, die auf den zuvor definierten Anforderungen basieren. Aufgrund zahlreicher Kreativmethoden können wir schnell verschiedene Ideen entwickeln. Im anschluss werden diese Ideen und Lösungsansätz auf die Anforderungen hin überprüft, verworfen oder weiterentwickelt. Je nach Produkt oder Dienstleistung können auch schon erste Designentwürfe entstehen. Schließlich wird die weitere Planung des Projektes konkretisiert und ein Pflichtenheft, hält die Lösungsvorschläge fest.",
          image: circle2
        },

        {
          name: "Realisierungsphase",
          text:
            "Die Lösungsansätze aus der Konzeptphase werden mit Hilfe von Prototypen umgesetzt. Anschließend werden die Prototypen meist auch schon kurz getestet um möglichst früh Probleme aufzudecken und zu beheben. In dieser Phase wird auch das Design konkreter und ein Produkt nimmt durch detaillierte Pläne und Prototypen weiter Gestalt an.",
          image: circle3
        },

        {
          name: "Validierungsphase",
          text:
            "An dem Prototypen werdem nun Nutzertests durchgeführt, um das Produkt in einem möglichst realistischen Umfeld auszuprobieren. Da der Produktentwicklungsprozess iterativ ist, können noch einmal Fehler und Probleme aufgedeckt und entsprechende Lösungen entwickelt werden.",
          image: circle4
        }
      ]
    };
  }

  /**
   * One Service consist of an image, a headline and an odered Line.
   * Creates one div, if the fieldsofWorkName is called
   */
  createServiceDiv = serviceName => {
    const current_service = this.state.services.find(element => {
      return element.name === serviceName;
    });
    return (
      <div className="smallInfobox">
        <img src={current_service.image} alt="Leistungen" />

        <h2 className="Titleinfos">{current_service.name}</h2>
        <ol>
          {current_service.text.map(text => {
            return <li>{text}</li>;
          })}
        </ol>
      </div>
    );
  };

  /**
   * One Product Phase consist of an image, a headline and an paragraph.
   * Creates one div, if the productProcess Name is called
   */
  createProductProcessDiv = productProcess => {
    const current_ProductProcess = this.state.productprocess.find(element => {
      return element.name === productProcess;
    });
    return (
      <div className="ProductProcess">
        <div className="Phase">
          <img src={current_ProductProcess.image} alt="Phasen" />
          <div className="PhaseContent">
            <h3>{current_ProductProcess.name}</h3>
            <div className="smallColoredLine" />
            <p>{current_ProductProcess.text}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App_company">
        <div className="Nav">
          <div className="Button">
            <Link to="/">
              <button>Zurück zur Startseite</button>
            </Link>
          </div>
        </div>

        <h1 className="headertop">Unsere Leistungen</h1>
        <div className="smallBoxes">
          {this.createServiceDiv("Konzept")}
          {this.createServiceDiv("Protoyping")}
          {this.createServiceDiv("Design")}
          {this.createServiceDiv("Research")}
        </div>

        <h1 className="header">Unsere Rolle im Produktentstehungsprozess</h1>
        <div className="ProductPhases">
          {this.createProductProcessDiv("Vorentwicklung")}
          {this.createProductProcessDiv("Konzeptphase")}
          {this.createProductProcessDiv("Realisierungsphase")}
          {this.createProductProcessDiv("Validierungsphase")}
        </div>

        <h1 className="header">Formen der Zusammenarbeit</h1>
        <div className="Worktogether">
          <div className="Workwithus">
            <h3>Mit den Studenten</h3>
            <button>Projektarbeit</button>
            <button>Praktikumsstelle</button>
            <button>Bachelorarbeit</button>
            <button>Werkstudent</button>
            <button>Projektarbeit</button>
          </div>
          <div className="WorkwithUniversity">
            <h3>Mit der Fakultät</h3>
            <button>Forschungsauftrag</button>
          </div>
        </div>

        <div className="Contact">
          <h1>Kontakt</h1>
          <p>
            Sollten wir Ihr Interesse geweckt haben, können Sie weitere
            Informationen zur Zusammenarbeit auf der{" "}
            <a
              href="https://informationsdesign.hdm-stuttgart.de/"
              target="_blank"
            >
              Website des Studienganges
            </a>{" "}
            erhalten.
          </p>
        </div>

        <div className="Nav">
          <div className="Button">
            <Link to="/">
              <button>Zurück zur Startseite</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
