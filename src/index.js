import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/enterExperienceButton.scss'
import './styles/app.scss'
import './styles/layout.scss'
import './styles/home.scss'
import './styles/about.scss'
import './styles/projects.scss'
import './styles/contact.scss'
import './styles/fonts.scss'
import './styles/nav.scss'
import './styles/vr.scss'
import './styles/gradientTitle.scss'
import './styles/gradientButton.scss'
import './three/Experience'
require('aframe')
require('aframe-extras')
require("aframe-super-keyboard")
ReactDOM.render(<App />, document.getElementById('root'))