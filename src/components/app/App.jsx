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
          </div>
        </div>

        <div className={styles.messagesContainer}>
          <div className={styles.messageLeft} data-aos="fade-right" data-aos-anchor=".other-element">
            <h3>From: Brooke Perkins</h3>
            <p>
              We're here for you, Whitney! Looking forward to a time when this year and all its nastiness is firmly behind us and we can celebrate your new house and our new shared community together! Rest up and take care, let us know if we can do anything for you.
            </p>
            <p>
              xxo Brooke
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Bryana Kitchen</h3>
            <p>
              Hey Whitney, I've been thinking about you.  We miss your beautiful smile around Alchemy and can't wait for your return. But don't rush back - get the rest you need to heal! I pray you find encouragement and strength each day. Please let us know if there's anything we can do for you.
            </p>
            <p>
              With Love, Bryana
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Perry Sittser</h3>
            <p>
              To Whitney: Get well soon!
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Shannon Rasimas</h3>
            <p>
              Whitney, Sending you lots of love, hugs, and good vibes for a speedy recovery! Please take good care of you and always let me know if there's anything I can do to help. Seriously...please let me know!
            </p>
            <p>
              Hugs and love, Shannon
            </p>
          </div>

          <div className={styles.messageCenter} data-aos="fade-left">
            <h3>From: Katie Perry</h3>
            <img src='../../../whitney-card.png' alt="card for Whitney" className={styles.card} />
          </div>

          <div className={styles.messageRight} data-aos="fade-right">
            <h3>From: Dani Cairns</h3>
            <p>
              Whitney,
            </p>
            <p>
              We've all been missing your energetic and talented presence :) Looking forward to partying with you at Alchemy headquarters once Alchemy the school is back in real life! You're the best!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Jena Boehm</h3>
            <p>
              Whitney, we're rooting for you! I truly appreciate everything you do for Alchemy and the community. I'm wishing you a speedy and safe recovery, and am looking forward to seeing you around again. Rest well and take care of yourself!
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-right">
            <h3>From: Marty Nelson</h3>
            <p>
              Take your sweet time getting well! Here's to you—steadier, stronger and better every day.
            </p>
          </div>

          {/* <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: (name)</h3>
            <p>
              Message goes here
            </p>
            <p>
              optional signature
            </p>
          </div> */}
        </div>
      </div>
    )
  }
}
