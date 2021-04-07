import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './App.module.css';

AOS.init({ duration: 800 })

export default class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        <div data-aos="fade-up" className={styles.home}>
          <h1>Thinking of You</h1>
          <p>Whitney, you've been on our minds. We wanted to send you some smiles and encouragement to get you through this difficult time.</p>

          <p>Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>

        <div className={styles.message} data-aos="zoom in" data-aos-anchor=".other-element">
          <p>
            Hello, this is an anchor from another element
          </p>
        </div>
        <div className={styles.message} data-aos="fade-up">
          <p>
            This is an example of one message.
          </p>
        </div>
        <div className={styles.message} data-aos="fade-up">
          <p>
            This is an example of one message.
          </p>
        </div>
        <div className={styles.message} data-aos="fade-down-right">
          <p>
            This is an example of one message.
          </p>
        </div>
        <div className={styles.message} data-aos="zoom in">
          <p>
            This is an example of one message.
          </p>
        </div>
        <div className={styles.message} data-aos="fade-down-left">
          <p>
            This is an example of one message.
          </p>
        </div>
      </div>
    )
  }
}
