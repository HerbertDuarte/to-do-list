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
      <span class="icon" id="concluido" onclick="concluir(this)">
      <i class="fa-solid fa-check"></i>
      </span>
      <span class="icon" id="apagar" onclick="remover(this)">
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
  if(filho.style.textDecoration == 'line-through'){
    filho.style.textDecoration = 'none'
    filho.style.fontStyle = 'normal'
    filho.style.color = 'white'
    e.children[0].style.color = 'white'
  }else{
    filho.style.textDecoration = 'line-through'
    filho.style.fontStyle = 'italic'
    filho.style.color = 'cornflowerblue'
    e.children[0].style.color = 'cornflowerblue'
  }

  armazenar()
}

armazenar = () =>{
  let res = document.getElementById('resultado')
  let tarefas = res.innerHTML
  localStorage.setItem('tarefas', tarefas)
}

verificar = () =>{
  
  if(localStorage.tarefas){
    let res = document.getElementById('resultado')
    res.innerHTML = localStorage.tarefas
  }

}

window.onload = verificar()











