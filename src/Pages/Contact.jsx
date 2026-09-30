import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment request submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

    
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4fbff] via-white to-[#eaf8ff]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full bg-[#e8f7ff] px-4 py-2 text-sm font-semibold text-[#2196d2]">
              We're Here To Help
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get In Touch
              <span className="block text-[#2196d2]">
                With HealthCare+
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Have a question about our doctors, specialties or
              hospitals? Our healthcare team is always ready to help
              you find the right care.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#appointment"
                className="rounded-xl bg-[#2196d2] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1686c2] hover:shadow-lg"
              >
                Book Appointment
              </a>

              <a
                href="#contact-info"
                className="rounded-xl border border-[#ccecff] bg-white px-7 py-3.5 text-sm font-semibold text-[#2196d2] transition hover:bg-[#f4fbff]"
              >
                Contact Information
              </a>

            </div>

          </div>
        </div>

       
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d9f2ff] opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#e1f5ff] opacity-60 blur-3xl" />

      </section>


   
      <section id="contact-info" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ContactCard
          
              title="Call Us"
              text="+91 98765 43210"
              subText="Mon - Sat, 9 AM - 6 PM"
            />

            <ContactCard
           
              title="Email Us"
              text="hello@healthcare.com"
              subText="We reply within 24 hours"
            />

            <ContactCard
          
              title="Visit Us"
              text="Chandigarh, India"
              subText="Find our nearest clinic"
            />

          
            <ContactCard
         
              title="Emergency"
              text="Call 108"
              subText="For medical emergencies"
              emergency
            />

          </div>

        </div>
      </section>


      <section
        id="appointment"
        className="bg-[#f7fcff] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        
            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#2196d2]">
                Contact HealthCare+
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Let's take care of
                <span className="text-[#2196d2]">
                  {" "}your health.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                Whether you need a doctor consultation, want to know
                more about our specialties, or need help finding a
                hospital, simply send us a message.
              </p>


              <div className="mt-8 space-y-5">

                <InfoItem
                  icon="✓"
                  title="Experienced Doctors"
                  text="Connect with qualified healthcare professionals."
                />

                <InfoItem
                  icon="✓"
                  title="Easy Appointments"
                  text="Book your consultation quickly and easily."
                />

                <InfoItem
                  icon="✓"
                  title="Patient First"
                  text="Your comfort and wellbeing always come first."
                />

              </div>


              {/* Emergency Box */}
              <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-5">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                    🚨
                  </div>

                  <div>
                    <h3 className="font-bold text-red-700">
                      Medical Emergency?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-red-600">
                      If you are experiencing a medical emergency,
                      please call your local emergency service
                      immediately.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Form */}
            <div className="rounded-3xl border border-[#e5f4fb] bg-white p-6 shadow-xl shadow-[#d9effa]/40 sm:p-8">

              <div>
                <span className="rounded-lg bg-[#e8f7ff] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2196d2]">
                  Appointment
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and our team will contact you.
                </p>
              </div>


              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2196d2] focus:ring-4 focus:ring-[#e8f7ff]"
                  />

                </div>


                {/* Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2196d2] focus:ring-4 focus:ring-[#e8f7ff]"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2196d2] focus:ring-4 focus:ring-[#e8f7ff]"
                    />

                  </div>

                </div>


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    How Can We Help?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2196d2] focus:ring-4 focus:ring-[#e8f7ff]"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#2196d2] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#1686c2] hover:shadow-lg"
                >
                  Send Appointment Request →
                </button>


                <p className="text-center text-xs text-slate-400">
                  Your information is kept private and secure.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#2196d2]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8">

          <div className="mx-auto max-w-2xl">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Health Comes First
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Find the right doctor, specialty or hospital for your
              healthcare needs.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/specialties"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#2196d2] shadow-md transition hover:bg-blue-50"
              >
                Explore Specialties
              </Link>

              <Link
                to="/hospital"
                className="rounded-xl border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Find a Hospital
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400">

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

          <div className="grid gap-10 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-2">

              <Link
                to="/"
                className="flex items-center gap-3"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff] text-lg font-bold text-[#2196d2]">
                  +
                </div>

                <div>
                  <h2 className="font-bold text-white">
                    HealthCare<span className="text-[#2196d2]">+</span>
                  </h2>

                  <p className="text-[8px] font-medium uppercase tracking-widest text-slate-500">
                    Better Care. Better Life.
                  </p>
                </div>

              </Link>


              <p className="mt-5 max-w-md text-sm leading-7">
                Helping patients find trusted doctors, healthcare
                specialties and hospitals for better and easier
                healthcare.
              </p>


              <div className="mt-6 flex gap-3">

                <SocialButton text="f" />

                <SocialButton text="in" />

                <SocialButton text="𝕏" />

                <SocialButton text="◎" />

              </div>

            </div>


            {/* Quick Links */}
            <div>

              <h3 className="font-semibold text-white">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3 text-sm">

                <li>
                  <Link
                    to="/"
                    className="transition hover:text-[#2196d2]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/specialties"
                    className="transition hover:text-[#2196d2]"
                  >
                    Specialties
                  </Link>
                </li>

                <li>
                  <Link
                    to="/hospital"
                    className="transition hover:text-[#2196d2]"
                  >
                    Hospitals
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="transition hover:text-[#2196d2]"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>


            {/* Contact */}
            <div>

              <h3 className="font-semibold text-white">
                Contact
              </h3>

              <ul className="mt-5 space-y-4 text-sm">

                <li className="flex gap-3">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </li>

                <li className="flex gap-3">
                  <span>✉️</span>
                  <span>hello@healthcare.com</span>
                </li>

                <li className="flex gap-3">
                  <span>📍</span>
                  <span>Chandigarh, India</span>
                </li>

              </ul>

            </div>

          </div>


          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p>
              © {new Date().getFullYear()} HealthCare+. All rights
              reserved.
            </p>

            <div className="flex justify-center gap-5 sm:justify-end">
              <span className="cursor-pointer hover:text-white">
                Privacy Policy
              </span>

              <span className="cursor-pointer hover:text-white">
                Terms of Service
              </span>
            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}


/* ================= CONTACT CARD ================= */

function ContactCard({
  icon,
  title,
  text,
  subText,
  emergency = false,
}) {
  return (
    <div
      className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-md ${
        emergency
          ? "border-red-100 bg-red-50"
          : "border-[#e5f4fb] bg-white"
      }`}
    >

      <div className="flex items-start gap-4">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${
            emergency
              ? "bg-red-100"
              : "bg-[#e8f7ff]"
          }`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            {title}
          </h3>

          <p
            className={`mt-1 text-sm font-semibold ${
              emergency
                ? "text-red-600"
                : "text-[#2196d2]"
            }`}
          >
            {text}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {subText}
          </p>
        </div>

      </div>

    </div>
  );
}


/* ================= INFO ITEM ================= */

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f7ff] font-bold text-[#2196d2]">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>

    </div>
  );
}


/* ================= SOCIAL BUTTON ================= */

function SocialButton({ text }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-slate-400 transition hover:bg-[#2196d2] hover:text-white"
    >
      {text}
    </a>
  );
}
