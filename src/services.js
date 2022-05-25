
export function Primaria(cor){
    if(cor == "azul" ||cor == "vermelho" ||cor == "amarelo"){
        return true
    }
    else {
        return false
    }

}
export function Cinema (filme, dia, pessoas){
    let i = 0;
    if (filme == 'nacional' && dia == 'quarta'){
        i = 2.50;
    }
    else if (filme == 'nacional'){
        i = 5;
    }
    else if (dia == 'quarta' && filme == 'internacional'){
        i = 14.25;
    }
    else if (filme == 'internacional'){
        i = 28.50;
    }

    let x = i * pessoas;
    return x;
}

export function Freq (texto, caracter){    

    let a = 0;

    for(let i = 0; i < texto.length; i++){
        if (texto.charAt(i) == caracter) {
            a++
        }
    }

    return a;
}

export function Maior (n){
    let x= 0;
    for(let item of n){

        if ( x < item){
            x = item; 
        } 
    }
    return x;
}

export function Tabuada (n){
    let x = []
    let e = 0;
    for (let i = 1; i <= 10; i++){
        x[e] = i * 5
        e++ 
    }
    return x

}

export function Febre(g){
    let x = false
    if (g >= 38){
        x = true 
    }
    return x
}
//test push
export function Dobro (n){
    return n * 2
}
export function Soma (n1, n2){
    return n1 + n2
}

export function Media(n1,n2,n3){
    let x = n1 + n2 + n3

    return x/3  
} 