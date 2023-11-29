function calcularSomatorio() {
    const numeroInput = parseInt(document.getElementById('numeroInput').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(numeroInput) || numeroInput < 0) {
        resultadoElemento.textContent = 'Por favor, insira um número válido e positivo.';
        return;
    }

    const resultado = somaDivisores(numeroInput);
    resultadoElemento.innerHTML = `O somatório dos valores divisíveis por 3 ou 5, inferiores a ${numeroInput}, é:  <strong>${resultado}</strong>.`;
    document.getElementById('numeroInput').value = ''
}

function somaDivisores(numero) {
    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}
