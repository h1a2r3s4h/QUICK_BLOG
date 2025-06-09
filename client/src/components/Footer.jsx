import React from 'react'
import { assets } from '../assets/assets'
import { footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-primary/3 px-6 md:px-16 lg:px-24 xl:px-32 py-10 text-gray-700'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        {/* Logo and Description */}
        <div className='md:w-1/3'>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
          <p className='mt-4 max-w-sm text-sm text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Footer Sections */}
        <div className='flex flex-wrap gap-10 justify-between md:w-2/3'>
          {footer_data.map((section, index) => (
            <div key={index} className='min-w-[120px]'>
              <h3 className='font-semibold mb-3'>{section.title}</h3>
              <ul className='space-y-1 text-sm'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className='my-8 border-gray-300' />

      {/* Footer Bottom Row */}
      <div className='flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500'>
        <p>Copyright 2025 © QuickBlog GreatStack - All Right Reserved.</p>
        <button className='mt-4 sm:mt-0 bg-red-500 text-white px-4 py-1 rounded flex items-center gap-1 hover:bg-red-600 transition'>
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M19.615 3.184a2.986 2.986 0 0 0-2.1-2.101C15.872.5 12 .5 12 .5s-3.872 0-5.515.583a2.986 2.986 0 0 0-2.1 2.1C3.8 4.828 3.8 8.7 3.8 8.7s0 3.872.583 5.515a2.986 2.986 0 0 0 2.1 2.1C8.128 17.5 12 17.5 12 17.5s3.872 0 5.515-.583a2.986 2.986 0 0 0 2.1-2.1c.583-1.643.583-5.515.583-5.515s0-3.872-.583-5.515Zm-10.2 8.54V6.276l5.15 2.724-5.15 2.724Z"/></svg>
          Subscribe
        </button>
      </div>
    </footer>
  )
}

export default Footer
