
import './App.css'
import { Footer } from './componentes/footer/Footer'


import { Navbar } from './componentes/navbar/Navbar'
import { MoviesProvider } from './context/MoviesProvider'
import { RouterApp } from './router/RouterApp'

function App() {
  

  return (
    
      <MoviesProvider>
    <div className='container'>
    <Navbar/>
    <RouterApp/>
    <Footer/>
    </div>
    </MoviesProvider>
  )
}

export default App
