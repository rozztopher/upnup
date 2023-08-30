import React from 'react'

const Camera = () => {

    return (
        <>
        <a-entity camera-listener id="rig" class='rig' movement-controls="speed: 0.1;" navigator="cameraRig: #rig; cameraHead: #camera-rig;" position="21.5 -0.8 0" rotation="0 0 0">
          <a-entity id="camera-rig" camera="active: true" position="0 1.6 0" look-controls="pointerLockEnabled: false; reverseMouseDrag: true">
            <a-entity id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .collidable"></a-entity>
            <a-entity class='collidable' id="keyboard" super-keyboard="hand: #mouseCursor; show: false; imagePath:/keyboard/" position="-100 -100 100" rotation="330 0 0" keyboard-functions></a-entity>
            <a-entity id="material1"
              class="ball collidable"
              visible="true"
              geometry="primitive: sphere; radius: 0.2"
              scale="0.5 0.5 0.5"
              position="-0.3 100 -1"
              material="src: #tex1"
              texture-click-listener change-textures ></a-entity>
            <a-entity
              class="ball collidable"
              id="material2"
              visible="true"
              geometry="primitive: sphere; radius: 0.2"
              scale="0.5 0.5 0.5"
              position="0 100 -1"
              material="src: #tex2"
              texture-click-listener change-textures ></a-entity>
            <a-entity
              class="ball collidable"
              id="material3"
              visible="true"
              geometry="primitive: sphere; radius: 0.2"
              scale="0.5 0.5 0.5"
              position="0.3 100 -1"
              material="src: #tex3"
              texture-click-listener change-textures ></a-entity>
          </a-entity>
          <a-entity light="type: point; intensity: 2; distance: 5; decay: 2" position="0 0 0"></a-entity>
          <a-entity light="type: point; intensity: 2; distance: 5; decay: 2" position="0 2 0"></a-entity>
          <a-entity laser-controls="hand: left" visible="true" raycaster="objects: .collidable;"></a-entity>
          <a-entity laser-controls="hand: right" visible="true" raycaster="objects: .collidable; far: 200"></a-entity>
        </a-entity>
        </>
    )
}

export default Camera
