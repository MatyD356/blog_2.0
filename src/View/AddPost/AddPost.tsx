import { useLoaderData } from 'react-router-dom';
import { Post } from './AddPost.Interfaces';
import classes from './addPost.module.css';

export default function AddPost() {
  const posts = useLoaderData() as Post[];
  return (
    <div className={classes.title}>
      {posts.map((item, index) => (
        <p key={index}>
          {item.body}, {item.title}
        </p>
      ))}
    </div>
  );
}

export async function loader() {
  return await new Promise<Post[]>((resolve) =>
    setTimeout(() => resolve([{ body: 'lorem', title: 'title' }]), 0)
  );
}
