
import hero from "@/src/assets/images/auth-hero.png";
import bg from "@/src/assets/images/auth-bg.png";
import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <section className="flex justify-center py-20 max-w-screen mx-auto px-10">
      <Image
        src={bg}
        alt=""
        height={2000}
        width={2000}
        className="h-full w-full fixed top-0 left-0 right-0 -z-1 opacity-50 object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/3 xl:w-1/2 shadow-md rounded-xl bg-white shadow-blue-100 min-h-[70vh]">
        <div className="py-12 px-10">{children}</div>
        <Image
          src={hero}
          alt=""
          height={1200}
          width={1200}
          className="h-full object-cover w-auto rounded-r-xl hidden md:block"
        />
      </div>
    </section>
  );
}
export default AuthLayout;
