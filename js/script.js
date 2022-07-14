// exige pelo menos 500 g de carne por pessoa.
// Já um churrasco mais familiar, em que serão servidos acompanhamentos,
// podemos considerar 400 g para os adultos e 200 g para as crianças.
// Ambos os cálculos são para eventos com duração de quatro a cinco horas.
//Para quem não bebe, 500 ml de refrigerante e 400 ml de água por pessoa é o suficiente.
// Já a quantidade recomendada de guarnições é de 200 g por convidado
//Se for servir, também, frango e linguiça,
//a porção ideal por pessoa para essas carnes cai pela metade (200 gramas)
//mas a regra geral é comprar um litro por convidado, no mínimo
// se a festa vai durar mais de 6 horas, calcule 2 litros de cerveja para cada um.

let inputMan = document.getElementById("man");
let inputWoman = document.getElementById("woman");
let inputChildren = document.getElementById("children");
let inputTimeCourse= document.getElementById("time");
let result = document.getElementById("result");

function calcular(){
    console.log("calculando...");

    let man = inputMan.value;
    let woman = inputWoman.value;
    let children = inputChildren.value;
    let timeCourse = inputTimeCourse.value;


    let totalMeat = (meatM(timeCourse) * man) + (meatW(timeCourse) * woman) + ((meatM(timeCourse) / 2) * children);

    let totalSideDishes = (sideDishes(timeCourse) * man) + (sideDishes(timeCourse) * woman) + ((sideDishes(timeCourse) / 2) * children);

    let totalBeer = (beer(timeCourse) * man) + (beer(timeCourse) * woman);

    let totalSoda = (soda(timeCourse) * man ) +(soda(timeCourse) * woman ) + ((soda(timeCourse) / 2) * children);

    let totalWater = (water(timeCourse) * man) + (water(timeCourse) * woman) + ((water(timeCourse) / 2) * children);

    result.innerHTML = `<p>${totalMeat/1000} Kg de Carne</p>`
    result.innerHTML += `<p>${totalSideDishes/1000} kg de acompanhamentos</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer/355)} Latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(totalSoda/2000)} pets 2Lt de Refrigerante</p>`
    result.innerHTML += `<p>${Math.ceil(totalWater/2000)} garrafas 2Lt de agua</p>`


}

function meatM(timeCourse){
    if (timeCourse > 5){
        return 650;
    }else {
        return 400;
    }
}
function meatW(timeCourse){
    if (timeCourse > 5){
        return 550;
    }else {
        return 300;
    }
}

function sideDishes(timeCourse){
    if (timeCourse > 5){
        return 300;
    }else {
        return 200;
    }
}

function beer(timeCourse){
    if (timeCourse > 5){
        return 2000;
    }else {
        return 1200;
    }
}

function soda(timeCourse){
    if (timeCourse > 5){

        return 1000;
    }else {
        return 500;
    }
}
function water(timeCourse){
    if (timeCourse > 5){

        return 800;
    }else {
        return 400;
    }
}


