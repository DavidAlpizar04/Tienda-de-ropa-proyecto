// Menú desplegable
const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    // Alterna la visibilidad del menú
    navMenu.classList.toggle('show');
    
    // Cambia el color del botón
    menuButton.classList.toggle('cambiar-color');
});

// Simular envío de mensaje de contacto
const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.classList.add('hidden');
        responseMessage.classList.remove('hidden');
    });
}

// Simular inicio de sesión
const loginForm = document.getElementById('login-form');
const loginResponse = document.getElementById('login-response');
const comentarioForm = document.getElementById('comentario-form');
const loginReminder = document.getElementById('login-reminder');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        loginResponse.classList.remove('hidden');
        if (comentarioForm && loginReminder) {
            comentarioForm.classList.remove('hidden');
            loginReminder.classList.add('hidden');
        }
    });
}

// Mostrar formulario de comentario si ha iniciado sesión
if (comentarioForm && loginReminder) {
    loginReminder.classList.remove('hidden');
    comentarioForm.classList.add('hidden');
}

// Simular carrito de compras
const productos = [
    { id: 1, nombre: 'Abrigo 1', precio: 25000 },
    { id: 2, nombre: 'Zapato 1', precio: 15000 },
    { id: 3, nombre: 'Camisa 1', precio: 12000 },
    { id: 4, nombre: 'Pantalón 1', precio: 18000 },
    { id: 5, nombre: 'Abrigo 2', precio: 27000 }
];

const carrito = [];
const carritoElement = document.getElementById('carrito');

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoElement.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        item.textContent = `${producto.nombre} - ₡${producto.precio}`;
        carritoElement.appendChild(item);
    });
}

// Comentarios (se requiere login)
const comentarioInput = document.getElementById('comentario-input');
const comentariosList = document.getElementById('comentarios-list');

if (comentarioInput && comentariosList) {
    document.getElementById('comentario-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const comentario = comentarioInput.value.trim();
        if (comentario) {
            const li = document.createElement('li');
            li.textContent = comentario;
            comentariosList.appendChild(li);
            comentarioInput.value = '';
        }
    });
}
