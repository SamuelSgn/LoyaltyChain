import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Menu from "./Menu";

function MenuItem() {
    const [openlinks, setOpenlinks] = useState(false);

    return (
        <div className="MenuItem">
            <label>Menu du Restaurant</label>
            <AddIcon onClick={ openlinks ? <Menu/> : setOpenlinks} style={{
                width: '5vw',
                height: '10vh',
                border: '5px solid gray',
                color: 'purple',
                borderRadius: '10px',
                marginLeft: '10vw',
            }}/>
        </div>
    );
}

export default MenuItem;