import * as React from "react";

const styleHeader = {
  padding: "10px",
  border: "1px solid black",
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },

  {
    title: "JavaScript",
    url: "https://developer.mozilla.org/",
    author: "Mozilla",
    num_comments: 102,
    points: 7,
    objectID: 2,
  },

  {
    title: "MongoDB",
    url: "https://www.mongodb.com/",
    author: "Mongo",
    num_comments: 18,
    points: 2,
    objectID: 3,
  },
];

const App = () => {
  const [text, setText] = React.useState("");
  const [count, setCount] = React.useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = (event) => {
    // React synthetic event
    console.log(event);
    // the actual handling
    console.log("Input field blur (leaving the focus on the input)");
  };

  const handleClick = (delta) => {
    setCount(count + delta);
  };

  const [isActive, setActive] = React.useState(false);

  const handleHeaderClick = () => {
    setActive(true);
    alert("header click (e.g. navigate to home page)");
  };

  const handleButtonClick = (event) => {
    alert("button click (e.g. log out user)");

    if (isActive) {
      event.stopPropagation();
    }
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <hr />
      <List />
      <hr />
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {text}
      </div>
      <hr />
      <div>
        Count: {count}
        <button type="button" onClick={() => handleClick(1)}>
          Increase count
        </button>
        <button type="button" onClick={() => handleClick(-1)}>
          Decrease count
        </button>
      </div>
      <hr />
      <div>
        <div style={styleHeader} onClick={handleHeaderClick}>
          <div>Header</div>
          <button type="button" onClick={handleButtonClick}>
            Log Out
          </button>
        </div>

        <button type="button" onClick={() => setActive(!isActive)}>
          Stop Propagation: {isActive.toString()}
        </button>
      </div>
    </div>
  );
};

const Search = () => {
  const handleChange = (event) => {
    //synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App;
