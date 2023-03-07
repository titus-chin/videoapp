import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import MyRoot from "./rootcomponent/root";

/*
Q. What do I want to render?
Ans. I want to render the root component. The name of root component is Root.
    It is defined in rootcomponent.js

Q. Where do you want to render the root component?
Ans. I want to render it in div whode id is "root"

*/

// Highlight key and hold command and press function will bring you to the file.

ReactDOM.render(<HashRouter>
    <MyRoot></MyRoot>
    </HashRouter>, document.getElementById("mycontainer"))


