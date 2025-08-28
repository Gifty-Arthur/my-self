import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "../ScrollAnimation";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSent(true);
          setIsSending(false);
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message, please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 min-h-screen ">
      <ScrollAnimation>
        <div className="px-4">
          <div className="text-center flex  flex-col items-center justify-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 mt-4 ">
              Have a project in mind or just want to say hello? Feel free to
              reach out.
            </p>
          </div>

          <div className="max-w-6xl mx-auto md:flex bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Contact Information Section */}
            <div className="md:w-1/3 bg-purple-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="w-5 h-5 mr-3" />
                  <span>+233 248373574</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-5 h-5 mr-3" />
                  <span>miss.giftarthur@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-5 h-5 mr-3" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="md:w-2/3 p-8">
              {isSent ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="from_name" className="sr-only">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name" // Must match template variable
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="sr-only">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email" // Must match template variable
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="sr-only">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Must match template variable
                      rows="5"
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg disabled:bg-gray-400"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
