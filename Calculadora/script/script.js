// NOTE: 
// This is the final source code file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

const lculateulate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
