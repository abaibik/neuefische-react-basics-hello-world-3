import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello everyone!</h2>
      <label htmlFor="firstInput"></label>
      <input id="firstInput"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Fashion_week"
      >
        Info about Fashion weeks
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
