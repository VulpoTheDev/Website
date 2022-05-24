import styles from "../../styles/Button.module.scss";

interface IButtonProps {
  onClick?: () => void;
  text: string;
  link?: string;
}

export default function Button({ onClick, text, link }: IButtonProps) {
  return (
    <div className={styles.button}>
      {link ? (
        <a href={link}>
          <button>{text}</button>
        </a>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
}
