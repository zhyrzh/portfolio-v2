import React from "react";
import CustomHead from "../../components/CustomHead";

const About = () => {
  return (
    <>
      <CustomHead pageTitle="About" />
      <header className="header">
        <div className="header__circle"></div>
        <h3 className="header__title">
          Rhyz Arong | <span className="header__sub-title">Home</span>
        </h3>
      </header>
      <div className="about">
        <h1 className="about__title">Who am I</h1>
        <p className="about__content">
          I’m a software developer who mainly create web applications. I build
          production-ready quality outputs base on the clients needs. I’m
          proficient in JavaScript language and knows a thing or two in Java.
          I’m looking forward to gain more professional experience so if you
          feel working with me please get in touch. You can also download my
          resume by clicking here.
        </p>
        <p className="about__content">
          Listed below are the technolgoies I’ve used this past months in
          creating my personal and school projects. Most of these technolgies
          are javascript specific frameworks and libraries.
        </p>
      </div>
      <footer className="footer">
        <h3 className="footer__text">
          <span>&copy;</span> Rhyz Arong 2022
        </h3>
      </footer>
    </>
  );
};

export default About;
