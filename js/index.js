var agenda = []
var buton = document.getElementById("Cadastrar")
var butonlistar = document.getElementById("lista")
buton.addEventListener('click', (e) => {
    var pet = {
        nome: document.getElementById("name").value,
        porte: document.getElementById("porte").value,
        tipo: document.getElementById("tipe").value,
        sexo: document.getElementById("sexo").value,
        raca: document.getElementById("raca").value,
        colhos: document.getElementById("olhos").value,
        pc: document.getElementById("cor").value,
        datan: document.getElementById("dn").value,
        peso: document.getElementById("peso").value,
        endereco: document.getElementById("endeco").value
    }
    agenda.push(pet)

})
butonlistar.addEventListener('click', (e) => {
    var resultado = document.getElementById("lista-1");


    agenda.forEach((item) => {
        var value = document.createElement("li")
        value.innerHTML = "<div class='card'> Nome: " + item.nome + "  Porte: " + item.porte + " Tipo: " + item.tipo + " Sexo:" + item.sexo + "Raça" + item.raca + " Cor dos Olhos:" + item.colhos + "Cor do pelo:" + item.pc +
            "Data de Nascimento:" + item.datan + "Peso:" + item.peso + "Endereço:" + item.endereco + "</div>";
        resultado.appendChild(value)
    })


})


