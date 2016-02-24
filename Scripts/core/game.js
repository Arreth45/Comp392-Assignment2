/// <reference path="_reference.ts"/>
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
//sun
var sun;
var r1;
var r2;
var r3;
var r4;
var r5;
//planets
var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var moon;
var cameraPosition;
function init() {
    scene = new Scene();
    setupRenderer();
    setupCamera();
    axes = new AxisHelper(20);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //add sun
    sun = new gameObject(new SphereGeometry(2, 32, 32), new LambertMaterial({ color: 0xffff00 }), 0, 0, 0);
    scene.add(sun);
    //rotation game objects
    r1 = new Object3D();
    r2 = new Object3D();
    r3 = new Object3D();
    r4 = new Object3D();
    r5 = new Object3D();
    r1.position.set(0, 0, 0);
    r2.position.set(0, 0, 0);
    r3.position.set(0, 0, 0);
    r4.position.set(0, 0, 0);
    r5.position.set(0, 0, 0);
    sun.add(r1);
    sun.add(r2);
    sun.add(r3);
    sun.add(r4);
    sun.add(r5);
    planet1 = new gameObject(new SphereGeometry(1), new LambertMaterial({ color: 0xe79b61 }), -5, 0, 0);
    r1.add(planet1);
    console.log("added planet");
    planet2 = new gameObject(new SphereGeometry(1), new LambertMaterial({ color: 0x00cc00 }), -10, 0, 0);
    r2.add(planet2);
    planet3 = new gameObject(new SphereGeometry(1), new LambertMaterial({ color: 0xff0000 }), -13, 0, 0);
    r3.add(planet3);
    moon = new gameObject(new SphereGeometry(0.5), new LambertMaterial({ color: 0x808080 }), -1, 0, 1);
    planet3.add(moon);
    planet4 = new gameObject(new SphereGeometry(1), new LambertMaterial({ color: 0x0033cc }), -16, 0, 0);
    r4.add(planet4);
    planet5 = new gameObject(new SphereGeometry(1), new LambertMaterial({ color: 0x00ffcc }), -21, 0, 0);
    r5.add(planet5);
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(5.6, 23.1, 5.4);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(sun);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    document.addEventListener('onKeyDown', onKeyDown, false);
    gameLoop(); // render the scene	   
}
function onKeyDown(event) {
    switch (event.keyCode) {
        case 79:
            camera.lookAt(planet3.position);
            break;
        case 80:
            camera.lookAt(sun.position);
            break;
    }
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.update();
    //orbit of the planets
    r1.rotation.y += 0.07;
    r2.rotation.y += 0.06;
    r3.rotation.y += 0.05;
    r4.rotation.y += 0.03;
    r5.rotation.y += 0.01;
    //orbit of moon 
    planet3.rotation.y += 0.05;
    requestAnimationFrame(gameLoop);
    renderer.render(scene, camera);
}
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -20;
    camera.position.y = 25;
    camera.position.z = 20;
    camera.lookAt(new Vector3(5, 0, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map