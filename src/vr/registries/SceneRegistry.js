import AFRAME from 'aframe';

AFRAME.registerComponent('indicator', {
  tick: function () {
    var timer = Date.now() * 0.0001;
    var object = this.el.object3D;
    object.rotation.y = timer * 8;
  }
});

AFRAME.registerComponent('scene-listener', {
  init: function () {
    let rig = document.querySelector('#rig');
    sessionStorage.setItem('vr', 'false')
    document.querySelector('a-scene').addEventListener('exit-vr', function () {
      sessionStorage.setItem('vr', 'false')
      rig.setAttribute("position", "21.5 -0.8 0");
    });
    document.querySelector('a-scene').addEventListener('enter-vr', function () {
      sessionStorage.setItem('vr', 'true')
      rig.setAttribute("position", "21.5 -0.8 0");
    });
  }
});

AFRAME.registerComponent('camera-listener', {
  tick: function () {
    const x = this.el.getAttribute('position').x
    const z = this.el.getAttribute('position').z
    if (sessionStorage.getItem('room') === 'home') {
      if (x <= -3.65) { // left wall
        this.el.getAttribute('position').x = -3.65
      } else if (x > -3.65 && x <= 1) { // 1st "E" wall
        if (z < -2.9 && x > 0.8) {
          this.el.getAttribute('position').x = 0.8
        }
      } else if (x > 1 && x <= 2.5) { // First balcony left
        if (z <= -3.3 && x <= 1.25) {
          this.el.getAttribute('position').x = 1.25
        } else if (z >= -3.15 && z <= -2.9 && x <= 2.1) {
          this.el.getAttribute('position').x = 2.1
        } else if (z <= -2.6 && z >= -2.8 && x < 2.1) {
          this.el.getAttribute('position').z = -2.6
        } else if (z <= -3.3 && z >= -3.5 && x < 2.1) {
          this.el.getAttribute('position').z = -3.5
        }
      } else if (x > 2.5 && x <= 5) { // Wall beside sofa
        if (z > 0.15 && x > 4 && x <= 4.4) {
          this.el.getAttribute('position').x = 4
        } else if (z > 0.15 && x > 4.4 && x <= 4.7) {
          this.el.getAttribute('position').x = 4.7
        }
      } else if (x > 5 && x <= 8) { // First balcony right
        if (z <= -2.8 && x >= 7.7 && x <= 8) {
          this.el.getAttribute('position').x = 8
        } else if (z <= -3.3 && x >= 7.1 && x <= 7.4) {
          this.el.getAttribute('position').x = 7.2
        } else if (z <= -2.6 && z >= -2.8 && x > 6.6) {
          this.el.getAttribute('position').z = -2.6
        } else if (z <= -3.3 && z >= -3.5 && x > 6.6) {
          this.el.getAttribute('position').z = -3.5
        }
      } else if (x > 12 && x <= 14) { // Second balcony left
        if (z <= -3.8 && x >= -12.25 && x <= 12.5) {
          this.el.getAttribute('position').x = 12.25
        } else if (z <= -3.3 && x >= 12.8 && x <= 13.1) {
          this.el.getAttribute('position').x = 13.1
        } else if (z <= -3 && z >= -3.2 && x < 13.7) {
          this.el.getAttribute('position').z = -3
        } else if (z <= -3.3 && z >= -3.5 && x < 13.7) {
          this.el.getAttribute('position').z = -3.3
        }
      } else if (x > 19 && x <= 19.6) { // First balcony right
        if (z <= -2.8 && x >= 19.3 && x <= 19.6) {
          this.el.getAttribute('position').x = 19.3
        } else if (z <= -3.3 && x >= 18.8 && x <= 19.2) {
          this.el.getAttribute('position').x = 18.8
        } else if (z <= -2.6 && z >= -2.8 && x > 6.6) {
          this.el.getAttribute('position').z = -2.6
        } else if (z <= -3.3 && z >= -3.5 && x > 6.6) {
          this.el.getAttribute('position').z = -3.5
        }
      } else if (x >= 23.7) { // right wall
        this.el.getAttribute('position').x = 23.7
      }
      if (z <= -6.9) { // Door side wall
        this.el.getAttribute('position').z = -6.9
      } else if (z >= 5.6) { // Wall opposide door side
        this.el.getAttribute('position').z = 5.6
      }
    }

    if (sessionStorage.getItem('room') === 'museum') {
      if (z > 0) {
        this.el.getAttribute('position').z = 0
      } else if (z <= 0 && z >= -3.25) {
        if (x <= 131.1) {
          this.el.getAttribute('position').x = 131.1
        } else if (x >= 139.1) {
          this.el.getAttribute('position').x = 139.1
        }
      } else if (z < -3.25 && z >= -7.9) {
        if (x <= 129.4) {
          this.el.getAttribute('position').x = 129.4
        } else if (x >= 140.5) {
          this.el.getAttribute('position').x = 140.5
        }
      } else if (z < -7.9 && z >= -10.2) {
        if (x <= 131.1) {
          this.el.getAttribute('position').x = 131.1
        } else if (x >= 139.1) {
          this.el.getAttribute('position').x = 139.1
        }
      } else if (z < -10.2 && z >= -13.5) {
        if (x <= 129) {
          this.el.getAttribute('position').x = 129
        } else if (x >= 141.2) {
          this.el.getAttribute('position').x = 141.2
        }
      } else if (z < -13.5 && z >= -17) {
        if (x >= 134.9 && x < 135.3) {
          if (x < 135.1) {
            this.el.getAttribute('position').x = 134.9
          } else {
            this.el.getAttribute('position').x = 135.3
          }
        } else if (x <= 129) {
          this.el.getAttribute('position').x = 129
        } else if (x >= 141.2) {
          this.el.getAttribute('position').x = 141.2
        }
      }
    }
  }
});

AFRAME.registerComponent('keyboard-functions', {
  dependencies: ['super-keyboard'],
  init: function () {
    var model = {
      wrapCount: 30, inputOffsetY: 0.008, inputOffsetX: 0.08, img: 'sk-custom.png',
      layout: [{ "key": "1", "x": 0.044, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "2", "x": 0.124, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "3", "x": 0.203, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "4", "x": 0.282, "y": 0.226, "w": 0.08, "h": 0.152 }, { "key": "5", "x": 0.363, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "6", "x": 0.442, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "7", "x": 0.521, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "8", "x": 0.601, "y": 0.226, "w": 0.08, "h": 0.152 }, { "key": "9", "x": 0.681, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "0", "x": 0.761, "y": 0.226, "w": 0.079, "h": 0.152 }, { "key": "q", "x": 0.044, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "w", "x": 0.124, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "e", "x": 0.203, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "r", "x": 0.282, "y": 0.377, "w": 0.08, "h": 0.152 }, { "key": "t", "x": 0.363, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "u", "x": 0.521, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "y", "x": 0.442, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "i", "x": 0.601, "y": 0.377, "w": 0.08, "h": 0.152 }, { "key": "o", "x": 0.681, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "p", "x": 0.761, "y": 0.377, "w": 0.079, "h": 0.152 }, { "key": "a", "x": 0.092, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "s", "x": 0.171, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "d", "x": 0.251, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "f", "x": 0.331, "y": 0.53, "w": 0.079, "h": 0.154 }, { "key": "g", "x": 0.41, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "h", "x": 0.49, "y": 0.53, "w": 0.079, "h": 0.154 }, { "key": "j", "x": 0.57, "y": 0.53, "w": 0.079, "h": 0.154 }, { "key": "k", "x": 0.649, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "l", "x": 0.729, "y": 0.53, "w": 0.08, "h": 0.154 }, { "key": "z", "x": 0.172, "y": 0.684, "w": 0.079, "h": 0.154 }, { "key": "x", "x": 0.251, "y": 0.684, "w": 0.08, "h": 0.154 }, { "key": "c", "x": 0.331, "y": 0.684, "w": 0.079, "h": 0.154 }, { "key": "v", "x": 0.41, "y": 0.684, "w": 0.08, "h": 0.154 }, { "key": "b", "x": 0.49, "y": 0.684, "w": 0.08, "h": 0.154 }, { "key": "n", "x": 0.57, "y": 0.684, "w": 0.079, "h": 0.154 }, { "key": "m", "x": 0.649, "y": 0.684, "w": 0.08, "h": 0.154 }, { "key": " ", "x": 0.27, "y": 0.838, "w": 0.415, "h": 0.126 }, { "key": "Delete", "x": 0.846, "y": 0.227, "w": 0.108, "h": 0.146 }, { "key": "Enter", "x": 0.847, "y": 0.526, "w": 0.108, "h": 0.244 }, { "key": "Shift", "x": 0.042, "y": 0.827, "w": 0.068, "h": 0.142 }, { "key": "Escape", "x": 0.876, "y": 0.823, "w": 0.078, "h": 0.134 }, { "key": "Insert", "x": 0.058, "y": 0, "w": 0.881, "h": 0.149 }, { "key": ".", "x": 0.729, "y": 0.684, "w": 0.079, "h": 0.154 }, { "key": "@", "x": 0.092, "y": 0.684, "w": 0.079, "h": 0.154 }]
    }
    this.el.components['super-keyboard'].addCustomModel('show', model)
    this.el.setAttribute('super-keyboard', {
      imagePath: '/keyboard/',
      model: 'show'
    });
  },
  tick: function (time, timeDelta) {
    if (sessionStorage.getItem('activeInput')) {
      this.el.object3D.visible = true
    } else {
      this.el.object3D.visible = false
    }
  }
});
