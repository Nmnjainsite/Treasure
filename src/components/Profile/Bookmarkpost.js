import React from "react";
import { useSelector } from "react-redux";
import Feedbar from "../../pages/Feedbar";
const BookmarkPost = () => {
  const { foundUser } = useSelector((store) => store.user);

  return (
    <>
      <div key={foundUser.bookmarks._id}>
        {" "}
        {foundUser.bookmarks.map((el) => (
          <Feedbar post={el} />
        ))}
      </div>
    </>
  );
};

export default BookmarkPost;
