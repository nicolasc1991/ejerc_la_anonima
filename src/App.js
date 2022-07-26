import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Ip from "./components/Ip";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d023392384msh115f911c04e9e9ap1f723bjsn3e74cb3791e9",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};
export default class App extends Component {
  state = {
    ip: undefined,
    money: undefined,
    location: undefined,
    country: undefined,
    language: undefined,
    error: undefined,
  };

  getIp = async (e) => {
    e.preventDefault();
    const ip = e.target.elements.ip.value;
    const api_call = await fetch(
      `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
      options
    );
    const data = await api_call.json();

    if (ip) {
      console.log(data);
      this.setState({
        ip: ip,
        money: data.currency.name,
        language: data.location.language.name,
        location: data.location.continent.name,
        country: data.location.country.name,
        error: "",
      });
    } else {
      this.setState({
        ip: undefined,
        location: undefined,
        language: undefined,
        country: undefined,
        money: undefined,
        error: "Ingrese una dirección de IP primero...",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Titles />
        <Form getIp={this.getIp} />
        <Ip
          ip={this.state.ip}
          location={this.state.location}
          country={this.state.country}
          language={this.state.language}
          money={this.state.money}
          error={this.state.error}
        />
        <table>
        <thead>
        </thead>
        <tbody>
          {}
        </tbody>
        </table>
      </div>
    );
  }
}
