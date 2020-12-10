import styles from "./style.module.css";

const CButton = ({ url, text, style }) => {
  return (
    <a href={url} className={styles["cbtn"]} style={style}>
      <span>{text}</span>
    </a>
  );
};

export default CButton;
