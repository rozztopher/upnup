import AFRAME from 'aframe';
import * as THREE from "three";

const textureMap = {
  'material1': {
    main: '/textures/cushion1.jpg',
    sub: '/textures/frame1.jpg'
  },
  'material2': {
    main: '/textures/cushion2.jpg',
    sub: '/textures/frame2.jpg'
  },
  'material3': {
    main: '/textures/cushion3.jpg',
    sub: '/textures/frame3.jpg'
  }
}

AFRAME.registerComponent('room', {
  init: function () {
    let mesh = this.el.getObject3D('mesh')
    if (!mesh) {
      this.el.addEventListener('model-loaded', () => {
        const event = new Event('AssetsLoaded')
        window.dispatchEvent(event)
      })
      return
    }
  },
});

AFRAME.registerComponent('open-textures', {
  init: function () {
    const materials = document.querySelectorAll('.ball')
    this.el.addEventListener('click', () => {
      for (let i = 0; i < 3; i++) {
        const newPos = materials[i].getAttribute('position')
        newPos.y = -0.4
        materials[i].setAttribute('position', newPos)
      }
    })
  },
});

AFRAME.registerComponent('change-textures', {
  init: function () {
    const materials = document.querySelectorAll('.ball');
    this.el.addEventListener('click', () => {
      const tex = new THREE.TextureLoader().load(textureMap[this.el.id].main);
      const subTex = new THREE.TextureLoader().load(textureMap[this.el.id].sub)
      tex.flipY = false
      subTex.flipY = false
      const room = document.querySelectorAll('#room-object')[0].getObject3D('mesh')
          room.children.forEach(node => {
            if (node.name === 'Sofa') {
              node.children.forEach(child => {
                if (child.name === 'Cushion_Baked_Baked_Baked_Baked_Baked') { child.material.map = tex }
                else if (child.name === 'Stand') { child.material.map = subTex }
                else if (child.name === 'Frame_Baked_Baked_Baked_Baked') { child.material.map = subTex }
              })
            }
          })
      for (let i = 0; i < 3; i++) {
        const newPos = materials[i].getAttribute('position')
        newPos.y = 100
        materials[i].setAttribute('position', newPos)
      }
    })
  },
  tick: function () {
    var timer = Date.now() * 0.0001;
    var object = this.el.object3D;
    object.rotation.y = timer * 8;
  }
});

AFRAME.registerComponent("product", {
  init: function () {
    document.querySelector("#product-object").setAttribute("gltf-model", "#product");
  },
  tick: (function () {
    const rotation = this.el.getAttribute('rotation')
    rotation.y += 0.5
    this.el.setAttribute('rotation', rotation)
  }),
});

AFRAME.registerComponent("room-to-museum", {
  init: function () {
    const rig = document.querySelector('#rig')
    this.el.addEventListener("click", e => {
      sessionStorage.setItem('room', 'museum')
      const pos = sessionStorage.getItem('vr') === 'true' ? "135 -0.8 0" : "135 -0.8 0"
      rig.setAttribute("position", pos)
      document.querySelector('#camera-rig').components['look-controls'].yawObject.rotation.y = 0;
    })
  }
})

AFRAME.registerComponent('form-tracker', {
  tick: function (time, timeDelta) {
    const nextButton = document.querySelector('#next-button')
    const industry = document.querySelector('#ay-industry')
    const values = document.querySelector('#ay-values')
    const services = document.querySelector('#ay-services')
    const form = document.querySelector('#ay-form')
    const backButton = document.querySelector('#back-button')
    const sendButton = document.querySelector('#send-button')

    if (nextButton && industry && values && services && form && backButton && sendButton) {
      if (sessionStorage.getItem('form') === 'active') {
        nextButton.setAttribute('opacity', 0)
        industry.setAttribute('visible', false)
        values.setAttribute('visible', false)
        services.setAttribute('visible', false)
        form.setAttribute('visible', true)
        backButton.setAttribute('opacity', 1)
        sendButton.setAttribute('opacity', 1)
        form.setAttribute("position", "10.2 0.7 -7")
        industry.setAttribute("position", "10.2 0.7 -10")
        nextButton.setAttribute("position", "10.2 -0.5 -10")
        backButton.setAttribute("position", "9.6 -0.5 -7")
        sendButton.setAttribute("position", "10.8 -0.5 -7")
      } else if (sessionStorage.getItem('form') === 'submitted') {
        nextButton.setAttribute('opacity', 0)
        industry.setAttribute('visible', false)
        values.setAttribute('visible', false)
        services.setAttribute('visible', false)
        form.setAttribute('visible', true)
        backButton.setAttribute('opacity', 0)
        sendButton.setAttribute('opacity', 0)
      } else {
        nextButton.setAttribute('opacity', 1)
        industry.setAttribute('visible', true)
        values.setAttribute('visible', true)
        services.setAttribute('visible', true)
        form.setAttribute('visible', false)
        backButton.setAttribute('opacity', 0)
        sendButton.setAttribute('opacity', 0)
        form.setAttribute("position", "10.2 0.7 -10")
        industry.setAttribute("position", "10.2 0.7 -7")
        nextButton.setAttribute("position", "10.2 -0.5 -7")
        backButton.setAttribute("position", "9.6 -0.5 -10")
        sendButton.setAttribute("position", "10.8 -0.5 -10")
      }
    }
  }
});

AFRAME.registerComponent("activate-form", {
  init: function () {
    this.el.addEventListener("click", () => {
      console.log('clicked')
      sessionStorage.setItem('form', 'active')
    })
  }
})

AFRAME.registerComponent("deactivate-form", {
  init: function () {
    this.el.addEventListener("click", () => {
      sessionStorage.setItem('form', '')
    })
  }
})

AFRAME.registerComponent("submit-form", {
  init: function () {
    this.el.addEventListener("click", () => {
      const event = new Event('FormSubmitted')
      window.dispatchEvent(event)
    })
  }
})
