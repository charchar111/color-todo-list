import React, { memo, useState } from "react";
import Clock from "./Clock.js";

function IconOptColor() {
  return (
    <div className="headerUl__opt-color-move">
      <div className="IconOptColor__item1"></div>
      <div className="IconOptColor__item2"></div>
      <div className="IconOptColor__item3"></div>
      <div className="IconOptColor__item4"></div>
    </div>
  );
}

function Header1() {
  const [title, setTitle] = useState("ColorNote");

  return (
    <header>
      <ul className="headerUl">
        <li className="headerUl__title">{title}</li>

        <li className="headerUl__opt">
          <Clock />
          <div className="headerUl__opt-color hover__up">
            <IconOptColor />
          </div>
          <div className="headerUl__opt-more hover__up ">more</div>
        </li>
      </ul>
    </header>
  );
}

const Header1Memo = memo(Header1);

export default Header1Memo;
// export default Header1;
