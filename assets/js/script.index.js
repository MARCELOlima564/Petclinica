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
        envieMsg("Preencha todos os campos", "erro");
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