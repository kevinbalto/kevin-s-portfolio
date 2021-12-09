import React from "react";

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
            "I am interested in improving my skills and learning new technologies to develop good-looking and high-quality  software; I am able yo work in a hard-working environment and provide a high-quality work. What I really love is working on web pages and find new ways to design and make them functional."
        },
        {
          id: "second-p-about",
          content:
            "I'm proud to say that I studied my major at UCR, although my first experience on superior education was at UNA, where I studied English for one year, but my real dream was studying software development and technologies."
        },
        {
          id: "third-p-about",
          content:
            "I have experience on developing applications on JavaScript, ReactJs, C# and many more languages and technologies. When I started my higher education in 2016, I learned English as a new language and I keep practicing to improve it, it has been my second language since then. Nevertheless I would like to learn many more languages and being able to communicate with many more people."
        }
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
                    <div className="row">
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
                    </div>
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
