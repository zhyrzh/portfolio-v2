import { NextPage } from "next";
import React from "react";
import CustomHead from "../../components/CustomHead";
import Image from "next/image";

const About: NextPage = () => {
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
        <div className="about__tech-container">
          {/* Software Development Tools */}
          <div className="about__tech-category">
            <h1 className="about__tech-category-title">
              SOFTWARE DEVELOPMENT TOOLS
            </h1>
            <div
              className="about__tech-category-techs"
              style={{ border: "3px solid #eee16b" }}
            >
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={"https://img.icons8.com/color/480/000000/git.png"}
                    alt="image"
                  />
                  <h1 className="about__tech-title">Git</h1>
                </div>
              </div>
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/visual-studio-code-2019.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">VS Code</h1>
                </div>
              </div>

              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/figma--v1.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">Figma</h1>
                </div>
              </div>
              {/* ------ */}
            </div>
          </div>
          {/* Software Development Tools */}
          {/* Frontend */}
          <div className="about__tech-category">
            <h1 className="about__tech-category-title">FRONTEND</h1>
            <div
              className="about__tech-category-techs"
              style={{ border: "3px solid #f85e5e" }}
            >
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={"https://img.icons8.com/color/480/000000/git.png"}
                    alt="image"
                  />
                  <h1 className="about__tech-title">Git</h1>
                </div>
              </div>
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/visual-studio-code-2019.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">VS Code</h1>
                </div>
              </div>

              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/figma--v1.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">Figma</h1>
                </div>
              </div>
              {/* ------ */}

              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/figma--v1.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">Figma</h1>
                </div>
              </div>
              {/* ------ */}
            </div>
          </div>
          {/* Frontend */}

          {/* Backend */}
          <div className="about__tech-category">
            <h1 className="about__tech-category-title">BACKEND</h1>
            <div
              className="about__tech-category-techs"
              style={{ border: "3px solid #40bde4" }}
            >
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={"https://img.icons8.com/color/480/000000/git.png"}
                    alt="image"
                  />
                  <h1 className="about__tech-title">Git</h1>
                </div>
              </div>
              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/visual-studio-code-2019.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">VS Code</h1>
                </div>
              </div>

              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/figma--v1.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">Figma</h1>
                </div>
              </div>
              {/* ------ */}

              {/* ------ */}
              <div className="about__tech">
                <div className="about__tech-icon">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={
                      "https://img.icons8.com/color/480/000000/figma--v1.png"
                    }
                    alt="image"
                  />
                  <h1 className="about__tech-title">Figma</h1>
                </div>
              </div>
              {/* ------ */}
            </div>
          </div>
          {/* Backend */}
        </div>
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
