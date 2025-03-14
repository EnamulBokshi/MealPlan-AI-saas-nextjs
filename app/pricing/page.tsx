import React from 'react'

function Pricing() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that suits you best</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900">Free</h3>
            <p className="mt-4 text-gray-600">Perfect for individuals</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">$0<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-gray-600">3 meal plans a day</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Community access</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Subscribe</button>
          </div>
          {/* Regular Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900">Regular</h3>
            <p className="mt-4 text-gray-600">Ideal for enthusiasts</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">$10<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-gray-600">All features of Free plan</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Extra mentorship program</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Subscribe</button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <p className="mt-4 text-gray-600">Best for professionals</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">$20<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-gray-600">All features of Regular plan</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Routines for meals</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing