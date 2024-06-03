type Props = {
  about: any;
  portfolio: any;
  contact: any;
};
export function Nav_bar({ about, portfolio, contact }: Props) {
  const scrollToAbout = () => {
    if (about.current) {
      about.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortifolio = () => {
    if (portfolio.current) {
      portfolio.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTocontact = () => {
    if (contact.current) {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='containor font-medium text-white h-fit bg-black'>
      <div className='flex flex-row   items-center p-2 justify-between mr-2'>
        <div>
          <img
            src='/src/assets/nkobera white (1).jpg'
            alt=''
            className=' w-auto h-10 mx-3'
          />
        </div>
        <div className='hidden md:flex md:flex-row md:justify-between md:w-2/5'>
          <span className='hover:underline' onClick={scrollToAbout}>
            ABOUT US
          </span>
          <span className='hover:underline' onClick={scrollToPortifolio}>
            PORTFOLIO
          </span>
          <span className='hover:underline' onClick={scrollTocontact}>
            CONTACT
          </span>
        </div>
      </div>
    </div>
  );
}
