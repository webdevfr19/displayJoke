import React, { useState } from 'react'

const Props = {
    items: [],
    heading: '',
    onSelection: (item) => {},
}

const ListGroup = (props = Props) => {  

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
        <h1>{props.heading}</h1>
            {props.Items.length == 0 && <p>No item found</p>}
            <ul className="list-group">
                {props.Items.map((item, index) => 
                <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item} 
                onClick={() => { 
                    setSelectedIndex(index); 
                    props.onSelection(item);
                }}
                >
                    {item}
                </li>)}
            </ul>
        </>
    );
}

export default ListGroup
