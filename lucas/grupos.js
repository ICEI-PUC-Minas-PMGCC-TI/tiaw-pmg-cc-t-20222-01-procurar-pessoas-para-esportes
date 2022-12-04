
function lerDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};
  if (strDados){
    objDados = JSON.parse (strDados);
  }
  else{
    objDados = { grupos: [
       {
        id: 1,
        nome: "Vitor",
        nomegp: "Basquete de Terça",
        esportes: "basq",
        descricao: "Basquete nosso de cada dia",
        privar: "off",
       },

        {
          id: 2,
          nome: "Vitor",
          nomegp: "Volei direito",
          esportes: "volei",
          descricao: "volei toda segunda a noite",
          privar: "on",

        }
      ]
    }
  }
  return(objDados);
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados))


}
function incluirGrupo() {
 // ler os dados de local storage
 let objDados = lerDados();
 // incluir grupo
 let strnome = document.getElementById('nome').value
 let novoGrupo = {
      nome: strnome,
 }
  
 objDados.grupos.push(novoGrupo)
 //
 salvaDados (objDados);
 imprimeDados();
}

function imprimeDados (){
  let tela = document.getElementById('tela');
  let strhtml = '';
  let objDados = lerDados();

  for (let i = 0; i < objDados.grupos.length; i++) {
    strhtml = strhtml + `<p> ${objDados.contatos[i].nome}</p>`
    
  }
  tela.innerHTML = strhtml;
}

//configura os botoes

//document.getElementById('criar').addEventListener('click', imprimeDados)

/*

window.onload = () => {
  nome.onchange = () => console.log('nome: ', nome.value);
  nomegp.onchange = () => console.log('nome do grupo: ', nomegp.value);
  description.onchange = () =>  console.log('descrição: ', description.value);
  esportes.onchange = () => console.log('esporte:',esportes.value)
  privar.onchange = () => console.log('privar', privar.value)
  
  nome.oninput = () => {
    let caracteresInvalidos = '!@#$%&*()_-=+[]{}/';
    let ultimoCaracter = nome.value.charAt(nome.value.length - 1)
    console.log('Ultimo caracter', ultimoCaracter);
    if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
    nome.value = nome.value.substr(0,nome.value.length - 1);
    }
  }
  
  nome.onblur = () => {
    if (nome.value.length == 0){
    instrucoes.innerHTML = '*';
    instrucoes.style.color = '#f00';
    nome.style.border = 'thin red solid';
    
    }
    else instrucoes.innerHTML = '';
    
  }

  nomegp.onblur = () => {
    if (nomegp.value.length == 0){
    instrucoesgp.innerHTML = '*';
    instrucoesgp.style.color = '#f00';
    nomegp.style.border = 'thin red solid';
    }
    else instrucoesgp.innerHTML = '';
  }

 

  let grupo;

  grupo = localStorage.setItem({nome: nome.value, nomegp: nomegp.value,
     esportes: esportes.value,descricao: descricao.value,privar:privar.value })
    JSON.stringify(grupo)
 
  
  

  
  window.onload = () => {
    nome.onchange = () => console.log('nome: ', nome.value);
    nomegp.onchange = () => console.log('nome do grupo: ', nomegp.value);
    description.onchange = () =>  console.log('descrição: ', description.value);
    esportes.onchange = () => console.log('esporte:',esportes.value)
    privar.onchange = () => console.log('privar', privar.value)
    nome.oninput = () => {
      let caracteresInvalidos = '!@#$%&*()_-=+[]{}/';
      let ultimoCaracter = nome.value.charAt(nome.value.length - 1)
      console.log('Ultimo caracter', ultimoCaracter);
      if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
      nome.value = nome.value.substr(0,nome.value.length - 1);
      }
    }
    nome.onblur = () => {
      if (nome.value.length == 0){
      instrucoes.innerHTML = '*';
      instrucoes.style.color = '#f00';
      nome.style.border = 'thin red solid';
      
      }
      else instrucoes.innerHTML = '';
      
    }
  
    nomegp.onblur = () => {
      if (nomegp.value.length == 0){
      instrucoesgp.innerHTML = '*';
      instrucoesgp.style.color = '#f00';
      nomegp.style.border = 'thin red solid';
      }
      else instrucoesgp.innerHTML = '';
    }
  
   
  
    let grupo;
  
    grupo = localStorage.setItem({nome: nome.value, nomegp: nomegp.value,
       esportes: esportes.value,descricao: descricao.value,privar:privar.value })
      JSON.stringify(grupo)   
  } 
  
  
 
} */
