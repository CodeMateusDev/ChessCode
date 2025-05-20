function entrar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.CARGO = json.cargo;
                
                document.getElementById('aviso2').style.display = 'flex'

                setTimeout(() => {
                    window.location = "index.html";
                }, "2000");
            });


        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                document.getElementById('aviso1').style.display = 'flex'
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function mostrarSenha() {
    var senha = document.getElementById('input_senha')
    var icone = document.getElementById('img_olho')

    if (senha.type == 'password') {
        senha.type = 'text';
        icone.src = 'assets/img/aberto-icon.svg'
    } else {
        senha.type = 'password';
        icone.src = 'assets/img/fechado-icon.svg'
    }
}
