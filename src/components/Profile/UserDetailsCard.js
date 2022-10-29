import React, { useState } from "react";
import HeaderNav from "../Nav/HeaderNav";
import "./UserCard.css";
import { EmailOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "../EditProfile";
import Profile from "../../assets/Profile.jpeg";
import { ProfileTabs } from "./ProfileTabs";
import { editProfile } from "../../redux-management/features/User/userServices";
import { toast } from "react-toastify";
const UserDetailsCard = ({ userId }) => {
  const [details, setDetails] = useState({
    profession: "Web Developer",
    about:
      "I am a software developer who is well versed with JavaScript/ES6+,ReactJS & Redux and an intermediate in UI/UX concepts. I can build web apps also eager to learn new technologies and methodologies",
    contact: 9893663203,
    email: "jnaman475@gmail.com",
  });

  const { foundUser, allUser, token } = useSelector((store) => store.user);
  const { allPost } = useSelector((store) => store.post);
  const user = allUser.find((el) => el._id === userId);
  const userPost = allPost.filter((el) => el.username === user.username);

  return (
    <div>
      <HeaderNav />
      <div className="usercard-container">
        <ul style={{ listStyle: "none" }} className="usercard-container-col-2">
          <div>
            {" "}
            <img
              src="https://lensa.com/insights/wp-content/uploads/2021/02/NEW-Lensa-Insights-Cover-Photos-29-1.png
              "
              alt="user-profile-cover"
              className="usercard-cover-img"
            ></img>
          </div>
          <div className="usercard-typo">
            {userId !== foundUser._id && (
              <img src={Profile} alt="" className="usercard-profile-img"></img>
            )}

            {userId === foundUser._id && (
              <img
                src={Profile}
                alt="profile"
                className="usercard-profile-img"
              ></img>
            )}

            <div className="usercard-typo-2">
              <li className="usercard-name">
                {user.firstName} {user.lastName}
              </li>
              {userId === foundUser._id && <li>{details.profession}</li>}

              <li>
                {user.bio}
                {userId === foundUser._id && (
                  <EditProfile
                    setDetails={setDetails}
                    user={user}
                    details={details}
                  />
                )}
              </li>
            </div>
          </div>
          <div className="usercard-typo-col-3">
            <span>
              {userId === foundUser._id && (
                <span>{foundUser.following.length} </span>
              )}
              {userId !== foundUser._id && (
                <span>{user.following.length} </span>
              )}
              Followings
            </span>
            <span>{userPost.length} Posts </span>
            <span> {user.followers.length} Follower</span>
          </div>
          <p className="usercard-typo-col-4">
            <span
              style={{
                display: "block",
                textAlign: "left",
                paddingBottom: "0.5rem",
              }}
            >
              About
            </span>

            {userId !== foundUser._id && (
              <span>
                I am a software developer who is well versed with
                JavaScript/ES6+,ReactJS & Redux and an intermediate in UI/UX
                concepts. I can build web apps also eager to learn new
                technologies and methodologies
              </span>
            )}
            {userId === foundUser._id && <span>{details.about}</span>}
          </p>
          <p className="usercard-typo-col-5">
            <span
              style={{
                display: "block",
                textAlign: "left",
                paddingBottom: "0.7rem",
              }}
            >
              Contact me
            </span>
            <EmailOutlined />
            {userId !== foundUser._id && <span>9893663203</span>}
            {userId === foundUser._id && <span>{details.contact}</span>}
            <span style={{ display: "block", marginLeft: "1rem" }}> </span>
            <PhoneAndroidOutlined /> {user.username}
          </p>
        </ul>
        <div className="post-tab">
          <ProfileTabs user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetailsCard;
