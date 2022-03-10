import s from "./NavListCreator.module.css";

const NavListCreator = ({ arr }) => {
  let classItem;
  const items = arr.map((item) => {
    item === "students"
      ? (classItem = [s.item, s.current].join(" "))
      : (classItem = s.item);
    return (
      <li key={item} className={classItem}>
        <a href={`./${item}`} className={s.link}>
          {item}
        </a>
      </li>
    );
  });
  return <ul className={s.list}>{items}</ul>;
};

export default NavListCreator;
