import React from "react";

const ProfileAvatar = ({ imgURL, handleAuth }) => {
  console.log("Profile", imgURL);
  return (
    <div className="dropdown relative">
      <img
        src={imgURL}
        className="w-12 rounded-full dropdown-toggle cursor-pointer"
        alt="Profile"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        referrerPolicy="no-referrer"
      />
      <ul
        className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <p
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            onClick={handleAuth}
          >
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileAvatar;
