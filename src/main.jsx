import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux" //Esto sirve para importar el provider de redux, 
import store from "./redux.store.js" //importo store desde la carpeta redux

//Provider envolverá toda la aplicación para que el estado lo podamos utilizar en toda la aplicación
//El provider tiene un atributo el store que es donde guardaremos el estado (el store es inmutable) 
//Aquí no utilizaremos el useState ya que redux es un manejador de estados
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
      
  </React.StrictMode>,
)
