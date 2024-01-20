import React, { useState } from 'react'

export default function Alert(props) {
  return (
    (props.alert)&&
    <div className='container'>
        {/* <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"}>
            <strong>Hello{props.alert.msg}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> */}

        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>Hello{props.alert.msg}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    </div>
  )
}
