import React from 'react'
import './registries/SceneRegistry'
import './registries/HomeRoomRegistry'
import './registries/MuseumRoomRegistry'
import Assets from './components/Assets'
import Camera from './components/Camera'
import HomeRoom from './components/HomeRoom'
import MuseumRoom from './components/MuseumRoom'
require("aframe-htmlembed-component");

const Scene = () => {

  return (
    <div id='vr-container' style={{ position: 'absolute',right:0, width: '100vw', height: '100vh', zIndex: -1, marginLeft: '-8px', opacity: 0 }}>
        <a-scene embedded vr-mode-ui="enabled: true" scene-listener form-tracker loading-screen="enabled: false" renderer="antialias: true; colorManagement: true; physicallyCorrectLights: true;">

          <Assets />

          <a-entity light="type: ambient; color: #fff"></a-entity>

          <HomeRoom />

          <MuseumRoom />

          <Camera />

        </a-scene>
    </div>
  )
}

export default Scene
