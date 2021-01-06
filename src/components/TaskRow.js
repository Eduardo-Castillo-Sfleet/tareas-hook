import React from 'react'

export const TaskRow = (props) => (
    <tr key={props.task.key}>
        <td>{props.task.nombre}</td>
        <td><input type="checkbox" checked={props.task.done} onChange={() => props.toggleTask(props.task)}/></td>
    </tr>
)