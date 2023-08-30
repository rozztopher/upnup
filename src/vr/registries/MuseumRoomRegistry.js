import AFRAME from 'aframe';

AFRAME.registerComponent("museum", {
  init: function () {
    document.querySelector("#museum-object").setAttribute("gltf-model", "#museum");
  },
});

AFRAME.registerComponent("museum-to-room", {
  init: function () {
    const rig = document.querySelector('#rig')
    this.el.addEventListener("click", e => {
      sessionStorage.setItem('room', 'home')
      const pos = sessionStorage.getItem('vr') === 'true' ? "10 -0.8 5" : "10 -0.8 5"
      rig.setAttribute("position", pos)
      document.querySelector('#camera-rig').components['look-controls'].yawObject.rotation.y = 0;
    })
  }
})

// const loadImage = (museum, src, frame) => {
//   const loader = new THREE.ImageBitmapLoader()
//   loader.load(
//     src,
//     (imageBitmap) => {
//       const texture = new THREE.CanvasTexture(imageBitmap);
//       const material = new THREE.MeshBasicMaterial({ map: texture })
//       museum.children.forEach(child => {
//         if (child.name === frame) {
//           child.children[1].material = material
//         }
//       })
//     },
//     undefined,
//     function (err) {
//       console.log(err);
//     }
//   );
// }

// AFRAME.registerComponent("museum-setup", {
//   init: function () {
//     let mesh = this.el.getObject3D('mesh')
//     if (!mesh) {
//       this.el.addEventListener('model-loaded', () => {
//         const musuem = this.el.getObject3D('mesh')
//         loadImage(musuem, '/case-studies/spayce/frame.jpg', 'Canvas_Landscape006')
//         loadImage(musuem, '/case-studies/stay-human/frame.jpg', 'Canvas_Landscape007')
//         loadImage(musuem, '/images/GDF.jpg', 'Canvas_Landscape008')
//         loadImage(musuem, '/case-studies/coin/frame.jpg', 'Canvas_Landscape009')
//         loadImage(musuem, '/case-studies/foxdeal/frame.jpg', 'Canvas_Landscape010')
//         loadImage(musuem, '/images/Free2.jpg', 'Canvas_Landscape011')
//         loadImage(musuem, '/images/ballon.jpg', 'Canvas_SQ006')
//         loadImage(musuem, '/images/Guscio1.1.jpg', 'Canvas_SQ007')
//         loadImage(musuem, '/images/LLI1.1.jpg', 'Canvas_SQ008')
//         loadImage(musuem, '/images/Samurai1.1.jpg', 'Canvas_SQ009')
//         loadImage(musuem, '/images/skl1.1.png', 'Canvas_SQ010')
//         loadImage(musuem, '/images/stat1.1.jpg', 'Canvas_SQ011')
//       })
//       return
//     }
//   }
// })

AFRAME.registerComponent("stayhuman-slide", {
  init: function () {
    const stayhumanImages = ['#stayhuman1', '#stayhuman2', '#stayhuman3', '#stayhuman4', '#stayhuman5']
    setInterval(() => {
      if (stayhumanImages.indexOf(this.el.getAttribute('src')) === stayhumanImages.length - 1) {
        this.el.setAttribute('src', stayhumanImages[0])
      } else {
        const index = stayhumanImages.indexOf(this.el.getAttribute('src')) + 1
        this.el.setAttribute('src', stayhumanImages[index])
      }
    }, 2500)
  }
})

AFRAME.registerComponent("spayce-slide", {
  init: function () {
    const spayceImages = ['#spayce1', '#spayce2', '#spayce3']
    setInterval(() => {
      if (spayceImages.indexOf(this.el.getAttribute('src')) === spayceImages.length - 1) {
        this.el.setAttribute('src', spayceImages[0])
      } else {
        const index = spayceImages.indexOf(this.el.getAttribute('src')) + 1
        this.el.setAttribute('src', spayceImages[index])
      }
    }, 2500)
  }
})

AFRAME.registerComponent("foxdeal-slide", {
  init: function () {
    const foxdealImages = ['#foxdeal1', '#foxdeal2', '#foxdeal3']
    setInterval(() => {
      if (foxdealImages.indexOf(this.el.getAttribute('src')) === foxdealImages.length - 1) {
        this.el.setAttribute('src', foxdealImages[0])
      } else {
        const index = foxdealImages.indexOf(this.el.getAttribute('src')) + 1
        this.el.setAttribute('src', foxdealImages[index])
      }
    }, 2500)
  }
})

AFRAME.registerComponent("coin-slide", {
  init: function () {
    const coinImages = ['#coin1', '#coin2']
    setInterval(() => {
      if (coinImages.indexOf(this.el.getAttribute('src')) === coinImages.length - 1) {
        this.el.setAttribute('src', coinImages[0])
      } else {
        const index = coinImages.indexOf(this.el.getAttribute('src')) + 1
        this.el.setAttribute('src', coinImages[index])
      }
    }, 2500)
  }
})
