import GetIcon from "../shared/GetIcon";

import s from "./DownloadBtn.module.css";

const DownloadBtn = () => {
  return (
    <>
      <GetIcon name="upload" width={16} height={16} className="inside-svg" />
      <span className={s.text}>Export CSV</span>
    </>
  );
};

export default DownloadBtn;
