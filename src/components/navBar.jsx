import { useState } from "react";

const NavBar = ({ uncomplitedTodos, onChange, status }) => {
  if (!uncomplitedTodos) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span>{uncomplitedTodos}</span> <h2> are not completed </h2>
      <select onChange={onChange} value={status}>
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;

{
  /* <header>
  <span>{uncomplitedTodos}</span> <h2> are not completed </h2>
</header>; */
}

// onChange={changeHandler} value={status}
