import { useState, useCallback, useEffect, useRef } from 'react'

// useCallback
// useCallback is a react hook lets you cache a function b/w re-render
// const cachedFn = useCallback(fn, depandancies)

// useEffect hooks
// it is areact hook that let you synchronize a component  with an external system
// refrences
// useEffect (setup, dependancies)

// useRef hooks
// useRef returns a mutable ref object whose .current property is initialized to the passed
//argument (initialValue). The returned object will persist for the full lifetime of the component.

// Note that useRef() is useful for more 
// than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState()
  // useRef Hook
  const passwordRef = useRef(null)
  
  const passwordGenetor = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str +="0123456789"
    if (charallowed) str +="!@#$%^&*?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberallowed, charallowed, setPassword])
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,14)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenetor()
  }, [length, numberallowed, charallowed, passwordGenetor])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md 
       rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex- shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id="" 
            min={6}
            max={20}
            value={length}
             className='cursor-pointer'
             onChange={(e)=> {setLength(e.target.value)}}/>
             <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberallowed}
            id='numberInput'
            onChange={() => {setNumberallowed((prev) => !prev);}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charallowed}
            id='characterInput'
            onChange={() => {setCharallowed((prev) => !prev);}} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
