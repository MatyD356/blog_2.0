import { useLoaderData } from 'react-router-dom';
import { HomeProps } from './Home.Interfaces';
import classes from './home.module.css';

export default function Home(props: HomeProps) {
  const { message, title } = props;
  const data = useLoaderData() as string[];
  return (
    <div className={classes.title}>
      <h1>Home</h1>
      <h2>{message}</h2>
      <h2>{title}</h2>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export async function loader() {
  return await new Promise<string[]>((resolve) => setTimeout(() => resolve(['hi']), 0));
}
