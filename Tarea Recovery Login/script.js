
$(document).ready(function(){
    $("#recoveryForm").submit(function(event){
        event.preventDefault();
        var email = $("#email").val();
        $.ajax({
            url: 'https://paginas-web-cr.com/Api/apis/SendPassword.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ "email": email }),
            success: function(response) {
                $("#message").html('<div class="alert alert-success">Si las credenciales son válidas, la clave llegará al correo registrado.</div>');
            },
            error: function() {
                $("#message").html('<div class="alert alert-danger">No existe, por favor verifica tu correo electrónico.</div>');
            }
        });
    });
});
