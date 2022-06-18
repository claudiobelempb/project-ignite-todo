import ImageLogo from "../../assets/images/todologo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className={`container header__container`}>
      <div className={`content header__content`}>
        <a href="/">
          <img src={ImageLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export { Header };
