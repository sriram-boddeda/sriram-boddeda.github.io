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
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="p-8">
                {/* Object declaration */}
                <div className="font-mono text-sm mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      00
                    </span>
                    <span className="text-purple-600 dark:text-purple-400">
                      const
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      contactInfo
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">=</span>
                    <span className="text-yellow-600 dark:text-yellow-400">
                      {"{"}
                    </span>
                  </div>
                </div>

                {/* Main content */}
                <div className="pl-4 space-y-4 font-mono text-sm">
                  {data.email && (
                    <div>
                      <span className="text-red-500 dark:text-red-400">
                        email
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        :{" "}
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        &quot;
                        <a
                          href={`mailto:${data.email}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {data.email}
                        </a>
                        &quot;
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        ,
                      </span>
                    </div>
                  )}
                  {data.phone && (
                    <div>
                      <span className="text-red-500 dark:text-red-400">
                        phone
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        :{" "}
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        &quot;
                        <a
                          href={`tel:${data.phone}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {data.phone}
                        </a>
                        &quot;
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        ,
                      </span>
                    </div>
                  )}
                  {data.address && (
                    <div>
                      <span className="text-red-500 dark:text-red-400">
                        location
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        :{" "}
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        &quot;{data.address}&quot;
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        ,
                      </span>
                    </div>
                  )}
                </div>

                {/* Closing bracket */}
                <div className="font-mono text-sm mt-6">
                  <span className="text-yellow-600 dark:text-yellow-400">
                    {"}"}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">,</span>
                </div>
              </div>
            </motion.div>

            {/* Form Container */}
            <ContactForm toEmail={data.email} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ContactForm({ toEmail }: { toEmail: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the mailto link with the form data
    const mailtoLink = `mailto:${encodeURIComponent(
      toEmail
    )}?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
      formData.name
    )}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;

    // Open the default email app with pre-filled information
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div
      className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="p-8">
        {/* Object declaration */}
        <div className="font-mono text-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 dark:text-gray-400 text-xs">01</span>
            <span className="text-purple-600 dark:text-purple-400">
              function
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              sendMessage
            </span>
            <span className="text-gray-600 dark:text-gray-400">()</span>
            <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="pl-4 space-y-6 font-mono text-sm"
        >
          {/* Form fields as object properties */}
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <div className="mb-2">
                <span className="text-red-500 dark:text-red-400">name</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 ml-4 text-gray-800 dark:text-gray-200 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-500 font-mono text-sm transition-all duration-200"
                placeholder="'Enter your name'"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div className="mt-1 ml-4">
                <span className="text-gray-600 dark:text-gray-400">,</span>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <div className="mb-2">
                <span className="text-red-500 dark:text-red-400">email</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 ml-4 text-gray-800 dark:text-gray-200 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-500 font-mono text-sm transition-all duration-200"
                placeholder="'your.email@example.com'"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="mt-1 ml-4">
                <span className="text-gray-600 dark:text-gray-400">,</span>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <div className="mb-2">
                <span className="text-red-500 dark:text-red-400">message</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 ml-4 text-gray-800 dark:text-gray-200 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-500 font-mono text-sm resize-none transition-all duration-200"
                placeholder="'Your message here...'"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Submit function call */}
          <div className="mt-6">
            <div className="mb-2">
              <span className="text-red-500 dark:text-red-400">submit</span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
            </div>
            <button
              type="submit"
              className="ml-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-mono text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              sendMessage()
            </button>
          </div>
        </form>

        {/* Closing bracket */}
        <div className="font-mono text-sm mt-6">
          <span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
