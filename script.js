let text = document.querySelector("#vstup");
let vystup = document.querySelector("#vystup");
let policko = document.querySelector("#policko");

function otocVetu(vet){
    const slova = vet.split(" ");
    console.log(slova);
    const otocenaSlova = [];

    while(slova.length > 0){
        const slovo = slova.shift();
        const otoceneSlovo = slovo.split("").reverse().join("");
        otocenaSlova.push(otoceneSlovo);
    }
    console.log(otocenaSlova);
    if(policko.checked){
        return otocenaSlova.reverse().join(" ");
    } else{
        return otocenaSlova.join(" ");
    }
    

}

document.getElementById("tlac").onclick = function(){
    vystup.textContent = otocVetu(text.value);
}