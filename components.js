import React from "react";

function Components(props) {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.boolean}
                onChange={() => props.action(props.id)}
            />
            <p>{props.name}</p>
        </div>
    );
    
}

export default Components;
