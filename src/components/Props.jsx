import React, { useState } from 'react'

export default function Props(props) {

  const [likePostCounter, setPostCounter] = useState(0);

  const handlePostCount = ()=>{
    setPostCounter(likePostCounter+1);
  }

  return (
    <div>
      <button onClick={handlePostCount}>{props.message} {likePostCounter}</button>
    </div>
  )
}
