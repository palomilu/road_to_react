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

  const [searchTerm, setSearchTerm] = React.useState('');
  
  // (1) This was my first solution without using searchTerm
  // const[filteredStories, setFilteredStories] = React.useState([]);

  const handleSearch = (event) => {

    // (2) This was my first solution without using searchTerm
    // setFilteredStories(stories.filter((element) => element.title.toLowerCase().includes(event.target.value.toLowerCase())));
    setSearchTerm(event.target.value);
  };

  // book's solution
  const searchedStories = stories.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase())); 

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
     </div>
  );
};

const Search = (props) => {


  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />

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
