
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">


        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-lg font-bold text-[#2196d2]">
            +
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none text-slate-800">
              HealthCare<span className="text-[#2196d2]">+</span>
            </h1>

            <p className="mt-1 hidden text-[8px] font-medium uppercase tracking-widest text-slate-400 sm:block">
              Better Care. Better Life.
            </p>
          </div>

        </Link>




        <div className="hidden items-center gap-1 md:flex">

          <NavLink to="/" text="Home" />

          <NavLink
            to="/specialties"
            text="Specialties"
          />

         

          <NavLink
            to="/hospital"
            text="Hospital"
          />

        </div>



        <div className="hidden md:block">

          <Link
            to="/specialties"
            className="rounded-xl bg-[#2196d2] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1686c2] hover:shadow-md"
          >
            Find Doctor
          </Link>

        </div>



        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-[#2196d2] md:hidden"
          aria-label="Toggle menu"
        >

          {menuOpen ? (
            <span className="text-xl">
              ×
            </span>
          ) : (
            <div className="space-y-1">

              <span className="block h-0.5 w-5 bg-[#2196d2]" />
              <span className="block h-0.5 w-5 bg-[#2196d2]" />
              <span className="block h-0.5 w-5 bg-[#2196d2]" />

            </div>
          )}

        </button>

      </div>



      {menuOpen && (

        <div className="bg-white px-5 pb-5 md:hidden">

          <div className="space-y-1 rounded-2xl bg-[#f4fbff] p-3">

            <MobileLink
              to="/"
              text="Home"
              onClick={() => setMenuOpen(false)}
            />

            <MobileLink
              to="/specialties"
              text="Specialties"
              onClick={() => setMenuOpen(false)}
            />

           

            <MobileLink
              to="/hospital"
              text="Hospitals"
              onClick={() => setMenuOpen(false)}
            />

            <div className="pt-2">

              <Link
                to="/specailties"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl bg-[#2196d2] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                Find a Doctor →
              </Link>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}


function NavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eef8ff] hover:text-[#2196d2]"
    >
      {text}
    </Link>
  );
}


function MobileLink({ to, text, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#2196d2]"
    >
      <span>{text}</span>

      <span className="text-[#8bcbea]">
        →
      </span>
    </Link>
  );
}
