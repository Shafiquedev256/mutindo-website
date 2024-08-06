export function Abou_us() {
  return (
    <div className='bg-gray-100 px-2 py-6 min-h-screen'>
      <div className='flex flex-col   font-medium'>
        <div className='flex flex-col w-[100%]   font-medium justify-center space-y-4 items-center'>
          <h1 className='text-4xl md:text-5xl text-center font-bold my-5'>
            AB
            <span className='border-0 border-b-2 border-b-red-700'>OU</span>T
            <span className='text-red-700'> US</span>
          </h1>

          <div className='font-mono text-center w-[80%] md:w-[55%]  space-y-4 space-x-4'>
            <p>
              At Mutindo Web Solutions, we believe that every business deserves
              a strong online presence without the high costs typically
              associated with professional web development. Our mission is to
              empower businesses of all sizes by providing high-quality,
              affordable websites tailored to your unique needs.
            </p>
          </div>
        </div>

        <div className='md:grid md:grid-cols-2 my-5 md:gap-5'>
          <div className=' py-5 rounded-md  flex flex-col font-medium justify-center items-center w-[100%]'>
            <div className='text-xl my-3'>Who We Are</div>
            <img
              className=' md:hidden  md:w-[90%] md:h-[80%]'
              src='/src/assets/who_are_we-removebg-preview.png'
            />
            <p className='text-sm text-center md:w-[85%] '>
              We are a team of seasoned web developers, designers, and digital
              strategists dedicated to helping businesses thrive online. Our
              developers bring over 10 years of experience, having worked with
              top digital companies. This wealth of expertise allows us to
              deliver exceptional web solutions that are both innovative and
              reliable.
            </p>
          </div>

          <div className=' hidden md:block '>
            <img
              className=' hidden md:block md:w-[90%] md:h-[80%]'
              src='/src/assets/who_are_we-removebg-preview.png'
            />
          </div>
          <div className=' hidden md:block  '>
            <img
              className=' hidden md:block md:w-[90%] md:h-[80%]'
              src='/src/assets/working-removebg-preview.png'
            />
          </div>

          <div className='flex  flex-col justify-center items-center'>
            <div className=' py-2 text-xl text-center font-bold my-5 relative w-fit'>
              <span className=' border-0 border-t-2 border-t-red-700  p-2 absolute top-0 left-0'></span>
              <span className='ml-2  border-0 border-b-2 border-b-red-700  p-2 absolute bottom-0 right-0'></span>
              What We Do
            </div>
            <img
              className='  md:hidden md:w-[90%] md:h-[80%]'
              src='/src/assets/working-removebg-preview.png'
            />
            <p className='text-sm text-center p-2 rounded-md py-4 md:my-4 w-[80%] font-mono'>
              From stunning, responsive designs to seamless user experiences, we
              offer a comprehensive range of web development services to meet
              your business goals. Whether you're looking to revamp your
              existing site or build a new one from scratch, our affordable
              solutions ensure you get the most value for your investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
