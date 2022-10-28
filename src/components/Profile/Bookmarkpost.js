import React from "react";
import { useSelector } from "react-redux";
import Feedbar from "../../pages/Feedbar";
import NoPost from "../../assets/NoPost.svg";
const BookmarkPost = () => {
  const { foundUser } = useSelector((store) => store.user);

  return (
    <>
      <div
        key={foundUser.bookmarks._id}
        className="post-box"
        style={{ textAlign: "left" }}
      >
        {foundUser.bookmarks.length > 0 ? (
          foundUser.bookmarks.map((el) => <Feedbar post={el} />)
        ) : (
          <img src={NoPost} alt="" className="empty-img"></img>
        )}
      </div>
    </>
  );
};

export default BookmarkPost;
