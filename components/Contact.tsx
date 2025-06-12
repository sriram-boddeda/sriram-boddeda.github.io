import React, { useState } from "react";
import { ContactData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface ContactProps {
  data: ContactData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 text-gray-800 dark:text-[#dcdcdc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-16 text-center">
            <span className="text-gray-500">{"//"}</span> Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    &apos;
                    <a
                      href={`mailto:${data.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {data.email}
                    </a>
                    &apos;,
                  </p>
                )}
                {data.phone && (
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">
                      phone:
                    </span>{" "}
                    &apos;
                    <a
                      href={`tel:${data.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {data.phone}
                    </a>
                    &apos;,
                  </p>
                )}
                {data.address && (
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">
                      address:
                    </span>{" "}
                    &apos;{data.address}&apos;,
                  </p>
                )}
              </div>
              <p className="mt-4">{"}"}</p>
            </motion.div>

            {/* Form Container */}
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the mailto link with the form data
    const mailtoLink = `mailto:sriram.b29@outlook.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
      formData.name
    )}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;

    // Open the default email app with pre-filled information
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div
      className="bg-white dark:bg-[#1e1e1e] p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-2xl font-mono font-semibold mb-8 text-gray-800 dark:text-[#dcdcdc]">
        function sendMessage() {"{"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-8 font-mono">
        {/* Name Field */}
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
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white dark:placeholder-gray-400"
            placeholder="'John Doe'"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
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
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white dark:placeholder-gray-400"
            placeholder="'you@example.com'"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Field */}
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
            className="block w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white dark:placeholder-gray-400"
            placeholder="'Your message here...'"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white 
                       bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                       transition-colors duration-300"
          >
            submit()
          </button>
        </div>
      </form>
      <p className="mt-8 font-mono">{"}"}</p>
    </motion.div>
  );
}

export default Contact;
