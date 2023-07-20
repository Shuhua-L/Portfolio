import { CheckIcon, CloseIcon } from "@/assets/icons";

type Props = {
  updateFormStatus: (status: string) => void;
};

function FormSent({ updateFormStatus }: Props) {
  return (
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
        onClick={() => updateFormStatus("initial")}>
        <span className='sr-only'>Close</span>
        <CloseIcon />
      </button>
    </div>
  );
}

export default FormSent;
