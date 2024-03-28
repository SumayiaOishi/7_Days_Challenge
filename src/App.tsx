import Card from "./components/card";
import './App.css'
import Cat from "./components/cat.jpg";
import Cat2 from './components/cat2.jpeg'
import TodoList from './components/Todo_List'
function App() {
 

  return (
    <>
     <div className="card-container" >
      <Card image={Cat}/>
      <TodoList/>
      </div>
     
      
    </>
  )
}

export default App
