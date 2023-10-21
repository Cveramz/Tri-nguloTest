
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un triángulo
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0,  1, 0,  // Vértice superior
   -1, -1, 0,  // Vértice inferior izquierdo
    1, -1, 0   // Vértice inferior derecho
]);
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

// Configuración de la cámara
camera.position.z = 5;

// Función para animar el triángulo
function animate() {
    requestAnimationFrame(animate);

    // Rotar el triángulo
    triangle.rotation.x += 0.01;
    triangle.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
