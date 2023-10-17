// Solicitar ao usuário que insira seu nome
var nomeUsuario = prompt("Digite seu nome:");

// Verificar se o usuário forneceu um nome
if (nomeUsuario !== null) {

    // Exibir uma mensagem de saudação no console
    console.log("Olá,"+nomeUsuario+"! Seja bem-vindo (a).");
    
} else {
    // Exibe uma mensagem se o usuário não fornecer um nome
    console.log("Você não forneceu um nome. Olá, visitante!");
}

// Número armazenado em uma variável
var numeroArmazenado = 10;

// Solicita ao usuário que insira um número
var numeroUsuario = prompt("Digite um número:");

// Verifica se o usuário forneceu um número
if (numeroUsuario !== null) {

    // Parseia o número do usuário para garantir que seja um valor numérico
    var numeroParseado = parseFloat(numeroUsuario);

    // Verifica se o parse foi bem-sucedido
    if (!isNaN(numeroParseado)) {
        // Realiza a soma com o número armazenado
        var resultado = numeroParseado + numeroArmazenado;

        // Exibe o resultado no console
        console.log("Resultado da soma: " + resultado);
    } else {
        // Exibe uma mensagem se o usuário não fornecer um número válido
        console.log("Você não forneceu um número válido.");
    }
} else {
    // Exibe uma mensagem se o usuário não fornecer um número
    console.log("Você não forneceu um número.");
}


// Solicita ao usuário que insira dois textos
var texto1 = prompt("Digite o primeiro texto:");
var texto2 = prompt("Digite o segundo texto:");

// Verifica se ambos os textos foram fornecidos
if (texto1 !== null && texto2 !== null) {
    // Concatena os textos
    var  resultadoConcatenacao= texto1+texto2 ;

    // Exibe o resultado da concatenação por meio de um alert
    alert ( "Resultado da concatenação:"+resultadoConcatenacao ) ;  
} else {
    // Exibe uma mensagem se o usuário não fornecer ambos os textos
    alert("Por favor, forneça dois textos.");
}