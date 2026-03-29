import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ServicesItem from "./ServicesItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = ({ home }) => {
  const services = [
    {
      id: 1,
      title: "Root Canal Procerdure",
      description:
        "Root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The term root canal comes from cleaning of the canals inside a tooth's root. Decades ago, root canal treatments often were painful. With dental advances and local anesthetics, most people have little if any pain during a root canal. In fact, it's probably more painful living with a decayed tooth. Root canal alternatives include extracting the damaged tooth, no further treatment, or replacing the tooth with a dental implant, bridge or removable partial denture.",
      image:
        "https://img.freepik.com/free-photo/dentists-treat-patients-teeth_1150-19650.jpg?t=st=1714372599~exp=1714376199~hmac=3ec1185e300a8686fc9748656bdf08112cf2a3cdb90c35cf2bfb76568e43aeda&w=826",
    },
    {
      id: 2,
      title: "Dental Implant",
      description:
        "Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesn't fit well and can offer an option when a lack of natural teeth roots don't allow building denture or bridgework tooth replacements.",
      image: "https://ik.imagekit.io/amddentalclinic/598468bb-e1d5-426f-9fea-895f8f0b336f-how-can-dental-implants-can-be-done-in-one-day-scaled_W7AafFFY9.webp",
    },

    {
      id: 3,
      title: "Dental Bridge",
      description:
        "A dental bridge is used to bridge the gap between two healthy teeth where one or more teeth are missing.In most cases, a dental crown is placed on the healthy teeth on each side of the gap to support the bridge in between them. These teeth are known as anchor teeth or abutment teeth. The bridge essentially creates a false tooth, known as a pontic. The pontic may be constructed from various materials such as gold, alloys, porcelain or a mixture of these materials.",
      image:
        "https://img.freepik.com/free-photo/female-dentist-explaining-artificial-teeth-patient-clinic_1150-19658.jpg?t=st=1774769555~exp=1774773155~hmac=d60bf4022dc79442cb167f6a3af9f81ff134d3b9a6f1f6433a6f5faf1be46694&w=1480",
    },
    {
      id: 4,
      title: "Dental Care",
      description:
        "Dental care is an essential aspect of overall health maintenance, focusing on the prevention, diagnosis, and treatment of oral diseases and conditions. Regular dental check-ups, typically recommended every six months, play a crucial role in maintaining optimal oral health. These check-ups involve professional cleaning to remove plaque and tartar buildup, which can lead to cavities and gum disease if left untreated. Additionally, dental professionals conduct thorough examinations to detect any signs of dental problems early on, such as tooth decay, gum disease, or oral cancer. Good oral hygiene practices, including brushing teeth twice a day, flossing daily, and using mouthwash, complement regular dental visits in preventing dental issues. Proper dental care not only ensures a healthy mouth and a confident smile but also contributes to overall well-being by reducing the risk of systemic health problems associated with poor oral health, such as heart disease and diabetes.",
      image:
        "https://img.freepik.com/free-photo/young-woman-smiling-before-medical-checkup_1153-676.jpg?t=st=1714372729~exp=1714376329~hmac=54b2b0e6d7fa4d3fbe415a9174b442e4475e0210ab9051f96ae234f750169288&w=826",
    },
    {
      id: 5,
      title: "Teeth Aligners",
      description:
        "Orthodontic services help improve the alignment of the teeth and jaw. Patients who have an overbite, underbite, crossbite, or misaligned teeth may require or seek out orthodontic services to help correct such issues. Examples of orthodontic services include the use of braces, palate expanders, fixed-space maintainers, retainers, headgear, clear aligners, and other specialized dental treatments to improve the alignment of one’s teeth and bite over time.",
      image: "https://i.ibb.co/2ghhd2G/aligner.jpg",
    },
    {
      id: 6,
      title: "Full mouth reconstruction",
      description:
        "Full mouth reconstruction (FMR) is a series of dental procedures that restore the functionality of a patient's teeth and mouth. It's recommended for patients with missing teeth, unhealthy gums, or other oral complications. FMR is also a comprehensive treatment approach for patients with worn out dentition, missing or damaged teeth, and who want to improve their smile aesthetics.",
      image: "https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151053280.jpg?t=st=1774770034~exp=1774773634~hmac=5c7befe8d4f112fbde06f0560e018938e0143594fb001ef942bebd6cfecdeaf7&w=1480"
    },
    {
      id: 7,
      title: "Oral & maxillofacial surgery",
      description:
        "To provide complex procedures that require deep levels of sedation, an oral or maxillofacial surgeon is likely necessary. Such surgeons are specialized in the diagnosis and surgical and adjunctive treatment of issues such as injuries, defects, or diseases pertaining to the hard and soft tissues in one’s face, jaw, neck, and mouth. Essentially, they are responsible for restoring function and aesthetic appearance relating to the oral and maxillofacial region. Examples of some of the specialized procedures that oral and maxillofacial surgeons perform include corrective jaw surgery, tooth extractions, correcting cleft palates, removing tumors, and extracting impacted and nonrecoverable wisdom teeth. Providing such specialized services will likely be very beneficial in setting your practice apart from the competition.",
      image:
        "https://i.ibb.co/BKcPdr7/Dental-prosthesis-dentures-prosthetics-work-Prosthetics-hands-while-working-on-the-denture-false-tee.jpg",
    },
    {
      id: 8,
      title: "Diagnostic & preventative",
      description:
        "General dentists often provide a wide variety of diagnostic and preventative dental services. This category of dental services is geared towards preserving oral health and avoiding the occurrence of dental issues such as cavities, gum disease, and enamel wear through preventative treatments. Examples of some of the most vital types of diagnostic and preventative services to provide at your practice include X-rays, sealants and fluoride treatments, and of course, routine cleanings and oral exams.",
      image: "https://i.ibb.co/5BfJ4FT/6.jpg",
    },
  ];

  const displayedServices = home ? services.slice(0, 6) : services;

  return (
    <div className="bg-white">
      {!home && <Breadcrumbs title="Our Services" />}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Specialized Services</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 font-inter text-lg md:text-xl leading-relaxed">
                We provide comprehensive dental care utilizing modern techniques and state-of-the-art equipment to ensure your smile stays healthy and radiant.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {displayedServices.map((service, index) => (
              <ServicesItem key={service.id} service={service} index={index} />
            ))}
          </div>

          {home && (
            <div className="text-center mt-16">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
