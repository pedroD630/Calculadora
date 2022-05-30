//incompleto
//document.querySelector: Retorna o primeiro elemento dentro do documento que corresponde a class especificado.
const calculadora = document.querySelector('.calculadora');

const teclas = document.querySelector('.calculadora-teclas');

teclas.addEventListener('click', e => {
    if (e.target.matches('button')){
        const tecla = e.target;
        const action = key.dataset.action;

        if (!action) {
            console.log('tecla de numero');
        }
        if (
            action === 'add' || 
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('tecla de operador')
        }
    }
})
