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

  // using this as initial state instead of '' 
  const [searchTerm, setSearchTerm] = React.useState('React');
  
  const handleSearch = (event) => {

 
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase())); 

  return (
    <div>
      <h1>My Hacker Stories</h1>

      { /*Here we pass the state of searchTerm as part of the props */}
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
     </div>
  );
};

const Search = (props) => {


  return (
    <div>
      <label htmlFor="search">Search: </label>
      { /* ... and here we include it as value so that the real state value is shown */}
      { /* after doing this, the browser was telling me that I had to decide if I wanted the controlled version now (with refresh)
         so I did refresh the browser and now 'React' was shown in the input field */}

      { /* IMPORTANT THING HERE: controlled element <input> makes this a controlled component, states (React and HTML states are now synchronised*/}

      <input id="search" type="text" value={props.search} onChange={props.onSearch} />

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
