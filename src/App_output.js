import React, { Component } from "react";
import "./App_output.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import * as Constants from "./Constants.js";
import DDimage from "./img/Double Diamond.png";
import UCDimage from "./img/UCD.png";
import designerimage from "./img/Designer.png";
import VisuellesDesignimage from "./img/VisuellesDesign.png";
import UUXimage from "./img/UUX.png";
import Managementimage from "./img/Management.png";
import Informationsdidaktikimage from "./img/Informationsdidaktik.png";
import Programmiererimage from "./img/Programmierer.png";
import Textdesignimage from "./img/Textdesign.png";

//Gewichtung der Dropdownfelder
let interests_weight = {};
interests_weight[Constants.UnorderedSquare] = 1;
interests_weight[Constants.GreenSquare] = 3;
interests_weight[Constants.YellowSquare] = 2;
interests_weight[Constants.RedSquare] = 0;

class App_output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interest_factors: [
        {
          InterestName: "Zeichnen",
          VisuellesDesign: "1",
          Textdesign: "0",
          Programmieren: "0",
          Management: "0",
          UUX: "0,5",
          Informationsdidaktik: "0,25"
        },
        {
          InterestName: "Programmieren",
          VisuellesDesign: "0.25",
          Textdesign: "0",
          Programmieren: "1,25",
          Management: "0",
          UUX: "0,5",
          Informationsdidaktik: "0,25"
        },
        {
          InterestName: "Visuell schön zu gestalten",
          VisuellesDesign: "1,25",
          Textdesign: "0",
          Programmieren: "0",
          Management: "0",
          UUX: "0,25",
          Informationsdidaktik: "0,75"
        },
        {
          InterestName: "Kreativität",
          VisuellesDesign: "1",
          Textdesign: "0,75",
          Programmieren: "0",
          Management: "0",
          UUX: "0,25",
          Informationsdidaktik: "0,75"
        },
        {
          InterestName: "Basteln",
          VisuellesDesign: "1",
          Textdesign: "0",
          Programmieren: "0",
          Management: "0",
          UUX: "0,75",
          Informationsdidaktik: "0,25"
        },
        {
          InterestName: "Neue Leute kennenlernen",
          VisuellesDesign: "0",
          Textdesign: "0",
          Programmieren: "0",
          Management: "0,75",
          UUX: "1",
          Informationsdidaktik: "0"
        },
        {
          InterestName: "Texte verfassen",
          VisuellesDesign: "0",
          Textdesign: "1,25",
          Programmieren: "0",
          Management: "0",
          UUX: "0,75",
          Informationsdidaktik: "0,5"
        },
        {
          InterestName: "Teamwork",
          VisuellesDesign: "0,75",
          Textdesign: "0",
          Programmieren: "0,5",
          Management: "0,75",
          UUX: "1",
          Informationsdidaktik: "0,25"
        },
        {
          InterestName: "Teamleitung übernehmen",
          VisuellesDesign: "0",
          Textdesign: "0",
          Programmieren: "0",
          Management: "1",
          UUX: "0,75",
          Informationsdidaktik: "0"
        },
        {
          InterestName: "Logisches Denken",
          VisuellesDesign: "0",
          Textdesign: "0",
          Programmieren: "1",
          Management: "0,25",
          UUX: "0,75",
          Informationsdidaktik: "0,5"
        },
        {
          InterestName: "Erforschen",
          VisuellesDesign: "0,25",
          Textdesign: "0,5",
          Programmieren: "0,5",
          Management: "0,25",
          UUX: "1",
          Informationsdidaktik: "0,75"
        },
        {
          InterestName: "Anderen etwas beibringen",
          VisuellesDesign: "0",
          Textdesign: "0,5",
          Programmieren: "0",
          Management: "0,25",
          UUX: "0,5",
          Informationsdidaktik: "1,25"
        },
        {
          InterestName: "Mathe",
          VisuellesDesign: "0",
          Textdesign: "0",
          Programmieren: "1",
          Management: "0,5",
          UUX: "0,5",
          Informationsdidaktik: "0"
        },
        {
          InterestName: "Planen",
          VisuellesDesign: "0,25",
          Textdesign: "0,5",
          Programmieren: "0,75",
          Management: "1,25",
          UUX: "1",
          Informationsdidaktik: "0,75"
        }
      ],
      attribute_factors: [
        {
          AttributeName: "Offen für Neues",
          VisuellesDesign: "0,75",
          Textdesign: "0,25",
          Programmieren: "0,5",
          Management: "0,25",
          UUX: "0,75",
          Informationsdidaktik: "1"
        },
        {
          AttributeName: "Organisiert",
          VisuellesDesign: "0,5",
          Textdesign: "1",
          Programmieren: "1",
          Management: "1,25",
          UUX: "1",
          Informationsdidaktik: "0,75"
        },
        {
          AttributeName: "Zuverlässig",
          VisuellesDesign: "0,5",
          Textdesign: "1",
          Programmieren: "1",
          Management: "1,25",
          UUX: "1",
          Informationsdidaktik: "0,75"
        },
        {
          AttributeName: "Gesellig",
          VisuellesDesign: "0,25",
          Textdesign: "0,5",
          Programmieren: "0,25",
          Management: "0,75",
          UUX: "0,75",
          Informationsdidaktik: "0,25"
        },
        {
          AttributeName: "Durchsetzungsfähig",
          VisuellesDesign: "0,5",
          Textdesign: "0,5",
          Programmieren: "0,5",
          Management: "1,25",
          UUX: "0,5",
          Informationsdidaktik: "0,25"
        },
        {
          AttributeName: "Mitfühlend",
          VisuellesDesign: "0,75",
          Textdesign: "0,75",
          Programmieren: "0,25",
          Management: "0,25",
          UUX: "1",
          Informationsdidaktik: "1"
        },
        {
          AttributeName: "Selbstsicher",
          VisuellesDesign: "1",
          Textdesign: "0,75",
          Programmieren: "0,25",
          Management: "1",
          UUX: "0,75",
          Informationsdidaktik: "0,5"
        }
      ],
      activityTaskAreas: [
        {
          activityName: "VisuellesDesign",
          activeTaskArea: "Infografiken",
          taskAreas: [
            {
              name: "Infografiken",
              fielddescription:
                "Informationsgrafiken repräsentieren visuell komplexe Gesamtzusammenhänge in einer Abbildung. Dabei bemühen sich Infografiken um eine möglichst effiziente Vermittlung von Fakten, welche möglichst klar, genau und anschaulich für die Zielgruppe aufbereitet sind. Da der Mensch visuelle Informationen am schnellsten und einfachsten aufnimmt, bieten hier Infografiken einen deutlichen Mehrwert im Gegensatz zu Texten. Denn Inhalte von Infografiken wurden schon für den Nutzer aufbereitet, sodass dieser weniger eigene Denkleistung erbringen muss. Durch ihre objektive Darstellung von Fakten, in einer einfachen Art und Weise sind Infografiken zu einem beliebten Medium der Informationsverbreitung geworden. Sie finden sich in Zeitungen, Magazinen und im Internet, genauso wie in Schul- und Lehrbüchern."
            },

            {
              name: "Interfacedesign",
              fielddescription:
                "Das Interfacedesign, meist auch als Screendesign bezeichnet, beschäftigt sich mit der visuellen Gestaltung von Benutzeroberflächen. Es ist ein wichtiger Bestandteil um eine optimale Schnittstelle zwischen dem Menschen und der Maschine zu gewährleisten. Das Ziel des Interfacedesign ist, die Benutzeroberfläche grafisch und ästhetisch ansprechend zu gestalten. Dabei kann das Interfacedesign maßgeblich den Nutzer unterstützen, das System zu nutzen und in angemessenen Handlungsschritten das Ziel des Nutzers zu erreichen. Meist entscheidet das Interfacedesign, also das Aussehen einer Seite oder eines Produktes auch darüber, ob der Nutzer das Produkt als Qualitativ Hochwertig betrachtet oder nicht. Das Interfacedesign hat eine enge Verwandtschaft und inhaltliche Verknüpfung mit den Bereichen des Interaktionsdesign. Mehr zum Bereich Interaktionsdesign, erfährst du im Handlungsfeld UUX."
            },

            {
              name: "Icondesign",
              fielddescription:
                "Icon Design beschreibt den Prozess des Entwerfens eines grafischen Symbols, das ein Motiv, eine Entität oder Aktion darstellt. Im heutigen Kontext versteht man unter Icon ein Symbol aus der Softwareanwendung, welches oft für ein Programm, eine Funktion, Daten oder eine Sammlung von Daten steht. Icons vereinfachen den Umgang mit Daten und erleichtern die Navigation. Sie können genau wie Bilder und Symbole, deutlich schneller wahrgenommen werden als Textinhalte. Zudem sind viele Icon Designs international verständlich, wenn sie aus den typischen Charakteristiken eines Objekts bestehen, die weltweit das Gleiche bedeuten."
            },
            {
              name: "Grafikdesign",
              fielddescription:
                "Das Grafikdesign umfasst die grafische Gestaltung von materiellen oder virtuellen Flächen, Publikationsmedien und Informationsträgern. Dazu nutzt das Grafikdesign Typografie, Bild, Farbe und Material. Ziel des Grafikdesign ist es Sprachen, Gedanken und theoretische gedankliche Zusammenhänge sichtbar, lesbar und vermittelbar zu machen. In den Bereich des Grafikdesigns, fallen viele der anderen Teilbereiche aus dem Bereich des Visuellen Designs. Der klassische Grafikdesigner hat ausschließlich Print Erzeugnisse gestaltet und wird zunehmend vom Kommunikationsdesigner verdrängt, der neben der visuellen Kommunikation auch noch die verbale und die audiovisuelle Kommunikation beinhaltet."
            },
            {
              name: "Corporate Design",
              fielddescription:
                "Das Corporate Design umfasst und koordiniert alle visuelle wahrnehmbaren Äußerungen und Auftritte eines Unternehmens oder einer Organisation nach innen und außen.”(Zitat, S.93, Kompendium Informationsdesign von Wibke Weber) Zusammen mit dem Corporate Behaviour und dem Corporate Communications bildet es die Corporate Identity eines Unternehmens. Das Corporate Design besteht aus verschiedenen Elementen. Das bekannteste Element, mit welchem wir uns auch im Studium befassen ist das Logo, welches den reduziertesten Ausdruck der Unternehmensidentität verkörpert. Das Logo muss selbstredend, unverwechselbar, einprägsam und in mehrfacher Weise anwendbar sein. Ein Logo kann dabei ein Schriftzug, ein Bildzeichen oder eine kombination aus beidem sein."
            },
            {
              name: "Screendesign",
              fielddescription:
                "Das Screendesign als solches beschreibt die Form eines Produktes. Im Rahmen des Screendesign werden häufig Layouts oder Screens für den digitalen Bereich gestaltet. Im Prinzip gehört das Screendesign ausschließlich zum grafischen Design und soll eine Oberfläche ansprechend Gestalten. Doch neben dieser rein Ästhetischen Funktion, kann das Screendesign zusätzlich auch noch funktionale Aspekte eines Produkts verdeutlichen und unterstützen.  Das Screendesign kümmert sich um Aspekte wie Layout, Inhalt, Orientierung, Anreiz und Motivation. Gemeinsam mit dem Interfacedesign prägt ein gutes Screendesign die Qualität des Produktes. "
            },
            {
              name: "Type Design",
              fielddescription:
                "Das Type Design beschäftigt sich mit der Schriftgestaltung. Häufig wird als Synonym auch das “Font Design” genannt. Das Thema Schrift ist sehr komplex und umfasst neben Schriftgattungen, Hauptschriftengruppen, Schriftuntergruppen auch unzählige Schriftstile/Schriftschnitte. Beispielsweise umfasst eine Schriftgroßfamilie oder auch Schriftsippe, zusammengehörige Hauptschriftgruppen, Schriftuntergruppen und Schriftschnitte(Schriftstilvarianten), die typometrisch aus einem Grundkörper entwickelt wurden und deren Buchstaben, Ziffern und Sonderzeichen in der Regel die gleichen Grundformen und Proportionen besitzen, jedoch unterschiedliche Klassifikationsmerkmale aufweisen. Insgesamt darf das Type Design nicht mit dem Textdesign verwechselt werden. Denn im Textdesign geht es darum einen Text sprachlich (varbal) und optisch(visuell) zu gestalten und damit einen Text und seine Aussage zu formen. Es beschäftigt sich nur am Rande mit dem Type Design, da maximal eine passende fertige Schrift ausgesucht wird. "
            }
          ]
        },

        {
          activityName: "Textdesign",
          activeTaskArea: "Typografie",
          taskAreas: [
            {
              name: "Typografie",
              fielddescription:
                "Der Begriff „Typografie“ hat keine allgemeingültige und klare Definition. Dementsprechend hat der Begriff seine ursprüngliche Bedeutung gänzlich verloren. Typografie wird heute, außer in Wissenschaft und Lehre, nicht mehr mit Buchdruck in Verbindung gebracht, sondern mit dem materiell und digital reproduzierbaren Schriftbild als solchem. Typografie beinhaltet sowohl theoretische als auch praktische Disziplinen sowie unterschiedliche kulturtheoretische und gestalterische Betrachtungsweisen. Für das Textdesign ist die gestalterische Seite der Typografie sehr wichtig. Für ein Textdesigner ist es wichtig gut zusammengefassten typografischen Texten zu produzieren. Dazu gehören: die Schriftwirkung, Schriftsemantik und natürlich die Lesegewohnheiten einer Kultur. Die Lesbarkeit ist eine der wichtigsten Aufgaben der Typografie, dazu gehört z. B die Schriftart, die man wählt und auch wie viel Abstand zwischen die Zeichen eines Wortes oder den einzelnen Worte steht."
            },
            {
              name: "UX Writing",
              fielddescription:
                "UX-Texter/Writer sind für die Erstellung der Begriffe verantwortlich, die in der Benutzungsoberfläche von Softwareanwendungen erscheinen. Der Job ist allerdings komplexer, als er auf den ersten Blick erscheint. Denk  beispielsweise an deine Lieblings-App oder -Software und stelle dich die gesamte Anwendung ohne Text und Symbole vor. Woher weißt du, welchen Button du drücken oder welches Feld du  ausfüllen müssen? UX-Writer stellen sicher, dass die Zusammenhänge innerhalb einer Anwendung klar verständlich sind. Vor allem unterstützen UX-Writer auch zum Beispiel Entwicklerteams bei der Wahl der richtigen Worte im System, um eine intuitive Nutzung am finalisierten Produkt zu gewährleisten. "
            },
            {
              name: "Professional Writing",
              fielddescription:
                "Professionelles Schreiben setzt Textkompetenz voraus. Textkompetenz bezeichnet die 'individuelle Fähigkeit', Texte lesen, schreiben und zum Lernen nutzen zu können. Aber allein die Fähigkeit, Buchstaben zu verstehen oder produzieren zu können, genügt nicht. Da rücken die Fähigkeiten Textverständnis und Textproduktion in den Mittelpunkt. Die Kunst besteht darin, beide Fähigkeiten miteinander zu kombinieren und für sich und sein Lernen nutzbar zu machen. Texte bilden eine Grundlage für schulisches Lernen, hierzu gehören Lehrbücher ebenso wie Tafelbilder. Das dort präsentierte Wissen soll erfasst und verarbeitet werden, sodass es in schriftlichen Arbeiten abgerufen und weiterentwickelt werden kann. Damit sind das aktive, zielgerichtete, wirkungsvollen und reflektierte Erfassen und Verarbeiten von Informationen gemeint. Durch die Textdramaturgie und die Verwendung von unterschiedlichen Arbeits- und Schreibtechniken werden die erfassten Informationen zu einem zielgruppenorientierten und verständlichen Text umgewandelt."
            }
          ]
        },
        {
          activityName: "Programmieren",
          activeTaskArea: "HTML, CSS",
          taskAreas: [
            {
              name: "HTML, CSS",
              fielddescription:
                "HTML ist der grundlegendste Baustein des Webs. Es beschreibt und definiert den Inhalt einer Webseite zusammen mit dem grundlegenden Layout der Webseite. CSS ist eine Beschreibungssprache, die das Erscheinungsbild einer in HTML formatierten Datei festlegt. CSS beschreibt, wie ein strukturiertes Element am Bildschirm, auf Papier, in Sprache oder anderen Medien dargestellt wird."
            },
            {
              name: "PHP",
              fielddescription:
                "PHP ist eine Skriptsprache. Skriptsprachen sind Programmiersprachen, die für kleine Programme gedacht und einfach strukturiert sind. Die Programmiersprache PHP wird hauptsächlich bei der Erstellung dynamischer Webseiten oder Webanwendungen eingesetzt. Mit ihrer Hilfe können einzelne Funktionen in HTML-Code eingebettet werden."
            }
          ]
        },
        {
          activityName: "Management",
          activeTaskArea: "Projektmanagement",
          taskAreas: [
            {
              name: "Projektmanagement",
              fielddescription:
                "Projektmanagement umfasst die Führungsaufgaben, -organisation, -techniken und -mittel zur erfolgreichen Abwicklung eines Projekts. Das bedeutet, dass die Organisation, Planung, Überwachung und Steuerung der Aufgaben und Ressourcen Teile des Projektmanagements sind und diese vom Projektmanager geleitet werden. Den Überblick über die einzelnen Aufgaben zu behalten ist hier das Wichtigste. In der Regel wird ein Projekt in einem Team bearbeitet. Als Projektmanager isoliert zu arbeiten, ist in diesem Beruf schlichtweg unmöglich, denn Kommunikation und Transparenz sind im Projektmanagement ganz besonders wichtig. Das Ziel eines Projektmanagers ist es ein Projekt effizient zu planen und zu steuern, sodass Risiken auf das Minimale begrenzt werden und die Erreichung der Projektziele quantitativ und termingerecht gewährleistet werden kann."
            },
            {
              name: "Produktmanagement",
              fielddescription:
                "Das Produktmanagement umfasst die Planung, Steuerung und Kontrolle der zu vermarktenden Produkte und Dienstleistungen. Als Koordinationsstelle zwischen Marketing, Vertrieb, Fertigung & Entwicklung orientiert sich das Produktmanagement an den Kundenbedürfnissen und ermittelt auf dieser Basis Produktanforderungen. Das Produktmanagements bzw. die Produktmanagers sind Träger mehrerer Rollen. Sie sind nicht nur Schnittstellenmanager und Vermittler zwischen den einzelnen Unternehmensbereichen, sondern koordinieren beispielsweise auch Anzeigen-Kampagnen gemeinsam mit der Marketingabteilung und unterstützen den Vertrieb mit entsprechenden Markt- und Produktinformationen. Darüber hinaus ist ein Produktmanager auch Krisenmanager beim Kunden vor Ort. "
            }
          ]
        },
        {
          activityName: "UUX",
          activeTaskArea: "Usability Engineering",
          taskAreas: [
            {
              name: "Usability Engineering",
              fielddescription:
                "Beim Usability Engineering geht es nicht nur um passender  Intuition bei der Gestaltung, es geht vor allem um Normen , Gestaltungsregeln, Heuristiken und Design Patterns. Die helfen uns, ein System gebrauchstauglich zu gestalten. Und was genau macht ein Usability Engineer? Usability Engineers analysieren Computersysteme auf ihre Benutzerfreundlichkeit und bringen diesbezüglich Vorschläge zur Optimierung. Im Vordergrund steht nicht die visuell ästhetische Gestaltung, sondern die zielgruppengerechte Verständlichkeit. Das beinhaltet die nutzungsfreundliche visuelle Aufbereitung und Darstellung von Informationen. Sie befassen sich mit Konzeption, Evaluierung und Realisierung von Benutzeroberflächen unterschiedlicher Endgeräte. Endgeräte können Bankautomaten, Ticket-Automaten, Leitsysteme, Tablets oder andere Geräte sein."
            },
            {
              name: "Ux Design",
              fielddescription:
                "Der Erfolg eines Produkts hängt heute vor allem davon ab, wie gut es zu bedienen beziehungsweise handzuhaben ist. Ob das Design stimmt oder ob das Produkt beim Käufer die richtigen Emotionen weckt, wird für den Hersteller zunehmend wichtiger. Das User Experience Design macht genau das und zwar: Den Nutzer verstehen. Im Zentrum der Arbeit von UX-Designern stehen die Wünsche und Bedürfnisse der Nutzer. Diese beiden Aspekte werden durch Beobachtungen und Be­fragungen ermittelt. Die Ergebnisse dieser User Research verdichten die UX-Designer anschließend in sogenannten Personas, die im weiteren Design- und Ent­wicklungsprozess die potenziellen Nut­zer exemplarisch repräsentieren. Mit diesen Kunden- oder Nutzermodellen spie­len sie anhand von Szenarien und Storyboards schnell  Nutzungssituationen für neue Produkte und Services durch. Da­für betreiben sie umfangreiches Prototyping. Schon einfache Papierprototypen und Klickdummys helfen dabei, das zukünftige Systemverhalten zu visualisieren, zu verstehen und an Probanden zu testen."
            },
            {
              name: "User Tests",
              fielddescription:
                "Ein Nutzertest ist die wohl effektivste Methode um Usability-Probleme und Verbesserungspotentiale einer Anwendung aufzuspüren. Usability-Tests führen Experte  grundsätzlich mit realen Nutzern der jeweiligen Zielgruppe durch. Dabei beobachten sie das tatsächliche Verhalten eines Nutzers bei der Interaktion mit einem Produkt oder einer Anwendung. Auf diese Weise können alle wichtigen Usability-Schwachstellen aufdecken und Optimierungsvorschläge entwickeln."
            },
            {
              name: "User Experience",
              fielddescription:
                "Die Nutzer sollen nicht nur schnell und reibungslos zum Ziel kommen, sondern auch positive Gefühle wie Spaß oder Freude bei der Benutzung erleben. Schon vor der eigentlichen Nutzung, beeinflussen Erwartungen und Aspekte wie das Markenimage den Nutzer. Sind sie positiv, wirkt sich das auch positiv aufs Nutzungserlebnis aus. Aber auch die tatsächliche Nutzung der Anwendung ist relevant: Ist die Bedienung einfach? Kann das Ziel schnell erreicht werden? Gefällt das Design und sind begeisternde, vielleicht sogar unerwartete hilfreiche Funktionen integriert? Nach der Nutzung der Anwendung wird der Nutzer in seinem Erleben beeinflusst. Aber warum genau ist das Nutzungserlebnis wichtig?  Das Nutzererlebnis bestimmt, ob und wie lange ein Kunde bei einer Anwendung verweilt oder ob er sie gleich wieder verlässt. Die User Experience wirkt sich nicht nur auf die unmittelbare Nutzung eines Mediums aus, sondern auch auf die Markenwahrnehmung und darauf, ob ein Nutzer eine Anwendung weiterempfiehlt. Dies wiederum kann für Unternehmen zu gesteigertem Umsatz und Gewinn führen."
            }
          ]
        },
        {
          activityName: "Informationsdidaktik",
          activeTaskArea: "Informationsarchitektur",
          taskAreas: [
            {
              name: "Informationsarchitektur",
              fielddescription:
                "Eine Informationsarchitektur ist eine gebaute oder digitale Struktur, die Informationen sinnvoll strukturiert und die Nutzung der Information für eine definierte Zielgruppe vereinfacht. Informationsarchitekturen sind Räume, Strukturen oder Schnittstellen.” (Zitat S.308, Remo Aslak Burkhard) Die Informationsarchitektur bezeichnet also die Aufgabe, ein Informations- oder Kommunikationssystem zu strukturieren. Sie findet sich in vielen anderen Aufgabenbereichen als Teilgebiet wieder. So müssen oft erst Strukturen und Klassifizierungen zur systematischen Organisation von Informationen entwickelt werden um beispielsweise diese Informationen im Anschluss, in eine Website zu integrieren. Und auch als Schnittstelle sollen Informationen mittels intuitiv verständlicher Oberflächen sichtbar und nutzbar gemacht werden, was ein wesentlicher Bestandteil von Interface- und Interaktionsdesign ist."
            },
            {
              name: "E-Learning",
              fielddescription:
                "Unter E-Learning versteht man im allgemeinen die Unterstützung von Lehr-/Lernprozessen durch digitale Medien und Werkzeuge. Synonym werden oft weiter Ausdrücke wie computerbasiertes Lernen und multimediales Lernen genutzt. Das E-Learning umfasst verschiedene Facetten wie Interaktivität, Multimedialität und Multimodalität. Die Interaktivität ermöglicht dem Nutzer selbst über verschiedene Steuerungsmöglichkeiten mit dem System zu interagieren. Die Multimedialität hingegen bietet dem Nutzer verschiedene Medien an, über die er sich Wissen aneignen kann. Dazu zählen beispielsweise Bücher, Videoplayer, Audioplayer, Computer oder Online Vorlesungen. Gleichzeitig ermöglichen diese Medien auch Informationen über auditive und visuelle Sinneseindrücke aufzunehmen und dem Lernenden eine große Bandbreite an Didaktischen Ansätzen zu nutzen."
            },
            {
              name: "Informationspsychologie",
              fielddescription:
                "Die Informationspsychologie ist ein bedeutender Faktor, wenn es um die nutzerorientierte Gestaltung von effektiv, effizient und zufriedenstellend nutzbaren Informationsangeboten geht. In unterschiedlichen Teilbereichen der Psychologie wie etwa der Wahrnehmungspsychologie, Denkpsychologie und der Lern- und Gedächtnispsychologie, wird erforscht, nach welchen Gesetzmäßigkeiten die menschliche Verarbeitung aufgenommener Informationsreize verläuft und durch welche Reizfaktoren diese beeinflusst werden. In anderen Bereichen wie der Motivationspsychologie, der Handlungspsychologie und der Emotionspsychologie wird vermittelt, welche Bedürfnisse bei Menschen vorliegen, wenn sie Informationsmedien nutzen, welche Ziele sie verfolgen, wie Informationen ihre Handlungen beeinflussen und welche Gefühle bei der Informationsbearbeitung eine Rolle spielen. All diese theoretischen Ansätze und empirischen Befunde, die in der Informationspsychologie vermittelt werden, helfen ein bessere Informationsdesigner zu werden."
            }
          ]
        }
      ],

      activities: [
        {
          name: "VisuellesDesign",
          number: 0,
          percentage: 0,
          bgcolor: "red",
          text: "Visuelles Design",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: VisuellesDesignimage,
          imagePos: Constants.First,
          description:
            "Das Handlungsfeld Visuelles Design umfasst verschiedene Bereiche des Designs. Die Unterkategorien dieses Handlungsfeld, beschränken sich jedoch auf das Visuelle, also die sichtbare äußerlichen Form- und Farbgestaltung. Anderen wichtigen Aspekte wie Informationsarchitektur, Interaktion und Usability werden in den anderen Handlungsfeldern näher erläutert.",
          description2:
            "Im Studiengang Informationsdesign haben wir zahlreiche Vorlesungen die sich mit den visuellen Aspekten des Designs beschäftigen. So beschäftigen wir uns unter anderem mit dem Corporate Design und der Logogestaltung, aber auch mit Interaktionsdesign, Interfacedesign und der klassischen Plakatgestaltung. Auch das Webdesign wird gemeinsam mit der Webprogrammierung angeboten. Um nicht nur in Grafischer Natur bewandert zu sein, ergänzen Type Design und Texten unsere Wissensgrundlagen. Wenn dich also Scribbeln, das spielen mit verschiedenen Farben, Formen und Schriftarten interessiert, so wirst du dich in diesem Bereich zu Hause fühlen."
        },
        {
          name: "Textdesign",
          number: 0,
          percentage: 0,
          bgcolor: "blue",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: Textdesignimage,
          imagePos: Constants.Last,
          description:
            "Das Textdesign dient nicht der Ästhetik der Schrift wie man es von “Design” erwarten würde, sondern der Lesbarkeit, Gründlichkeit und der Sauberkeit eines Textes. Das hilft den Leser Texte effizienter zu lesen und sich besser zurecht zu finden.",
          description2:
            "“Textdesign heißt, dem Text eine Gestalt geben. Gestalten lässt sich ein text sprachlich(verbal) und optisch(visuell). Beides zusammen, das verbale und das visuelle Gestalten, formen den Text und damit seine Aussage  ”(Kompendium Informationsdesign)"
        },
        {
          name: "Programmieren",
          number: 0,
          percentage: 0,
          bgcolor: "green",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: Programmiererimage,
          imagePos: Constants.First,
          description:
            "Unter dem Begriff Programmieren versteht man die Umsetzung von Software-Entwürfen. Welche Programmiersprache zum Einsatz kommt, hängt von der jeweiligen Aufgabe ab. Gutes Programmieren zeichnet sich stets durch das Einhalten bestimmter Qualitätskriterien aus.",
          description2:
            "Die Programmierung, also die Erstellung oder auch Implementierung von Computerprogrammen, ist ein Teilbereich der Softwareentwicklung. Beim Programmieren wird der Softwareentwurf in Source Code umgesetzt. Bei einigen Programmiersprachen fällt auch das Übersetzen des Quelltextes in die Maschinensprache, zu Deutsch kompilieren, in diesen Aufgabenbereich. Man verwendet zum Programmieren bestimmte Sprachen. Mit Hilfe dieser Programmiersprachen werden die formulierten Anforderungen in eine für den Computer verständliche Sprache übersetzt."
        },
        {
          name: "Management",
          number: 0,
          percentage: 0,
          bgcolor: "yellow",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: Managementimage,
          imagePos: Constants.Last,
          description:
            "Bei Management handelt es sich um die leitenden Aufgaben, welche in einem Unternehmen erfüllt werden müssen. Das Management vertritt die Interessen des Unternehmers als Arbeitgeber gegenüber der Arbeitnehmerschaft. Zu den Tätigkeiten, die von Führungskräften in allen Bereichen des Unternehmens zum Management-Bereich gehören, sind im weitesten Sinne die Personalwirtschaft, die Beschaffung, der Absatz, die Verwaltung, sowie die Finanzierung und erfüllen entsprechend die Führungsaufgabe.",
          description2:
            "Oft findet hier auch eine Differenzierung von Planung, Realisierung und Kontrolle statt, wobei in diesen Bereichen auch wieder andere Tätigkeiten zugeordnet werden. Zur Planung zählen im Management die Problem- und Aufgabendefinition, die Zielsetzung, die Planung von Alternativen und die Entscheidung. Bei der Realisierung hingegen handelt es sich um Aufgabenbereich wie der Organisation, der Information, der Kommunikation, der Motivation der Mitarbeiter und deren Koordination. Der dritte Bereich, die Kontrolle besteht aus der Rückmeldung, dem Soll-/Ist Vergleich für die weitere Planung und Steuerung. "
        },
        {
          name: "UUX",
          number: 0,
          percentage: 0,
          bgcolor: "orange",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: UUXimage,
          imagePos: Constants.First,
          description:
            "Usability (U) und User Experience (UX). Das Ziel von Usability ist es, eine Anwendung (Website oder App) intuitiv, nutzerfreundlich und so einfach wie nur möglich in der Benutzung zu gestalten. Die zentrale Frage ist, ob der Nutzer seine Absicht oder sein Ziel erreichen konnte.",
          description2:
            "Das Ziel der User Experience es.Den Nutzer vor, während und nach der Nutzung eines Produktes/Anwendung, emotional anzusprechen, zu begeistern. Der Nutzer soll die Anwendung so glücklich und zufrieden wie nur möglich betreten und verlassen, idealerweise im Anschluss dann zur Anwendung zurückkehren. Die zentrale Frage hinsichtlich der User Experience ist es demnach, ob der Nutzer mit seinem Gesamterlebnis zufrieden ist."
        },
        {
          name: "Informationsdidaktik",
          number: 0,
          percentage: 0,
          bgcolor: "purple",
          ucd: UCDimage,
          dd: DDimage,
          activeDetail: Constants.activeDetail.taskArea,
          image: Informationsdidaktikimage,
          imagePos: Constants.Last,
          description:
            "Die Informationsdidaktik erforscht den Umgang und die Vermittlung von Informationen. Die Didaktik im Allgemeinen beschäftigt sich mit der Theorie und Praxis des Lehrens- und Lernens. Dabei untersucht sie von Lerninhalten unabhängig verschiedene Prinzipien, Lehr- und Lernmodelle. Das Ziel ist eine optimale Wissensvermittlung zu gestalten, die für verschiedene Nutzer geeignet ist.",
          description2:
            "An der Hochschule der Medien finden sich im Studiengang Informationsdesign verschiedene Vorlesungen, die sich mit dieser Thematik beschäftigen. So erhalten wir in der Vorlesung Informationspsychologie Einblick darüber, wie wir Menschen Informationen aufnehmen und verarbeiten. In den Veranstaltungen Multimedia Didaktik, sowie E-Learning und Lehrmedien beschäftigen wir uns ausführlicher damit mit welchen Lernprinzipien und welche Möglichkeiten uns Dank neusten Technologien in dieser Richtung offen stehen."
        }
      ]
    };
  }

  /**
   * Get the Cookies,
   *  the interest (interestWeight * interestfactor) Summary
   * the attribute (attributeWeight * attributefactor) Summary
   * Percentage Calculation
   */
  calculateTaskAreaRate() {
    //import Cookies
    let interests = this.props.cookies.get("interests");
    let attributes = this.props.cookies.get("attributes");

    //calculation newOutupt
    //get interests, muliply with factor with category weight
    var newOutput = this.state.activities.map(taskArea => {
      let taskAreaName = taskArea.name;
      //all interests
      let interestsSumForTaskArea = this.state.interest_factors.reduce(
        (accu, interest_factor) => {
          let currentInterest = interest_factor.InterestName;
          // get interests object
          let interest = interests.find(element => {
            return element.name === currentInterest;
          });
          // Get Interest weight
          // with interests category
          let interestWeight = interests_weight[interest.category];

          // Get interest factor
          let interestfactor = parseFloat(interest_factor[taskAreaName]);
          //calculation interestValue
          let interestValue = interestfactor * interestWeight;

          return accu + interestValue;
        },
        //accu
        0
      );

      //get attributes, multiply value with factor
      //all attributes
      let attributeSumForTaskArea = this.state.attribute_factors.reduce(
        (accu, attribute_factor) => {
          let currentAttribute = attribute_factor.AttributeName;
          // get attributes object
          let attribute = attributes.find(element => {
            return element.name === currentAttribute;
          });
          // Get attributes factor
          let attributefactor = parseFloat(attribute_factor[taskAreaName]);
          //calculation attributeValue
          let attributeValue = attributefactor * attribute.value;

          return accu + attributeValue;
        },
        //accu
        0
      );

      //Sum of interests and attributes
      taskArea.number = interestsSumForTaskArea + attributeSumForTaskArea;

      return taskArea;
    });

    // Get taskAreaSum and reduce
    let taskAreaSumForTaskArea = newOutput.reduce((accu, taskArea) => {
      return accu + taskArea.number;
    }, 0);

    // Calculate percentage for every taskarea
    newOutput = newOutput.map(taskArea => {
      taskArea.percentage = Math.round(
        ((taskArea.number / (taskAreaSumForTaskArea / 100)) * 100) / 100
      );

      return taskArea;
    });

    // replace newOutput in State
    this.setState({
      ...this.state,
      output: newOutput
    });
  }

  /**
   * Get Cookies as soon as the component did mount
   */
  componentDidMount() {
    this.calculateTaskAreaRate();
  }

  /**
   * Check klicket "Tab-menu", change it
   */
  handleDetailClick(e, taskAreaName, newDetail) {
    let newOutput = this.state.activities.map(taskArea => {
      if (taskArea.name === taskAreaName) {
        taskArea.activeDetail = newDetail;
      }
      return taskArea;
    });

    // replace newOutput in State
    this.setState({
      ...this.state,
      output: newOutput
    });
  }

  /**
   * Check klicket "Button", change it
   */
  handleTaskAreaTabClick(e, taskAreaName, currentActivityName) {
    let newTaskContents = this.state.activityTaskAreas.map(element => {
      if (element.activityName === currentActivityName) {
        element.activeTaskArea = taskAreaName;
      }
      return element;
    });

    // replace newTaskContents in State
    this.setState({
      ...this.state,
      taskcontents: newTaskContents
    });
  }

  /**
   * Check active Button, change style
   */
  getTaskAreaButtonStyle(activeTaskAreaButtonName, currentTaskAreaButtonName) {
    if (activeTaskAreaButtonName === currentTaskAreaButtonName) {
      return { color: "#1a1813", background: "#ffdd8c" };
    } else {
      return { color: "#808c92", background: "#ebf0f7" };
    }
  }

  /**
   * An activity consist of an image, a description and detail information
   */
  createActivityDiv = currentActivity => {
    // get taskAreasContainer for current taskArea
    let taskAreasContainer = this.state.activityTaskAreas.find(element => {
      return element.activityName === currentActivity.name;
    });
    let taskAreas = taskAreasContainer.taskAreas;

    // get buttons from taskAreas
    let taskAreabuttons = taskAreas.map(taskArea => (
      <button
        className="Activityfield"
        style={this.getTaskAreaButtonStyle(
          taskAreasContainer.activeTaskArea,
          taskArea.name
        )}
        onClick={e =>
          this.handleTaskAreaTabClick(e, taskArea.name, currentActivity.name)
        }
      >
        {taskArea.name}
      </button>
    ));

    // get current taskAreaFieldDescription text
    let taskAreaFieldDescription = taskAreas.find(element => {
      return element.name === taskAreasContainer.activeTaskArea;
    }).fielddescription;

    //Styling of the "Tabmenu"
    let activeDetailTabStyle = currentActivityDetailTab => {
      if (currentActivity.activeDetail === currentActivityDetailTab) {
        return { color: "#808c92", background: "#ebf0f7", fontWeight: "bold" };
      } else {
        return {
          color: "#848a96",
          background: "#d0dae5",
          fontWeight: "normal"
        };
      }
    };

    /**
     * Create "Tabmenu"
     */
    let activityDetail = () => {
      return (
        <div className="ActivityDetail">
          <div className="ActivityDetailTabmenu">
            <span
              className="Jobs"
              style={activeDetailTabStyle(Constants.activeDetail.taskArea)}
              onClick={e =>
                this.handleDetailClick(
                  e,
                  currentActivity.name,
                  Constants.activeDetail.taskArea
                )
              }
            >
              Aufgabenbereiche
            </span>
            <span
              className="UCD"
              style={activeDetailTabStyle(Constants.activeDetail.ucd)}
              onClick={e =>
                this.handleDetailClick(
                  e,
                  currentActivity.name,
                  Constants.activeDetail.ucd
                )
              }
            >
              User Centered Design
            </span>
            <span
              className="DD"
              style={activeDetailTabStyle(Constants.activeDetail.dd)}
              onClick={e =>
                this.handleDetailClick(
                  e,
                  currentActivity.name,
                  Constants.activeDetail.dd
                )
              }
            >
              Double Diamond
            </span>
          </div>
          {activityDetailContent()}
        </div>
      );
    };

    /**
     * Set only one Content
     */
    let activityDetailContent = () => {
      switch (currentActivity.activeDetail) {
        case Constants.activeDetail.ucd:
          return <img src={currentActivity.ucd} alt="imageAlt" />;
        case Constants.activeDetail.dd:
          return <img src={currentActivity.dd} alt="imageAlt" />;
        default:
          return (
            <React.Fragment>
              <div className="TaskAreaButtons">{taskAreabuttons}</div>
              <p className="Fielddescription"> {taskAreaFieldDescription} </p>
            </React.Fragment>
          );
      }
    };

    let activityImage = (
      <div className="ActivityImage">
        <img src={currentActivity.image} alt="imageAlt" />
      </div>
    );

    let activityDescription = (
      <React.Fragment>
        <div className="ActivityDescription">
          <h1 className="Activityhead">
            {currentActivity.name}
            <span className="PercentNumber">
              {" "}
              ({currentActivity.percentage}%)
            </span>
          </h1>
          <p className="Activitydescription">
            {currentActivity.description}
            <br />
            <br />
            {currentActivity.description2}
          </p>
        </div>
      </React.Fragment>
    );

    return (
      // set Image position
      <div className="Activity">
        {currentActivity.imagePos === Constants.First ? activityImage : ""}
        {activityDescription}
        {activityDetail()}
        {currentActivity.imagePos === Constants.Last ? activityImage : ""}
      </div>
    );
  };

  render() {
    // sortierung der output liste // sort
    let sortedTaskAreas = this.state.activities.sort((outputA, outputB) => {
      if (outputA.number < outputB.number) {
        return 1;
      } else if (outputA.number > outputB.number) {
        return -1;
      } else return 0;
    });

    let taskAreas = sortedTaskAreas.map((activity, index) => {
      if (index % 2 === 0) {
        activity.imagePos = Constants.First;
      } else {
        activity.imagePos = Constants.Last;
      }
      return this.createActivityDiv(activity);
    });

    return (
      <div className="App_output">
        <div className="Nav">
          <div className="Button">
            <Link to="/survey">
              <button>Zurück zum Test</button>
            </Link>
          </div>
          <div className="Button">
            <Link to="/">
              <button>Zurück zur Startseite</button>
            </Link>
          </div>
        </div>
        <div className="PageText">
          <p>
            Wir haben deinen Fragebogen ausgewertet. Folgende Schwerpunkte
            passen am meisten zu dir:
          </p>
          <div className="ColoredLine" />
        </div>
        <div className="Activities">{taskAreas}</div>

        <div className="Nav">
          <div className="Button">
            <Link to="/survey">
              <button>Zurück zum Test</button>
            </Link>
          </div>
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

export default withCookies(App_output);
