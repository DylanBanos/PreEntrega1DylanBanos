alert("Bienvenido a Colorferr");
let carro = 0
let amoladora = 60000;
let taladro = 300000;
let pala = 55000;
let pico = 50000;
let rodillo = 7000;
let latex = 80000;
let fijador = 8000;
let hormigonera = 500000;

let compra = prompt("¿Desea ver y comprar nuestros artículos? si/no");

while (compra === "si"){
    let amoladoraPrompt = prompt("Amoladora $60.000 si/no");
    if(amoladoraPrompt === "si"){
        carro += amoladora;
        console.log(carro);
    }else{
        carro +=0
    }
    let taladroPrompt = prompt("Taladro a batería $300.000 si/no");
    if(taladroPrompt === "si"){
        carro += taladro;
        console.log(carro);
    }else{
        carro +=0
    }
    let palaPrompt = prompt("Pala $55.000 si/no");
    if(palaPrompt === "si"){
        carro += pala;
        console.log(carro);
    }else{
        carro+=0;
    }
    let picoPrompt = prompt("Pico $50.000 si/no");
    if(picoPrompt === "si"){    
        carro += pico;
        console.log(carro);
    }else{
        carro+=0;
    }
    let rodilloPrompt = prompt("Rodillo $7000 si/no");
    if(rodilloPrompt === "si"){
        carro += rodillo;
        console.log(carro);
    }else {
        carro += 0;
    }
    let latexPrompt = prompt("Látex x20lts $80.000 si/no");
    if(latexPrompt === "si"){
        carro += latex;
        console.log(carro);
    }else{
        carro += 0
    }
    let fijadorPrompt = prompt("Fijador x4lts $8000 si/no");
    if(fijadorPrompt === "si"){
        carro += fijador;
        console.log(carro);
    }else{
        carro += 0;
    }
    let hormigoneraPrompt = prompt("Hormigonera $500.000 si/no");
    if(hormigoneraPrompt === "si"){
        carro += hormigonera;
        console.log(carro);
    }else{
        carro += 0;
    }
    compra = prompt("¿Desea seguir comprando? si/no");
    alert("El monto total es $" + carro);
    alert("¡Gracias por su compra!");
}

alert("¡Hasta luego!");