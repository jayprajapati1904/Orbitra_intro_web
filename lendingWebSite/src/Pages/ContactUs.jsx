import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";

export default function ContactUs() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ✅ From .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ From .env
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ From .env
      )

      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className=" py-20 px-6 sm:px-12 lg:px-20 mt-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions, feedback, or a project in mind? Reach out to us —
            we’re here to help you succeed 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Location
                </h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Thaltej <br />
                  Ahmedabad City <br />
                  India – 380054
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Mail className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-2 text-gray-700">techorbitra@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Phone className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                <p className="mt-2 text-gray-700">+91 9429468900</p>
                <p className="mt-2 text-gray-700">+91 7203835504</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>

            <div>
              <label className="block text-left text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="from_name" // ✅ match EmailJS template variable
                required
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email" // ✅ reply-to instead of from_email
                required
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                name="message" // ✅ match EmailJS template variable
                required
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
