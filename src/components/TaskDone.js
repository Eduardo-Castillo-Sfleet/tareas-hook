import React from 'react';

export const TaskDone = props => {
    return(
        <div>
            <input type="checkbox"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}/>
        </div>

    )
}