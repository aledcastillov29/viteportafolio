 // Mostrar un mensaje de bienvenida cuando se carga la página
        window.onload = function() {
            console.log('¡Bienvenido a mi portafolio!');
        };

        // Cambiar el color del botón cuando el mouse pasa sobre él
        var boton = document.querySelector('.boton-contacto');
        
        boton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        boton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });