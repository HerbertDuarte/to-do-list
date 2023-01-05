addTask = () =>{
  
  let InputName = document.getElementById('name')

  let name = InputName.value

  InputName.value = ''
  
  criarTarefa(name)
  armazenar()
}

criarTarefa = (TaskName) =>{

  const res = document.getElementById('resultado')
  const tarefavazia = document.getElementById('tarefavazia')

  if(TaskName.length == 0){
    alert('digite uma tarefa')
  }
    
  else{
      
    if(tarefavazia){
      res.removeChild(tarefavazia)
    }

    res.innerHTML += (
      `<div class="tarefa">
      
      <span>${TaskName}</span>
      
      <div class="btns">
      <span class="icon1" id="concluido" onclick="concluir(this)">
      <i class="fa-solid fa-check"></i>
      </span>
      <span class="icon2" id="apagar" onclick="remover(this)">
      <i class="fa-solid fa-trash"></i>
      </span>
      </div>

      </div>`
      )
  }
} 

remover = (e) =>{
  e.parentNode.parentNode.remove()
  armazenar()
}  

concluir = (e) =>{
  let pai = e.parentNode.parentNode
  let filho = pai.children[0]
  if(filho.classList == 'on'){
    filho.classList.remove('on')
    
  }else{
    filho.classList.add('on')
    
  }

  armazenar()
}

armazenar = () =>{
  let res = document.getElementById('resultado')
  let tarefas = res.innerHTML
  localStorage.setItem('tarefas', tarefas)

  inserirVazio()
}

verificar = () =>{

  verificarCheckin()
  
  if(localStorage.tarefas){
    let res = document.getElementById('resultado')
    res.innerHTML = localStorage.tarefas
  }

  inserirVazio()
  resetTarefas()
}


inserirVazio = () =>{
  if((localStorage.tarefas).trim() == '<h2>Minhas Tarefas</h2>'){
    let res = document.getElementById('resultado')
    res.innerHTML += '<div class="tarefa" id="tarefavazia"></div>'
  }
}

window.onload = verificar()


//-------------------MODO DIARIO ------------------------

function modoDiario(){

  guardarCheckIn()

}

function guardarData(){

  if(localStorage.checkin == 1){

    let agr = new Date()

    let dia = agr.getDay() + 1
    let mes = agr.getMonth() + 1

    localStorage.setItem('mes', mes)
    localStorage.setItem('dia', dia)

  }
}


function guardarCheckIn(){

  const btn = document.querySelector('.balldiv')

  if(btn.classList == 'balldiv active'){
    btn.classList.remove('active')

    localStorage.setItem('checkin', 0)

  }else{
    btn.classList.add('active')
    localStorage.setItem('checkin', 1)
  }
}

function verificarCheckin(){
  const btn = document.querySelector('.balldiv')

  if(localStorage.checkin){

    if(localStorage.checkin == 1){
      btn.classList.add('active')

    }else{
      btn.classList.remove('active')
    }
  }
}

function resetTarefas(){
  
  if(localStorage.checkin == 1){

    let agr = new Date()
    
    let dia = agr.getDay() + 1
    let mes = agr.getMonth() + 1
    
    let ons = document.getElementsByClassName('tarefa')
    
    if(dia > localStorage.dia || mes > localStorage.mes){
      for(let i = 0; i < ons.length ; i++){
        if((ons[i].children[0]).classList == 'on'){
          (ons[i].children[0]).classList.remove('on')
        }
      } 
    }
  }

    
}




