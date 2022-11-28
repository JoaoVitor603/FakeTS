import style from "./style.module.scss";

interface props {
  title: React.ReactNode;
  content: React.ReactNode | string;
  className?: string;
}

export default function Card({
  title,
  content,
  className,
}: props): React.ReactElement {
  return (
    <div className={style.card}>
      <p className={style.title}>{title}</p>
      <div className={`${style.content} ${className}`}>{content}</div>
    </div>
  );
}
