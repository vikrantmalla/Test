import React from "react";

// Assuming your store and types are already set up for TodoState

const Footer = () => {
  // Select the remaining uncompleted todos

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark all completed</button>
        <button className="button">Clear Completed</button>
      </div>
    </footer>
  );
};

export default Footer;
