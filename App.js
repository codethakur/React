const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]
    ),
    React.createElement(
        "div2",
        {id:"child2"},
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]
    ),

);

console.log(parent);
ReactDOM.render(parent, document.getElementById("root"));