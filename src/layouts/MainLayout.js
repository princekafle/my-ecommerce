"use client";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function MainLayout({ children }) {
  const { theme } = useSelector((state) => state.userPreference);

  return (
    // src ko sabai children component ma theme ra toast use hunxa
    <div className={theme}>
      {children}
      <ToastContainer />
    </div>
  );
}

export default MainLayout;