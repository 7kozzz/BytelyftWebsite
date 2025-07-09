import { motion } from "motion/react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section
          id="contact"
          className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-4 md:px-6 rounded-3xl">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              Contact Us
              <span className="text-cyan-400">📬</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to connect? We'd love to hear from you. Whether you have questions,
              feedback, or just want to say hello, we're here to listen.
            </p>
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Information */}
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
              {/* Primary Contact */}
              <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-cyan-400 text-2xl">📧</span>
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Support</p>
                      <a
                          href="mailto:support@bytelyft.io"
                          className="text-white hover:text-cyan-400 transition-colors text-lg font-medium"
                      >
                        support@bytelyft.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center">
                      <span className="text-orange-400 text-xl">⏰</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Response Time</p>
                      <p className="text-white text-lg font-medium">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 border border-cyan-400/30">
                <h4 className="text-xl font-bold text-white mb-4">Quick Connect</h4>
                <p className="text-gray-300 mb-4">
                  Looking for faster responses? Connect with us on social media or join our community discussions.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                      href="#"
                      className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-4 py-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    Discord
                  </motion.a>
                  <motion.a
                      href="#"
                      className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-4 py-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    Twitter
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
              className="text-center mt-16 bg-gray-800/40 rounded-xl p-6 border border-gray-600/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-3">
              We Value Your Privacy
            </h4>
            <p className="text-gray-300">
              Your information is safe with us. We'll never share your details with third parties
              and will only use your contact information to respond to your inquiry.
            </p>

            {/* Floating Elements */}
            <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-lg opacity-25"
                animate={{
                  scale: [1.2, 1, 1.2],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
            />
          </motion.div>
        </div>
      </section>
  );
};

export default ContactUs;