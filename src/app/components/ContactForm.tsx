"use client";
import { FormEvent, useState, ChangeEvent } from "react";
import { CheckIcon, CloseIcon, LoadIcon, WarningIcon } from "../assets/icons";

const validation = {
  errorMessageEmail: "A valid e-mail address is required. Example: yourname@gmail.com",
  errorMessageMessage: "Messages must be at least 15 characters long",
  errorMessageName: "Names must be at least 2 characters long",
  emailRegex: ".+@[^.].*.[a-z]{2,}",
  nameRegex: ".{2,}",
  messageRegex: ".{15,1000}",
};

type ContactForm = {
  email: string;
  name: string;
  message: string;
};

const ContactForm = () => {
  const formInit = {
    email: "",
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInit);

  // "initial" | "sending" | "sent" | "error";
  const [formStatus, setFormStatus] = useState("initial");

  const isValidForm = (form: ContactForm) => {
    const { email, name, message } = form;
    return (
      new RegExp(validation.emailRegex).test(email) &&
      new RegExp(validation.nameRegex).test(name) &&
      new RegExp(validation.messageRegex).test(message)
    );
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!isValidForm(formData)) {
    //   return;
    // }
    setFormStatus("sending");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        from_name: "Shuhua.dev",
        subject: "Shuhua.dev: contact form response",
        ...formData,
      }),
    });

    if (response.ok) {
      setFormStatus("sent");
      setFormData(formInit);
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className='py-8 lg:py-16 px-4 max-w-screen-md'>
      <div className=''>
        <h1>Get in Touch!</h1>
        <p className='max-w-prose'>
          I am currently looking for a job in the software engineering field! If anything on my
          portfolio has piqued your interest, please feel free to contact me!
        </p>
      </div>

      {formStatus !== "error" && (
        <form
          noValidate
          onSubmit={(e) => void handleFormSubmit(e)}
          className={`${formStatus === "sending" ? "#blur-sm #cursor-wait" : ""} group`}>
          <div className=''>
            <label
              htmlFor='email'
              className='block mb-1 text-sm font-medium after:content-["*"] after:ml-0.5 after:text-pink'>
              EMAIL
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleInputChange}
              pattern={validation.emailRegex}
              className='
              shadow-sm border bg-secondary border-gray-300 text-sm rounded-lg
              block w-full p-2.5 peer/email
              invalid:[&:not(:placeholder-shown):not(:focus)]:border-error'
            />
            <span
              className={`mb-1 text-sm text-error invisible
               peer-[&:not(:placeholder-shown):not(:focus):invalid]/email:visible`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageEmail}
            </span>
          </div>

          <div className=''>
            <label
              htmlFor='name'
              className='block mb-1 text-sm font-medium after:content-["*"] after:ml-0.5 after:text-pink'>
              NAME
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='What is your name?'
              value={formData.name}
              onChange={handleInputChange}
              pattern={validation.nameRegex}
              className='block bg-secondary p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm
              peer/name invalid:[&:not(:placeholder-shown)]:border-error'
            />
            <span
              className={`block mb-1 text-sm text-error
              invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]/name:visible`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageName}
            </span>
          </div>

          <div className=''>
            <label
              htmlFor='message'
              className='block mb-1 text-sm font-medium after:content-["*"] after:ml-0.5 after:text-pink'>
              MESSAGE
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Hi Shuhua!'
              value={formData.message}
              rows={5}
              onChange={handleInputChange}
              required
              minLength={15}
              maxLength={1000}
              className='block bg-secondary p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300
              peer invalid:[&:not(:placeholder-shown)]:border-error'></textarea>
            <span
              className={`block mb-1 text-sm text-error
              invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageMessage}
            </span>
          </div>
          <div className='flex'>
            {formStatus === "sending" || (
              <button
                type='submit'
                className='mx-auto text-center rounded-lg bg-tertiary text-default py-3 px-5 font-medium group-invalid:pointer-events-none group-invalid:opacity-50'>
                Send Me A Message
              </button>
            )}
            {formStatus === "sending" && (
              <div className='flex mx-auto text-center rounded-lg bg-tertiary text-default py-3 px-5 font-medium opacity-50'>
                <LoadIcon className='w-6 h-6 mr-2 text-purple animate-spin fill-pink' />
                Processing...
              </div>
            )}
          </div>
        </form>
      )}

      {formStatus === "sent" && (
        <>
          <div className='flex items-center p-4 mt-4 rounded-lg shadow bg-secondary w-full'>
            <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
              <CheckIcon className='w-5 h-5 ' />
              <span className='sr-only'>Check icon</span>
            </div>
            <div className='ml-3 text-sm font-normal'>
              Email sent successfully. Thank you for reaching out!
            </div>
            <button
              type='button'
              className='ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
              onClick={() => setFormStatus("initial")}>
              <span className='sr-only'>Close</span>
              <CloseIcon />
            </button>
          </div>
        </>
      )}

      {formStatus === "error" && (
        <>
          <WarningIcon className='h-32 m-auto text-pink' />
          <p>
            Something went wrong. Email me directly at{" "}
            <a href='mailto:sl.shuhualiu@gmail.com'>sl.shuhualiu@gmail.com</a>
          </p>
        </>
      )}
    </div>
  );
};

export default ContactForm;
