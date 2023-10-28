import React from "react"
import ReactDOM from "react-dom"

const heading= React.createElement("h1",{
        id: "title",
        key:"h1"
    },"hello")
const heading2= React.createElement("h1",{
        id: "title",
        key:"h2"
    },"hello world")
const container= React.createElement( "div",{
        id: "container",
    },[heading, heading2])

    // const hello = <h1>hello world</h1>




    //heading is an object
    const root=ReactDOM.createRoot(document.getElementById("root"))
    //render put the react element into the root div
    root.render(container)