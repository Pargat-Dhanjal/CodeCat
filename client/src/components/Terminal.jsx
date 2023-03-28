import React from 'react'
import Output from './Output'
import Input from './Input'

function Terminal({output}) {
  return (
    <div className='terminal'>
      <Output output={output} />
      <Input />
    </div>
  )
}

export default Terminal