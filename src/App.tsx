import Card from "./components/card";
import './App.css'
import Cat from "./components/cat.jpg";
import TodoList from './components/Todo_List'
import New from './components/neew'
function App() {
 

  return (
    <>
     <div className="card-container" >
      <Card image={Cat}/>
      <TodoList/>
      </div>

  <New/>
     
      
    </>
  )
}

export default App
