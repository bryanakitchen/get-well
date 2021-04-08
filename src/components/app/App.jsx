import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './App.module.css';
import whitney from '../../../public/whitney.jpeg'
import alchemyLogo from '../../../public/alchemy-logo-white-bg.png'
// import Header from '../header/Header';

AOS.init({ duration: 800 })

export default class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        {/* <Header /> */}
        <div data-aos="fade-down" className={styles.home}>
          <div className={styles.title}>Thinking of You</div>
          <div className={styles.frame}>
            <img className={styles.whitneyImage} src={whitney} alt='whitney' />
          </div>
          <div className={styles.description}>
            <p>Whitney, you've been on our minds. We wanted to send you some smiles and encouragement to get you through this difficult time.</p>

            <p>Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          </div>
        </div>
        <div className={styles.messagesContainer}>
          <div className={styles.messageLeft} data-aos="fade-right" data-aos-anchor=".other-element">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          </div>
          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          </div>
          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          </div>
          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          </div>
          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          </div>
          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: (name)</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          </div>
        </div>
      </div>
    )
  }
}
