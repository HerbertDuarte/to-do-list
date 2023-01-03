var i = 0

addTask = () =>{
  
  let InputName = document.getElementById('name')
  let name = InputName.value

  InputName.value = ''
  i++
  
  criarTarefa(name)
}

criarTarefa = (TaskName) =>{

  const res = document.getElementById('resultado')
  const tarefavazia = document.getElementById('tarefavazia')

  if(tarefavazia){
    res.removeChild(tarefavazia)
  }

  res.innerHTML += (
    `<div class="tarefa" id="tarefa${i}">

    <span>${TaskName}</span>
    
    <div class="btns">
      <span class="icon" id="concluido">
        <i class="fa-solid fa-check-double"></i>
      </span>
      <span class="icon" id="apagar">
        <i class="fa-solid fa-trash"></i>
      </span>
    </div>
    
  </div>`
  )
  
} 