function validar() {
            var nombre = document.getElementById('nombre').value.trim();
            var email = document.getElementById('email').value.trim();
            var mensaje = document.getElementById('mensaje').value.trim();
            var esValido = true;

            
            // Validar nombre
            if (nombre === '') {
                document.getElementById('errorNombre').textContent = 'Por favor, ingresa tu nombre.';
                esValido = false;
            }

            // Validar correo electrónico
            if (email === '') {
                document.getElementById('errorEmail').textContent = 'Por favor, ingresa tu correo electrónico.';
                esValido = false;
            } else if (!validarEmail(email)) {
                document.getElementById('errorEmail').textContent = 'Por favor, ingresa un correo electrónico válido.';
                esValido = false;
            }

            // Validar mensaje
            if (mensaje === '') {
                document.getElementById('errorMensaje').textContent = 'Por favor, ingresa un mensaje.';
                esValido = false;
            }

            return esValido;
        }

        function validarEmail(email) {
            // Expresión regular para validar el formato del email
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }
