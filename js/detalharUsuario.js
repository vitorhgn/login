function mostraDadosDoUsuario (){

    var searchParams = new URLSearchParams(window.location.search);
    var emailDoUsuario = searchParams.get('email')
    var usuarioEncontrado = listaDeFuncionarios.find(function(usuario, indiceNoArray){
        return usuario.email == emailDoUsuario
    })
    if(usuarioEncontrado){
        $("#nome").html(usuarioEncontrado.name);
        $("#email").html(usuarioEncontrado.email);
        $("#telefone").html(usuarioEncontrado.phone_number);
        $("#cargo").html(usuarioEncontrado.role);
        $("#estadoCivil").html(usuarioEncontrado.estadoCivil);
    }else{
        alert('Usuario não encontrado, por favor tente novamente')
        document.location = 'listaDeUsuarios.html'
    }
}

$(document).ready(function(){
    mostraDadosDoUsuario()
})