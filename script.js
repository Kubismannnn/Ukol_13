// ******************************************************************************************
// Funkce otocSlovaPozpatku() otočí slova ve větě pozpátku
// Příklad použití: Console.log(otocSlovaPozpatku("Ahoj jak se máš")); // "joAh kaj es šám"
// ******************************************************************************************

function otocSlovaPozpatku(veta) {
    const slova = veta.split(" ");   // rozdělí větu na jednotlivá slova (do pole)
    //console.log(slova);              // testovací výpis pole slov
    const otocenaSlova = [];         // připravené prázdné pole pro uložení otočených slov

    while (slova.length > 0) {       // dokud je pole slov neprázdné
        const slovo = slova.shift(); // vezme a odrstraní z pole slovo 
                                     // (postupně od prvního až po poslední)

        let otoceneSlovo = slovo.split("").reverse().join("");     // algoritmus otočení slova   
        //console.log(otoceneSlovo);       // testovací výpis otočeného slova
        otocenaSlova.push(otoceneSlovo);    // přidá otočené slovo do pole otočených slov
    }   
    //console.log(otocenaSlova);       // testovací výpis otočených slov
    
    return otocenaSlova.join(" ");   // spojí otočená slova do jedné věty a tu funkce vrátí
}


// Příklad použití funkce
let puvodniVeta = "Ahoj jak se máš";
let novaVeta = otocSlovaPozpatku(puvodniVeta);
console.log(puvodniVeta); 
console.log(novaVeta); 