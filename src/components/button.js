import React from 'react'

const Props = {
    children: '',
    color: '',
    onClick: () => {},
}

const Button = (props = Props) => {
  return (
    <div>
      <button 
      className={'btn btn-' + props.color} 
      onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  )
}

export default Button
