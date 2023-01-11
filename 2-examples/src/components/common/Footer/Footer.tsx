import Styles from "./Footer.module.css";
interface IProps {
  title: string;
}

const Footer: React.FC<IProps> = (props) => {
  const { title } = props;
  return (
    <div className={`${Styles.footer}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Footer;