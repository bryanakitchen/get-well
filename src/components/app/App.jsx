import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 500 })

export default class App extends Component {


  render() {
    return (
      <div data-aos="fade-up">
        Hello world?
      </div>
    )
  }
}
