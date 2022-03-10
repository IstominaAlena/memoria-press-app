import { nanoid } from "nanoid";

import GetIcon from "../shared/GetIcon";

import s from "./Filter.module.css";

const filter = [
  "show all",
  "all grades",
  "all classes",
  "av.score",
  "av.speed",
  "all classes",
];

const Filter = () => {
  const items = filter.map((item) => (
    <li className={s.item} key={nanoid()}>
      <p className={s.text}>{item}</p>
      <GetIcon
        name="arrow-down"
        width={24}
        height={24}
        className="inside-svg"
      />
    </li>
  ));
  return (
    <div className={s.box}>
      <ul className={s.list}>{items}</ul>
      <button type="button" className={s.btn}>
        <GetIcon name="cross" width={16} height={16} className="inside-svg" />
        <span className={[s.text, s.cross].join(" ")}>clear all</span>
      </button>
    </div>
  );
};

export default Filter;
