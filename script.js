// Selecionando elementos do DOM
const input = document.getElementById('input');
const numbers = document.querySelectorAll('.numbers div');
const operators = document.querySelectorAll('.operators div');
const result = document.getElementById('result');
const clear = document.getElementById('clear');

let currentNumber = '';
let previousNumber = '';
let operation = '';
let resultDisplayed = false;

// Adiciona evento de clique para os números
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        // Se um resultado está sendo exibido, limpa o input
        if (resultDisplayed) {
            input.innerHTML = '';
            resultDisplayed = false;
        }
        
        // Permite apenas um ponto decimal
        if (e.target.innerHTML === '.' && currentNumber.includes('.')) return;
        
        currentNumber += e.target.innerHTML;
        updateDisplay();
    });
});

// Adiciona evento de clique para os operadores
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        // Previne operador sem número
        if (currentNumber === '') return;
        
        resultDisplayed = false;
        
        let operatorSymbol = e.target.innerHTML;
        
        // Se já existe uma operação pendente, calcula primeiro
        if (previousNumber && currentNumber && operation) {
            calcular();
        } else {
            previousNumber = currentNumber;
            currentNumber = '';
        }
        
        operation = operatorSymbol;
        updateDisplay();
    });
});

// Função para atualizar o display
function updateDisplay() {
    if (previousNumber && operation) {
        input.innerHTML = `${previousNumber} ${operation} ${currentNumber}`;
    } else {
        input.innerHTML = currentNumber;
    }
}

// Função para calcular
function calcular() {
    if (!previousNumber || !currentNumber) return;
    
    let resultado;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    
    switch(operation) {
        case '+':
            resultado = prev + curr;
            break;
        case '-':
            resultado = prev - curr;
            break;
        case '×':
            resultado = prev * curr;
            break;
        case '÷':
            if (curr === 0) {
                alert('Não é possível dividir por zero!');
                clear.click();
                return;
            }
            resultado = prev / curr;
            break;
        default:
            return;
    }
    
    // Limita o resultado a 8 casas decimais para evitar números muito longos
    resultado = Number(resultado.toFixed(8));
    input.innerHTML = resultado;
    previousNumber = resultado.toString();
    currentNumber = '';
    operation = '';
    resultDisplayed = true;
}

// Adiciona evento de clique para o botão de igual
result.addEventListener('click', calcular);

// Adiciona evento de clique para o botão clear
clear.addEventListener('click', () => {
    input.innerHTML = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
    resultDisplayed = false;
});

// Adiciona suporte para entrada via teclado
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Números e ponto decimal
    if (/[\d.]/.test(key)) {
        const numberDiv = Array.from(numbers)
            .find(div => div.textContent === key);
        if (numberDiv) numberDiv.click();
    }
    
    // Operadores
    const operatorMap = {
        '+': '+',
        '-': '-',
        '*': '×',
        '/': '÷'
    };
    
    if (key in operatorMap) {
        const operatorDiv = Array.from(operators)
            .find(div => div.textContent === operatorMap[key]);
        if (operatorDiv) operatorDiv.click();
    }
    
    // Enter para calcular
    if (key === 'Enter') {
        result.click();
    }
    
    // Escape ou 'c' para limpar
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        clear.click();
    }
});