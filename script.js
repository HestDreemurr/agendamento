document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  
  let nome = document.querySelector("input#nome").value
  let mensagem = `Meu nome é ${nome}. Essa é uma mensagem de teste.`
  let numero = "5573998513498"
  
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  
  window.open(url, "_blank")
})