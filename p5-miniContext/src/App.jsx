
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1>React with Lokey Parry</h1>
    <Login/>
    <br/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
