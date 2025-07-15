import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  MdEmail,
  MdSend,
  MdPerson,
  MdMessage,
  MdCheckCircle,
  MdError,
} from "react-icons/md";
import emailjs from "emailjs-com";

export const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key (user ID)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Initialize EmailJS
      emailjs.init(publicKey);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: "New Contact Form Submission",
        message: formData.message,
        to_name: "Nishant Raj",
      };

      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("Email sent successfully:", result.text);
      showToast(
        "success",
        "🎉 Message sent successfully! I'll get back to you soon."
      );

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      showToast(
        "error",
        "❌ Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20`}
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Let&apos;s work together to bring your ideas to life. I&apos;m
              always excited to discuss new projects and opportunities.
            </p>
          </div>

          <div
            className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover-lift ${
              isDarkMode
                ? "border-white/10 hover:border-blue-500/50 bg-gray-900"
                : "border-gray-200 hover:border-blue-300 bg-white"
            }`}
          >
            {/* Animated background gradient overlay */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                  : "bg-gradient-to-br from-blue-100/50 to-cyan-100/50"
              }`}
            ></div>

            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MdEmail className="text-2xl text-blue-500" />
                </div>
                <h3
                  className={`text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Send me a message
                </h3>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <MdPerson className="text-lg" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg hover:border-blue-300 ${
                      isDarkMode
                        ? "bg-gray-800 border-white/10 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white"
                    }`}
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* Email Input */}
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <MdEmail className="text-lg" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg hover:border-blue-300 ${
                      isDarkMode
                        ? "bg-gray-800 border-white/10 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white"
                    }`}
                    placeholder="your.email@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Message Input */}
                <div className="relative group/input">
                  <div className="absolute left-4 top-6 text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <MdMessage className="text-lg" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg hover:border-blue-300 resize-none ${
                      isDarkMode
                        ? "bg-gray-800 border-white/10 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white"
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl transition-all duration-300 font-medium hover:shadow-xl hover:scale-105 group/btn relative overflow-hidden ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed scale-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <MdSend className="text-lg group-hover/btn:animate-bounce cursor-pointer" />
                        <span className="cursor-pointer">Send Message</span>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out animate-fade-in">
          <div
            className={`max-w-md p-4 rounded-xl shadow-2xl border ${
              toast.type === "success"
                ? isDarkMode
                  ? "bg-green-900/90 border-green-500/50 text-green-100"
                  : "bg-green-50 border-green-200 text-green-800"
                : isDarkMode
                ? "bg-red-900/90 border-red-500/50 text-red-100"
                : "bg-red-50 border-red-200 text-red-800"
            } backdrop-blur-sm`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  toast.type === "success"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {toast.type === "success" ? (
                  <MdCheckCircle className="text-sm" />
                ) : (
                  <MdError className="text-sm" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm leading-relaxed">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast({ show: false, type: "", message: "" })}
                className={`flex-shrink-0 text-lg hover:opacity-70 transition-opacity ${
                  toast.type === "success"
                    ? isDarkMode
                      ? "text-green-300"
                      : "text-green-600"
                    : isDarkMode
                    ? "text-red-300"
                    : "text-red-600"
                }`}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
