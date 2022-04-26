
$(document).ready(function(){
    $("#formPrincipal").validate({
        rules:{
            nombrecompleto:{
                required: true,
                minlength: 6,
            },
            email:{
                required: true,
                email:true,

            },
            confirmarEmail:{
                required: true,
                email: true,
                equalTo: "#email"
            }
        },
        messages:{
            nombrecompleto:{
                required: "por favor ingrese un nombre",
                minlength: "minimo 6 caracteres"
            },
            email:{
                required: "se requiere email",
                email: "no es un email valido"
            },
            confirmarEmail:{
                required: "no ingreso ningun email",
                equalTo: "no coincide email"
            }
        },
        errorElement: "em"
    });

$("#buttonBuscar").click(function (e) { 
    alert($("#buscar").val())
    
});
});

$.validator.setDefaults({
    submitHandler: function(){
        alert("exitoso")
        console.log("anda")
    }
})