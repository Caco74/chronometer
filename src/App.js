import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milisegundos: this.props.tiempo,
      segundos: 0,
      minutos: 0,
      horas: 0
    }
  }

  chronometer() {
    this.setState((prevState) => ({
      milisegundos: (prevState.milisegundos + 10)
    }))
    if (this.state.milisegundos === 60) {
      this.setState((prevState) => ({
        milisegundos: 0,
        segundos: prevState.segundos + 1
      }))
    }
    if (this.state.segundos === 60) {
      this.setState((prevState) => ({
        segundos: 0,
        minutos: prevState.minutos + 1
      }))
    }
    if (this.state.minutos === 60) {
      this.setState((prevState) => ({
        minutos: 0,
        horas: prevState.horas + 1
      }))
    }
    if (this.state.horas === 24) {
      this.setState((prevState) => ({
        horas:0
      }))
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.chronometer(),1000)
  }



    render() {
      return(
      <div className='border border-secondary m-3 p-3'>
        <p className='font-weight'>Cronómetro: </p>
        <div className='border border-secondary m-3 p-3'>
          <div>{this.state.horas}</div>
          <div>:</div>
          <div>{this.state.minutos}</div>
          <div>:</div>
          <div>{this.state.segundos}</div>
          <div>:</div>
          <div>{this.state.milisegundos}</div>
        </div>
      </div>
      );
    }

  }

export default App;
