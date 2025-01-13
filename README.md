# Projeto de Calculadora 🧮

## Descrição do Projeto
Este projeto é uma **calculadora web** simples, desenvolvida utilizando HTML, CSS e JavaScript. A calculadora possui uma interface amigável e é responsiva, permitindo que os usuários realizem operações matemáticas básicas como adição, subtração, multiplicação e divisão. 🌐

## Tecnologias Utilizadas
- **HTML**: Estrutura da página.
- **CSS**: Estilização e design responsivo. 🎨
- **JavaScript**: Lógica da calculadora e interatividade. ⚙️

## Funcionalidades
- **Operações Básicas**: Suporta adição ➕, subtração ➖, multiplicação ✖️ e divisão ➗.
- **Interface Responsiva**: Adapta-se a diferentes tamanhos de tela 📱💻.
- **Tema Claro e Escuro**: Alterna entre temas claro ☀️ e escuro 🌙 com base nas preferências do usuário.
- **Acessibilidade**: Navegação por teclado e suporte a leitores de tela.

## Estrutura do Projeto
```
/calculadora
│
├── index.html         # Arquivo principal HTML
├── style.css          # Estilos da calculadora
└── script.js          # Lógica da calculadora
```

## Instruções de Uso
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/BrianMunizSilveira/calculadora.git
   ```
2. **Abra o arquivo `index.html` em um navegador** para visualizar a calculadora. 🌍
3. Utilize os botões ou o teclado para inserir números e operadores.

## Estilo CSS
O estilo da calculadora é definido no arquivo `style.css`, onde são utilizados **CSS Variables** para facilitar a personalização do tema. O código CSS inclui definições para os botões, input e layout geral.

### Exemplo de Estilo
```css
.calculator {
    background-color: var(--calculator-bg);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 20px var(--shadow-color);
}
```

## Lógica JavaScript
A lógica da calculadora está implementada no arquivo `script.js`, que manipula eventos de clique nos botões e realiza cálculos com base nas entradas do usuário.

### Exemplo de Função de Cálculo
```javascript
function calcular() {
    if (!previousNumber || !currentNumber) return;
    
    let resultado;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    
    switch(operation) {
        case '+':
            resultado = prev + curr;
            break;
        // Outras operações...
    }
    
    input.innerHTML = resultado;
}
```

## Contribuição 🤝
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença 📄
Este projeto está licenciado sob a [MIT License](LICENSE).