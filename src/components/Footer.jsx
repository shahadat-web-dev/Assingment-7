import React from 'react';

const Footer = () => {
  return (
    // <div className='bg-black h-[462px]'>
    //   <footer className='container mx-auto'>
    //       <div className='flex flex-col md:flex-row justify-between pt-20'>
    //         <div>
    //           <h2 className='text-white text-2xl font-bold'>CS — Ticket System</h2>
    //           <p className='text-[#A1A1AA] mt-4'>A ticket system is a tool used <br /> to manage customer requests,<br /> issues, or tasks. It organizes <br />queries into trackable tickets,<br /> ensuring efficient communication,<br /> faster resolutions, and better service <br /> management across teams, making <br /> workflow and support easier to handle.</p>
    //         </div>
    //         <div>
    //           <h2 className='text-white text-2xl font-bold'>Company</h2>
    //           <p className='text-[#A1A1AA] mt-4'>About Us</p>
    //           <p className='text-[#A1A1AA] mt-4'>Our Mission</p>
    //           <p className='text-[#A1A1AA] mt-4'>Contact Saled</p>
    //         </div>
    //         <div>
    //           <h2 className='text-white text-2xl font-bold'>Services</h2>
    //           <p className='text-[#A1A1AA] mt-4'>Products & Services</p>
    //           <p className='text-[#A1A1AA] mt-4'>Customer Stories</p>
    //           <p className='text-[#A1A1AA] mt-4'>Download Appss</p>
    //         </div>
    //         <div>
    //           <h2 className='text-white text-2xl font-bold'>Information</h2>
    //           <p className='text-[#A1A1AA] mt-4'>Privacy Policy</p>
    //           <p className='text-[#A1A1AA] mt-4'>Terms & Conditions</p>
    //           <p className='text-[#A1A1AA] mt-4'>Join Us</p>
    //         </div>
    //         <div>
    //           <h2 className='text-white text-2xl font-bold'>Social Links</h2>
    //           <p className='text-[#A1A1AA] mt-4'>@CS — Ticket System</p>
    //           <p className='text-[#A1A1AA] mt-4'>@CS — Ticket System</p>
    //           <p className='text-[#A1A1AA] mt-4'>@CS — Ticket System</p>
    //           <p className='text-[#A1A1AA] mt-4'>support@cst.com</p>
    //         </div>

    //       </div>
    //       <div className='pt-15'>
    //         <hr />
    //         <p className='text-white text-center mt-7'>© 2025 CS — Ticket System. All rights reserved.</p>
    //       </div>
    //   </footer>
    // </div>
    <div className='bg-neutral'>
      <footer class="footer sm:footer-horizontal  text-neutral-content p-10 container mx-auto">
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className='md:pt-15 pb-5'>
        <hr className='text-gray-700' />
        <p className='text-white text-center mt-7'>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;