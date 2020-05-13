import React, { Component } from "react";
import "./css/App.css";
import logo from "./img/giphy.gif";
import Lista from "./components/lista";
import Formulario from "./components/formulario";
import SignoElegido from "./components/signoelegido";

class App extends Component {
  state = {
    signosdata: [],
    signoelegido: [],
    input: "",
  };

  async componentDidMount() {
    try {
      const respuesta = await fetch("./data/signos.json");
      const signosdata = await respuesta.json();
      this.setState({ signosdata: signosdata, signoelegido: [] });
    } catch (error) {
      alert(error);
    }
  }
  handler = (e) => {
    const signovalue = e.target.getAttribute("value");
    const elegido = this.state.signosdata.filter((s) => s.signo === signovalue);
    this.setState({ signoelegido: elegido });
  };
  handlechange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleclick = () => {
    const datevalue = this.state.input;
    const datesplit = datevalue.split("-");
    const birthmonth = parseInt(datesplit[1]);
    const birthday = parseInt(datesplit[2]);
    const result = BuscarSigno(birthmonth, birthday);

    const misigno = this.state.signosdata.filter((s) => s.signo === result);
    this.setState({ signoelegido: misigno });
  };

  render() {
    const { signosdata, signoelegido } = this.state;
    return (
      <div className="App">
        <div className="up-container">
          <div className="gif-container">
            <img src={logo} alt="" />
          </div>
          <div className="form-container">
            <Formulario
              handlechange={this.handlechange}
              handleclick={this.handleclick}
            />
            <SignoElegido signoelegido={signoelegido} />
          </div>
        </div>
        <div className="lista-signos">
          <Lista signoslista={signosdata} handler={this.handler} />
        </div>
      </div>
    );
  }
}

function BuscarSigno(birthmonth, birthday) {
  let result = "";
  if (
    (birthmonth === 1) & (birthday >= 20) ||
    (birthmonth === 2) & (birthday <= 18)
  ) {
    result = "Acuario";
  } else if (
    (birthmonth === 3) & (birthday >= 21) ||
    (birthmonth === 4) & (birthday <= 19)
  ) {
    result = "Aries";
  } else if (
    (birthmonth === 4) & (birthday >= 20) ||
    (birthmonth === 5) & (birthday <= 20)
  ) {
    result = "Tauro";
  } else if (
    (birthmonth === 5) & (birthday >= 21) ||
    (birthmonth === 6) & (birthday <= 20)
  ) {
    result = "Geminis";
  } else if (
    (birthmonth === 6) & (birthday >= 21) ||
    (birthmonth === 7) & (birthday <= 22)
  ) {
    result = "Cancer";
  } else if (
    (birthmonth === 7) & (birthday >= 23) ||
    (birthmonth === 8) & (birthday <= 22)
  ) {
    result = "Leo";
  } else if (
    (birthmonth === 8) & (birthday >= 23) ||
    (birthmonth === 9) & (birthday <= 22)
  ) {
    result = "Virgo";
  } else if (
    (birthmonth === 9) & (birthday >= 23) ||
    (birthmonth === 10) & (birthday <= 22)
  ) {
    result = "Libra";
  } else if (
    (birthmonth === 10) & (birthday >= 23) ||
    (birthmonth === 11) & (birthday <= 21)
  ) {
    result = "Escorpio";
  } else if (
    (birthmonth === 11) & (birthday >= 22) ||
    (birthmonth === 12) & (birthday <= 21)
  ) {
    result = "Sagitario";
  } else if (
    (birthmonth === 12) & (birthday >= 22) ||
    (birthmonth === 1) & (birthday <= 19)
  ) {
    result = "Capricornio";
  } else if((birthmonth === 2) & (birthday >= 19) ||
  (birthmonth === 3) & (birthday <= 20)){
    result = "Piscis";
  }
   
  return result;
}

export default App;
