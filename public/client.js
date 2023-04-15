import * as THREE from '/build/three.module.js';
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { Scene } from 'three';
console.log(THREE);
console.log(OrbitControls);

const canvas = document.querySelector('.web-gl');

// Globe Dimensions

const el = document.getElementById('box');
console.log(el);
const gW = el.offsetWidth;
const gH = el.offsetHeight;
console.log(gW, gH);


// const boxG = document.getElementById('.globeIDG');
// let globe_width = boxG.offsetWidth;
// let globe_height = boxG.offsetHeight;
// console.log(boxG.offsetWidth, boxG.offsetHeight);

// showing fps
const stats = new Stats();
//document.body.appendChild(stats.domElement);

// Scene Setup
const scene = new THREE.Scene();
console.log(scene);

// Camera Setup
const camera = new THREE.PerspectiveCamera(75, gW / gH, 0.1, 1000)
camera.position.z = 12;
scene.add(camera);
console.log(camera);

// Render Setup
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
});

renderer.setSize(gW, gH);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.setClearColor(0xffffff, 0);

//earth
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(7.3, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./texture/earth.png')
    }),
)

scene.add(earth);

// render function to render the scene
const render = () => {
    renderer.render(scene, camera);
}

// Recursion function for animation
const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    earth.rotation.y = .1 * elapsedTime

    render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// Resizing window to make responsive
const windowResize = () => {
    camera.aspect = gW / gH;
    camera.updateProjectionMatrix();
    renderer.setSize(gW / 2, gH / 2);
    render();
}

window.addEventListener('resize', windowResize, false);


// quaternion = new THREE.Quaternion().setFromAxisAngle(100, 10);
// earth.rotation.set(new THREE.Euler().setFromQuaternion(quaternion));




