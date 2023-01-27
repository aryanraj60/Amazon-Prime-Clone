import React, { useEffect } from "react";
import logo from "../assests/logo.svg";
import primeLogo from "../assests/prime-logo.png";
import { LoginButton, ProfileAvatar } from "./";
import { auth, provider } from "../utils/Firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          navigate("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((e) => alert(e.message));
    }
  };

  const setUser = (user) => {
    console.log("running set user", user);
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  console.log("Header Rendered!");
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/70 flex justify-between items-center h-20 px-5 z-20">
      <div className="h-full flex items-center">
        <img src={primeLogo} className="w-24" />
      </div>

      {username && (
        <>
          <div className="hidden h-full md:flex justify-start pl-6 items-center flex-1 gap-10 text-lg tracking-widest">
            <div className="cursor-pointer hover:text-blue-500">
              <p>Home</p>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <p>Search</p>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <p>Watchlist</p>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <p>Originals</p>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <p>Movies</p>
            </div>
          </div>
        </>
      )}

      <div>
        {userPhoto ? (
          <ProfileAvatar imgURL={userPhoto} handleAuth={handleAuth} />
        ) : (
          <LoginButton handleAuth={handleAuth} />
        )}
      </div>
    </nav>
  );
};

export default Header;
