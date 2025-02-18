document.addEventListener('DOMContentLoaded', function() {
            const existingButton = document.getElementById('existing');
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                existingButton.style.display = 'block';
            }

            existingButton.addEventListener('click', function() {
                alert(`Logged in as ${savedUsername}`);
            });

            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const rememberMe = document.getElementById('checkbox').checked;

                if (!username) {
                    document.getElementById('usernameError').textContent = 'Username is required.';
                } else {
                    document.getElementById('usernameError').textContent = '';
                }

                if (!password) {
                    document.getElementById('passwordError').textContent = 'Password is required.';
                } else {
                    document.getElementById('passwordError').textContent = '';
                }

                if (username && password) {
                    alert(`Logged in as ${username}`);
                    if (rememberMe) {
                        localStorage.setItem('username', username);
                        localStorage.setItem('password', password);
                    } else {
                        localStorage.removeItem('username');
                        localStorage.removeItem('password');
                    }
                }
            });
        });