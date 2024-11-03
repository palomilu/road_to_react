import * as React from "react";

const UpdateElementInList = () => {
  const initialList = [
    {
      id: "a",
      task: "Learn React",
      isComplete: false,
    },
    {
      id: "b",
      task: "Learn GraphQL",
      isComplete: true,
    },
  ];

  const [list, setList] = React.useState(initialList);

  function handleToggleComplete(id) {
    console.log(id);
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span
            style={{
              textDecoration: item.isComplete ? "line-through" : "none",
            }}
          >
            {item.task}
          </span>
          <button type="button" onClick={() => handleToggleComplete(item.id)}>
            {item.isComplete ? "Undo" : "Done"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UpdateElementInList;
