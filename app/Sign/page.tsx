import React from 'react'
import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'
import Giris from '@/components/Giris'
import Kaydol from '@/components/Kaydol'
import Footer from '@/components/Footer'

interface SignPageProps {}

const SignPage: React.FC<SignPageProps> = () => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <Navbar/> 
      <Menu/>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-black">Sign In or Create an Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl mb-2 flex items-center gap-2 text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Already Client
              </h2>
              <Giris/>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Find Locations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Quality Location check
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Data Protection
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Secure Payments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    H24 Support
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl mb-2 flex items-center gap-2 text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                New Client <span className="text-sm text-gray-500">* Required Fields</span>
              </h2>
              <Kaydol/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignPage
