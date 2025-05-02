import React from "react";
import ReactDOM from "react-dom/client";
// import React from "react";

const heading = <h1>Hi, I'm Kanika</h1>
const heading2 = <h2>I'm a Software Engineer</h2>;
const heading3 = <h3>I'm a React Developer</h3>;


// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript files.
//JSX is transpiled to JavaScript by tools like Babel before being executed in the browser.
//Babel is a JavaScript compiler that converts modern JavaScript code into a version that can run in older browsers. It also allows you to use JSX syntax in your React components.
// Babel takes the JSX code and transforms it into JavaScript function calls that create React elements. For example, the JSX code <h1>Hello, World!</h1> is transformed into React.createElement('h1', null, 'Hello, World!').

// parcel here is used to handle the transpilation by Babel and bundling of the code. 
// parcel tells babel to transpile the code and bundle it into a single file that can be run in the browser.
// parcel and babel are different in the way that parcel is a bundler that handles the entire build process, while babel is a compiler that only transpiles the code.
// how parcel provides transpilation and bundling is by using a configuration file called .babelrc. This file tells parcel to use babel to transpile the code and bundle it into a single file.

//Functional components are JavaScript functions that return React elements. They are a simpler way to create components compared to class components. Functional components can accept props as arguments and return JSX code. They are often used for presentational components that do not require state or lifecycle methods.
const Title = () => {
  return <h1>My First React App</h1>;
}

//Functional components are stateless components that do not have their own state or lifecycle methods. They are simpler and easier to read than class components. Functional components can accept props as arguments and return JSX code. They are often used for presentational components that do not require state or lifecycle methods.
// They can be written using arrow functions or regular functions. Arrow functions are a more concise way to write functional components, while regular functions are more traditional and can be used in class components as well.
const SubTitle = function() {
  return <h2>React App</h2>;
}

//Component composition is the process of combining multiple components to create a more complex UI. It allows you to break down your UI into smaller, reusable components that can be composed together. This makes your code more modular and easier to maintain. In React, you can compose components by nesting them inside each other. For example, you can create a parent component that contains multiple child components.
const Heading = () => {
  return (<div>
  <Title />
    <SubTitle />
  <h1>My First React Component</h1>;
</div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {heading}
    {heading2}
    {heading3}
    <Heading /> 
  </div>
);
         