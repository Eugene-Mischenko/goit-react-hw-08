import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <HashLoader loading={true} size={70} color="#0d50bb" />
    </div>
  );
}
