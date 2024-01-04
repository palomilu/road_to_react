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
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <h2>Lists in React</h2>

      <ul>
        {list.map((topic) => (
          <li key={topic.objectID}>
            <span>
              <a href={topic.url}>{topic.title}</a>
            </span>
            <span>{topic.author}</span>
            <span>{topic.num_comments}</span>
            <span>{topic.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
