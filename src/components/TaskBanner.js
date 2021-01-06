import React from 'react';

export const TaskBanner = props => (
<h4>{props.userName} TASK APP ({props.taskItems.filter(t => !t.done).length} tareas pendientes)</h4>
)