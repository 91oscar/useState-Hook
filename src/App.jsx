import { useState } from 'react'
import './App.css'


export default function App() {
  const [likes, setLikes] = useState({ val: 0})

  return (
    <div>

        <button 
          onClick={() => {
            const newLikes = {...likes}
            newLikes.val++
            setLikes(newLikes)

          }}>{likes.val} likes
        </button>
      
        <button 
          onClick={() => {
            const newLikes = {...likes}
            newLikes.val--
            setLikes(newLikes)

          }}>  unlikes
        </button>

        <button 
          onClick={() => {
            const newLikes = {...likes}
            newLikes.val = 0
            setLikes(newLikes)
          }}> reset
        </button>

    </div>
  )
}
