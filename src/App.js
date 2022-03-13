import React, { useState } from 'react';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import './App.css';



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
const [route, setRoute] = useState('signin');
const [isSignedIn, setIsSignedIn] = useState(false);
const [user, setUser] = useState({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
 });

const loadUser = (user) => {
  console.log('1')
  setUser({
    id: user.id,
    name: user.name,
    email: user.email,
    entries: user.entries,
    joined: user.joind
  })
console.log('2')
}

//--- START OF FACE RECOGNITION LOGIC ---
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

const onDetectButtonSubmit = () => {
  setImageUrl( input );
  fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: input
        })
      })
  .then(response => response.json())
  .then(response => { 
    if (response) {
      fetch('http://localhost:3001/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: user.id
        })
      })
      .then(response => response.json())
      .then(count => {
        setUser(Object.assign(user, {entries: count}));
      })
      .catch(console.log)
    }
    displayFaceBox(calculateFaceLocation(response))
    })
  .catch(err => console.log(err));

};  

//--- END OF FACE RECOGNITION LOGIC ---
  
const onRouteChange = (route) => {
  setRoute(route);
  switch(route) {
    case 'signin':
      setIsSignedIn(false);
      break;
    case 'home':
      setIsSignedIn(true);
      break;
    case 'register':
      setIsSignedIn(false);
      break;
    case 'signout':
      setIsSignedIn(false);
      break;
    default:
    //code
  }
  
}

  return (
    <div className="App">
    <Particles className="particles" params={particleParams} />
    <div className="nav">    
      <Logo />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
    </div>
      {route === 'home' 
      ? <div>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm onInputChange={onInputChange} onDetectButtonSubmit={onDetectButtonSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>
      : (
          route === 'signin'
          ? <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
          : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        )
      }
    </div>
  );
}

export default App;
