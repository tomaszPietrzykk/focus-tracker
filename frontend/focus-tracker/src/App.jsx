import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import CategorySelector from './components/category/CategorySelector'

function App() {

  const [isOpen, setIsOpen] = useState(true)
  const [isRunning, setIsRunning] = useState(false);


  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
        border: "4px solid black",
        padding: "0.6em 1.2em",
        height: "25em",
        width: "25em"
      }}>
        <CategorySelector
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isTimerRunning={isRunning}
          categories={["nauka", "gitara", "czytanie"]}
        />
        <Timer
          setIsOpen={setIsOpen}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
        />
      </div>
    </>
  )
}

export default App
