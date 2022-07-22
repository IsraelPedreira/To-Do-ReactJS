import './styles.css'

export function CardTasks({task}){

    

    return(
        <div className="container">
            <div className='content'>
                <strong>{task}</strong>
                
            </div> 
        </div>
    )
}