import styles from "./Header.module.css";

import { ReactComponent as ImageLogo } from "../../assets/images/todo-logo.svg";

const Header = () => {
  return (
    <div className={`container ${styles.header__container}`}>
      <div className={`content ${styles.header__content}`}>
        <a href="/">
          <ImageLogo />
        </a>
      </div>
    </div>
  );
};

export { Header };
