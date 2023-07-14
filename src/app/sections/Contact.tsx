import ContactForm from "../components/ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    // container
    <div className='container mx-auto my-0 px-16 md:py-40'>
      {/* content */}
      <div className='flex justify-center relative'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
