import React from "react";
import { ContactData } from "../types/portfolioTypes";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

interface ContactProps {
  data: ContactData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-[#dcdcdc]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-transparent dark:from-blue-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
          <div className="absolute bottom-10 right-0 w-72 h-72 bg-gradient-to-br from-green-400 to-transparent dark:from-green-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-16 text-center">
            // Get in Touch
          </h2>

          {/* Responsive Layout for Contact Information and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                const contactInfo = {"{"}
              </h3>
              <div className="pl-4 space-y-4">
                {data.email && (
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">
                      email:
                    </span>{" "}
                    '
                    <a
                      href={`mailto:${data.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {data.email}
                    </a>
                    ',
                  </p>
                )}
                {data.phone && (
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">
                      phone:
                    </span>{" "}
                    '
                    <a
                      href={`tel:${data.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {data.phone}
                    </a>
                    ',
                  </p>
                )}
                {data.address && (
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">
                      address:
                    </span>{" "}
                    '{data.address}',
                  </p>
                )}
              </div>
              <p className="mt-4">{"}"}</p>
            </motion.div>

            {/* Form Container */}
            <motion.div
              className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-mono font-semibold mb-6 text-gray-800 dark:text-[#dcdcdc]">
                sendMessage() {"{"}
              </h3>
              <ContactForm />
              <p className="mt-4 font-mono">{"}"}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="'John Doe'"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="'you@example.com'"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="'Your message here...'"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
        >
          submit()
        </button>
      </div>
    </form>
  );
}

export default Contact;
