   function preencherListaDeUsuario (){
    var table = $('#users-table');
    listaDeFuncionarios.map(function(users, indexArray){
        table.find("tbody").append(`
        <tr>
            <td>${users.email}</td>
            <td>${users.name}</td>
            <td><a href="detalharUsuario.html?email=${users.email}">Visualizar</a></td>
        </tr> 
        `)
    })
   }
$(document).ready(function(){
preencherListaDeUsuario();
})