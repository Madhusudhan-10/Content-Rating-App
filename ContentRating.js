// ContentRating.js
import React, { useState } from "react";
import "./ContentRating.css";

const ContentItem = ({ title, description }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="content-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="rating-buttons">
        <button className="like-button" onClick={handleLike}>
          👍 Like ({likes})
        </button>
        <button className="dislike-button" onClick={handleDislike}>
          👎 Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
};

const ContentRating = () => {
  const items = [
    {
      title: "React Basics",
      description: "Learn about components, props, and state in React.",
    },
    {
      title: "Node.js Guide",
      description: "Understand backend development with Node.js and Express.",
    },
    {
      title: "CSS Flexbox",
      description: "Master modern layouts with CSS Flexbox and Grid.",
    },
  ];

  return (
    <div className="content-container">
      <h2>Content Rating App</h2>
      {items.map((item, index) => (
        <ContentItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ContentRating;
