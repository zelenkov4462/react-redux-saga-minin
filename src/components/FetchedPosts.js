import Post from "./Post";
import {useDispatch} from "react-redux";

export default () => {
  const dispatch = useDispatch()
  const posts =
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};
