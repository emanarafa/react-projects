import React from "react";

function Menue({ items }) {
  console.log(items);
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return (
          <article className="menu-item" key={menuItem.id}>
            <img
              src={menuItem.img}
              alt={menuItem.title}
              className="photo"
            ></img>
            <div className="item-info">
              <header>
                <h4>{menuItem.title}</h4>
                <h4 className="price">price ${menuItem.price}</h4>
              </header>
              <p className="item-text">{menuItem.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menue;
