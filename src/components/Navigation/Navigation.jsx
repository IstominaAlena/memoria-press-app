import user from "../../images/users/user.jpg";

import NavListCreator from "../NavListCreator";
import GetIcon from "../shared/GetIcon";

import s from "./Navigation.module.css";

const nav = [
  "analytics",
  "gradebooks",
  "tests",
  "students",
  "teachers",
  "archive",
];

const Navigation = () => {
  return (
    <div className={s.header}>
      <div className={s.box}>
        <span className={s.nav}>School 1</span>

        <GetIcon
          name="arrow-down"
          width={24}
          height={24}
          className="outside-svg"
        />
      </div>
      <NavListCreator arr={nav} />
      <div className={s.box}>
        <img
          src={user}
          alt="UserAvatar"
          width="32"
          height="32"
          className={s.avatar}
        />
        <GetIcon
          name="arrow-down"
          width={24}
          height={24}
          className="outside-svg"
        />
      </div>
    </div>
  );
};

export default Navigation;
