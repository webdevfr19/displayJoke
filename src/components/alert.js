import React, { useState } from 'react'
import { ReactNode } from 'react'

const Props = {
    children: ReactNode,
    text: '',
    alertType: '',
}

const Alert = (props = Props) => {
 
  const [display, setDisplay] = useState('block');
 
  return (
      <div id="alert" className={"alert alert-" + props.alertType + " alert-dismissible fade show d-" + display || props.display} role="alert">
          <strong>{props.text}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDisplay('none')}></button>
      </div>
  )
}

export default Alert
