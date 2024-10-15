document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const validUsername = 'sarah@123';
    const validPassword = '1234';
    
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === validUsername && password === validPassword) {
        Swal.fire({
          title: 'Login realizado com sucesso',
          text: "A seguir o dashboard!",
          icon: 'done',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok!',
          showConfirmButton: true 
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'dashboard.html'; 
          }
        });
      } else {
        document.getElementById('error-message').textContent = 'Invalido usuario ou password!';
      }
  });