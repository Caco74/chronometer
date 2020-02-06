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
    if (this.state.milisegundos === 1000) {
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
    this.interval = setInterval(() => this.chronometer(),10)
  }



    render() {
      return(
      <div className='border border-secondary m-3 p-3'>
        <p className='col-sm-12 text-center h3'>Cronómetro</p>
        <div className='row h1 text-center m-0 p-0 border border-danger rounded my-3'>
          <div className='col-sm-2' id='horas'>{this.state.horas}</div>
          <div className='col-sm-1'>:</div>
          <div className='col-sm-2'>{this.state.minutos}</div>
          <div className='col-sm-1'>:</div>
          <div className='col-sm-2'>{this.state.segundos}</div>
          <div className='col-sm-1'>:</div>
          <div className='col-sm-2'>{this.state.milisegundos}</div>
        </div>
      </div>
      );
    }

  }

export default App;
