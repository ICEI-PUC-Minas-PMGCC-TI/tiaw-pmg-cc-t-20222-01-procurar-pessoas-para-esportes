const KEY_BD = '@cadastroestudo'


var listaRegistros = {
    ultimoIdGerado:0,
    reserva:[
        {id:1, 
            Dia: '2022-10-20',
            Horário: '19:30',
            Quadra: 'Quadra 5- Futebol'
        },

        {id:3, 
            Dia: '2022-10-23',
            Horário: '13:00',
            Quadra: 'Quadra 1- Basquete'
        },

        {id:2, 
            Dia: '2022-10-24',
            Horário: '22:30',
            Quadra: 'Quadra 7- Vôlei'
        }
    ]
}

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}

function desenhar(){
    const tbody = document.getElementById('listaRegistrosBody')
    if(tbody){
        tbody.innerHTML = listaRegistros.reserva
        .sort((a, b) => {
            return a.Quadra < b.Quadra ? -1 : 1
        })
        .map( reserva => {
                return `<tr>
             <td>${reserva.Dia}</td>
             <td>${reserva.Horário}</td>
             <td>${reserva.Quadra}</td>
             <td>
             <button class='azul' onclick='perguntarSeDeleta(${reserva.Dia})'>CancelarReserva<button>
             </td>
                        </tr>` 
            }).join('')
    }
}


function insertReserva(Dia, Horário, Quadra){
    const id = listaRegistros.ultimoIdGerado = 1;
    listaRegistros.reserva.push({
        Dia, Horário, Quadra
    })
    gravarBD()
    desenhar()
    vizualizar('lista')
}


function editReserva(Dia, Horário, Quadra){

}

function deleteReserva(id){
    listaRegistros.reserva = listaRegistros.reserva.filter ( reserva => {
        return reserva.id = reserva.id
    })
    gravarBD()
    desenhar()
}

function perguntarSeDeleta(id){
    if(confirm('Quer cancelar essa reserva ?')){
        deleteReserva(id)
    }
}


function vizualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page', pagina)
    if(pagina === 'cadastro'){
        if(id){
            const reserva = listaRegistros.reserva.find( reserva => reserva.id == id)
            if(reserva){
            document.getElementById('Dia').value = reserva.Dia
            document.getElementById('Horário').value = reserva.Horário
            document.getElementById('Quadra').value = reserva.Quadra
            }
    }
}
}


function submeter(e){
    e.preventDefault()
    const data= {
        Dia:document.getElementById('Dia').value,
        Horário:document.getElementById('Horário').value,
        Quadra:document.getElementById('Quadra').value,
    }
    if(data.id){
        editReserva(...data)
    }else{
        insertReserva( data.Dia, data.Horário, data.Quadra)
    }
    console.log(data)
}




window.addEventListener('load', () =>{
    lerBD ()

    document.getElementById('cadastroQuadras').addEventListener('submit', submeter)
})