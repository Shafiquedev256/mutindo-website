export function Header() {
  return (
    <div className='containor w-screen h-[90vh] bg-[url("/src/assets/bgimg.jpg")] bg-cover bg-no-repeat bg-center bg-fixed'>
      <div className='w-[100%] h-[100%] bg-black bg-opacity-80 md:flex'>
        <div className='h-[100%] text-white text-2xl  text-center flex flex-col  items-center justify-center md:p-6 '>
          <span className='text-4xl'>
            Boost Your
            <span className='text-purple-500 font-bold'>Business</span>
          </span>
          <span> Online</span>
          <span>
            <span className='text-purple-500'>Without</span> Breaking the
          </span>
          <span className='text-4xl'>Bank</span>
          <button className=' bg-purple-500 p-2 rounded-md text-center w-fit h-fit text-sm my-8 font-medium'>
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
