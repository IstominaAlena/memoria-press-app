import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import GetIcon from "../shared/GetIcon";

import s from "./InnerBlock.module.css";

const arr1 = ["All concepts", "All score", "All speed"];
const arr2 = [
  "90%+ accuracy",
  "80 - 89% accuracy",
  "50 - 79% accuracy",
  "below 50% accuracy",
];
const arr3 = ["above expected", "as expected", "below expected"];

const InnerBlock = ({ datas }) => {
  const filterItems = arr1.map((item) => (
    <li key={nanoid()} className={s.filterItem}>
      <span>{item}</span>

      <GetIcon
        name="arrow-down"
        width={24}
        height={24}
        className="outside-svg"
      />
    </li>
  ));

  const scoreItems = arr2.map((item) => (
    <li key={nanoid()} className={s.item}>
      <div></div>
      {item}
    </li>
  ));
  const speedItems = arr3.map((item) => (
    <li key={nanoid()} className={s.item}>
      <div></div>
      {item}
    </li>
  ));
  return (
    <>
      <div className={s.container}>
        <div className={s.box}>
          <p className={s.title}>
            Student: <span>{datas.name}</span>
          </p>
          <p className={s.title}>
            id: <span>{datas.id}</span>
          </p>
        </div>

        <ul className={s.list}>{filterItems}</ul>
      </div>
      <div className={s.box}>
        <p className={s.title}>Score</p>
        <ul className={s.list}>{scoreItems}</ul>
      </div>

      <div className={s.box}>
        <p className={s.title}>speed</p>
        <ul className={s.list}>{speedItems}</ul>
      </div>
    </>
  );
};

export default InnerBlock;

InnerBlock.propTypes = {
  datas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    parents: PropTypes.arrayOf(PropTypes.string),
    tests: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        score: PropTypes.number,
        speed: PropTypes.string,
        total: PropTypes.number,
        expSpeed: PropTypes.string,
        concept: PropTypes.string,
        date: PropTypes.string,
        abcent: PropTypes.bool,
      })
    ),
  }),
};
