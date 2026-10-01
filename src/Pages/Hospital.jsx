import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85",
      location: "Mohali, Punjab",
      reviews: 245,
      phone: "+91 98765 43210",
      email: "citycare@gmail.com",
      emergency: "24/7 Emergency",
      beds: 250,
      doctors: 45,
      specialties: [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "General Medicine",
      ],
      description:
        "City Care Hospital is a multi-specialty hospital providing advanced medical treatment with experienced doctors and modern facilities.",
      facilities: [
        "24/7 Emergency",
        "ICU",
        "Pharmacy",
        "Laboratory",
        "Ambulance",
        "Blood Bank",
      ],
    },

    {
      id: 2,
      name: "Healing Heart Hospital",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85",
      location: "Chandigarh",
      reviews: 189,
      phone: "+91 98765 12345",
      email: "healingheart@gmail.com",
      emergency: "24/7 Emergency",
      beds: 180,
      doctors: 35,
      specialties: [
        "Cardiology",
        "Heart Surgery",
        "Neurology",
        "Pediatrics",
      ],
      description:
        "Healing Heart Hospital provides specialized cardiac and multi-specialty medical services with modern technology.",
      facilities: [
        "ICU",
        "Emergency",
        "Operation Theatre",
        "Pharmacy",
        "Diagnostic Center",
      ],
    },

    {
      id: 3,
      name: "Apollo Medical Center",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85",
      location: "Kharar, Punjab",
      reviews: 156,
      phone: "+91 98765 67890",
      email: "apollo@example.com",
      emergency: "24/7 Emergency",
      beds: 150,
      doctors: 30,
      specialties: [
        "General Medicine",
        "Orthopedics",
        "Dermatology",
        "ENT",
      ],
      description:
        "Apollo Medical Center offers comprehensive healthcare services with qualified doctors and modern diagnostic facilities.",
      facilities: [
        "Emergency",
        "Pharmacy",
        "X-Ray",
        "Laboratory",
        "Ambulance",
      ],
    },

    {
      id: 4,
      name: "Sunrise Multispeciality Hospital",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85",
      location: "Chandigarh",
      reviews: 120,
      phone: "+91 98765 11111",
      email: "sunrise@gmail.com",
      emergency: "24/7 Emergency",
      beds: 200,
      doctors: 40,
      specialties: [
        "Gynecology",
        "Pediatrics",
        "Orthopedics",
        "General Surgery",
      ],
      description:
        "Sunrise Multispeciality Hospital provides quality healthcare services for patients of all age groups.",
      facilities: [
        "ICU",
        "Emergency",
        "Pharmacy",
        "Laboratory",
        "Operation Theatre",
      ],
    },

    {
      id: 5,
      name: "Green Valley Hospital",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
      location: "Mohali, Punjab",
      reviews: 98,
      phone: "+91 98765 22222",
      email: "greenvalley@gmail.com",
      emergency: "24/7 Emergency",
      beds: 220,
      doctors: 38,
      specialties: [
        "Cardiology",
        "Dermatology",
        "Pediatrics",
        "ENT",
      ],
      description:
        "Green Valley Hospital provides patient-focused healthcare with modern treatment facilities and experienced specialists.",
      facilities: [
        "ICU",
        "Emergency",
        "Pharmacy",
        "MRI",
        "Laboratory",
      ],
    },

    {
      id: 6,
      name: "LifeCare Medical Hospital",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=85",
      location: "Zirakpur, Punjab",
      reviews: 134,
      phone: "+91 98765 33333",
      email: "lifecare@gmail.com",
      emergency: "24/7 Emergency",
      beds: 190,
      doctors: 32,
      specialties: [
        "General Medicine",
        "Orthopedics",
        "Neurology",
        "General Surgery",
      ],
      description:
        "LifeCare Medical Hospital offers comprehensive medical services with modern infrastructure and qualified healthcare professionals.",
      facilities: [
        "Emergency",
        "ICU",
        "Pharmacy",
        "X-Ray",
        "Ambulance",
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingHospital, setBookingHospital] = useState(null);

  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    console.log("Booking Data:", {
      hospital: bookingHospital,
      ...bookingData,
    });

    alert(
      `Appointment booked successfully at ${bookingHospital.name}`
    );

    setBookingHospital(null);

    setBookingData({
      name: "",
      phone: "",
      date: "",
      time: "",
      department: "",
      message: "",
    });
  };

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        hospital.name.toLowerCase().includes(searchText) ||
        hospital.location.toLowerCase().includes(searchText) ||
        hospital.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        locationFilter === "All" ||
        hospital.location === locationFilter;

      return matchesSearch && matchesLocation;
    });
  }, [search, locationFilter]);

  const visibleHospitals = showAll
    ? filteredHospitals
    : filteredHospitals.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f7fcff] text-slate-700">

      <section className="bg-[#eef8ff] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold text-[#2196d2]">
              Healthcare Near You
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              Find the Right
              <span className="block text-[#2196d2]">
                Hospital for You.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Explore trusted hospitals, compare facilities,
              discover specialties and book appointments with ease.
            </p>

      
           

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
              <span>
                <b className="text-[#2196d2]">✓</b>{" "}
                Trusted Hospitals
              </span>

              <span>
                <b className="text-[#2196d2]">✓</b>{" "}
                Modern Facilities
              </span>

              <span>
                <b className="text-[#2196d2]">✓</b>{" "}
                Easy Booking
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">

            <div className="rounded-[2rem] bg-[#d9f1ff] p-5">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=85"
                alt="Hospital"
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute bottom-6 left-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-[10px] text-slate-400">
                Available Hospitals
              </p>

              <p className="text-lg font-bold text-slate-800">
                50+
              </p>

              <p className="text-xs text-[#2196d2]">
                Healthcare Facilities
              </p>
            </div>

            <div className="absolute right-2 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏥</span>

                <div>
                  <p className="text-[9px] text-slate-400">
                    Emergency
                  </p>

                  <p className="text-xs font-bold text-slate-700">
                    24/7 Available
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

     
      <section className="bg-white px-6 py-9">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

          <Stat
            number="50+"
            text="Hospitals"
          />

          <Stat
            number="500+"
            text="Doctors"
          />

          <Stat
            number="30+"
            text="Specialties"
          />

          <Stat
            number="24/7"
            text="Emergency Care"
          />

        </div>
      </section>

    
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold text-[#2196d2]">
                Find Healthcare
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-800">
                {showAll
                  ? "All Hospitals"
                  : "Popular Hospitals"}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {filteredHospitals.length} hospitals available
              </p>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-lg bg-[#2196d2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1686c2]"
            >
              {showAll
                ? "Show Less"
                : "View All Hospitals"}
            </button>

          </div>

          {visibleHospitals.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <div className="text-4xl">
                🏥
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-700">
                No hospitals found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Try another hospital name, location or specialty.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setLocationFilter("All");
                }}
                className="mt-5 rounded-lg bg-[#2196d2] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {visibleHospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative">

                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="h-52 w-full object-cover"
                    />

                    <div className="absolute right-3 top-3 rounded-full bg-[#2196d2] px-3 py-1 text-xs font-semibold text-white shadow">
                      {hospital.emergency}
                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-slate-800">
                      {hospital.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {hospital.location}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {hospital.doctors} Doctors
                      <span className="mx-2">•</span>
                      {hospital.beds} Beds
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {hospital.specialties
                        .slice(0, 3)
                        .map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full bg-[#eef8ff] px-3 py-1 text-xs font-medium text-[#2196d2]"
                          >
                            {specialty}
                          </span>
                        ))}
                    </div>

                    <div className="mt-4 text-xs text-slate-400">
                      {hospital.reviews} patient reviews
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">

                      <button
                        onClick={() =>
                          setSelectedHospital(hospital)
                        }
                        className="rounded-lg border border-[#2196d2] px-4 py-2.5 text-sm font-medium text-[#2196d2] transition hover:bg-[#eef8ff]"
                      >
                        See More
                      </button>

                      <button
                        onClick={() =>
                          setBookingHospital(hospital)
                        }
                        className="rounded-lg bg-[#2196d2] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1686c2]"
                      >
                        Book Now
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-semibold text-[#2196d2]">
              Hospital Services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              Healthcare facilities you can trust
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
              Explore hospitals with essential facilities and
              specialized healthcare services.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ServiceCard
              icon="🚑"
              title="Emergency Care"
              text="24/7 emergency services for urgent medical needs."
            />

            <ServiceCard
              icon="🩺"
              title="Specialists"
              text="Experienced doctors across multiple specialties."
            />

            <ServiceCard
              icon="🧪"
              title="Diagnostics"
              text="Modern laboratory and diagnostic facilities."
            />

            <ServiceCard
              icon="💊"
              title="Pharmacy"
              text="Convenient pharmacy services for patients."
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
              We make it easier to discover hospitals, compare
              facilities and book appointments from one place.
            </p>

            <div className="mt-6 space-y-4">

              <Benefit
                title="Verified Information"
                text="Explore hospital details, facilities and specialties."
              />

              <Benefit
                title="Easy Appointment Booking"
                text="Choose a hospital and request an appointment easily."
              />

              <Benefit
                title="Multiple Specialties"
                text="Find healthcare providers for different medical needs."
              />

            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="grid grid-cols-2 gap-4">

              <InfoBox
                number="50+"
                text="Hospitals"
              />

              <InfoBox
                number="500+"
                text="Doctors"
              />

              <InfoBox
                number="10K+"
                text="Patients"
              />

              <InfoBox
                number="4.8★"
                text="Average Rating"
              />

            </div>

          </div>

        </div>
      </section>

    
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#dff4ff] px-7 py-12 text-center md:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
            🏥
          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-800">
            Need medical care?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Find a hospital, explore specialties and book an
            appointment with ease.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

           <Link
              to="/specialties"
              className="rounded-lg bg-[#2196d2] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1686c2]"
            >
            Explore Doctors
            </Link>

           
          </div>

        </div>
      </section>

  
      <footer className="bg-slate-900 px-6 py-12 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-4">

        
            <div>
              <h2 className="text-2xl font-bold">
              Health
                <span className="text-[#2196d2]">
                  Care
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Find trusted hospitals, doctors and healthcare
                services all in one place.
              </p>
            </div>

            
            <div>
              <h3 className="font-semibold">
                Quick Links
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <Link
                  to="/"
                  className="block transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/specialties"
                  className="block transition hover:text-white"
                >
                  Specialties
                </Link>

                <Link
                  to="/hospital"
                  className="block transition hover:text-white"
                >
                  Hospitals
                </Link>

                <Link
                  to="/appointment"
                  className="block transition hover:text-white"
                >
                  Appointment
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Services
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>Find a Hospital</p>
                <p>Find a Doctor</p>
                <p>Book Appointment</p>
                <p>Medical Specialties</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Contact
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p> +91 98765 43210</p>
                <p> support@medicare.com</p>
                <p> Punjab, India</p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
            © 2026 MediCare. All rights reserved.
          </div>

        </div>

      </footer>

   
      {selectedHospital && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white">

            <img
              src={selectedHospital.image}
              alt={selectedHospital.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    {selectedHospital.name}
                  </h2>

                  <p className="mt-2 text-slate-500">
                     {selectedHospital.location}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedHospital(null)
                  }
                  className="text-2xl text-slate-400 hover:text-red-500"
                >
                  ✕
                </button>

              </div>

              <div className="mt-5 rounded-xl bg-yellow-50 p-4">

                <span className="font-bold text-yellow-600">
                  ★ {selectedHospital.rating}
                </span>

                <span className="ml-2 text-sm text-slate-600">
                  ({selectedHospital.reviews} reviews)
                </span>

              </div>

           
              <div className="mt-6">

                <h3 className="text-xl font-bold">
                  About Hospital
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {selectedHospital.description}
                </p>

              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <strong className="text-xl">
                    {selectedHospital.doctors}
                  </strong>

                  <p className="text-sm text-slate-500">
                    Doctors
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <strong className="text-xl">
                    {selectedHospital.beds}
                  </strong>

                  <p className="text-sm text-slate-500">
                    Beds
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <strong className="text-xl">
                    24/7
                  </strong>

                  <p className="text-sm text-slate-500">
                    Emergency
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <strong className="text-xl">
                    {selectedHospital.rating}
                  </strong>

                  <p className="text-sm text-slate-500">
                    Rating
                  </p>
                </div>

              </div>

              <div className="mt-7">

                <h3 className="text-xl font-bold">
                  Specialties
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">

                  {selectedHospital.specialties.map(
                    (specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-[#eef8ff] px-4 py-2 text-sm text-[#2196d2]"
                      >
                        {specialty}
                      </span>
                    )
                  )}

                </div>

              </div>

              <div className="mt-7">

                <h3 className="text-xl font-bold">
                  Facilities
                </h3>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {selectedHospital.facilities.map(
                    (facility) => (
                      <div
                        key={facility}
                        className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700"
                      >
                        <span className="text-[#2196d2]">
                          ✓
                        </span>{" "}
                        {facility}
                      </div>
                    )
                  )}

                </div>

              </div>

          
              <div className="mt-7 rounded-xl bg-slate-50 p-5">

                <h3 className="text-xl font-bold">
                  Contact
                </h3>

                <p className="mt-3 text-sm">
                   {selectedHospital.phone}
                </p>

                <p className="mt-2 text-sm">
                 {selectedHospital.email}
                </p>

              </div>

              <button
                onClick={() => {
                  setSelectedHospital(null);
                  setBookingHospital(selectedHospital);
                }}
                className="mt-6 w-full rounded-lg bg-[#2196d2] py-3 font-semibold text-white hover:bg-[#1686c2]"
              >
                Book Appointment
              </button>

            </div>
          </div>

        </div>
      )}

      {bookingHospital && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Book Appointment
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {bookingHospital.name}
                </p>
              </div>

              <button
                onClick={() =>
                  setBookingHospital(null)
                }
                className="text-2xl text-slate-400 hover:text-red-500"
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleBooking}
              className="mt-6 space-y-4"
            >

              
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  placeholder="Enter patient name"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                />
              </div>

           
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                />
              </div>

          
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Department
                </label>

                <select
                  name="department"
                  value={bookingData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                >
                  <option value="">
                    Select Department
                  </option>

                  {bookingHospital.specialties.map(
                    (specialty) => (
                      <option
                        key={specialty}
                        value={specialty}
                      >
                        {specialty}
                      </option>
                    )
                  )}
                </select>
              </div>

            
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                />
              </div>

            
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Appointment Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                />
              </div>

            
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your problem..."
                  rows="3"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2196d2]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2196d2] py-3 font-semibold text-white hover:bg-[#1686c2]"
              >
                Confirm Appointment
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};


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


function ServiceCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-[#f7fcff] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff4ff] text-2xl">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-700">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {text}
      </p>

    </div>
  );
}



function Benefit({ title, text }) {
  return (
    <div className="flex gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2196d2] shadow-sm">
        ✓
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-700">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {text}
        </p>
      </div>

    </div>
  );
}



function InfoBox({ number, text }) {
  return (
    <div className="rounded-2xl bg-[#f7fcff] p-6 text-center">

      <p className="text-2xl font-bold text-[#2196d2]">
        {number}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {text}
      </p>

    </div>
  );
}

export default Hospital;
