import logo from "../assets/logo-img.png";

function NavBar() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-xl bg-white p-8 shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Tailwind CSS works!
        </h1>
        <p className="mt-2 text-blue-500">
          Start editing your React components with utility classes.
        </p>
      </div>
    </div>
  );
}

export default NavBar;
