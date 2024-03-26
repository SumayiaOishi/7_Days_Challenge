import Card from "./components/card";
import './App.css'
import Cat from "./components/cat.jpg";
import Cat2 from './components/cat2.jpeg'
function App() {
 

  return (
    <>
      <Card image={Cat}/>
      <Card image={Cat2}/>
    </>
  )
}

export default App
