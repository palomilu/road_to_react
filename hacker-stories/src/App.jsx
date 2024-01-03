import * as React from "react";

// First component:
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

function App() {
  const array = ["Luis", "Julia", "Lukas"];

  const welcome = {
    title: "React",
    greeting: "Hey",
    family: array,
  };

  const bool = true;

  const number = 123.45;

  let notAssigned;

  const empty = null;

  const symbol = Symbol("Luis");

  const listNames = welcome.family.map((name) => <li key={name.id}>{name}</li>);

  return (
    <div>
      <h1>
        {welcome.greeting}
        {welcome.title}
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <h2>{`Hello again, let me introduce some primitive data types:`}</h2>

      <h3>Here, first, a list:</h3>

      <ul>
        <li>{`A boolean variable declared in code has the value: ${bool}`}</li>
        <li>{`A number variable declared is: ${number}`}</li>
        <li>{`When something is not initialized// declared looks like this: ${notAssigned}`}</li>
        <li>{`When a variable explicit has nothing: ${empty}`}</li>
        <li>{`This is a kind of strange data type called symbol: ${typeof symbol}`}</li>
        <li>{`... and finally an array from an object called and shown: ${welcome.family}`}</li>
      </ul>

      <h2>
        Now I will proceed to print elements of an array using the built-in map
        function
      </h2>

      <h3>{`Let's show the elements like a list again`}</h3>
      <ul>{listNames}</ul>

      {/*Here using code from https://react.dev/learn/describing-the-ui */}
      <br></br>
      <h3>
        Here I will put some code from the React Tutorial of the react.dev
      </h3>
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  );
}

export default App;
