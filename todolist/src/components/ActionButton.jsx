import React from 'react'
import axios from 'axios'

const ActionButton = (props) => {

    const handleClick = () => {
        switch (props.name) {
            case 'Delete':
                axios
                    .delete(`http://localhost:3000/${props.id}`)
                    .then(result => console.log(result))
                    .catch(err => console.log(err))
                break;
            case 'Add':
                axios.post('http://localhost:3000/', { task: props.task })
                    .then(result => console.log(result))
                    .catch(err => console.log(err)); 
                break;
        }
    }



    return (
        <button onClick={handleClick}>{props.name}</button>
    )
}

export default ActionButton