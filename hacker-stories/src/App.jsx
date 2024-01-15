import * as React from "react";

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

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>

    <Search />
    <hr />
  </div>
);

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

export default App;
