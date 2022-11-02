import React, {useState, useEffect} from 'react'

function App() {
  const[text, setText] = useState('')

  const fetchData = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    )
    const data = await response.json()
    setText(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
  <div class="card">
  <div class="card-body">
    {text.value}
  </div>
  <button type="button" class="btn btn-primary" onClick={fetchData}>New Joke</button>
</div>
  )
}

export default App

