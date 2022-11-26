import React from 'react'

function Hero({heroName}) {
  if (heroName === 'Joker') throw Error('Not a hero name')

  return (
    <div>{heroName}</div>
  )
}

export default Hero
