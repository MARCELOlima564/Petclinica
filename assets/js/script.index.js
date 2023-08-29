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

    bibliotecaPets.add(pet)

}

class listadePets{
    constructor(){
        this.listadePetsArray = [];
    }

    add(parametro){
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        } else {
            this.listadePetsArray.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.listadePetsArray);
        }
    }
}

const bibliotecaPets = new listadePets();

console.log(bibliotecaPets);


function limparInputs() {
    console.log("Usei a funcao de limparInputs");


    document.getElementById("tutor").value = "";
    document.getElementById("nomedopet").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("fotinha").value = "";
    document.getElementById("datadenascimento").value = "";
}

