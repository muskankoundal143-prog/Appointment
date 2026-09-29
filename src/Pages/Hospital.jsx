import React, { useState } from "react";

const Hospital = () => {
 
  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
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
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
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
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
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
        "https://images.unsplash.com/photo-1551076805-e1869033e561",
      location: "Chandigarh",
      rating: 4.5,
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
  ];



  const [showAll, setShowAll] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingHospital, setBookingHospital] = useState(null);

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



  const visibleHospitals = showAll
    ? hospitals
    : hospitals.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="bg-[#2196d2] px-6 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">
          Find the Right Hospital
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          Find trusted hospitals, explore their facilities,
          view doctors and book appointments online.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {showAll
                ? "All Hospitals"
                : "Popular Hospitals"}
            </h2>

            <p className="text-gray-500">
              {hospitals.length} hospitals available
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-lg [#2196d2] px-6 py-3 font-semibold text-white transition hover:[#2196d2]"
          >
            {showAll ? "Show Less" : "View All Hospitals"}
          </button>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {visibleHospitals.map((hospital) => (

            <div
              key={hospital.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative">

                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-52 w-full object-cover"
                />

                <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
                   {hospital.rating}
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-800">
                  {hospital.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                   {hospital.location}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                   {hospital.doctors} Doctors
                  &nbsp; • &nbsp;
                   {hospital.beds} Beds
                </p>

        
                <div className="mt-4 flex flex-wrap gap-2">

                  {hospital.specialties
                    .slice(0, 3)
                    .map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2196d2]"
                      >
                        {specialty}
                      </span>
                    ))}

                </div>

         
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <button
                    onClick={() =>
                      setSelectedHospital(hospital)
                    }
                    className="rounded-lg border border-[#2196d2] px-4 py-2 font-medium text-[#2196d2] hover:bg-blue-50"
                  >
                    See More
                  </button>

                  <button
                    onClick={() =>
                      setBookingHospital(hospital)
                    }
                    className="rounded-lg bg-[#2196d2] px-4 py-2 font-medium text-white hover:bg-[#1686c2]"
                  >
                    Book
                  </button>

                </div>

              </div>
            </div>

          ))}

        </div>

      </div>

     

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
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedHospital.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {selectedHospital.location}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedHospital(null)
                  }
                  className="text-2xl text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>

              </div>

       
              <div className="mt-5 rounded-lg bg-yellow-50 p-4">
                {" "}
                <strong>
                  {selectedHospital.rating}
                </strong>

                <span className="ml-2 text-gray-600">
                  ({selectedHospital.reviews} reviews)
                </span>
              </div>

         
              <div className="mt-6">
                <h3 className="text-xl font-bold">
                  About Hospital
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {selectedHospital.description}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                <div className="rounded-lg bg-gray-50 p-4 text-center">
               
                  <strong>{selectedHospital.doctors}</strong>
                  <p className="text-sm text-gray-500">
                    Doctors
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
           
                  <strong>{selectedHospital.beds}</strong>
                  <p className="text-sm text-gray-500">
                    Beds
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
          
                  <strong>24/7</strong>
                  <p className="text-sm text-gray-500">
                    Emergency
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
     
                  <strong>{selectedHospital.rating}</strong>
                  <p className="text-sm text-gray-500">
                    Rating
                  </p>
                </div>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-bold">
                  Specialties
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">

                  {selectedHospital.specialties.map(
                    (specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-blue-100 px-4 py-2 text-sm text-[#2196d2]"
                      >
                        {specialty}
                      </span>
                    )
                  )}

                </div>

              </div>

          
              <div className="mt-6">

                <h3 className="text-xl font-bold">
                  Facilities
                </h3>

                <div className="mt-3 grid grid-cols-2 gap-3">

                  {selectedHospital.facilities.map(
                    (facility) => (
                      <div
                        key={facility}
                        className="rounded-lg border p-3 text-gray-700"
                      >
                        ✓ {facility}
                      </div>
                    )
                  )}

                </div>

              </div>

             
              <div className="mt-6 rounded-xl bg-gray-50 p-5">

                <h3 className="text-xl font-bold">
                  Contact
                </h3>

                <p className="mt-2">
                   {selectedHospital.phone}
                </p>

                <p className="mt-2">
                  ✉️ {selectedHospital.email}
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
                <h2 className="text-2xl font-bold">
                  Book Appointment
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {bookingHospital.name}
                </p>
              </div>

              <button
                onClick={() =>
                  setBookingHospital(null)
                }
                className="text-2xl text-gray-500 hover:text-red-500"
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleBooking}
              className="mt-6 space-y-4"
            >

          
              <div>
                <label className="mb-1 block font-medium">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  placeholder="Enter patient name"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-[#2196d2]"
                />
              </div>

          
              <div>
                <label className="mb-1 block font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-[#2196d2]"
                />
              </div>

            
              <div>
                <label className="mb-1 block font-medium">
                  Department
                </label>

                <select
                  name="department"
                  value={bookingData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border px-4 py-3"
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
                <label className="mb-1 block font-medium">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-1 block font-medium">
                  Appointment Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

         
              <div>
                <label className="mb-1 block font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your problem..."
                  rows="3"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-[#2196d2]"
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

export default Hospital;
