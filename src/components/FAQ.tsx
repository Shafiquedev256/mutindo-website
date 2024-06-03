import React, { useState } from "react";
import "tailwindcss/tailwind.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What makes Mutindo Web Solutions different from other web development companies?",
    answer:
      "At Mutindo Web Solutions, we offer high-quality, affordable websites tailored to your unique needs. Our team has over 10 years of experience, ensuring exceptional and reliable web solutions.",
  },
  {
    question: "How much do your web development services cost?",
    answer:
      "Our services are competitively priced to be affordable for businesses of all sizes. We provide custom quotes based on your specific requirements to ensure you get the most value for your investment.",
  },
  {
    question: "Can you help revamp my existing website?",
    answer:
      "Yes, we specialize in both revamping existing websites and building new ones from scratch. Our goal is to enhance your online presence with stunning, responsive designs and seamless user experiences.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline for website development varies depending on the complexity of the project. Typically, a standard website can take anywhere from a few weeks to a couple of months to complete.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Absolutely! We provide ongoing maintenance and support to ensure your website remains up-to-date, secure, and performs optimally at all times.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our team has worked with a wide range of industries, bringing a wealth of expertise to each project. No matter your industry, we can deliver a website that meets your business goals.",
  },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='relative overflow-x-hidden w-screen py-5'>
      <div className='md:bg-gray-400 p-4 w-[200vw] h-[100%] absolute top-0 z-[-1] rotate-1 '></div>

      <div className='max-w-4xl my-6 mx-auto p-4 bg-gray-200 md:bg-white md:rounded-md'>
        <h2 className='text-4xl  font-bold text-center mb-8 '>
          F <span className='text-purple-700'>A</span> Q
        </h2>
        <div className='space-y-4'>
          {faqData.map((item, index) => (
            <div key={index} className='border-b-2 border-gray-100  pb-4'>
              <button
                className='w-full text-left text-lg font-medium text-gray-900 flex justify-between items-center'
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span
                  className={`transform ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </span>
              </button>
              {activeIndex === index && (
                <div className='mt-2  text-gray-600'>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
