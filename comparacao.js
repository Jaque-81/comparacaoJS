function compara(num1, num2) {
  if (!num1 || !num2) return 'Defina dois números!'
  
  compara()
  const iguais = criaFunIguais(num1, num2)
  const comparacaoInter = criaCompInter()
  return `${iguais} e ${comparacaoInter}`
}

function criaFunIguais(num1, num2) {
  let saoIguais = ''
  if (num1 !== num2) {
    saoIguais = 'não'
  }
  return `Os número ${num1} e ${num2} ${saoIguais} são iguais`
}

function criaCompInter(num1, num2) {
  const soma = num1 + num2
  let resultado10 = 'menor'
  let resultado20 = 'menor'

  const compara10 = soma > 10
  const compara20 = soma > 20

  if (compara10) {
    resultado10 = 'maior'
  }
  if (compara20) {
    resultado20 = 'maior'
  }
  return `sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(compara())
