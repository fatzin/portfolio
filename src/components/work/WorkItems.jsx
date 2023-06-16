import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="a" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        <a
          href={item.link}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo <i className="bx bx-right-arrow-alt work__button-icon" />
        </a>
        <a
          href={item.github ? item.github : "#"}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github work__button-icon" />
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
