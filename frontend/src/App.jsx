
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register';

function App() {
  

  return (
    <>
     <Router>
      <Register></Register>
     </Router>
    </>
  )
}

export default App
