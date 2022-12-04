function buttomsave() {
  //Variaveis
  var bio = document.getElementById("bio");
  var nome = document.getElementById("nome");
  var idade = document.getElementById("idade");
  var curso = document.getElementById("curso");
  //SALVA ITEM
  sessionStorage.setItem("bio", bio.value);
  sessionStorage.setItem("nome", nome.value);
  sessionStorage.setItem("idade", idade.value);
  sessionStorage.setItem("curso", curso.value);
  //MUDA NA PAGINA
  document.getElementById("bioResult").innerHTML = sessionStorage.getItem("bio");
  document.getElementById("nomeResult").innerHTML = sessionStorage.getItem("nome");
  document.getElementById("idadeResult").innerHTML = sessionStorage.getItem("idade");
  document.getElementById("cursoResult").innerHTML = sessionStorage.getItem("curso");
  //MANTEM NO FORMS
}
//DEIXA REGISTRADO OQ FOI SALVO NA PAGINA
function onloadsave() {
  //SALVAR NA BIO
  document.getElementById("bioResult").innerHTML = sessionStorage.getItem("bio");
  document.getElementById("nomeResult").innerHTML = sessionStorage.getItem("nome");
  document.getElementById("idadeResult").innerHTML = sessionStorage.getItem("idade");
  document.getElementById("cursoResult").innerHTML = sessionStorage.getItem("curso");
  //SALVAR NO FORMS
  document.getElementById("bio").value = sessionStorage.getItem("bio");
  document.getElementById("nome").value = sessionStorage.getItem("nome");
  document.getElementById("idade").value = sessionStorage.getItem("idade");
  document.getElementById("curso").value = sessionStorage.getItem("curso");
}


