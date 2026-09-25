import React from "react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Nephrologist",
    qualification: "MBBS, MD - Nephrology",
    experience: "12 Years Experience",
    rating: "4.9",
    reviews: "128 Reviews",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=90",
  },
  {
    name: "Dr. Michael Anderson",
    specialty: "Neurologist",
    qualification: "MBBS, MD - Neurology",
    experience: "10 Years Experience",
    rating: "4.8",
    reviews: "96 Reviews",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=90",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Cardiologist",
    qualification: "MBBS, DM - Cardiology",
    experience: "15 Years Experience",
    rating: "4.9",
    reviews: "154 Reviews",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=90",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic",
    qualification: "MBBS, MS - Orthopedics",
    experience: "11 Years Experience",
    rating: "4.8",
    reviews: "112 Reviews",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=90",
  },
];

const Doctor = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
            ✦ Our Doctors
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet Our
            <span className="text-[#2196d2]"> Specialists</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Meet our experienced healthcare professionals dedicated to
            providing quality and personalized care for you and your family.
          </p>

        </div>

        {/* ================= DOCTOR CARDS ================= */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2196d2]/30 hover:shadow-xl"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative h-72 overflow-hidden bg-[#eaf7fd]">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Available Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Available
                </div>

                {/* Rating Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-md backdrop-blur-sm">
                  <span className="text-yellow-500">★</span>
                  {doctor.rating}
                </div>

              </div>

              {/* ================= CARD CONTENT ================= */}
              <div className="p-5">

                {/* Specialty */}
                <p className="text-sm font-semibold text-[#2196d2]">
                  {doctor.specialty}
                </p>

                {/* Doctor Name */}
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                {/* Qualification */}
                <p className="mt-2 text-sm text-slate-500">
                  {doctor.qualification}
                </p>

                {/* Experience */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2196d2]/10">
                    🩺
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    {doctor.experience}
                  </span>
                </div>

                {/* Reviews */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm tracking-wide text-yellow-500">
                    ★★★★★
                  </span>

                  <span className="text-xs text-slate-500">
                    {doctor.reviews}
                  </span>
                </div>

                {/* Appointment Button */}
                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2196d2] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#1976b5] hover:shadow-lg hover:shadow-[#2196d2]/20"
                >
                  Book Appointment
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-xl border-2 border-[#2196d2] px-7 py-3 font-semibold text-[#2196d2] transition-all duration-300 hover:bg-[#2196d2] hover:text-white"
          >
            View All Doctors →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Doctor;



