import React from "react";

//import stock (imagenes)
import stock from "../img/appdistribuhidora.JPG";
import stock1 from "../img/appdistribuhidora2.JPG";
import stock2 from "../img/appdistribuhidora3.JPG";
import stock3 from "../img/appdistribuhidora4.JPG";
import stock4 from "../img/mtsaap.JPG";
import stock5 from "../img/mtsaap2.JPG";
import stock6 from "../img/mtsaap3.JPG";
import stock7 from "../img/crudvuejs.png";
import stock8 from "../img/crudvuejs2.png";
import stock9 from "../img/mns.png";
import stock10 from "../img/mns1.png";
import stock11 from "../img/mns2.png";
import stock12 from "../img/mns3.png";
import stock13 from "../img/cms1.JPG";
import stock14 from "../img/crm2.JPG";
import stock15 from "../img/crm3.JPG";
import { Icon } from '@iconify/react';
import addCircleSharp from '@iconify/icons-ion/add-circle-sharp';
import githubFill from '@iconify/icons-akar-icons/github-fill';

const Portfolio = () => {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                {/* <p className="subtitle-a">
                  Here are some projects, I would like to show to you!
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          {/* Distribuidora del Pacífico */}
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Distribuidora del Pacífico</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Distribuidora del Pacífico is an application made in C# and .Net framework. 
                            It is an eCommerce of domestic appliances, electronic devices and forniture.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={stock} data-lightbox="gallery-vmarine">
                            <Icon icon={addCircleSharp} color="#6d6d6d" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <a href="https://github.com/kevinbalto/Distribuidora-del-Pacifico">
                            <Icon icon={githubFill} color="black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            {/* Movile Tool Store */}
            <div className="col-md-4">
              <div className="work-box"> 
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Movile Tool Store</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Movile Tool Store is an application developed in C# and .Net framework. 
                            It is an eCommerce centred on selling many types of electronic devices.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={stock4} data-lightbox="gallery-aguadeluz">
                            <Icon icon={addCircleSharp} color="#6d6d6d" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <a href="https://github.com/kevinbalto/Movile-Tool-Store">
                            <Icon icon={githubFill} color="black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            {/* Crud Vue.js */}
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock7} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Crud with Vue.js</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Project made to test different technologies such as Vue.js and MySQL.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={stock7} data-lightbox="gallery-todo">
                            <Icon icon={addCircleSharp} color="#6d6d6d" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <a href="https://github.com/kevinbalto/Proyecto-CRUD-VueJs-PHP-y-MySQL">
                            <Icon icon={githubFill} color="black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>          
                <a
                  href={stock8}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            {/* Sapporo ramen */}
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock9} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Sapporo No Minami Ramen</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Sapporo No Minami Ramen is a CMS made in PHP.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={stock9} data-lightbox="gallery-mf">
                            <Icon icon={addCircleSharp} color="#6d6d6d" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <a href="https://github.com/kevinbalto/SapporoNoMinamiRamen_CMS">
                            <Icon icon={githubFill} color="black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <a
                  href={stock10}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock11}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock12}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            {/* CMS React-Tailwind-Formik */}
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={stock13} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          CRM-REACT-TAILWINDCCS-FORMIK</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            CRM made to test the following technologies: React.js, TailwindCSS and Formik
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={stock13} data-lightbox="gallery-mf">
                            <Icon icon={addCircleSharp} color="#6d6d6d" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="w-like">
                          <a href="https://github.com/kevinbalto/CRM-REACT-TAILWINDCCS-FORMIK">
                            <Icon icon={githubFill} color="black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <a
                  href={stock14}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock15}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Portfolio;
