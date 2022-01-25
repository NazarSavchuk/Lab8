import React, { Component } from "react";
import jsonData from "./text.json";
import './JSONadd.css'

class CContents extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Witaj użytkkowniku. Kliknij przycisk aby poznać wiadomość",
    };
    
  }

  changeMsg = () => {
    this.setState({
      msg: "Właśnie jesteś uczestnikiem kursu React, gratulacje !",
    });
    console.log("Przycisl zostal nacisniety");
  };

  render() {
    // const tabData = this.txtData().data;
    const data = JSON.parse(JSON.stringify(jsonData));
    const items = data.map((item) => (
      <div key={item.id} id={`"div${item.id}`} className="contentsFlex">
        <img src={item.img} alt="" className="contentsFlexImg" />
        <p className="contentsFlexTxt">{item.text}</p>
      </div>
    ));

    return (
      <div className="container addImg">
        {items}
      </div>
    );
  }
}
export default CContents;