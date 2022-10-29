import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "../../redux-management/features/Post/postServices";
import HeaderNav from "../../components/Nav/HeaderNav";
import Sidebar from "../../components/Sidebar";
import "./Post.css";
import Feedbar from "../Feedbar";
import Users from "../../components/Profile/Users";
import Footer from "../../components/Footer/Footer";

export const PostView = () => {
  const dispatch = useDispatch();

  const { allPost } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <>
      <div>
        <HeaderNav />
        <div className="post-container">
          <div>
            <Sidebar post={allPost} />
          </div>
          <div className="post-container-col-2">
            {/* {allPost.loading && (
              <div>
                <iframe
                  src="https://giphy.com/embed/hL9q5k9dk9l0wGd4e0"
                  width="480"
                  height="318"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            )} */}
            {/* {post.loading && <Spinner text="Getting Data.." />}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null} */}
            <div className="post-box">
              {allPost.map((el) => (
                <Feedbar post={el} key={el._id} />
              ))}
            </div>

            <div>
              <Users />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostView;
