//validação formulário faleConosco
function valida_envia() {


    //validar nome
    if (cliente.nome.value.length == 0) {
        alert("Preencha seu Nome.")
        cliente.nome.focus()
        return false;
    }
    //validar tel
    if (cliente.email.value.length == 0) {
        alert("Preencha seu E-mail.")
        cliente.email.focus()
        return false;
    }
    if (cliente.telefone.value.length == 0) {
        alert("Preencha seu Telefone.")
        cliente.telefone.focus()
        return false;
    }

    cliente.submit();
}