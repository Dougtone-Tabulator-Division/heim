import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

// Initialize Three.js scene
const initThreeScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const container = document.getElementById('webgl-container');
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Create abstract geometric shape
  const geometry = new THREE.IcosahedronGeometry(5, 0);
  const material = new THREE.MeshPhongMaterial({
    color: 0xc0c0c0,
    wireframe: true,
    transparent: true,
    opacity: 0.7
  });

  const shape = new THREE.Mesh(geometry, material);
  scene.add(shape);

  // Add lights
  const light = new THREE.PointLight(0x808080, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 15;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
});