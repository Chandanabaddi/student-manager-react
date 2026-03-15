import React, { useState, useEffect } from "react";
import axios from "axios";

function FakePostList() {

  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("all");

  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fake API Posts</h2>

      <button onClick={loadPosts}>Refresh Posts</button>

      <br /><br />

      <label>Filter by User: </label>
      <select onChange={(e) => setUserId(e.target.value)}>
        <option value="all">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul>
        {posts
          .filter((post) => userId === "all" || post.userId === Number(userId))
          .map((post) => (
            <li key={post.id}>
              <b>{post.title}</b>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FakePostList;