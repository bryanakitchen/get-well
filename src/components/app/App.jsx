import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './App.module.css';
import whitney from '../../../public/whitney.jpeg'

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
            <p>Whitney, you've been on our minds. We wanted to send you some smiles and encouragement to get you through this difficult time.<br /><br />
            Love, Alchemy Code Lab</p>
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
              Whitney, Sending you lots of love, hugs, and good vibes for a speedy recovery! Please take good care of you and always let me know if there's anything I can do to help. Seriously... please let me know!
            </p>
            <p>
              Hugs and love, Shannon
            </p>
          </div>

          <div className={styles.messageCenter} data-aos="fade-left">
            <h3>From: Katie Perry</h3>
            <img src='../../../whitney-card.png' alt="card for Whitney" className={styles.card} />
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
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

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Marty Nelson</h3>
            <p>
              Take your sweet time <b>getting well</b>! Here's to you—steadier, stronger and better every day.
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Sam Gerber</h3>
            <p>
              Whitney, best wishes and positive thoughts for you to feel better!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Rachel Donahue</h3>
            <p>
              Hey Whitney, I just wanted to say I'm thinking of you.  I hope that you get well soon!  Sending you lots of love, healing vibes, and well wishes &#60;&#51;
            </p>
            <p>
              I would love to bring you some healing food, and I'm around if you need help with anything around the house.
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Breeann Bolinsky</h3>
            <p>
              Hey Whitney! I’m wishing you the most positive thoughts and hope that you have a speedy recovery and can focus on healing.  The entire Alchemy team definitely feels incomplete without having you feeling fully yourself, and will feel complete when you feel better too! Hope to see you around the Zoom rooms super soon!
            </p>
            <p>
              Take extra care, - Breeann B.
            </p>
          </div>


          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Jeff Irvine</h3>
            <p>
              Thinking of you Whitney. Hoping you feel better and healthier each day! There's so much love for you here at Alchemy. Would love to cook for you and your family whenever you need it.
            </p>
            <p>
              - Jeff I
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Shane Upchurch</h3>
            <p>
              Hey Whitney, we haven’t actually met but I’ve heard nothing but good things about you, so you have to get well so I can finally see what all the hype is about! Stay strong, be patient with your body, and hopefully someone is sneaking in some good food for ya. If not let us know and we’ll see what we can do!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Jillian Gibson</h3>
            <p>
              Whitney, So sorry to hear that you aren’t well. Know that our thoughts and prayers are with you. Allow your self to rest and heal as much as possible - this has been an especially hard year and is yet to let up. If you need support in anyway please don’t hesitate to reach out. I have no doubt that the Alchemy community is here to support you. Sending all the positive healing energy your way.
            </p>
            <p>
              - Jillian
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Erik Graciosa</h3>
            <p>
              Whitney, sending good healing vibes to you. Make sure to ask for some ice cream.
            </p>
            <p>
              -Erik
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Donny Vu</h3>
            <p>
              Hope you get well soon (in a super safe recovery) and get back to kicking butts!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Megan Nelson</h3>
            <p>
              Dear Whitney,
            </p><p>
              We've been so blessed to have you join Alchemy! You bring beautiful energy, and it's been a joy to co-create together in admissions. We miss you so very much!
            </p><p>
              All of our prayers and well wishes &#60;&#51;
            </p>
            <p>
              -Megan
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Ethan Pierce</h3>
            <p>
              I am so sorry to hear you are not feeling well. Stay strong, we are here for you when you get back!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Franco Ortega</h3>
            <p>
              Hello Whitney. Sending you well wishes, and fingers crossed for a speedy recovery.
            </p>
          </div>


          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Langston Beckwith-Stanley</h3>
            <p>
              Hey Whitney, I hope for a speedy recovery and to see you on zoom soon.
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Casey Warren</h3>
            <p>
              Whitney, sending you love and strength in this difficult time. So lucky to get to share a community with you. Rest up and get well &#60;&#51;
            </p>
            <p>
              - Casey
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Josie Cantu</h3>
            <p>
              Whitney, You're such a great help at Alchemy! I hope you get well soon &#60;&#51;
            </p>
            <p>
              -Josie Cantu
            </p>
          </div>


          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Juli Vela</h3>
            <p>
              Hey Whitney! I'm so sorry you're feeling so unwell lately! We're all thinking of you and sending you good wishes and thoughts for a speedy recovery! Take your time, we'll all be here when you're back! &#60;&#51;
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-right">
            <h3>From: Cherno Badjan</h3>
            <p>
              Hey Whitney! I'm sorry to hear you are not feeling well. A day at a time and you'll be back to us in no time. We are here for you!
            </p>
          </div>



          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Katilyn Wiggins</h3>
            <p>
              Hi Whitney, wishing you a peaceful and easy recovery. Thankful to share a home with you at Alchemy! See you soon.
            </p>
            <p>
              - Katilyn
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: KB</h3>
            <p>
              Wishing you a quick and safe recovery. I can't wait to meet you in person someday!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Minh Ngo</h3>
            <p>
              Hey Whitney! Hoping for an easy, speedy recovery. You are super awesome and can't wait for you to join us back at Alchemy!
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Cierra McDonald</h3>
            <p>
              Hi Whitney, I'm so sorry to hear that you haven't been feeling well recently.  Sending you love, well wishes and hopes for a quick recovery.  Thank you for all that you do for the Alchemy community, please give yourself all the time and space to heal, we are all rooting for you! Get well soon!
            </p>
            <p>
              - Cierra &#60;&#51;
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Stephen Tamiesie</h3>
            <p>
              Sending you all the positive vibes in the world, Whitney!
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Patrick Hrabos</h3>
            <p>
              Whitney, sending you healing vibes for a speedy recovery. Hope you get better soon!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Anthony Rosario</h3>
            <p>
              I can't wait to see you back at an Alchemy zoom hang out again. Sending you nothing but the chillest vibes!
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Cameron Zimmerman</h3>
            <p>
              Thinking of you Whitney! I hope you have a speedy recovery.
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Erich Sauer</h3>
            <p>
              Whitney - sending healing vibes your way and wishing you a speedy recovery
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Edmond Zhan</h3>
            <p>
              Hey Whitney, I heard that you haven't been feeling well. I wanted to let you know that we're all thinking of you and hope that you get well soon!
            </p>
          </div>

          <div className={styles.messageLeft} data-aos="fade-right">
            <h3>From: Kat Sauma</h3>
            <p>
              Hey hey Whitney! Thinking of you and sending warmth, strength, rest, and faith through these trying times. You are sincerely valued in this community and I am so grateful to have met you this year. Your energy and spirit are loved and needed here! Wishing you all the best, take time for you and we will be here.
            </p>
          </div>

          <div className={styles.messageRight} data-aos="fade-left">
            <h3>From: Dylan White</h3>
            <p>
              Feel better soon Whitney! I am looking forward to getting to know you better as we progress in career track. Sending a large array of good thoughts your way!
            </p>
          </div>

        </div>
      </div>
    )
  }
}
