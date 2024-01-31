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

  /*
   * event handler (A) is passed as function to another component -> (B)
   * event handler is executed in (B) as callback handler (C)
   * Call back to the place it was introduced (D)
  */

  // A
  const handleSearch = (event) => {
    // D
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      {/* // B */}
      <Search onSearch={handleSearch}/>
      <hr />
      <List list={stories} />
     </div>
  );
};

const Search = (props) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    // C
    props.onSearch(event);

  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );


};

const List = (props) => { 
  
  return (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
};

const Item = (props) => {
  
    return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};


export default App;
