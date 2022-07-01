import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <h2 className="text-center">Список постов пуст</h2>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
