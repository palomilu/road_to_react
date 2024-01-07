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

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
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

      <h2>Some array methods JS built-in</h2>

      <hr />

      <List />
    </div>
  );
}

function List() {
  return (
    <>
      <h3>filter: titles with no. comments smaller than 10 </h3>
      <ul>
        {list
          .filter((item) => item.num_comments < 10)
          .map((item) => (
            <li key={item.objectID}>{item.title}</li>
          ))}
      </ul>

      <h3>reduce: all the points for the titles and all the comments</h3>
      <ul>
        {
          <li>
            {" "}
            Total no. of points:
            {list
              .map((item) => item.points)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue
              )}
          </li>
        }
        {
          <li>
            {" "}
            Total no. of comments:
            {list
              .map((item) => item.num_comments)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue
              )}
          </li>
        }
      </ul>
    </>
  );
}

const Search = () => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </>
  );
};

export default App;
