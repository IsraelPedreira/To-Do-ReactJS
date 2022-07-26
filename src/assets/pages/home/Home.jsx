import { useState } from 'react'
import { CardTasks } from '../../components/CardTasks/CardTasks'
import './styles.css'

export default function Home() {

  const [digits , setDigits] = useState()
  const [tasks , setTasks] = useState([])
  const [edit , setEdit] = useState()
  const [changeRender, setChangeRender] = useState({boolean:'' , indice:''})

  

  function handleGetInput(){

    if (digits.length <=0){
      alert("Por favor, digite algo");
      return;
    }

    setTasks((prev)=>[...prev ,digits])
  }
  
  function deleteTask(index){

    let tempList = [...tasks]
    tempList.splice(index,1)

    setTasks(tempList)
  }

  

  function handleEditTask(e){
    
    const indice = changeRender.indice
    tasks[indice] = edit
    setChangeRender({boolean:false})
    
  
  }


  return (
    changeRender.boolean? 

    <div className="container">
      
      <header className='head'>
        <h1>Lista de Tarefas</h1>

        <input placeholder='Edite a tarefa...' 
        onChange={(e)=>{setEdit(e.target.value)}}
        onKeyDown={(e)=> {e.key=='Enter'? handleEditTask(e)  :false }}>
        </input>

        <button onClick={(e)=>{handleEditTask(e); e.target.value = ' '}} >Editar Tarefa</button>
      </header>
     
      

    </div>
    
    :
    <div className="container">
      <header className='head'>
        <h1>Lista de Tarefas</h1>

        <input placeholder='Digite uma tarefa...' 
        onChange={(e)=>{setDigits(e.target.value)}} 
        onKeyDown={(e)=>{if (e.key=='Enter'){handleGetInput(); e.target.value=' '}}}>
        </input>

        <button onClick={handleGetInput}>Adicionar</button>
      </header>

      {
        
        tasks.map((task,index)=> <div key={index} className='taskCard'> <CardTasks   task ={task} /> <button onClick={()=>deleteTask(index)}>Excluir</button> <button onClick={()=> setChangeRender({boolean:true , indice: index})}>Editar</button> </div> )
        
      }

    </div>
  )

  

  

}


