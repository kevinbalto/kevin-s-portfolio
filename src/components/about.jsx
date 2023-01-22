import React from "react";
import photo from "../img/photo.png";
import knowledge from "../img/knowledge.png";
import resume from "../documents/Resume.pdf";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Java_skill", content: "Java", porcentage: "70%", value: "70" },
        { id: "HTML_skill", content: "HTML", porcentage: "75%", value: "75" },
        { id: "CSS_skill", content: "CSS", porcentage: "75%", value: "75" },
        { id: "C#_NET_Framework_skill", content: "C# .NET Framework", porcentage: "80%", value: "80" },
        { id: "PHP_skill", content: "PHP", porcentage: "60%", value: "60" },
        { id: "Laravel_skill", content: "Laravel", porcentage: "60%", value: "60" },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: "80" },
        { id: "NodeJs_skill", content: "NodeJS", porcentage: "70%", value: "70" },
        { id: "SQL_skill", content: "SQL", porcentage: "70%", value: "70" },
        { id: "English_skill", content: "Intermediate English B2", porcentage: "100%", value: "100" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, I'm Kevin Baltodano, I'm a full-stack developer with one year of experience, interested in improving my skills and learning new technologies to develop high-quality software. I have experience developing frontend and backend software with many different frameworks, like Angular ts, React js and Nest js."
        }/* ,
        {
          id: "second-p-about",
          content:
            "I'm proud to say that I studied my major at UCR, although my first experience on superior education was at UNA, where I studied English for one year, but my real dream was studying software development and technologies."
        },
        {
          id: "third-p-about",
          content:
            "I have experience on developing applications on JavaScript, ReactJs, C# and many more languages and technologies. When I started my higher education in 2016, I learned English as a new language and I keep practicing to improve it, it has been my second language since then. Nevertheless I would like to learn many more languages and being able to communicate with many more people."
        } */
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="title-left">Knowledge</h5>
                    <img src={knowledge} alt="" className="img-fluid mt-4" width="500" height="auto"/>
                    <div className="mt-5 text-center">
                      <button className={`btn btn-lg btn-info`}>
                        <a className="text-light" href={resume} target="_blank" rel="noopener noreferrer" download="kevin_baltodano_cv.pdf"> 
                          Download CV   
                          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                            <path d="M16 11L12 15M12 15L8 11M12 15V3M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    {/* <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div> */}
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                      <div>
                        <img src={photo} alt="" className="img-fluid" width="500" height="auto"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
