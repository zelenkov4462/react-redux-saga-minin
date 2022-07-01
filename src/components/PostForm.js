import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return;
    }

    const newPost = {
      title: title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost: createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
