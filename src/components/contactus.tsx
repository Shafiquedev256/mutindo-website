export function ContactUs() {
  return (
    <div className=' min-h-screen '>
      <div className='flex items-center font-medium flex-row space-x-2 md:space-x-4 w-fit h-fit p-3 my-3'>
        <img
          className='  w-20 h-20 bg-purple-800 rounded-full'
          src='/src/assets/shafiq.png'
        />
        <div className='flex flex-col'>
          <div className='md:text-2xl font-medium md:font-normal'>
            Contact Us! We'll get in touch as soon as possible.
          </div>
          <div className='text-sm'>
            Musinguzi Shafiq,
            <span className='text-purple-500 font-medium text-sm px-1'>
              Manager
            </span>
          </div>
        </div>
      </div>
      <form className='w-[98%] md:w-[80%] p-3 space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            className='mt-1 block w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            placeholder='Your Name'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            className='mt-1 block w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            placeholder='Your Email'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Service
          </label>
          <input
            type='text'
            className='mt-1 block w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            placeholder='Service Required'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Contact
          </label>
          <input
            type='text'
            className='mt-1 block w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            placeholder='Contact Number'
          />
        </div>

        <div>
          <button
            type='submit'
            className='bg-gray-900 hover:bg-red-700 text-white min-w-fit p-3 font-medium text-center'
          >
            GET IN TOUCH
          </button>
        </div>
      </form>
    </div>
  );
}
