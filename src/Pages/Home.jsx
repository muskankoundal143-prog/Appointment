
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700">



      <section className="bg-[#eef8ff]">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">

  

          <div>

            <p className="text-sm font-semibold text-[#2196d2]">
              Your Health, Our Priority
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              Better Care.
              <span className="block text-[#2196d2]">
                Better Life.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
              Find trusted doctors and medical specialists
              for your health needs — all in one place.
            </p>

      

            <div className="mt-7 flex max-w-xl rounded-xl bg-white p-1.5 shadow-md">

              <div className="flex flex-1 items-center gap-2 px-3">

                <span className="text-[#5bb8e8]">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search doctor or specialty"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />

              </div>

              <Link
                to="/specialties"
                className="rounded-lg bg-[#2196d2] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#1686c2]"
              >
                Search
              </Link>

            </div>


            <div className="mt-5 flex flex-wrap gap-3">

              <Link
                to="/specialties"
                className="rounded-lg bg-[#2196d2] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1686c2]"
              >
                Find a Doctor
              </Link>

              <Link
                to="/specialties"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2196d2] shadow-sm hover:bg-[#f5fbff]"
              >
                Explore Specialties
              </Link>

            </div>


            <div className="mt-7 flex flex-wrap gap-5 text-xs text-slate-500">

              <span>
                <b className="text-[#2196d2]">✓</b> Verified Doctors
              </span>

              <span>
                <b className="text-[#2196d2]">✓</b> Easy Booking
              </span>

              <span>
                <b className="text-[#2196d2]">✓</b> Trusted Care
              </span>

            </div>

          </div>


  

          <div className="relative mx-auto w-full max-w-md">


            <div className="rounded-[2rem] bg-[#d9f1ff] p-5">

              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85"
                alt="Professional Doctor"
                className="h-[400px] w-full rounded-[1.5rem] object-cover object-top"
              />

            </div>




            <div className="absolute bottom-6 left-3 rounded-2xl bg-white px-5 py-4 shadow-lg">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-lg">
                  ✓
                </div>

                <div>

                  <p className="text-[10px] text-slate-400">
                    Trusted by
                  </p>

                  <p className="text-sm font-bold text-slate-700">
                    10,000+ Patients
                  </p>

                </div>

              </div>

            </div>


 

            <div className="absolute right-2 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg">

              <div className="flex items-center gap-2">

                <span className="text-xl">
                  ❤️
                </span>

                <div>

                  <p className="text-[9px] text-slate-400">
                    Specialist
                  </p>

                  <p className="text-xs font-bold text-slate-700">
                    Cardiology
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


                                                

      <section className="bg-white">

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-9 md:grid-cols-4">

          <Stat number="500+" text="Expert Doctors" />
          <Stat number="30+" text="Specialties" />
          <Stat number="10K+" text="Happy Patients" />
          <Stat number="4.9★" text="Patient Rating" />

        </div>

      </section>



      <section className="bg-[#f7fcff] px-6 py-14">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold text-[#2196d2]">
                Medical Specialties
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                Find the right care
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Choose a specialist for your needs.
              </p>

            </div>

            <Link
              to="/specialties"
              className="text-sm font-semibold text-[#2196d2]"
            >
              View All →
            </Link>

          </div>


          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">

            <Specialty icon="❤️" title="Heart" />
            <Specialty icon="🧠" title="Brain" />
            <Specialty icon="🫘" title="Kidney" />
            <Specialty icon="🦴" title="Bones" />
            <Specialty icon="👁️" title="Eyes" />
            <Specialty icon="🧴" title="Skin" />

          </div>

        </div>

      </section>


 

      <section className="bg-white px-6 py-14">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold text-[#2196d2]">
                Our Specialists
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                Meet our doctors
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Experienced professionals ready to help.
              </p>

            </div>

            <Link
              to="/specialties"
              className="text-sm font-semibold text-[#2196d2]"
            >
              View All →
            </Link>

          </div>


          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <DoctorCard
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=85"
              name="Dr. Rahul Sharma"
              specialty="Cardiologist"
              experience="15+ Years"
            />

            <DoctorCard
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=85"
              name="Dr. Priya Verma"
              specialty="Neurologist"
              experience="12+ Years"
            />

            <DoctorCard
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85"
              name="Dr. Amit Kapoor"
              specialty="Nephrologist"
              experience="18+ Years"
            />

          </div>

        </div>

      </section>




      <section className="bg-[#eef8ff] px-6 py-14">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          <div>

            <p className="text-sm font-semibold text-[#2196d2]">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              Healthcare made simple.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
              Everything you need to find the right doctor,
              explore specialties and discover hospitals.
            </p>

            <Link
              to="/specialties"
              className="mt-6 inline-block rounded-lg bg-[#2196d2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1686c2]"
            >
              Find Your Doctor →
            </Link>

          </div>


          <div className="grid grid-cols-2 gap-4">

            <Feature
              icon="✓"
              title="Verified Doctors"
              text="Trusted professionals"
            />

            <Feature
              icon="🔍"
              title="Easy Search"
              text="Find doctors quickly"
            />

            <Feature
              icon="🏥"
              title="Hospitals"
              text="Explore healthcare"
            />

            <Feature
              icon="💙"
              title="Patient Care"
              text="Care you can trust"
            />

          </div>

        </div>

      </section>


      <section className="bg-white px-6 py-14">

        <div className="mx-auto max-w-7xl rounded-3xl bg-[#dff4ff] px-7 py-10 text-center md:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
            🏥
          </div>

          <h2 className="mt-4 text-2xl font-bold text-slate-800">
            Looking for a Hospital?
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Find hospitals and healthcare services in one place.
          </p>

          <Link
            to="/hospital"
            className="mt-5 inline-block rounded-lg bg-[#2196d2] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1686c2]"
          >
            Explore Hospitals
          </Link>

        </div>

      </section>



      <section className="bg-[#f7fcff] px-6 py-14 text-center">

        <div className="mx-auto max-w-xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff4ff] text-2xl">
            🩺
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-800">
            Take care of your health today.
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Find the right doctor for your healthcare needs.
          </p>

          <Link
            to="/specialties"
            className="mt-5 inline-block rounded-lg bg-[#2196d2] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1686c2]"
          >
            Find a Doctor →
          </Link>

        </div>

      </section>

    </div>
  );
}


function Stat({ number, text }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-[#2196d2]">
        {number}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {text}
      </p>
    </div>
  );
}


function Specialty({ icon, title }) {
  return (
    <Link
      to="/specialties"
      className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7ff] text-xl">
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-700">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        Specialist
      </p>

    </Link>
  );
}


function DoctorCard({
  image,
  name,
  specialty,
  experience,
}) {
  return (
    <div className="rounded-2xl bg-[#f7fcff] p-4 shadow-sm">

      <img
        src={image}
        alt={name}
        className="h-64 w-full rounded-xl object-cover object-top"
      />

      <div className="px-1 pt-4">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-sm font-bold text-slate-800">
              {name}
            </h3>

            <p className="mt-1 text-xs font-medium text-[#2196d2]">
              {specialty}
            </p>

          </div>

          <span className="rounded-lg bg-white px-2 py-1 text-[10px] text-slate-500 shadow-sm">
            ★ 4.9
          </span>

        </div>

        <p className="mt-2 text-xs text-slate-400">
          {experience} experience
        </p>

        <Link
          to="/doctor"
          className="mt-4 block rounded-lg bg-[#2196d2] py-2.5 text-center text-xs font-semibold text-white hover:bg-[#1686c2]"
        >
          View Profile
        </Link>

      </div>

    </div>
  );
}


function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-[#2196d2]">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-700">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {text}
      </p>

    </div>
  );
}

