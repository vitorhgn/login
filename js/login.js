   verificaSeOUsuarioEstaLogado();

   function fazerLogin (emailDigitadoNoFormulario, senhaDigitadaNoFormulario){
       var usuarioValido = listaDeFuncionarios.find(function(funcionario, posicaoNaLista){
               return funcionario.email == emailDigitadoNoFormulario && funcionario.password == senhaDigitadaNoFormulario
           })
           if(usuarioValido){
            salvarUsuario(usuarioValido);
            document.location = "listaDeUsuarios.html"
           }else{
               $('#form-login-alert-error').css('display', 'block');
               setTimeout(function(){
                $('#form-login-alert-error').css('display', 'none');
               },6000);
           }
   }          
   function salvarUsuario(usuario){
    var usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem('usuarioLogado', usuarioJSON)
   }
   function verificaSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if(usuarioLogado){
        document.location = "listaDeUsuarios.html"
    }
   }

   $(document).ready(function() {
       
       $("#form-login").submit(function(event) {
           event.preventDefault();
           
           var emailDigitado = $("#inputEmail").val();
           var senhaDigitada = $("#inputPassword").val();
           fazerLogin(emailDigitado, senhaDigitada)
       })
   })