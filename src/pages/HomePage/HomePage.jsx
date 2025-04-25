import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome!</h1>
      <p>
        To access and manage your contact list, please register or log in to
        your account. Registration is quick and easy. Already have an account?
        Click{" "}
        <Link to="/login" className={css.homePageLink}>
          log in
        </Link>{" "}
        to continue. New here? Click{" "}
        <Link to="/register" className={css.homePageLink}>
          register
        </Link>{" "}
        to join us!
      </p>
    </div>
  );
}
