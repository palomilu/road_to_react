import * as React from "react";

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) ?? initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  // list of items needs to become a stateful value in order to manimpulate

  const [stories, setStories] = React.useState([
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
  ]);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((element) =>
    element.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      <ButtonInReact
        id="button"
        value="button-test"
        text="button-test"
      ></ButtonInReact>
      <br />
      <RadioButton
        id="JavaScript"
        name="Programming Languages"
        value="JavaScript"
        label="Java Script"
      />
      <br />
      <RadioButton id="Python" name="Programming Languages" value="Python" />
      <hr />
      <ReactCheckBox id="yes" value="Yes" />
      <br />
      <ReactCheckBox id="no" value="No" />
      <hr />
      <ReactDropDown list={stories} name="Searched Stories" id="stories" />
      <ButtonDelete />
    </div>
  );
};

// reusable react component for Search alike components
// declarative react Focus
// NOT using the declarative approach since I don't see it necessary at the moment

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      autoFocus={isFocused}
      onChange={onInputChange}
    ></input>
  </>
);

const List = ({ list, onRemoveItem }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

// Here at onClick of button is the inline-Handler
// also called: inline arrow function
const Item = ({ item, onRemoveItem }) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Delete
        </button>
      </span>
    </li>
  );
};

/*
 * Components below just thought as playground for this section
 */

const ButtonInReact = ({
  id,
  text = "button",
  type = "button",
  onChange = () => console.log("button clicked"),
}) => (
  <button id={id} type={type} onClick={onChange}>
    {text}
  </button>
);

/*
 * Button to delete items of the list
 */

const ButtonDelete = () => {
  <button type="">Delete</button>;
};

/*
 * For radio button (input of type radio) I need:
 * id, name, value
 * and a label, id is used for
 */

const RadioButton = ({ id, name = "radio options", value, label }) => (
  <>
    <input type="radio" id={id} name={name} value={value} />
    <label htmlFor={id}>{label ? label : value}</label>
  </>
);

// checkbox is similar to radio button

const ReactCheckBox = ({ id, name = "checkbox options", value, label }) => (
  <>
    <input type="checkbox" name={name} value={value} />
    <label htmlFor={id}>{label ? label : value}</label>
  </>
);

// dropdown is as select simply select + options
const ReactDropDown = ({ list, name, id }) => (
  <select name={name} id={id}>
    {list.map((item) => (
      <option key={item.objectID} value={item.title}>
        {item.author}
      </option>
    ))}
  </select>
);

export default App;
