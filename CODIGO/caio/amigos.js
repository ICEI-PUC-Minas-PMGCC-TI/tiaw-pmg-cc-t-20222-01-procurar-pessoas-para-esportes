var added = 1;
function adicionar() {
  var btn = document.getElementById("teste");
  console.log(added);
  if (added == 1) {
    btn.textContent = "Adicionado";
    btn.style.backgroundColor = "gray";
    btn.style.borderColor = "rgb(128, 128, 128)";
    added--;
    console.log(added);
  } else if (added == 0) {
    btn.textContent = "Adicionar";
    btn.style.backgroundColor = "rgb(0, 105, 217)";
    btn.style.borderColor = "rgb(0, 105, 217)";
    added++;
    console.log(added);
  }
} ``