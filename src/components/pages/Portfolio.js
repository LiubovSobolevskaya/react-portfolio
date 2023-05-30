import React from 'react';

import Project from '../Project';
import emojify from '../../assets/Emojify.gif';
import recipeBox from '../../assets/recipeBox.gif';
import r_a from '../../assets/r_a.jpeg';
import rick from '../../assets/rick.jpeg';
import ra from '../../assets/ra.jpeg';
import codeQuiz from '../../assets/codeQuiz.gif';

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
      gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      deployedLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      img: r_a

    },
    {
      name: "Project not yet done",
      gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      deployedLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      img: rick
    },
    {
      name: "Project not yet done",
      gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      deployedLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      img: ra
    }

  ]

  return (
    <div className="container">
      <h1 className="text-center">Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
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





