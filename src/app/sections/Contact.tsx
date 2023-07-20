import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    // container
    <div className='container mx-auto my-0 px-6 py-20 lg:px-16 md:py-40'>
      {/* content */}
      <div className='flex justify-center relative'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
