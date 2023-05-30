import React from 'react';

import Project from '../Project';
import emojify from '../../assets/Emojify.gif';
import recipeBox from '../../assets/recipeBox.gif';
import finlay from '../../assets/Finlay.jpg';
import cat from '../../assets/cat.jpg';
import finn from '../../assets/finn.jpg';
import codeQuiz from '../../assets/codeQuiz.gif';

const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
}

export default function Portfolio() {
  const projects = [
    {
      name: "Recipe Box",
      gitHub: "https://github.com/Berkeleycodingmomma/recepie-box/",
      deployedLink: "https://recipesbox.herokuapp.com/",
      img: recipeBox
    },
    {
      name: "Emojify",
      gitHub: "https://github.com/samhiga/emojify",
      deployedLink: "https://samhiga.github.io/emojify/",
      img: emojify
    },
    {
      name: "Code Quiz",
      gitHub: "https://github.com/LiubovSobolevskaya/code-quiz",
      deployedLink: "https://liubovsobolevskaya.github.io/code-quiz/",
      img: codeQuiz
    },
    {
      name: "One more project",
      gitHub: "https://www.tiktok.com/@finlaythecat/video/7032088646257855749",
      deployedLink: "https://www.tiktok.com/@finlaythecat/video/7032088646257855749",
      img: finlay

    },
    {
      name: "Project not yet done",
      gitHub: "https://www.tiktok.com/@finlaythecat/video/7002793051613629701",
      deployedLink: "https://www.tiktok.com/@finlaythecat/video/7002793051613629701",
      img: cat
    },
    {
      name: "Project not yet done",
      gitHub: "https://www.tiktok.com/@finlaythecat/video/7134206034494934318",
      deployedLink: "https://www.tiktok.com/@finlaythecat/video/7134206034494934318",
      img: finn
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}





