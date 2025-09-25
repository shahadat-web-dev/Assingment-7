import React from 'react';

const Footer = () => {
  return (
   
    <div className='bg-neutral'>
      <footer class="footer sm:footer-horizontal  text-neutral-content p-10 container mx-auto">
        <nav>
          <h6 class="footer-title">CS — Ticket System</h6>
          <a class="link link-hover">A ticket system is a tool used to <br /> manage customer requests, issues,<br /> or tasks. It organizes queries into <br /> trackable tickets, ensuring efficient <br /> communication, faster resolutions, <br /> and better service management across <br /> teams, making workflow and support <br /> easier to handle.</a>
         
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover mt-4">About us</a>
          <a class="link link-hover mt-4">Our Mission</a>
          <a class="link link-hover mt-4">Contact Saled</a>
          
        </nav>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover mt-4">Products & Services</a>
          <a class="link link-hover mt-4">Customer Stories</a>
          <a class="link link-hover mt-4">Download Apps</a>
        </nav>
        <nav>
          <h6 class="footer-title">Information</h6>
          <a class="link link-hover mt-4">Privacy Policy</a>
          <a class="link link-hover mt-4">Terms & Conditions</a>
          <a class="link link-hover mt-4">Join Us</a>
        </nav>
        <nav>
          <h6 class="footer-title">Social Links</h6>
           <a class="link link-hover mt-4"><i class="fa-brands fa-x-twitter"></i> @CS — Ticket System</a>
          <a class="link link-hover mt-4"><i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System</a>
          <a class="link link-hover mt-4"><i class="fa-brands fa-facebook"></i> @CS — Ticket System</a>
          <a class="link link-hover mt-4"><i class="fa-solid fa-envelope"></i> support@cst.com</a>
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