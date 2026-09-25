import React from "react";

const specialties = [
  {
    title: "Nephrology",
    subtitle: "Kidney Care",
    description:
      "Advanced diagnosis and treatment for kidney and urinary system conditions.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Neurology",
    subtitle: "Brain & Nerve Care",
    description:
      "Expert care for brain, spine, nerves, and neurological conditions.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=90",
  },
  {
    title: "Cardiology",
    subtitle: "Heart Care",
    description:
      "Comprehensive care for heart health and cardiovascular conditions.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Pediatrics",
    subtitle: "Child Care",
    description:
      "Gentle and compassionate healthcare for babies, children, and teens.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=90",
  },
  {
    title: "Orthopedics",
    subtitle: "Bone & Joint Care",
    description:
      "Specialized treatment for bones, joints, muscles, and mobility.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=700&q=90",
  },
  {
    title: "Dentistry",
    subtitle: "Dental Care",
    description:
      "Complete dental care for healthy teeth and a confident smile.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=90",
  },
];

const features = [
  {
    icon: "✓",
    title: "Experienced Doctors",
    description:
      "Connect with qualified and experienced healthcare professionals.",
  },
  {
    icon: "✓",
    title: "Easy Appointment",
    description:
      "Book your appointment quickly with our simple booking process.",
  },
  {
    icon: "✓",
    title: "Quality Healthcare",
    description:
      "Get personalized healthcare designed around your needs.",
  },
  {
    icon: "✓",
    title: "Safe & Trusted",
    description:
      "Your health and personal information are handled with care.",
  },
];

const Specialties = () => {
  return (
    <>
    
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

       
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
              ✦ Our Specialties
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Specialized Care for
              <span className="text-[#2196d2]"> Every Need</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Connect with experienced healthcare specialists who are committed
              to providing personalized and quality care for you and your family.
            </p>
          </div>

      
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <div
                key={specialty.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2196d2]/30 hover:shadow-xl"
              >
             
                <div className="relative h-64 overflow-hidden bg-[#eaf7fd]">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

              
                <div className="p-6">
                  <p className="mb-1 text-sm font-medium text-[#2196d2]">
                    {specialty.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {specialty.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {specialty.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-700">
                      {specialty.doctors}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2196d2] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#529bcc] hover:shadow-lg hover:shadow-[#2196d2]/20"
                  >
                    View Doctors

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

       
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#2196d2]/10 px-4 py-2 text-sm font-semibold text-[#2196d2]">
              ✦ Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Healthcare That Puts
              <span className="text-[#2196d2]"> You First</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              We combine experienced professionals, modern healthcare services,
              and patient-focused care to make your healthcare journey easier.
            </p>
          </div>

     
          <div className="grid items-center gap-12 lg:grid-cols-2">

        
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90"
                  alt="Healthcare professionals"
                  className="h-[450px] w-full object-cover"
                />
              </div>

            
              <div className="absolute -bottom-6 right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8">
                <div className="flex items-center gap-4">
                 

                  <div>
                    <p className="text-2xl font-bold text-slate-900">
                      10+
                    </p>

                    <p className="text-sm text-slate-500">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

      
            <div>
              <h3 className="text-3xl font-bold leading-tight text-slate-900">
                Better Healthcare,
                <br />
                <span className="text-[#2196d2]">
                  Better Experience
                </span>
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                Our goal is to make quality healthcare simple, accessible,
                and comfortable. From finding the right specialist to
                booking your appointment, we make every step easier.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2196d2]/10 text-2xl transition-all duration-300 group-hover:bg-[#2196d2]">
                      {feature.icon}
                    </div>

                    <h4 className="font-bold text-slate-900">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

         
              <button
                type="button"
                className="mt-8 rounded-xl bg-[#2196d2] px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#1976b5] hover:shadow-lg"
              >
                Learn More About Us →
              </button>
            </div>
          </div>


          <div className="mt-20 grid grid-cols-2 gap-5 rounded-3xl bg-[#2196d2] p-8 text-white sm:grid-cols-4 sm:p-10">

            <div className="text-center">
              <h4 className="text-3xl font-bold sm:text-4xl">
                500+
              </h4>
              <p className="mt-2 text-sm text-blue-100">
                Expert Doctors
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-bold sm:text-4xl">
                50K+
              </h4>
              <p className="mt-2 text-sm text-blue-100">
                Happy Patients
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-bold sm:text-4xl">
                100+
              </h4>
              <p className="mt-2 text-sm text-blue-100">
                Medical Specialists
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-bold sm:text-4xl">
                24/7
              </h4>
              <p className="mt-2 text-sm text-blue-100">
                Patient Support
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Specialties;

