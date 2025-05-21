"use client";

import AdminSidebar from "@/src/components/admin/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { allowedAdminRoles } from "@/src/helpers/auth";
import { LOGIN_ROUTE } from "@/src/constants/routes";

// every layout le children props linxa to show this layout is available for all pages in admin
function AdminLayout({ children }) {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/"); 
// if there is no any logged in user , It redirects the user to the homepage ("/").

    // check if logged in user is normal user or admin and merchant and allow only MERCHANT and ADMIN roles
    const isAllowed = allowedAdminRoles(user?.roles);

    if (!isAllowed) router.push("/"); // if user in normal user that is not an admin or merchant it will push to homepage
  }, [router, user]); //This effect runs every time the router or user changes.

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] dark:bg-slate-800">
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
}

export default AdminLayout;
