import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import './index.css'
import Home from './components/HomePage'
import About from './components/AboutPage'
import SkinForm from './components/SkinTypeForm'


function App() {

  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<SkinForm/>}/>
      </Routes>
    </Router>
  );
}
export default App
