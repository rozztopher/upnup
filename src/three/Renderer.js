import * as THREE from "three"
import { canvas, sizes } from "./Experience"

export class Renderer {
  constructor() {
    this.renderer = null

    this.setRenderer()
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha:true,
      gammaInput:true,
      gammaOutput:true
    })
    this.renderer.setSize(sizes.width, sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
  }
}