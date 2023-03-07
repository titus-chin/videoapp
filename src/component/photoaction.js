import React, { useState } from 'react';

function PhotoAction(props) {

    // useState is a hook used to create new state value
    // lks -> name of the state
    //updatelks -> function which will be used to change the sttae of lks
    let [lks, updatelks] = useState(parseInt(props.likes))

    let changeLikes = (e)=>{
        console.log(e);
        updatelks(lks+1)
    }

    let changeDislikes = ()=>{
        updatelks(lks-1)
        
    }

    return ( 
        <div>
            {lks}
            <br />
            <button onClick={changeLikes}>Likes</button>
            <button onClick={changeDislikes}> Dislikes</button>
        </div>
     );
}

export default PhotoAction;