import React, { useState } from "react";

const specialties = [
  {
    id: 1,
    name: "Cardiology",

    description: "Heart and cardiovascular care",
    image:
      "https://plus.unsplash.com/premium_photo-1661757033941-1b9dd6bec8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvbG9nfGVufDB8fDB8fHww",
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

    description: "Brain and nerve care",
    image:
      "https://plus.unsplash.com/premium_photo-1681487548276-48a2c640ade9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV1cm9sb2d5fGVufDB8fDB8fHww",
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

    description: "Kidney and urinary care",
    image:
      "https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmVwaHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
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
   
    description: "Healthcare for children",
    image:
      "https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVkaWF0cmljc3xlbnwwfHwwfHx8MA%3D%3D",
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
   
    description: "Bone, joint and muscle care",
    image:
      "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3J0aG9wZWRpY3N8ZW58MHx8MHx8fDA%3D",
    doctors: [
      {
        id: 501,
        name: "Dr. Karan Malhotra",
        qualification: "MBBS, MS Orthopedics",
        experience: "11 Years",
        hospital: "Apollo Medical Center",
        fee: 900,
        image:
          "https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ydGhvcGVkaWNzJTIwZG9jdG9yfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    id: 6,
    name: "Dermatology",

    description: "Skin, hair and aesthetic care",
    image:
      "https://images.unsplash.com/photo-1713085085470-fba013d67e65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVybWF0b2xvZ3l8ZW58MHx8MHx8fDA%3D",
    doctors: [
      {
        id: 601,
        name: "Dr. Anjali Gupta",
        qualification: "MBBS, MD Dermatology",
        experience: "9 Years",
        hospital: "Skin Care Center",
        fee: 700,
        image:
          "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },
];

const faqs = [
  {
    question: "How do I choose a specialist?",
    answer:
      "Choose the specialty that matches your healthcare requirement and view the available doctors.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes. Select a doctor, choose your preferred date and time, and submit the appointment form.",
  },
  {
    question: "Can I see the consultation fee?",
    answer:
      "Yes. The consultation fee is displayed on every doctor card before booking.",
  },
  {
    question: "Can I cancel an appointment?",
    answer:
      "Appointment cancellation can be handled according to the hospital or clinic's cancellation policy.",
  },
];

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [showDetails, setShowDetails] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

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

  const openSpecialty = (specialty) => {
    setSelectedSpecialty(specialty);
    setShowDetails(false);
    setShowBooking(false);
  };

  const seeMore = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true);
    setShowBooking(false);
  };

  const bookDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
    setShowDetails(false);
    setBooked(false);
  };

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

    setBooked(true);
  };

  const closePopup = () => {
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setShowDetails(false);
    setShowBooking(false);
    setBooked(false);

    setForm({
      patientName: "",
      phone: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">


      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
                ✦ Medical Specialists
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find the Right
                <span className="block text-[#2196d2]">
                  Medical Specialist
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Connect with experienced doctors across multiple
                specialties and book your appointment easily.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("specialties")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 rounded-xl bg-[#2196d2] px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#1976b5]"
              >
                Explore Specialists →
              </button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Healthcare professionals"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Trusted Care
                    </p>

                    <p className="text-sm text-slate-500">
                      Experienced specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section
        id="specialties"
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              Our Specialties
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Healthcare For Every Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Explore our medical specialties and find experienced
              doctors for your healthcare needs.
            </p>
          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {specialties.map((specialty) => (

              <div
                key={specialty.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>


                <div className="p-6">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {specialty.name}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {specialty.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-sm font-semibold text-[#2196d2]">
                      {specialty.doctors.length} Doctor Available
                    </span>

                    <span className="text-sm text-slate-400">
                      Specialist
                    </span>

                  </div>

                  <button
                    onClick={() => openSpecialty(specialty)}
                    className="mt-6 w-full rounded-xl bg-[#2196d2] py-3 font-semibold text-white transition hover:bg-[#1976b5]"
                  >
                    View Doctors →
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>



      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Healthcare Made Simple
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Everything you need to find the right specialist
              and manage your appointments easily.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                👨‍⚕️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Experienced Doctors
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Connect with qualified doctors across
                multiple medical specialties.
              </p>
            </div>


            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                📅
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Easy Appointment
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Choose your doctor, date and time
                and book in just a few steps.
              </p>
            </div>


            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🔒
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Secure & Reliable
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Your appointment information is handled
                with care and privacy.
              </p>
            </div>

          </div>

        </div>

      </section>



      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          <div>

            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              Better Healthcare
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Care That Puts
              <span className="text-[#2196d2]">
                {" "}You First
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Find the right specialist, explore medical
              services and manage your appointments through
              one simple healthcare platform.
            </p>


            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#2196d2]">
                  50+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Specialist Doctors
                </p>
              </div>


              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#2196d2]">
                  10+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Medical Specialties
                </p>
              </div>

            </div>

          </div>


          <div className="overflow-hidden rounded-[2rem] shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1758691461990-03b49d969495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Healthcare team"
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </div>

      </section>




      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              How It Works
            </h2>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2196d2] text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Choose Specialty
              </h3>

              <p className="mt-3 text-slate-500">
                Select the medical specialty that matches
                your healthcare needs.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2196d2] text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Select Doctor
              </h3>

              <p className="mt-3 text-slate-500">
                View doctor information and choose
                your preferred specialist.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2196d2] text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Book Appointment
              </h3>

              <p className="mt-3 text-slate-500">
                Select your date and time and confirm
                your appointment.
              </p>
            </div>

          </div>

        </div>

      </section>




      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              Medical Services
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Popular Healthcare Services
            </h2>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "General Consultation",
              "Heart Checkup",
              "Kidney Care",
              "Skin Consultation",
              "Child Healthcare",
              "Neurological Care",
              "Bone & Joint Care",
              "Health Screening",
            ].map((service) => (

              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#2196d2] hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2196d2]/10 text-[#2196d2]">
                    ✓
                  </div>

                  <span className="font-semibold text-slate-800">
                    {service}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-10 space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-900"
                >

                  <span>{faq.question}</span>

                  <span className="text-xl text-[#2196d2]">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>


                {openFaq === index && (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>




      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#2196d2] px-6 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need the Right Specialist?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Find a specialist and take the next step
            toward better healthcare.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("specialties")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-7 rounded-xl bg-white px-8 py-3.5 font-bold text-[#2196d2] shadow-lg transition hover:bg-slate-100"
          >
            Explore Specialists →
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid gap-10 md:grid-cols-4">

            <div>
              <h2 className="text-2xl font-bold">
              Health
                <span className="text-[#2196d2]">
                  Care
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Find experienced medical specialists
                and book appointments easily.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Quick Links
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>Home</li>
                <li>Specialties</li>
                <li>Doctors</li>
                <li>Appointments</li>
              </ul>
            </div>


            <div>
              <h3 className="font-semibold">
                Specialties
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Nephrology</li>
                <li>Dermatology</li>
              </ul>
            </div>


            <div>
              <h3 className="font-semibold">
                Contact Us
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p> Chandigarh, India</p>
                <p> +91 98765 43210</p>
                <p> support@medicare.com</p>
              </div>
            </div>

          </div>


          <div className="mt-10 border-t border-slate-700 pt-6">

            <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">

              <p>
                © {new Date().getFullYear()} MediCare.
                All rights reserved.
              </p>

              <div className="flex gap-6">
                <span className="cursor-pointer hover:text-[#2196d2]">
                  Privacy Policy
                </span>

                <span className="cursor-pointer hover:text-[#2196d2]">
                  Terms & Conditions
                </span>
              </div>

            </div>

          </div>

        </div>

      </footer>


      {selectedSpecialty && !showBooking && (

        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-[#2196d2]">
                  Specialist
                </p>

                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedSpecialty.name}
                </h2>
              </div>

              <button
                onClick={closePopup}
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


                      <div className="mt-4 flex flex-wrap gap-3">

                        <button
                          onClick={() => seeMore(doctor)}
                          className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-semibold transition hover:border-[#2196d2] hover:text-[#2196d2]"
                        >
                          See More
                        </button>

                        <button
                          onClick={() => bookDoctor(doctor)}
                          className="rounded-xl bg-[#2196d2] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1976b5]"
                        >
                          Book Appointment
                        </button>

                      </div>

                    </div>

                  </div>


                  {showDetails &&
                    selectedDoctor?.id === doctor.id && (

                      <div className="mt-5 rounded-2xl bg-blue-50 p-5">

                        <h3 className="text-lg font-bold">
                          Doctor Details
                        </h3>

                        <div className="mt-4 space-y-2 text-sm text-slate-600">

                          <p>
                            <strong>Name:</strong>{" "}
                            {doctor.name}
                          </p>

                          <p>
                            <strong>Qualification:</strong>{" "}
                            {doctor.qualification}
                          </p>

                          <p>
                            <strong>Experience:</strong>{" "}
                            {doctor.experience}
                          </p>

                          <p>
                            <strong>Hospital:</strong>{" "}
                            {doctor.hospital}
                          </p>

                          <p>
                            <strong>Consultation Fee:</strong>{" "}
                            ₹{doctor.fee}
                          </p>

                        </div>

                        <button
                          onClick={() => bookDoctor(doctor)}
                          className="mt-5 rounded-xl bg-[#2196d2] px-6 py-3 font-semibold text-white"
                        >
                          Book This Doctor
                        </button>

                      </div>

                    )}

                </div>

              ))}

            </div>

          </div>

        </div>

      )}



      {showBooking && selectedDoctor && (

        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">

            {!booked ? (

              <>

                <div className="flex items-center justify-between">

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
                    className="w-full rounded-xl border border-slate-200 p-3 outline-none transition focus:border-[#2196d2]"
                  />


                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-200 p-3 outline-none transition focus:border-[#2196d2]"
                  />


                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-xl border border-slate-200 p-3 outline-none transition focus:border-[#2196d2]"
                  />


                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 outline-none transition focus:border-[#2196d2]"
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
                    className="w-full rounded-xl bg-[#2196d2] py-3.5 font-bold text-white transition hover:bg-[#1976b5]"
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
