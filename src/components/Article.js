// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderEmoji = () => {
    if (minutes < 30) {
      const count = Math.ceil(minutes / 5);
      return "☕️".repeat(count);
    } else {
      const count = Math.ceil(minutes / 10);
      return "🍱".repeat(count);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small>
        {renderEmoji()} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

  