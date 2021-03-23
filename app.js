
function devuelveNumero(){
    let numero = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let positionNumero = (Math.floor(Math.random() * numero.length + 0));

    if(numero[positionNumero]=='10'){   // condicion para mejorar la posicion del numero 10
        document.getElementById("numero").style.left = "32%";
    }

    document.getElementById("numero").innerHTML = numero[positionNumero];
}

function devuelvePinta(){
    let pinta = ['♦','♥','♠','♣'];
    let positionPinta = (Math.floor(Math.random() * pinta.length + 0));

    if(pinta[positionPinta]=='♦' || pinta[positionPinta]=='♥'){   //Condicion para escoger el color de la pinta
        document.getElementById("arriba").style.color = "red";
        document.getElementById("abajo").style.color = "red";
    } else{
        document.getElementById("arriba").style.color = "black";
        document.getElementById("abajo").style.color = "black";
    }
    document.getElementById("arriba").innerHTML = pinta[positionPinta];
    document.getElementById("abajo").innerHTML = pinta[positionPinta];
}
console.log(devuelveNumero());
console.log(devuelvePinta());

    document.getElementById("card").innerHTML = devuelvePinta();
    document.getElementById("card").innerHTML = devuelveNumero();