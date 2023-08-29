console.log("JS está linkado!");

function verificarInputs() {

    let tutor = document.getElementById("tutor").value;
    let nomedopet = document.getElementById("nomedopet").value;
    let especie = document.getElementById("especie").value;
    let fotinha = document.getElementById("fotinha").value;
    let datadenascimento = document.getElementById("datadenacsimento").value;

    console.log(tutor);
    console.log(nomedopet);
    console.log(especie);
    console.log(fotinha);
    console.log(datadenascimento);

    if(tutor == "" || nomedopet == "" || especie == "" || fotinha == "" || datadenascimento == ""){
        console.log("Os dados estão vazios");
        return true;
    }else{
        console.log("Os dados não estão em branco");
        return false;
    }
}

function envieMsg(msg, tipo){
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";


     let msgParaTela = `
     <p class='${tipo}'>${msg}</p>
     `
     msgDiv.innerHTML += msgParaTela;

     setTimeout(function(){
        msgDiv.innerHTML = "";
     }, 3000);
}

class Pets {
    constructor(tutor, nomedopet, especie, fotinha, datadenascimento) {

        this.tutor = tutor;
        this.nomedopet = nomedopet;
        this.especie = especie;
        this.fotinha = fotinha;
        this.datadenascimento = datadenascimento;
        this.idade = this.getAge();
    }

     getAge(){
        let today = new Date();
        let birthdate = new Date(this.datadenascimento);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
        
    }
}

const petTeste = new Pets("Marcelo", "Toddy", "Cachorro", "do bubum", "1 mes");

console.log(petTeste);

function cadastrarPet() {
    let tutor = document.getElementById("tutor").value;
    let nomedopet = document.getElementById("nomedopet").value;
    let especie = document.getElementById("especie").value;
    let fotinha = document.getElementById("fotinha").value;
    let datadenascimento = document.getElementById("datadenacsimento").value;

    const pet = new Pets(tutor, nomedopet, especie, fotinha, datadenascimento);

    console.log(pet);

    bibliotecaPets.add(pet);

    renderizarConteudo();

}

class listadePets{
    constructor(){
        this.listadePetsArray = [];
    }

    add(parametro){
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        }else if(!isURLValida(parametro.fotinha)){
            envieMsg("URL inválida", "erro")
        }
         else {
            this.listadePetsArray.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.listadePetsArray);
        }
    }
}

const bibliotecaPets = new listadePets();

console.log(bibliotecaPets);

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}


function limparInputs() {
   document.getElementById("tutor").value = "";
    document.getElementById("nomedopet").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("fotinha").value = "";
    document.getElementById("datadenacsimento").value = "";
}

function renderizarConteudo() {
 
    let listaHTML = document.getElementById("listapets");
    listaHTML.innerHTML = '';


    let array = bibliotecaPets.listadePetsArray;

    console.log(array);

 
    array.forEach(pets => {
 
        const petDiv = `
          
            <div class="Petsclinic">
                <p>Tutor: ${pets.tutor}</p>
                <p>Nome do pet:${pets.nomedopet}</p>
                <p>Espécie: ${pets.especie}</p>
                <img src="${pets.fotinha}" alt="${pets.tutor}">
                <p>Data de Nascimento: ${pets.datadenascimento}</p>
                <p>Idade: ${pets.idade}</p>
            </div>
       `;

        listaHTML.innerHTML += petDiv;
    });
}


