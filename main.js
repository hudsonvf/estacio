
//////////////////////////  MENU  ////////////////////////////////////////////////////////////////////////////////

const authorSearch = document.getElementById('authorSearch');
authorSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let authors = document.querySelectorAll('h5');
    authors.forEach(author => {
        if (author.textContent.toLowerCase().includes(currentValue)) {
            author.parentNode.parentNode.style.display = 'flex';
        } else {
            author.parentNode.parentNode.style.display = 'none';
        }
    })
});

//////////////////////////  CADASTRO  /////////////////////////////////////////////////////////////////////

function sendEmail() {
    Email.send({
        SecureToken: "306d7c22-6db2-4942-b7c9-0b0eff5d4f6d",
        To: "hudsonvsf@gmail.com",
        From: "hudsonvdsf@gmail.com",
        Subject: "Msg do site",
        Body:
            "Nome: " +
            document.getElementById("cadastroNome").value +
            "<br/> Email: " +
            document.getElementById("cadastroEmail").value +
            "<br/> Cep: " +
            document.getElementById("cadastroCep").value +
            "<br/> Estado: " +
            document.getElementById("inputGroupSelect01").value +
            "<br/> Cidade: " +
            document.getElementById("cadastroCidade").value +
            "<br/> Endereço: " +
            document.getElementById("cadastroEndereco").value +
            "<br/> Complemento: " +
            document.getElementById("cadastroComplemento").value,
    }).then(
        message => {
            if (message == "OK") {
                swal("Mensagem enviada com sucesso!", "success");
            } else {
                swal("A mensagem não foi enviada, tente novamente...", "error");

            }
        }
    );
}
