import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddItem from "./AddItem";
import List from "./List";

const AddElementToList = () => {
  const initialList = [
    {
      id: "a",
      name: "Robin",
    },
    {
      id: "b",
      name: "Denis",
    },
  ];

  // standar useState hook
  //const [addList, setAddList] = React.useState(initialList);

  /**
   * Introducing useReducer hook
   *  1. reducer function
   *  ** input parameters: state and action, output: new state
   *  2. replace the useState, you still need the state variable, but the set variable is called now dispatch[State's Variable Name]
   */

  const listReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return state.concat({ name: action.name, id: action.id });
      default:
        throw new Error();
    }
  };

  const [addList, dispatchAddList] = React.useReducer(listReducer, initialList);

  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    /**
     * This is because the concat function does not modify the list but only returns a new list
     */

    /**
 * This was used when having standard useState
 * const newList = addList.concat({ name, id: uuidv4() });
    setAddList(newList);
    setName("");
 * 
 */
    dispatchAddList({ type: "ADD_ITEM", name, id: uuidv4 });

    setName("");
  }

  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={addList} />
    </div>
  );
};

export default AddElementToList;
