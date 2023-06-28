import React from 'react';

import Project from '../Project';
import emojify from '../../assets/Emojify.gif';
import recipeBox from '../../assets/recipeBox.gif';
import clubhub from '../../assets/clubhub.gif';
import codeQuiz from '../../assets/codeQuiz.gif';
import techBlog from '../../assets/tech-blog.gif';
import weatherDashboard from '../../assets/weather-dashboard.gif';

const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#664E4C',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
}

export default function Portfolio() {
  const projects = [
    {
      name: "Club Hub",
      gitHub: "https://github.com/tdusenbury/Club-Hub",
      deployedLink: "https://clubhub.herokuapp.com/",
      img: clubhub,
      technologies: "Mongoose ORM, MongoDb, React, JWT (JSON Web Tokens), Apollo GraphQL, Node.js, CSS, HTML, Anime.js",
      summary: "A web application created to create events, and rsvp for them"

    },
    {
      name: "Recipe Box",
      gitHub: "https://github.com/Berkeleycodingmomma/recepie-box/",
      deployedLink: "https://recipesbox.herokuapp.com/",
      img: recipeBox,
      technologies: "Sequalize ODM, MySQL, Handlebars, Node.js, CSS, HTML, RESTful APIs, third-party APIs",
      summary: "An application to find a save recipes"

    },
    {
      name: "Emojify",
      gitHub: "https://github.com/samhiga/emojify",
      deployedLink: "https://samhiga.github.io/emojify/",
      img: emojify,
      technologies: "JavaScript, third-party APIs, Bulma (a CSS framework), CSS, and HTML",
      summary: "An application to find a movie bases on your mood"


    },
    {
      name: "Code Quiz",
      gitHub: "https://github.com/LiubovSobolevskaya/code-quiz",
      deployedLink: "https://liubovsobolevskaya.github.io/code-quiz/",
      img: codeQuiz,
      technologies: "JavaScript, CSS, and HTML",
      summary: "simple application to test your JavaScript knowledge."
    },
    {
      name: "MVC-CMS-style-Tech-Blog",
      gitHub: "https://github.com/LiubovSobolevskaya/MVC-CMS-style-Tech-Blog",
      deployedLink: "https://cmslubatechblog.herokuapp.com/",
      img: techBlog,
      technologies: "Sequalize ODM, MySQL, Handlebars, Node.js, CSS, HTML, RESTful APIs",
      summary: "A technology-focused blog created using Mongoose ORM, JavaScript, and Handlebars, following the CMS (Content Management System) style."

    },
    {
      name: "Openweather Api Dashboard",
      gitHub: "https://github.com/LiubovSobolevskaya/Openweather-Api-Dashboard",
      deployedLink: "https://liubovsobolevskaya.github.io/Openweather-Api-Dashboard/",
      img: weatherDashboard,
      technologies: "JavaScript, third-party APIs, CSS, and HTML",
      summary: "A simple weather application developed"

    }

  ]

  return (
    <div className="container">
      <h1 className="text-center" style={styles.h1} >Portfolio</h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-sm-8 col-8" key={index}>
            <Project
              title={project.name}
              githubLink={project.gitHub}
              deployedLink={project.deployedLink}
              image={project.img}
              technologies={project.technologies}
              summary={project.summary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}





