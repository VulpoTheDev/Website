import styles from "../../styles/Button.module.scss";

interface IButtonProps {
  onClick?: () => void;
  text: string;
  link?: string;
  type?: "submit" | "button";
}

export default function Button({ onClick, text, link, type }: IButtonProps) {
  return (
    <div className={styles.button}>
      {link ? (
        <a href={link}>
          <button type={type}>{text}</button>
        </a>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
}
