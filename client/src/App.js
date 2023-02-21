import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://name-generator-xala.onrender.com/generate')
      .then((res) => res.json())
      .then((nme) => {
        console.log('nme', nme)
        setName([nme])
      })
      .catch(err=>console.log("errorrrrrrr", err))
  }, [])

  return (
    <h1>Your random name is: {name[0]}</h1>
  )
}

export default App
