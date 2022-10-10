import styles from "./SvgMap.module.scss";
import classNames from "classnames/bind";
import MapData from "./MapData";
const cx = classNames.bind(styles);

const SvgMap = () => {
  return (
    <div className={cx("map-container")}>
      <MapData />
    </div>
  );
};
export default SvgMap;
