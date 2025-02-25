function logar(event){
    //impede o envio normal do formulario
    //força a chamada a passar pelo "modal"
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'Daniz.Dev' && senha == 'admin'){
        
        Swal.fire({
            title: 'Login feito com sucesso',
            text: 'Bem-Vindo, ' + usuario + '!!!',
            icon: 'success',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./html/home.html";
            }, 100);
        });
        
    }else{
        
    }

}
