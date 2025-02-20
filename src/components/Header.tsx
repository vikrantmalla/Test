import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Header() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedText = (e.target as HTMLInputElement).value.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch({ type: "todos/todoAdded", payload: trimmedText });
      setText("");
    }
  };
  return (
    <input
      type="text"
      placeholder="WHat needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Header;
