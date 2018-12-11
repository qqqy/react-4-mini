import React from 'react'

export default function Route3(props){
  const words = props.match.params.words
  return(
    <div>
      This is Route3 --- {words}
    </div>
  )
}