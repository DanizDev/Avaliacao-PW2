function cadastrar(event){

    event.preventDefault();

    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario').value; 
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin1' && email == 'daniz.dev@hotmail.com'){

        Swal.fire({
            title: 'Cadastro realizado com sucesso!!!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
           setTimeout(() => {
            location.href = "./index.html";
           }, 100);
        });  
        
    }


}