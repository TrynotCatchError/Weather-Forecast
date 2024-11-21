import React from 'react';

function Description() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Project Overview: Course & LMS Platform
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          I developed a comprehensive Course and Learning Management System (LMS) platform designed for seamless online education. 
          The platform supports user authentication, course enrollment, secure payments, and video streaming while maintaining a 
          modern and responsive user interface.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Technologies Used</h3>

        <h4 className="text-lg font-medium text-gray-800">Frontend:</h4>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
          <li>
            <strong className="font-medium text-gray-800">Next.js (v15):</strong> Server-side rendering and API routes.
          </li>
          <li>
            <strong className="font-medium text-gray-800">React:</strong> Dynamic and responsive UI components.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Tailwind CSS:</strong> Rapidly designed custom and modern UI.
          </li>
        </ul>

        <h4 className="text-lg font-medium text-gray-800">Backend:</h4>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
          <li>
            <strong className="font-medium text-gray-800">Prisma:</strong> ORM for seamless database queries and schema management.
          </li>
          <li>
            <strong className="font-medium text-gray-800">PostgreSQL:</strong> Robust relational database.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Supabase:</strong> Scalable backend services.
          </li>
        </ul>

        <h4 className="text-lg font-medium text-gray-800">Payment Gateway:</h4>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
          <li>
            <strong className="font-medium text-gray-800">Stripe:</strong> Secure payment processing for subscriptions and one-time purchases.
          </li>
        </ul>

        <h4 className="text-lg font-medium text-gray-800">Video Streaming:</h4>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>
            <strong className="font-medium text-gray-800">Mux:</strong> High-quality video hosting and streaming.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Features</h3>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>
            <strong className="font-medium text-gray-800">Authentication & Authorization:</strong> 
            Implemented secure user authentication using NextAuth for seamless session management.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Course Enrollment:</strong> 
            Integrated course pages with real-time enrollment capabilities and dynamic pricing.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Payment Processing:</strong> 
            Leveraged Stripe to enable secure payments for both one-time and subscription-based courses.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Video Delivery:</strong> 
            Utilized Mux to host and stream course videos efficiently.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Responsive UI:</strong> 
            Designed mobile-friendly pages with Tailwind CSS for modern, professional aesthetics.
          </li>
          <li>
            <strong className="font-medium text-gray-800">Database Management:</strong> 
            Efficient schema handling and relational data operations using Prisma and PostgreSQL.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Highlights</h3>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>
            Built with scalability and performance in mind, ensuring the platform can handle growth.
          </li>
          <li>
            Successfully integrated complex payment workflows and recurring billing.
          </li>
          <li>
            Designed an intuitive and visually appealing user interface for better engagement.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Description;
