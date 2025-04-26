import Button from '@atlaskit/button/new'
import React from 'react'
import '../index.css'

const ButtonStyled = ({value})=>
{
    return <div className="button-styled">
    <Button shouldFitContainer className="button-styled">{value}</Button>
    <br></br>
    </div>
}

export default function Todo({todo}) {
  return (
    <ButtonStyled value={todo.name}></ButtonStyled>
  )
}
