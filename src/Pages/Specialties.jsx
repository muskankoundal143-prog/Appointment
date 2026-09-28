import React, { useState } from "react";

const specialties = [
  {
    id: 1,
    title: "Nephrology",
    subtitle: "Kidney Care",
    description:
      "Advanced diagnosis and treatment for kidney and urinary system conditions.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85",
    doctors: [
      {
        id: 101,
        name: "Dr. Rahul Sharma",
        qualification: "MBBS, MD, DM Nephrology",
        experience: "12 Years",
        hospital: "City Care Hospital",
        fee: 800,
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85",
      },
      {
        id: 102,
        name: "Dr. Priya Singh",
        qualification: "MBBS, MD Nephrology",
        experience: "9 Years",
        hospital: "Healing Hospital",
        fee: 700,
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  {
    id: 2,
    title: "Neurology",
    subtitle: "Brain & Nerve Care",
    description:
      "Expert care for brain, spine, nerves, and neurological conditions.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=90",
    doctors: [
      {
        id: 201,
        name: "Dr. Amit Verma",
        qualification: "MBBS, MD, DM Neurology",
        experience: "15 Years",
        hospital: "Apollo Medical Center",
        fee: 1000,
        image:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=90",
      },
    ],
  },

  {
    id: 3,
    title: "Cardiology",
    subtitle: "Heart Care",
    description:
      "Comprehensive care for heart health and cardiovascular conditions.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=85",
    doctors: [
      {
        id: 301,
        name: "Dr. Arjun Mehta",
        qualification: "MBBS, MD, DM Cardiology",
        experience: "14 Years",
        hospital: "Healing Heart Hospital",
        fee: 1200,
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=90",
      },
    ],
  },

  {
    id: 4,
    title: "Pediatrics",
    subtitle: "Child Care",
    description:
      "Gentle and compassionate healthcare for babies, children, and teens.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=90",
    doctors: [
      {
        id: 401,
        name: "Dr. Simran Kaur",
        qualification: "MBBS, MD Pediatrics",
        experience: "10 Years",
        hospital: "Sunrise Children's Hospital",
        fee: 600,
        image:
          "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=700&q=90",
      },
    ],
  },

  {
    id: 5,
    title: "Orthopedics",
    subtitle: "Bone & Joint Care",
    description:
      "Specialized treatment for bones, joints, muscles, and mobility.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=700&q=90",
    doctors: [
      {
        id: 501,
        name: "Dr. Karan Malhotra",
        qualification: "MBBS, MS Orthopedics",
        experience: "11 Years",
        hospital: "Apollo Medical Center",
        fee: 900,
        image:
          "https://images.unsplash.com/photo-1622902046580-2b47f7f2f1c5?auto=format&fit=crop&w=700&q=90",
      },
    ],
  },

  {
    id: 6,
    title: "Dentistry",
    subtitle: "Dental Care",
    description:
      "Complete dental care for healthy teeth and a confident smile.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=90",
    doctors: [
      {
        id: 601,
        name: "Dr. Anjali Gupta",
        qualification: "BDS, MDS",
        experience: "7 Years",
        hospital: "Smile Dental Center",
        fee: 500,
        image:
          "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=90",
      },
    ],
  },
];

const features = [
  {
    title: "Experienced Doctors",
    description: "Connect with qualified healthcare professionals.",
  },
  {
    title: "Easy Appointment",
    description: "Book your appointment in just a few simple steps.",
  },
  {
    title: "Quality Healthcare",
    description: "Get personalized care according to your needs.",
  },
  {
    title: "Safe & Trusted",
    description: "Your information is handled with care.",
  },
];

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openDoctors = (specialty) => {
    setSelectedSpecialty(specialty);
    setShowDetails(false);
    setSelectedDoctor(null);
  };

  const openDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true);
  };

  const openBooking = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
    setBooked(false);
  };

  const closeAll = () => {
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setShowBooking(false);
    setShowDetails(false);
    setBooked(false);
  };

  const bookAppointment = (e) => {
    e.preventDefault();

    const appointmentData = {
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      patientName: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
    };

    console.log("Appointment Data:", appointmentData);

    /*
      Backend ke liye baad mein:

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

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =========================
          SPECIALTIES
      ========================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
              ✦ Our Specialties
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Specialized Care for
              <span className="text-[#2196d2]">
                {" "}Every Need
              </span>
            </h2>

            <p className="mt-5 text-slate-600">
              Find the right specialist and book your appointment easily.
            </p>

          </div>

          {/* SPECIALTY CARDS */}

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {specialties.map((specialty) => (

              <div
                key={specialty.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="h-60 overflow-hidden">

                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <p className="text-sm font-semibold text-[#2196d2]">
                    {specialty.subtitle}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {specialty.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {specialty.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openDoctors(specialty)}
                    className="mt-6 w-full rounded-xl bg-[#2196d2] py-3 font-semibold text-white hover:bg-[#1976b5]"
                  >
                    View Doctors →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
          WHY CHOOSE US
      ========================== */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90"
              alt="Healthcare"
              className="h-[400px] w-full rounded-3xl object-cover"
            />

            <div>

              <span className="rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
                ✦ Why Choose Us
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Better Healthcare,
                <span className="text-[#2196d2]">
                  {" "}Better Experience
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Find experienced doctors, view their details and book
                appointments without any complicated process.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {features.map((feature) => (

                  <div
                    key={feature.title}
                    className="rounded-2xl bg-slate-50 p-5"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2196d2] font-bold text-white">
                      ✓
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          DOCTORS POPUP
      ========================== */}

      {selectedSpecialty && !showBooking && (

        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-[#2196d2]">
                  {selectedSpecialty.subtitle}
                </p>

                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedSpecialty.title} Doctors
                </h2>

              </div>

              <button
                onClick={closeAll}
                className="rounded-full bg-slate-100 px-4 py-2"
              >
                ✕
              </button>

            </div>

            <div className="mt-6 space-y-4">

              {selectedSpecialty.doctors.map((doctor) => (

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

                      <h3 className="text-xl font-bold text-slate-900">
                        {doctor.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#2196d2]">
                        {doctor.qualification}
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        {doctor.experience} Experience
                      </p>

                      <p className="text-sm text-slate-500">
                        🏥 {doctor.hospital}
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        Consultation: ₹{doctor.fee}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">

                        <button
                          onClick={() => openDetails(doctor)}
                          className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold hover:border-[#2196d2] hover:text-[#2196d2]"
                        >
                          See More
                        </button>

                        <button
                          onClick={() => openBooking(doctor)}
                          className="rounded-xl bg-[#2196d2] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1976b5]"
                        >
                          Book Appointment
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* DOCTOR DETAILS */}

            {showDetails && selectedDoctor && (

              <div className="mt-6 rounded-2xl bg-blue-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Doctor Details
                </h3>

                <p className="mt-3 text-slate-600">
                  <strong>Name:</strong>{" "}
                  {selectedDoctor.name}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>Qualification:</strong>{" "}
                  {selectedDoctor.qualification}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>Experience:</strong>{" "}
                  {selectedDoctor.experience}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>Hospital:</strong>{" "}
                  {selectedDoctor.hospital}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>Consultation Fee:</strong>{" "}
                  ₹{selectedDoctor.fee}
                </p>

                <button
                  onClick={() =>
                    openBooking(selectedDoctor)
                  }
                  className="mt-5 rounded-xl bg-[#2196d2] px-6 py-3 font-semibold text-white hover:bg-[#1976b5]"
                >
                  Book This Doctor
                </button>

              </div>

            )}

          </div>

        </div>

      )}

      {/* =========================
          BOOKING POPUP
      ========================== */}

      {showBooking && selectedDoctor && (

        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Book Appointment
                </h2>

                <p className="mt-1 text-sm text-[#2196d2]">
                  {selectedDoctor.name}
                </p>

              </div>

              <button
                onClick={() => setShowBooking(false)}
                className="rounded-full bg-slate-100 px-4 py-2"
              >
                ✕
              </button>

            </div>

            {booked ? (

              <div className="py-10 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Appointment Booked!
                </h3>

                <p className="mt-2 text-slate-500">
                  Your appointment request has been submitted.
                </p>

                <button
                  onClick={closeAll}
                  className="mt-6 rounded-xl bg-[#2196d2] px-8 py-3 font-semibold text-white"
                >
                  Done
                </button>

              </div>

            ) : (

              <form
                onSubmit={bookAppointment}
                className="mt-6 space-y-4"
              >

                <div>
                  <label className="text-sm font-semibold">
                    Patient Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2196d2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2196d2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2196d2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Appointment Time
                  </label>

                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#2196d2]"
                  >
                    <option value="">
                      Select time
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
                </div>

                <div className="rounded-xl bg-slate-50 p-4">

                  <div className="flex justify-between">

                    <span className="text-sm text-slate-500">
                      Doctor Fee
                    </span>

                    <span className="font-bold">
                      ₹{selectedDoctor.fee}
                    </span>

                  </div>

                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#2196d2] py-3.5 font-bold text-white hover:bg-[#1976b5]"
                >
                  Confirm Appointment
                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </div>
  );
}
