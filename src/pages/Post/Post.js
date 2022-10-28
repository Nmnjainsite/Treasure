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
            <Sidebar />
          </div>
          <div className="post-container-col-2">
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
