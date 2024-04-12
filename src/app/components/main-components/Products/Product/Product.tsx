import styles from "./Product.module.css";

export interface IProduct {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  withSale?: boolean;
  customProductWrapperClass?: string;
  key?: string;
}

export function cn(...names: (string | undefined)[]): string {
  return names.filter((value) => Boolean(value)).join(" ");
}

/* const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}; */

export const Product: React.FC<IProduct> = ({
  src,
  alt,
  title,
  subtitle,
  customProductWrapperClass,
  withSale,
  key,
}) => {
  return (
    <div
      className={cn(styles.product, customProductWrapperClass)}
      key={key}
      /*      onClick={handleClick} */
    >
      <img src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
};
