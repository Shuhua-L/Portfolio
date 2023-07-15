import { WarningIcon } from "@/app/assets/icons";

const FormError = () => {
  return (
    <>
      <WarningIcon className='h-32 m-auto text-pink' />
      <p>
        Something went wrong. Email me directly at{" "}
        <a href='mailto:sl.shuhualiu@gmail.com'>sl.shuhualiu@gmail.com</a>
      </p>
    </>
  );
};

export default FormError;
