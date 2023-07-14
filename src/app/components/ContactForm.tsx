"use client";
import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { CheckIcon, CloseIcon, LoadIcon, WarningIcon } from "../assets/icons";

const validation = {
  errorMessageEmail: "A valid e-mail address is required. Example: yourname@gmail.com",
  errorMessageMessage: "Messages must be at least 15 characters long",
  errorMessageName: "Names must be at least 2 characters long",

  isValidEmail: (email: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email) ? true : false;
  },
  isValidMessage: (message: string) => (message.trim().length >= 15 ? true : false),
  isValidName: (name: string) => (name.trim().length >= 2 ? true : false),
};

const ContactForm = () => {
  const formInit = {
    email: "",
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInit);

  const [formValidation, setFormValidation] = useState({
    email: true,
    name: true,
    message: true,
    form: false,
  });

  // "initial" | "sending" | "sent" | "error";
  const [formStatus, setFormStatus] = useState("error");

  useEffect(() => {
    // validate fields when a value changes
    const { isValidEmail, isValidName, isValidMessage } = validation;

    const validator = (input: string, isValidInput: (input: string) => boolean) =>
      input.length === 0 || isValidInput(input);

    const validate = {
      email: validator(formData.email, isValidEmail),
      name: validator(formData.name, isValidName),
      message: validator(formData.message, isValidMessage),
      form:
        isValidEmail(formData.email) &&
        isValidName(formData.name) &&
        isValidMessage(formData.message),
    };
    setFormValidation(validate);
  }, [formData]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValidation.form) return;
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
          onSubmit={(e) => void handleFormSubmit(e)}
          className={`${formStatus === "sending" ? "#blur-sm #cursor-wait" : ""}`}>
          <div className={`${formValidation.email ? "mb-6" : ""}`}>
            <label htmlFor='email' className='block mb-1 text-sm font-medium '>
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
              className='
              shadow-sm border bg-secondary border-gray-300 text-sm rounded-lg
              block w-full p-2.5'
            />
            <span
              className={`${formValidation.email ? "hidden" : ""} block mb-1 text-sm text-error`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageEmail}
            </span>
          </div>

          <div className={`${formValidation.name ? "mb-6" : ""}`}>
            <label htmlFor='name' className='block mb-1 text-sm font-medium '>
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
              className='block bg-secondary p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm'
            />
            <span
              className={`${formValidation.name ? "hidden" : ""} block mb-1 text-sm text-error`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageName}
            </span>
          </div>

          <div className={`${formValidation.message ? "mb-6" : ""}`}>
            <label htmlFor='message' className='block mb-1 text-sm font-medium'>
              MESSAGE
            </label>
            <textarea
              name='message'
              id='message'
              required
              placeholder='Hi Shuhua!'
              value={formData.message}
              rows={5}
              onChange={handleInputChange}
              className='block bg-secondary p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300'></textarea>
            <span
              className={`${formValidation.message ? "hidden" : ""} block mb-1 text-sm text-error`}>
              <strong className='text-error'>Oops! </strong>
              {validation.errorMessageMessage}
            </span>
          </div>
          <div className='flex'>
            {formStatus === "sending" || (
              <button
                type='submit'
                className='mx-auto text-center rounded-lg bg-tertiary text-default py-3 px-5 font-medium'>
                Send Me A Message
              </button>
            )}
            {formStatus === "sending" && (
              <div className='flex mx-auto text-center rounded-lg bg-tertiary text-default py-3 px-5 font-medium'>
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
