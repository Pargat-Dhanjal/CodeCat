import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

function SwitchForm({to, text}) {
  return (
    <div style={{textAlign : 'center'}}>
        <Link to={to} >
            <button className='switch-form-btn' >
                {text}
            </button>
        </Link>
    </div>
  )
}

export default SwitchForm