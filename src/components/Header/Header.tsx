import RandomizeButton from "@/components/Buttons/RandomizeButton/RandomizeButton";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.container}>
      <h1 className={style.title}>Panini Creator</h1>
      <RandomizeButton />
    </header>
  );
};

export default Header;
