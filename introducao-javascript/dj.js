var txt= document.querySelector(".titulo");
txt.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso= tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc");

var pesovalido= true
var alturavalida= true

if (peso<=0 || peso >=400 ){
    console.log("Peso inválido")
    pesovalido= false
    tdImc.textContent= "Peso inválido"
}
if (altura<=0 || altura>=3.00){
    console.log("altura inválida")
    alturavalida=false
    tdImc.textContent= "Altura inválida"
}
if (alturavalida && pesovalido){
    var imc= peso / (altura * altura)
    tdImc.textContent = imc
}
