import React from 'react';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';

function App() {

  const particleParams = {

  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "distance": 150,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "spin": {}
    },
    "number": {
      "value": 80
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "enable": true,
        "speed": 3,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 1,
        "max": 50
      },
      "animation": {
        "speed": 20,
        "minimumValue": 0.1
      }
    }
  },
  
  };

  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    {/*  
       
        <FaceRecognition />
    */}
    </div>
  );
}

export default App;
