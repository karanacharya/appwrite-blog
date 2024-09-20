import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img width={width} src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg" alt="Logo"/>
    </div>
  )
}

export default Logo