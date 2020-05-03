import React from "react";
const Article = (props) => {
  return (
    <>
      <article>
        <h3>{props.title}</h3>
        <span>{`Author: ${props.author}`}</span>
        <p>{props.content}</p>
      </article>
    </>
  );
};

export default Article;
