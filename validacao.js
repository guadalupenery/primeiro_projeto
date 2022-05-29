//if ternario variavel recebe a condição seguida de "?" condição de verdadeiro ":" condição de falso
let dia = "sabado";

let resultado = dia =="domingo"? "Vou a praia": "Fico em casa"

console.log(resultado)


//swicth e case (valor, dois pontos, codigo, break (para o código nesta condição), default (caso nenhuma condição seja atendida))
switch (dia) {
    case "segunda":
         console.log("vou tomar café");
         break;
    case "terça" :
        console.log("vou ao cinema");
        break;
    case "domingo":
        console.log("vou a igreja");
        break;     
    default:
        console.log("ficar de boa")
}