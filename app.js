import React from "react";
import ReactDOM from "react-dom/client";

// // Define a functional component called ele
//start of code...
// const ele = () => <h1>welcome!!</h1>;

// // Define another functional component called Start
// const Start = () => (
//   // Return JSX representing a <div> element with an id of "container"
//   // Inside the <div>, it contains the result of the expression {300 + 8976}
//   // followed by an <h2> element with the text "lets begin!!"
//   <div id="container">
//     {300 + 8976} {/* This expression will be evaluated to 9276 */}
//     <h2>lets begin!!</h2>
//   </div>
// );

// // Create a root instance for React rendering
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render the Start component inside the "root" DOM element
// root.render(<Start />);
//end of code...

/*
const Title = () => <h1>welcome!!</h1>;
Component composition allows you to break down your
 UI into smaller, manageable pieces, making it easier
  to understand and maintain your codebase.
   It also promotes reusability, as you can use the same
    components in multiple parts of your application.
//below is component composition
const Headcomponent = () => (
  <div id="head">
    <Title />
    <h1>hello bye see you</h1>
  </div>
);
Title is a functional component that directly returns JSX representing an <h1> element with the text "welcome!!".
Headcomponent is another functional component that returns JSX representing a <div> element with an id of "head". Inside this <div>, it includes the Title 
component using <Title /> syntax, which is JSX representing the usage of the Title component. It also includes another <h1> element with the text "hello bye see you".
This is an example of component composition in React, where smaller components (Title) are composed together to form larger components (Headcomponent). This approach helps in creating reusable and modular UI components.
*/
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Headcomponent />);
/* start...

const Headcomponent = () => (
  <div id="head">
    <h1>hello bye see you</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headcomponent />);


explaination:
Headcomponent is a functional component defined using arrow function syntax. It doesn't take any props and directly returns JSX.
Inside Headcomponent, a <div> element with an id of "head" is returned, containing an <h1> element with the text "hello bye see you".
ReactDOM.createRoot is used to create a root instance for React rendering. It requires a DOM element to attach to, which is retrieved using document.getElementById("root").
root.render(<Headcomponent />) renders the Headcomponent inside the root element. This is how React attaches and manages the component tree in the DOM.
*/
//react functional componenet
//start of code...
// const heading = () => {
//   return <h1>hiiiii</h1>;
// };
//end of code...
//const heading = React.createElement("h1", { id: "heading" }, "welcome!!✨✨");
//jsx code:
//jsx is html or xml like syntax..
//jsx=>React.createElement("",{},"")-jsobject=>HTMLElement(render).
//start of code...
// const jsxhead = <h1 id="head">hey😁!!</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxhead);
//end of code...

//root.render(heading);
// const heading = React.createElement("h1", { id: "head" }, "React code!! 🐱‍👤"); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading + "j");

/* # Babel - JavaScript Compiler
Babel is a JavaScript compiler that is mainly 
used to convert ECMAScript 2015+ code (ES6+) into 
a backwards compatible version of JavaScript that
 can be run by older JavaScript engines. One of 
 the major uses of Babel in React is to convert 
 JSX syntax into JavaScript that browsers can understand. 
 JSX is a syntax extension for JavaScript that
  produces 'React elements', and it greatly improves the readability 
  and writability of our code.*/
