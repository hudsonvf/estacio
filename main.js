
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

function emailSend() {

    let userName = document.getElementById('cadastroNome').value;
    let userEmail = document.getElementById('cadastroEmail').value;
    let userCep = document.getElementById('cadastroCep').value;
    let userEndereco = document.getElementById('cadastroEndereco').value;
    let userComplemento = document.getElementById('cadastroComplemento').value;
    let userCidade = document.getElementById('cadastroCidade').value;

    let mensagemCompleta = "Nome " + userName + "<br/> Email " +
        userEmail + "<br/> Cep: " + userCep + "<br/> Cidade: " + userCidade +
        "<br/> Endereço: " + userEndereco + "<br/> Complemento: " + userComplemento;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hudsonvsf@gmail.com",
        Password: "5C7461CFC2C28324B1C7CF6569A6E3C823D6",
        To: "hudsonvdsf@gmail.com",
        From: "hudsonvdsf@gmail.com",
        Subject: "Contato do site de receita Fritadas",
        Body: mensagemCompleta
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


