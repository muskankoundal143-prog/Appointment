import React, { useState } from "react";

const specialists = [
  {
    id: 1,
    name: "Cardiology",
    icon: "❤️",
    description: "Heart and cardiovascular care",
    doctors: [
      {
        id: 101,
        name: "Dr. Arjun Mehta",
        qualification: "MBBS, MD, DM Cardiology",
        experience: "14 Years",
        hospital: "Healing Heart Hospital",
        fee: 1200,
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 2,
    name: "Neurology",
    icon: "🧠",
    description: "Brain and nerve care",
    doctors: [
      {
        id: 201,
        name: "Dr. Amit Verma",
        qualification: "MBBS, MD, DM Neurology",
        experience: "15 Years",
        hospital: "Apollo Medical Center",
        fee: 1000,
        image:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 3,
    name: "Nephrology",
    icon: "🩺",
    description: "Kidney and urinary care",
    doctors: [
      {
        id: 301,
        name: "Dr. Rahul Sharma",
        qualification: "MBBS, MD, DM Nephrology",
        experience: "12 Years",
        hospital: "City Care Hospital",
        fee: 800,
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 4,
    name: "Pediatrics",
    icon: "👶",
    description: "Healthcare for children",
    doctors: [
      {
        id: 401,
        name: "Dr. Simran Kaur",
        qualification: "MBBS, MD Pediatrics",
        experience: "10 Years",
        hospital: "Sunrise Children's Hospital",
        fee: 600,
        image:
          "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 5,
    name: "Orthopedics",
    icon: "🦴",
    description: "Bone, joint and muscle care",
    doctors: [
      {
        id: 501,
        name: "Dr. Karan Malhotra",
        qualification: "MBBS, MS Orthopedics",
        experience: "11 Years",
        hospital: "Apollo Medical Center",
        fee: 900,
        image:
          "https://images.unsplash.com/photo-1622902046580-2b47f7f2f1c5?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 6,
    name: "Dentistry",
    icon: "🦷",
    description: "Complete dental care",
    doctors: [
      {
        id: 601,
        name: "Dr. Anjali Gupta",
        qualification: "BDS, MDS",
        experience: "7 Years",
        hospital: "Smile Dental Center",
        fee: 500,
        image:
          "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },
];

export default function Specialist() {
  const [selectedSpecialist, setSelectedSpecialist] =
    useState(null);

  const [selectedDoctor, setSelectedDoctor] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);

  const [showBooking, setShowBooking] =
    useState(false);

  const [booked, setBooked] =
    useState(false);

  const [form, setForm] = useState({
    patientName: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Specialist select
  const openSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
    setShowDetails(false);
  };

  // Doctor details
  const seeMore = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true);
    setShowBooking(false);
  };

  // Booking
  const bookDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
    setShowDetails(false);
    setBooked(false);
  };

  // Submit appointment
  const handleBooking = (e) => {
    e.preventDefault();

    const appointmentData = {
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      patientName: form.patientName,
      phone: form.phone,
      date: form.date,
      time: form.time,
      fee: selectedDoctor.fee,
    };

    console.log("Appointment:", appointmentData);

    /*
      Backend connect karne par:

      fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });
    */

    setBooked(true);
  };

  const closePopup = () => {
    setSelectedSpecialist(null);
    setSelectedDoctor(null);
    setShowDetails(false);
    setShowBooking(false);
    setBooked(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= HEADER ================= */}

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl text-center">

          <span className="rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
            ✦ Medical Specialists
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Find Your
            <span className="text-[#2196d2]">
              {" "}Specialist
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose a medical specialist and find experienced
            doctors for your healthcare needs.
          </p>

        </div>

      </section>

      {/* ================= SPECIALISTS ================= */}

      <section className="px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {specialists.map((specialist) => (

              <div
                key={specialist.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2196d2]/10 text-3xl">
                  {specialist.icon}
                </div>

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  {specialist.name}
                </h2>

                <p className="mt-2 text-slate-500">
                  {specialist.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#2196d2]">
                  {specialist.doctors.length} Doctor Available
                </p>

                <button
                  onClick={() =>
                    openSpecialist(specialist)
                  }
                  className="mt-6 w-full rounded-xl bg-[#2196d2] py-3 font-semibold text-white hover:bg-[#1976b5]"
                >
                  View Doctors →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= DOCTOR POPUP ================= */}

      {selectedSpecialist && !showBooking && (

        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-[#2196d2]">
                  Specialist
                </p>

                <h2 className="text-2xl font-bold">
                  {selectedSpecialist.name}
                </h2>

              </div>

              <button
                onClick={closePopup}
                className="rounded-full bg-slate-100 px-4 py-2"
              >
                ✕
              </button>

            </div>

            {/* DOCTORS */}

            <div className="mt-6 space-y-4">

              {selectedSpecialist.doctors.map(
                (doctor) => (

                  <div
                    key={doctor.id}
                    className="rounded-2xl border border-slate-200 p-4"
                  >

                    <div className="flex flex-col gap-4 sm:flex-row">

                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-28 w-full rounded-xl object-cover sm:w-28"
                      />

                      <div className="flex-1">

                        <h3 className="text-xl font-bold">
                          {doctor.name}
                        </h3>

                        <p className="mt-1 text-sm text-[#2196d2]">
                          {doctor.qualification}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                          {doctor.experience} experience
                        </p>

                        <p className="text-sm text-slate-500">
                          🏥 {doctor.hospital}
                        </p>

                        <p className="mt-2 font-semibold">
                          ₹{doctor.fee} consultation
                        </p>

                        <div className="mt-4 flex gap-3">

                          <button
                            onClick={() =>
                              seeMore(doctor)
                            }
                            className="rounded-xl border px-5 py-2 text-sm font-semibold hover:border-[#2196d2] hover:text-[#2196d2]"
                          >
                            See More
                          </button>

                          <button
                            onClick={() =>
                              bookDoctor(doctor)
                            }
                            className="rounded-xl bg-[#2196d2] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1976b5]"
                          >
                            Book Appointment
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

            {/* ================= DETAILS ================= */}

            {showDetails && selectedDoctor && (

              <div className="mt-6 rounded-2xl bg-blue-50 p-6">

                <h3 className="text-xl font-bold">
                  Doctor Details
                </h3>

                <div className="mt-4 space-y-2 text-sm text-slate-600">

                  <p>
                    <strong>Name:</strong>{" "}
                    {selectedDoctor.name}
                  </p>

                  <p>
                    <strong>Qualification:</strong>{" "}
                    {selectedDoctor.qualification}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {selectedDoctor.experience}
                  </p>

                  <p>
                    <strong>Hospital:</strong>{" "}
                    {selectedDoctor.hospital}
                  </p>

                  <p>
                    <strong>Consultation Fee:</strong>{" "}
                    ₹{selectedDoctor.fee}
                  </p>

                </div>

                <button
                  onClick={() =>
                    bookDoctor(selectedDoctor)
                  }
                  className="mt-5 rounded-xl bg-[#2196d2] px-6 py-3 font-semibold text-white"
                >
                  Book This Doctor
                </button>

              </div>

            )}

          </div>

        </div>

      )}

      {/* ================= BOOKING ================= */}

      {showBooking && selectedDoctor && (

        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6">

            {!booked ? (

              <>

                <div className="flex justify-between">

                  <div>

                    <h2 className="text-2xl font-bold">
                      Book Appointment
                    </h2>

                    <p className="mt-1 text-sm text-[#2196d2]">
                      {selectedDoctor.name}
                    </p>

                  </div>

                  <button
                    onClick={closePopup}
                    className="rounded-full bg-slate-100 px-4 py-2"
                  >
                    ✕
                  </button>

                </div>

                <form
                  onSubmit={handleBooking}
                  className="mt-6 space-y-4"
                >

                  <input
                    name="patientName"
                    value={form.patientName}
                    onChange={handleChange}
                    required
                    placeholder="Patient Name"
                    className="w-full rounded-xl border p-3 outline-none focus:border-[#2196d2]"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-xl border p-3 outline-none focus:border-[#2196d2]"
                  />

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border p-3 outline-none focus:border-[#2196d2]"
                  />

                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border bg-white p-3 outline-none focus:border-[#2196d2]"
                  >
                    <option value="">
                      Select Time
                    </option>
                    <option value="10:00 AM">
                      10:00 AM
                    </option>
                    <option value="11:00 AM">
                      11:00 AM
                    </option>
                    <option value="12:00 PM">
                      12:00 PM
                    </option>
                    <option value="2:00 PM">
                      2:00 PM
                    </option>
                    <option value="4:00 PM">
                      4:00 PM
                    </option>
                    <option value="5:00 PM">
                      5:00 PM
                    </option>
                  </select>

                  <div className="rounded-xl bg-slate-50 p-4">

                    <div className="flex justify-between">

                      <span className="text-slate-500">
                        Doctor Fee
                      </span>

                      <strong>
                        ₹{selectedDoctor.fee}
                      </strong>

                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2196d2] py-3 font-bold text-white hover:bg-[#1976b5]"
                  >
                    Confirm Appointment
                  </button>

                </form>

              </>

            ) : (

              <div className="py-10 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  ✓
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  Appointment Booked
                </h2>

                <p className="mt-2 text-slate-500">
                  Your appointment request has been submitted.
                </p>

                <button
                  onClick={closePopup}
                  className="mt-6 rounded-xl bg-[#2196d2] px-8 py-3 font-semibold text-white"
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
    
  );
}