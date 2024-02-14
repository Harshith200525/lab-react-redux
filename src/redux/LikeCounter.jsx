import { legacy_createStore } from "redux"
import reducer from "./Reducer"
import { incrementLike } from "./Action"
import { decrementLike } from "./Action"
import { useState } from "react"

const store = legacy_createStore(reducer)

const LikeCounter = () => {
    const [count, setCount] = useState(store.getState().count)

    store.subscribe(() => {
        setCount(store.getState().count)
    })

    const handleLike = () => {
        store.dispatch(incrementLike())
    }

    const handleDislike = () => {
        store.dispatch(decrementLike())
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default LikeCounter