import Styles from "./Header.module.css";
interface IProps {
  title: string;
}

const Header: React.FC<IProps> = (props) => {
  const { title } = props;
  return (
    <div className={`${Styles.nav}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
