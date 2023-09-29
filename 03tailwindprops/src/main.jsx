import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Card press = "hello => " username="lokey" p="Hii this lokey from kushinager utter pradesh bhuweani i like to play beacause it is more interestin from other games"/>
    <Card press ="hii =>" username="Parry" p="Hii this parry from gwalier madhayapradesh bhimandi i like to assamble the game of throne beacause it is more interestin from other games"/>
    <Card  username="Parvej" p="Hii this parvej from kushinager utter pradesh bhuweani i like to assamble the game of throne beacause it is more interestin from other games"/>
  </React.StrictMode>,
)
