"use client";

import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import AuthUserPopup from "./AuthUserPopup";

function AuthUser({ user }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <button
        className="border-2 rounded-full p-2"
        onClick={() => setShowPopup(!showPopup)}
      >
        <FaUserLarge />
      </button>
      {showPopup && <AuthUserPopup user={user} setShowPopup={setShowPopup} />}
    </div>
  );
}

export default AuthUser;
