import React from "react";
import ReactDOM from "react-dom/client";
// import React from "react";

const parent = React.createElement("div", {id: "parent"}, 
    [ [React.createElement("h1", {id: "child1"}, "Hello Kanika"), 
     React.createElement("h2", {id: "child2"}, "Hello World"),
    ],[React.createElement("h1", {id: "child1"}, "Hello World"), 
     React.createElement("h2", {id: "child2"}, "Hello World"),
     ] ]);
 
     // for nested elements use array
 // const heading = React.createElement("h1", {id: "heading"}, "Hello World");
         const roots = ReactDOM.createRoot(document.getElementById("root"));
         roots.render(parent);
         