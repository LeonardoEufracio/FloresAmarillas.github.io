// ✨ MAGIA Y ENCANTAMIENTOS PARA EL JARDÍN DEL AMOR ✨

// Crear jardín mágico de flores animadas
function crearJardinMagico() {
    const jardin = document.getElementById('jardinMagico');
    const flores = ['🌼', '🌻', '🌹', '🌸', '🌺', '🌷', '💮', '🌻', '🌼'];
    const animaciones = ['flotar-magia', 'flotar-magia', 'flotar-magia'];
    
    // Crear 35 flores mágicas
    for (let i = 0; i < 35; i++) {
        const flor = document.createElement('div');
        flor.className = 'flor-flotante';
        flor.textContent = flores[Math.floor(Math.random() * flores.length)];
        flor.style.left = Math.random() * 100 + '%';
        flor.style.top = Math.random() * 100 + '%';
        flor.style.animation = `${animaciones[0]} ${5 + Math.random() * 5}s infinite ease-in-out`;
        flor.style.animationDelay = Math.random() * 6 + 's';
        flor.style.fontSize = (2.5 + Math.random() * 2.5) + 'rem';
        flor.style.opacity = 0.6 + Math.random() * 0.4;
        jardin.appendChild(flor);
    }
    
    // Crear corazones que laten y navegan
    for (let i = 0; i < 12; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-latido';
        corazon.textContent = Math.random() > 0.5 ? '💛' : '❤️';
        corazon.style.top = Math.random() * 100 + '%';
        corazon.style.animationDelay = Math.random() * 4 + 's';
        corazon.style.fontSize = (1.8 + Math.random() * 1.2) + 'rem';
        jardin.appendChild(corazon);
    }
}

// Efecto mágico al tocar una flor
function animarFlor(tarjeta) {
    const flor = tarjeta.querySelector('.emoji-flor');
    flor.style.animation = 'bailar-flor 0.6s ease';
    
    // Crear efecto de polvo de hadas
    crearPolvoDeHadas(tarjeta);
    
    // Efecto de sonido (opcional)
    hacerSonidoMagico();
    
    setTimeout(() => {
        flor.style.animation = 'bailar-flor 3s infinite ease-in-out';
    }, 600);
}

// Crear efecto de polvo de hadas (partículas)
function crearPolvoDeHadas(elemento) {
    const rect = elemento.getBoundingClientRect();
    const particulas = ['🌼', '🌻', '✨', '🌟', '💛', '⭐'];
    
    for (let i = 0; i < 18; i++) {
        setTimeout(() => {
            const particula = document.createElement('div');
            particula.textContent = particulas[Math.floor(Math.random() * particulas.length)];
            particula.style.position = 'fixed';
            particula.style.left = (rect.left + rect.width/2) + 'px';
            particula.style.top = (rect.top + rect.height/2) + 'px';
            particula.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
            particula.style.pointerEvents = 'none';
            particula.style.zIndex = '1000';
            particula.style.animation = `volar-magia ${1.5 + Math.random() * 1.5}s ease-out forwards`;
            
            document.body.appendChild(particula);
            setTimeout(() => particula.remove(), 3000);
        }, i * 80);
    }
}

// Mostrar sorpresa especial
function mostrarSorpresa() {
    const sorpresa = document.getElementById('sorpresa');
    sorpresa.style.display = 'block';
    
    // Lluvia de amor
    crearLluviaDeAmor();
    
    // Explosión de confeti
    crearExplosionConfeti();
    
    // Cambio mágico de título
    const tituloOriginal = document.title;
    document.title = '💖 TE AMO 💖';
    setTimeout(() => { document.title = tituloOriginal; }, 4000);
    
    // Efecto de vibración suave
    document.body.style.animation = 'vibrar-suave 0.3s ease';
    setTimeout(() => { document.body.style.animation = ''; }, 300);
}

// Crear lluvia de amor (corazones)
function crearLluviaDeAmor() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const corazon = document.createElement('div');
            corazon.textContent = '💛';
            corazon.style.position = 'fixed';
            corazon.style.left = Math.random() * 100 + 'vw';
            corazon.style.top = '-60px';
            corazon.style.fontSize = (2.5 + Math.random() * 3.5) + 'rem';
            corazon.style.animation = `lluvia-amor ${2.5 + Math.random() * 2}s linear forwards`;
            corazon.style.zIndex = '1000';
            corazon.style.opacity = 0.8 + Math.random() * 0.2;
            document.body.appendChild(corazon);
            setTimeout(() => corazon.remove(), 5000);
        }, i * 120);
    }
}

// Crear explosión de confeti
function crearExplosionConfeti() {
    const colores = ['#ffeb3b', '#ffd54f', '#fff176', '#ffecb3', '#ffd740'];
    
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-amor';
        confetti.style.background = colores[Math.floor(Math.random() * colores.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '0px';
        confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
        confetti.style.animationDelay = Math.random() * 1 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 6000);
    }
}

// Contador de visitas romántico
function actualizarContadorVisitas() {
    let visitas = localStorage.getItem('visitasAmor') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitasAmor', visitas);
    
    document.getElementById('contador-visitas').textContent = 
        `Este jardín ha sido visitado ${visitas} veces por mi amor`;
}

// Añadir estilos de animación dinámicos
function añadirEstilosMagicos() {
    const estilo = document.createElement('style');
    estilo.textContent = `
        @keyframes volar-magia {
            0% { 
                opacity: 1;
                transform: translate(0, 0) rotate(0deg) scale(1);
            }
            100% { 
                opacity: 0;
                transform: translate(
                    ${Math.random() * 300 - 150}px, 
                    ${Math.random() * 300 - 150}px
                ) rotate(${Math.random() * 720}deg) scale(0);
            }
        }
        
        @keyframes lluvia-amor {
            to { 
                transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }
        
        @keyframes vibrar-suave {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-3px); }
        }
        
        @keyframes aparecer-suave {
            from { 
                opacity: 0; 
                transform: translateY(40px) scale(0.95); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0) scale(1); 
            }
        }
    `;
    document.head.appendChild(estilo);
}

// Efecto de sonido mágico (opcional)
function hacerSonidoMagico() {
    // Puedes añadir sonidos después si quieres
    console.log('✨ Sonido mágico reproducido ✨');
}

// Inicializar la magia cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    crearJardinMagico();
    añadirEstilosMagicos();
    actualizarContadorVisitas();
    
    // Efecto de escritura progresiva opcional
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Asegurar que la página se vea bien desde el inicio
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease-in';

// ✨ INTERACTIVIDAD PARA IMÁGENES ✨

function configurarGaleria() {
    const imagenes = document.querySelectorAll('.imagen-romantica');
    
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            ampliarImagen(this);
        });
        
        // Efecto hover con JavaScript adicional
        imagen.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        imagen.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function ampliarImagen(imagen) {
    // Crear modal para ver imagen ampliada
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    const imgAmpliada = document.createElement('img');
    imgAmpliada.src = imagen.src;
    imgAmpliada.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border: 5px solid #ffeb3b;
        border-radius: 10px;
        animation: aparecerModal 0.5s ease-out;
    `;
    
    modal.appendChild(imgAmpliada);
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer clic
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Agregar esta función a la inicialización
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    configurarGaleria(); // ← Agregar esta línea
});