import React from "react";
import styles from '../styles/Services.module.scss'

export interface IServiceProps {
  service: string;
  icon: string;
  description: string;
  price: string;
}

export const Service = ({
  description,
  icon,
  price,
  service,
}: IServiceProps) => {
  return (
    <div className={styles.service}>
      <h1>{service}</h1>
      <h2>{price}</h2>
      <span className={icon} />
      <p>With a {price.split("")[0].toLowerCase() + price.slice(1)} {description}</p>
      <a href="mailto:vulpothedev@gmail.com"><button>Email</button></a>
    </div>
  );
};
