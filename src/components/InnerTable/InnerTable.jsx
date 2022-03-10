import PropTypes from "prop-types";

import GetIcon from "../shared/GetIcon";
import InnerBlock from "../InnerBlock";

import s from "./InnerTable.module.css";

const InnerTable = ({ data }) => {
  let input = <div className={s.checkbox}></div>;
  let rowClassName = "activeRow";

  let i = 0;
  const rows = data.tests.map(
    ({
      label,
      score,
      speed,
      total,
      expSpeed,
      concept,
      date,
      abcent,
      absent,
    }) => {
      if (abcent === true || absent === true) {
        input = (
          <div className={s.checkbox}>
            <GetIcon
              name="checkmark"
              width={8}
              height={8}
              className="outside-svg"
            />
          </div>
        );
        rowClassName = "passiveRow";
      }

      i += 1;
      return (
        <tr key={i} className={[s[rowClassName], s.bodyRow].join(" ")}>
          <td>{i}.</td>
          <td>{label}</td>
          <td>{score ? score : "NIL"}</td>
          <td>{speed ? speed : "NIL"}</td>
          <td>{total}</td>
          <td>{expSpeed}</td>
          <td>{concept}</td>
          <td>{date}</td>
          <td>{input}</td>
        </tr>
      );
    }
  );
  return (
    <div className={s.main}>
      <div className={s.container}>
        <InnerBlock datas={data} />
        <table className={s.innerTable}>
          <thead>
            <tr className={s.headRow}>
              <th>#</th>
              <th>Test Label</th>
              <th>Score</th>
              <th>Speed</th>
              <th>Total Q-ns</th>
              <th>Exp. Speed</th>
              <th>Concept</th>
              <th>Date</th>
              <th>Absent</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>

        <div className={s.box}>
          <p className={s.average}>Average</p>
          <p className={s.value}>96%</p>
          <p className={s.value}>Above expected</p>
        </div>
      </div>
    </div>
  );
};

export default InnerTable;

InnerTable.propTypes = {
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
