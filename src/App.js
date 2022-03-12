import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



function App() {

  //definir la categoria y Noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=4f29b2aa202d4ded8bb3feb6c2830469`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles);
    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo={'Buscador de Noticias'}
      />
      <div className='container white'>
        
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        
        <ListadoNoticias 
          noticias={noticias}
        />

      </div>
    </Fragment>
    
  );
}

export default App;
