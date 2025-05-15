"use client";
import Link from "next/link";
import { GiPieChart } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const sidebarMenu = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: <GiPieChart className="w-5 h-5 text-gray-500 dark:text-white" />,
  },
  {
    label: "Product Management",
    route: "/product-management",
    icon: (
      <MdOutlineLocalGroceryStore className="w-5 h-5 text-gray-500 dark:text-white" />
    ),
  },
  {
    label: "User Management",
    route: "/user-management",
    icon: <FaUsersCog className="w-5 h-5 text-gray-500 dark:text-white" />,
  },
];

function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden sm:block">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <ul className="space-y-2 font-medium">
          {sidebarMenu.map((menu, index) => {
            const isActive = pathname == menu.route;

            return (
              <li key={index}>
                <Link
                  href={menu.route}
                  className={`${
                    isActive ? "bg-gray-200 dark:bg-gray-700" : ""
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group`}
                >
                  {menu.icon}
                  <span className="ms-3">{menu.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default AdminSidebar;
