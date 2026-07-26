// Cambiar los cuatro div a negro

const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

azul.addEventListener("click", function () {
    azul.style.backgroundColor = "black";
});

rojo.addEventListener("click", function () {
    rojo.style.backgroundColor = "black";
});

verde.addEventListener("click", function () {
    verde.style.backgroundColor = "black";
});

amarillo.addEventListener("click", function () {
    amarillo.style.backgroundColor = "black";
});


// Variable global

let color = "";


const key = document.getElementById("key");

document.addEventListener("keydown", function(event){

    if(event.key === "a"){
        color = "pink";
        key.style.backgroundColor = color;
    }

    else if(event.key === "s"){
        color = "orange";
        key.style.backgroundColor = color;
    }

    else if(event.key === "d"){
        color = "skyblue";
        key.style.backgroundColor = color;
    }

    else if(event.key === "q"){
        crearDiv("purple");
    }

    else if(event.key === "w"){
        crearDiv("gray");
    }

    else if(event.key === "e"){
        crearDiv("brown");
    }

});


function crearDiv(color){

    const nuevoDiv = document.createElement("div");

    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.marginTop = "10px";

    document.body.appendChild(nuevoDiv);

}