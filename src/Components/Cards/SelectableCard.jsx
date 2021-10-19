import React from 'react'
import './SelectableCard.css'
export default function SelectableCard(props) {
    const [selected, setSelected] = React.useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <div className="selectable-card-container" onClick={handleClick}>
            {selected ? <img src={process.env.PUBLIC_URL + "/Check.png"} className="checkImage"></img> : <div className="divVide"></div>}
            <img src={process.env.PUBLIC_URL + "/Kebab.png"} className="cardImage"></img>
            <h6>{props.title}</h6>
        </div>
    )
}