import PropTypes from "prop-types";

import sprite from "../../../images/sprite.svg";

import s from "./GetIcon.module.css";

const GetIcon = ({ name, width, height, className }) => {
  return (
    <svg width={width} height={height} className={s[className]}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};

export default GetIcon;

GetIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
