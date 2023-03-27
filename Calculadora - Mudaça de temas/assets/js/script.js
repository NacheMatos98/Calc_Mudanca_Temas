const setTheme = (theme) => (document.documentElement.className = theme);

function inserir(num) {
    let valorCampo = document.getElementById('total').innerText;
    //pega valor existente no campo 

    if ((valorCampo === "" || valorCampo === "-") && (num === "/" || num === "*" || num === "+" || num === ".")){
           num = '';
           console.log("condição feita")
    }//Se o valor do campo for inexistente, ele troca os outros operadores x, + e / por vazio
    //ou seja não deixa colocar varios operadores seguidos

    if (num === "-" || num === "+" || num === "*" || num === "/" || num === ".") {
        if (valorCampo.substr(-1) === '-' || valorCampo.substr(-1) === '+' || valorCampo.substr(-1) === '*' || valorCampo.substr(-1) === '/' || valorCampo.substr(-1) === '.') {
            backspace()
        }
    }
    document.getElementById('total').innerHTML += num;
}

function limparTudo() {
    document.getElementById('total').innerHTML = "";
}

function backspace() {
    let campo = document.getElementById('total').innerHTML;
    document.getElementById('total').innerHTML = campo.substring(0, campo.length-1);
}

function calcular(){
    let txtExist = document.getElementById('total').innerText;

    if(txtExist === ""){
        document.getElementById('total').innerHTML = "Digite operação!";
    }else{
        document.getElementById('total').innerHTML = eval(txtExist);
    }
}