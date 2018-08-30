'use strict';

const technologies = [
    {
      "name": "HTML",
      "experience": "I once wrote a web app using HTML and PHP, so I am " +
      "very comfortable with HTML. I like JSX way better."
    },
    {
      "name": "CSS",
      "experience": "I've used CSS for all the web app's i've written. " +
      "I used to hate it... until I discovered flexbox"
    },
    {
      "name": "Java",
      "experience": "Besides from all the CS classes that used it, " +
      "I wrote an entire backend and API in java over the summer for a web " +
      "app I was making in my internship. I know a lot of people disgust it, " +
      "but I learned to like java a lot over the summer"
    },
    {
      "name": "JavaScript",
      "experience": "I have only written JavaScript in Node and React, and I feel " +
      "very comfortable with it. I used it a little bit for API testing, " +
      "so I am aware of how powerful it is."
    },
    {
      "name": "Ruby",
      "experience": "I have no experience what-so-ever with Ruby"
    },
    {
      "name": "Python",
      "experience": "I use python whenever I can. I love it. I usually use it " +
      "for basic scripts to grab data from an API and throw it into a DB, " +
      "but I am interested in using it for other things, like a backend"
    },
    {
      "name": "Unit Testing",
      "experience": "I did a lot of unit testing in CS 3733, and little " +
      "bit for the backend that I wrote in java. I am fairly comfortable " +
      "with it, but absolutely hate doing it. But I understand how extremely " +
      "important it is."
    }
  ];

class QuinnExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechnology: null
    }
  }

  render() {
    return [
      <div className="technologies" key="technologies">
        {this.makeTechnologyButtons()}
      </div>,
      this.state.selectedTechnology == null
        ? null
        : <div className="my-experience" key="my-experience">
          {this.viewTechnologyExperience()}
        </div>
    ];
  }

  makeTechnologyButtons(){
    const technologyButtons = [];
    technologies.forEach((technology) => {
      technologyButtons.push(
        <button
          key={technology.name}
          className="technology-button"
          onClick={() => this.setState({selectedTechnology: technology.name})}
          style={this.state.selectedTechnology === technology.name ? {"background-color": '#837A75'} : null}
        >{technology.name}
        </button>
      );
    });
    return technologyButtons;
  }

  viewTechnologyExperience(){
    let technologyExperience = null;
    technologies.forEach((technology) => {
      if (technology.name === this.state.selectedTechnology){
        technologyExperience = [
          <h2 key="name">{technology.name}</h2>,
          <p key="experience">{technology.experience}</p>
        ];
      }
    });
    return technologyExperience;
  }

}

ReactDOM.render(
  <QuinnExperience/>,
  document.getElementById('react-root')
);