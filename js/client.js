import * as THREE from '/build/three.module.js';
import Stats from './jsm/libs/stats.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
console.log(THREE);
console.log(OrbitControls);

const canvas = document.querySelector('.web-gl');

// showing fps
const stats = new Stats();
//document.body.appendChild(stats.domElement);

// Scene Setup
const scene = new THREE.Scene();
console.log(scene);

// Camera Setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 12;
scene.add(camera);
console.log(camera);

// Render Setup
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);

//earth
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('/images/earth.png'),
    })
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
    earth.rotation.y = .2 * elapsedTime

    render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// Resizing window to make responsive
const windowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

window.addEventListener('resize', windowResize, false);