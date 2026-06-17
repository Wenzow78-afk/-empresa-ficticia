const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

form.reset();

});
