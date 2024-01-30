import * as React from "react";

const App = () => {

  console.log('App renders');
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

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <hr />
      <List list={stories} />
     </div>
  );
};

const Search = () => {

  console.log('Search renders');
 
  // (1) with this approach, nothing happens on the <p> html element once in Browser
  // let searchTerm = '';

  // States better
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {

    // (2) with this approach, nothing happens on the <p> html element once in Browser
    // searchTerm = event.target.value;

    // (2) State function better
    setSearchTerm(event.target.value);
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
  
  console.log('List renders');

  return (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
};

const Item = (props) => {
  
  console.log('Item renders');
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
