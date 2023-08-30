import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Camera } from "./Camera"
import { Renderer } from "./Renderer"
import { Sizes } from "./Sizes"
import { isIosDevice } from "../pages/home/heroRow"
export let canvas,scene,sizes,camera,renderer;
window.addEventListener('RowLoadingEvent',()=>{
  if(isIosDevice())
    return;
  canvas = document.querySelector('.webgl')
  scene = new THREE.Scene()
  const textureLoader= new THREE.TextureLoader();
  let texture = textureLoader.load("three/cyclesbake.jpg")
  texture.encoding = THREE.sRGBEncoding;

  texture.flipY = false

  let deca = null
  const loader = new GLTFLoader()
  loader.load(
    'three/deca_cube.glb', 
    function ( gltf ) {
      const material = new THREE.MeshPhongMaterial({
                map:texture,
                specular:  0x050505,
                shininess: 100,
                side: THREE.DoubleSide,
            })
      deca = gltf.scene
      deca.receiveShadow = true
      deca.castShadow = true
      deca.traverse(function(child){
        if(child.isMesh){
          child.material = material
        }
      })

      window.innerWidth <= 375 ? deca.scale.set(0.75,0.75,0.75) : window.innerWidth < 1920 ? deca.scale.set(1.10,1.10,1.10) : deca.scale.set(1.35,1.35,1.35);

      scene.add( gltf.scene );
    },
    // called while loading is progressing
    function ( xhr ) {
  
      // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
    },
    // called when loading has errors
    function ( error ) {
  
      console.log( 'An error happened' );
  
    }
  );
   let light = new THREE.AmbientLight('#ffffff',1)
   let pointLight_1 = new THREE.PointLight('#ffffff',2,100)
   pointLight_1.position.set( 0, 0, 5 );
   pointLight_1.lookAt(0,0,0)
   let pointLight_2 = new THREE.PointLight('#ffffff',1,100)
   pointLight_2.position.set( 1, -5, 1 );
   pointLight_2.lookAt(0,0,0)
   let pointLight_3 = new THREE.PointLight('#ffffff',1,100)
   pointLight_3.position.set( 5, 0, 1 );
   pointLight_3.lookAt(0,0,0)
   scene.add(pointLight_1)
   scene.add(pointLight_2)
  //const light = new THREE.PointLight( 0xff0000, 1, 100 );
  //light.position.set( 0, 0, 2 );
  scene.add(light)
  // scene.add(cube)
  sizes = new Sizes()
  camera = new Camera()
  renderer = new Renderer()
  let time = Date.now()
  const tick = () => {

    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    //const elapsedTime = clock.getElapsedTime()
    // console.log(camera)
    // Update controls
    if(deca){
      deca.rotation.x += 0.0001 * deltaTime
      deca.rotation.y += 0.0001 * deltaTime
      deca.rotation.z += 0.0001 * deltaTime  

    }

    camera.controls.update()
    
    // Render
    renderer.renderer.render(scene, camera.camera)
  
    window.requestAnimationFrame(tick)
  
  }
  
  tick()

})