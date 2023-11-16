/*
  Desafios desta aula!
  Que tal enfrentar alguns desafios adicionais? Experimente:

    - Adicionar um limite de tentativas para que a pessoa possa adivinhar o número e, ao final, exiba a resposta correta;
    - Quando a pessoa errar, forneça uma dica informando se o número chutado é maior ou menor que o número secreto;
    - Deixar o número entre 1 e 1000 ao invés de 0 e 1000
    - Aprofunde-se e aprenda a diferença entre os operadores == e ===.
*/




let max = 1000
let min = 1

let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min
let userName = prompt("Olá, qual é o seu nome?")
let guess
let guessAmount = 0
while (guess != secretNumber) {
  guess = prompt(`${userName}, digite um número entre 1 e 1000!`)
  guessAmount++
    if (guess == secretNumber) {
      alert(`Parabéns ${userName}, você acertou em ${guessAmount} tentativas!!!`)
  } else if (guessAmount === 15) {
      alert(`Infelizmente você só tinha apenas 15 tentativas ${userName}, tente novamente mais tarde :)`)
    break;
  } else if (guess >= 1001) {
      alert(`O número deve estar entre 1 e 1000!!`)  
  } else if (guess <= 0) {
      alert(`O número deve estar entre 1 e 1000!!`)  
  } else if (guess > secretNumber) {
      alert(`Você errou, o número secreto é MENOR do que ${guess}!`)
  } else if (guess < secretNumber) {
      alert(`Você errou, o número secreto é MAIOR do que ${guess}!`)
  }
}
