import React, { useEffect, useState } from 'react';
import './ProjectsCardList.css';
import sourcerySample from '../../assets/project-covers/sourcerySample.png';
import concordanceSample from '../../assets/project-covers/concordanceSample.png';
import cmsSample from '../../assets/project-covers/cmsSample.png';
import stockchexSample from '../../assets/project-covers/stockChecxSample.png';
import chromemeSample from '../../assets/project-covers/chromemeSample.png';
import portfolioSample from '../../assets/project-covers/portfolioSample.png';
import Reveal from '../../framer/Reveal';
import sourcerySampleBack from '../../assets/backgrounds/frantisek-g-XXuVXLy5gHU-unsplash.jpg';
import concordanceSampleBack from '../../assets/backgrounds/scott-webb-UjupleczBOY-unsplash.jpg';
import stockchexSampleBack from '../../assets/backgrounds/rohit-ranwa-twEy5TouJLg-unsplash.jpg';
import chromemeSampleBack from '../../assets/backgrounds/steve-johnson-YS0YJLU_h2k-unsplash.jpg';
import cmsSampleBack from '../../assets/backgrounds/resul-mentes-DbwYNr8RPbg-unsplash.jpg';
import portfolioSampleBack from '../../assets/backgrounds/ground_charcoal_texture.jpg';

import { DiReact, DiNodejs, DiPython, DiMysql } from 'react-icons/di';
import { BiLogoMongodb } from 'react-icons/bi';
import { TbHexagonLetterC } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';

export default function ProjectsCardList() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [sourceryRef, inViewSourcery] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [concordanceRef, inViewconcordance] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [cmsRef, inViewCms] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [stockchexRef, inViewStockchex] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });

  const [chromemeRef, inViewChromeme] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [portfolioRef, inViewPortfolio] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });

  return (
    <div className="project-container" id="projects">
      <Reveal>
        <div className="project-wrapper">
          <div className="project-section-title-container">
            <div className="project-section-title-wrapper">
              <h1>⤵ Projects</h1>
            </div>
          </div>
          <div className="tech-section">
            <div className="languages-and-frameworks">
              <p>Languages and Frameworks</p>
              <div className="list-container">
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Html/CSS</li>
                  <li>C</li>
                  <li>Pyhton</li>
                </ul>
                <ul>
                  <li>Java</li>
                  <li>MySQL</li>
                  <li>NodeJs</li>
                  <li>MongoDB</li>
                  <li>WebDriverIO</li>
                </ul>
              </div>
            </div>
            <div className="technologies">
              <p>Technologies</p>
              <div className="list-container">
                <ul>
                  <li>Git</li>
                  <li>Linux</li>
                  <li>R-Studio</li>
                  <li>Matlab</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-rows">
            <div
              className="project-collection"
              style={{
                color: inViewSourcery ? 'white' : 'black',
                backgroundColor: inViewSourcery ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={sourceryRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <BiLogoMongodb />
                    </div>
                    <div className="icon">
                      <DiReact />
                    </div>
                    <div className="icon">
                      <DiNodejs />
                    </div>
                  </div>
                  <h3>Sourcery</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={sourcerySampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={sourcerySample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewSourcery
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>SOURCERY</h3>
                    <ul>
                      <li>UI/UX</li>
                      <li>E-COMM</li>
                      <li>Mern Stack</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://sourcery604.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button>Website</button>
                  </a>
                  <a
                    href="https://github.com/imkkapoor/Sourcery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="project-collection"
              style={{
                color: inViewconcordance ? 'white' : 'black',
                backgroundColor: inViewconcordance ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={concordanceRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <DiPython />
                    </div>
                    <div className="icon">
                      <TbHexagonLetterC />
                    </div>
                  </div>
                  <h3>Concordance</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={concordanceSampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={concordanceSample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewconcordance
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>Concordance</h3>
                    <ul>
                      <li>Data Structures</li>
                      <li>Dynamic Memory</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://github.com/imkkapoor/Concordance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="project-collection"
              style={{
                color: inViewPortfolio ? 'white' : 'black',
                backgroundColor: inViewPortfolio ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={portfolioRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <DiReact />
                    </div>
                  </div>
                  <h3>Portfolio</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={portfolioSampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={portfolioSample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewPortfolio
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>Personal Portfolio</h3>
                    <ul>
                      <li>Design</li>
                      <li>Animations</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://portfoliovinayak.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Website</button>
                  </a>
                  <a
                    href="https://github.com/imkkapoor/Portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="project-collection"
              style={{
                color: inViewStockchex ? 'white' : 'black',
                backgroundColor: inViewStockchex ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={stockchexRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <IoLogoJavascript />
                    </div>
                  </div>
                  <h3>StockChex</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={stockchexSampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={stockchexSample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 1
                            : 0
                          : 1,
                    }}
                  />

                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewStockchex
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>StockChex</h3>
                    <ul>
                      <li>Chart-JS</li>
                      <li>Rest API</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://stockchex.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button>Website</button>
                  </a>
                  <a
                    href="https://github.com/imkkapoor/Stockchex"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="project-collection"
              style={{
                color: inViewChromeme ? 'white' : 'black',
                backgroundColor: inViewChromeme ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={chromemeRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <IoLogoJavascript />
                    </div>
                  </div>
                  <h3>Chromeme</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={chromemeSampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={chromemeSample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewChromeme
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>Chromeme</h3>
                    <ul>
                      <li>Chrome Extension</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://github.com/imkkapoor/Chromeme"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="project-collection"
              style={{
                color: inViewCms ? 'white' : 'black',
                backgroundColor: inViewCms ? 'black' : 'white',
              }}
            >
              <div className="description-row" ref={cmsRef}>
                <div className="tech-used-and-label">
                  <div className="tech-used">
                    <div className="icon">
                      <DiPython />
                    </div>
                    <div className="icon">
                      <DiMysql />
                    </div>
                  </div>
                  <h3>CMS</h3>
                </div>
                <div className="project-image-snippet">
                  <img
                    src={cmsSampleBack}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <img
                    src={cmsSample}
                    alt="pj1"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 1
                            : 0
                          : 1,
                    }}
                  />
                  <div
                    className="project-image-desc-text"
                    style={{
                      display:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 'block'
                            : 'none'
                          : 'block',
                      opacity:
                        screenHeight > 430 && screenWidth > 800
                          ? inViewCms
                            ? 1
                            : 0
                          : 1,
                    }}
                  >
                    <h3>
                      C-19 Management<br></br> System
                    </h3>
                    <ul>
                      <li>python - MySQl linking</li>
                    </ul>
                  </div>
                </div>
                <div className="project-link">
                  <a
                    href="https://github.com/imkkapoor/Covid-Management-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
