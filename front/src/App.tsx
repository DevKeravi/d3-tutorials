import styles from "./App.module.scss";
import classNames from "classnames/bind";
import SvgMap from "./component/SvgMap/SvgMap";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("app-container")}>
      <div className={cx("header")}>
        <h1>D3 Tutorials</h1>
      </div>
      <div className={cx("content")}>
        <SvgMap />
      </div>
    </div>
  );
}

export default App;
