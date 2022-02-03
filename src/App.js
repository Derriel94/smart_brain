import React, { useState } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import './App.css';

console.log(Clarifai);

const app = new Clarifai.App({
 apiKey: 'fc631598ba864d589be77be7e1229c61'
});

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

function App() {

const [input, setInput] = useState();
const [imageUrl, setImageUrl] = useState();
const [box, setBox] = useState({});


const onInputChange = (event) => {
    setInput( event.target.value );
  };

const calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);

  return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
  }
} 

const displayFaceBox = (box) => {
  console.log(box);
  setBox( box );

}

const onButtonSubmit = () => {
  setImageUrl( input );
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, input)
  .then(response => displayFaceBox(calculateFaceLocation(response)))
  .catch((err) => console.log(err));

};  
  


  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition box={box} imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
