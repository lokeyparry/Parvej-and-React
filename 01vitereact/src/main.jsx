import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
const AnotherElement = (
  <a href="http://google.com"target='__blank'>visit google</a>
)
const anotheruser = "parvej Ansari"
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com'},
  'click me to visit forever',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement 
)
