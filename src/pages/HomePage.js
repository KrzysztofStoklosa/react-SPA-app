import React from "react";
import "../styles/HomePage.css";
import Article from "../components/Article";
const HomePage = () => {
  const data = [
    {
      id: 1,
      title: "How nature help you",
      author: "John Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo corporis dolores adipisci quod beatae sed temporibus ad, commodi omnis, modi dolorum assumenda tempora, et numquam praesentium. Qui, placeat quas!",
    },
    {
      id: 2,
      title: "Live healthy and colorful",
      author: "James Bracher",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo corporis dolores adipisci quod beatae sed temporibus ad, commodi omnis, modi dolorum assumenda tempora, et numquam praesentium. Qui, placeat quas!",
    },
    {
      id: 3,
      title: "In harmony with myself",
      author: "Stuart Little-John",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo corporis dolores adipisci quod beatae sed temporibus ad, commodi omnis, modi dolorum assumenda tempora, et numquam praesentium. Qui, placeat quas!",
    },
  ];
  const display = data.map((item) => <Article key={item.id} {...item} />);
  return (
    <div className="home">
      <h1>Our news</h1>
      {display}
    </div>
  );
};

export default HomePage;
