import React from "react";

const hospitals = [
  {
    name: "City Care Hospital",
    type: "Multi-Specialty Hospital",
    location: "Sector 22, Chandigarh",
  
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=90",
    facilities: ["24/7 Emergency", "Pharmacy", "ICU"],
  },
  {
    name: "LifeLine Medical Center",
    type: "Advanced Healthcare Center",
    location: "Phase 8, Mohali",
 
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=90",
    facilities: ["Emergency Care", "Laboratory", "ICU"],
  },
  {
    name: "Healing Hands Hospital",
    type: "Specialized Care Hospital",
    location: "Sector 34, Chandigarh",
   
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=90",
    facilities: ["24/7 Emergency", "Radiology", "Pharmacy"],
  },
];

const Hospital = () => {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
            ✦ Our Hospitals
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find the Right
            <span className="text-[#2196d2]"> Hospital</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover trusted hospitals and healthcare centers near you with
            modern facilities and experienced medical professionals.
          </p>

        </div>

 
        <div className="grid gap-7 lg:grid-cols-3">

          {hospitals.map((hospital) => (
            <div
              key={hospital.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2196d2]/30 hover:shadow-xl"
            >

              <div className="relative h-64 overflow-hidden bg-[#eaf7fd]">

                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

            
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#2196d2] shadow-md backdrop-blur-sm">
                  {hospital.type}
                </div>


              </div>

          
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {hospital.name}
                </h3>

               
                <div className="mt-3 flex items-start gap-2">
                  <span className="text-lg">📍</span>

                  <p className="text-sm leading-6 text-slate-600">
                    {hospital.location}
                  </p>
                </div>

                

          
                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {hospital.facilities.map((facility) => (
                    <span
                      key={facility}
                      className="rounded-full bg-[#2196d2]/10 px-3 py-1.5 text-xs font-medium text-[#2196d2]"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    className="rounded-xl border-2 border-[#2196d2] py-3 text-sm font-semibold text-[#2196d2] transition-all duration-300 hover:bg-[#2196d2] hover:text-white"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    className="rounded-xl bg-[#2196d2] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1976b5] hover:shadow-lg hover:shadow-[#2196d2]/20"
                  >
                    Book Now
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-xl border-2 border-[#2196d2] px-7 py-3 font-semibold text-[#2196d2] transition-all duration-300 hover:bg-[#2196d2] hover:text-white"
          >
            View All Hospitals →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hospital;




