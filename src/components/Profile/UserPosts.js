import React, { useEffect } from "react";
import NoPost from "../../assets/NoPost.svg";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "../../redux-management/features/Post/postServices";
import Feedbar from "../../pages/Feedbar";
const UserPosts = ({ user }) => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((store) => store.user);
  const { allPost } = useSelector((store) => store.post);
  const userItem = allUser.find((el) => el._id === user._id);
  const userPost = allPost.filter((el) => el.username === userItem.username);
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <div>
      <div className="post-box" style={{ textAlign: "left" }}>
        {userPost.length > 0 ? (
          userPost.map((el) => (
            <div>
              {" "}
              <Feedbar post={el} key={el._id} />
            </div>
          ))
        ) : (
          <img src={NoPost} alt="" className="empty-img"></img>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
