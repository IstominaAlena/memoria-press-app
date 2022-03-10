import PropTypes from "prop-types";

import s from "./SectionWrapper.module.css";

const SectionWrapper = ({ children, className }) => (
  <section className={s[className]}>
    <div className={s.container}>{children}</div>
  </section>
);

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
