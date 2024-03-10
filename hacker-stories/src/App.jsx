import * as React from "react";

const App = () => {
  const stories = [
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

  // use the stored value, if a value exists, to set the initial state
  // of the searchTerm in React's useState Hook
  // Default value: 'React'
  const [searchTerm, setSearchTerm] = React.useState(
    // using now nullish coalescing operator
    localStorage.getItem("search") ?? "React"
  );

  // THIS is the fix for the side-effect issue
  // handles the localStorage change centralized and not in a specific handler
  // each time searchTerm changes, useEffect takes also place
  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    // use local storage to store searchTerm accompanied by
    // an identifier whenever a user types into the HTML input field
    // This is the first approach, but this brings side-effects, that is why
    // this should live outside the handleSearch function
    // ...
    //     localStorage.setItem('search', event.target.value);
  };

  const searchedStories = stories.filter((element) =>
    element.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

// now using object destructuring for the props
// this instead of:
// const search = props.search //...
const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
  </div>
);

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
};

export default App;
