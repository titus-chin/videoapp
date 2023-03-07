// 1. Create new component ActivityRemote
// 2. Load ActivityRemote in root component
// 3. Use axios in ActivityRemote to call api -> https://jsonplaceholder.typicode.com/users
// 4. From the response which is received, display name from each json object in array of response.


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ActivityRemote() {
    let [alltodos, updateAllTodos] = useState([])

    useEffect(()=>{
        ApiCall()
    },[])

    let ApiCall = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log(response);
                updateAllTodos(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    let displayTodoData = ()=>{
        return alltodos.map((todo)=>{
            return (
                <div key={todo.name} 
                    style={{
                    border:"3px solid green",
                    margin:"10px",
                    width:"100px",
                    padding:"4px",
                    backgroundColor:"white"
                    }}>
                    {todo.name}, {todo.company.name}, {todo.address.geo.lat}
                </div>
            )
        })}

    return ( 
        <div>
            <h1>Name of each Json Object</h1>
            <div style = {{display: "flex", border: "3px solid red", flexWrap: "wrap"}}>
                {displayTodoData()}
            </div>
        </div>
     );
}

export default ActivityRemote;