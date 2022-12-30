function mostraEmailUsuarioLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado')
    var usuarioLogadoObject = JSON.parse(usuarioLogado)
    $("#userLogged").html(usuarioLogadoObject.email)
    
}
function logout (){
    localStorage.removeItem('usuarioLogado')
    document.location = 'login.html'
}
function verificaSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if(!usuarioLogado){
        document.location = 'login.html'
    }
   }

verificaSeOUsuarioEstaLogado()
$(document).ready(function(){
    mostraEmailUsuarioLogado();
    $('#logout').click (function(){
        logout();
    });
})
