import React from 'react';
import { motion } from 'motion/react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
          
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Effective Date: Jan 1, 2025
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8 text-gray-300">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to Bytelyft</h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") govern your use of Bytelyft's games, services, and website 
                (collectively, the "Services"). By accessing or using our Services, you agree to be bound by 
                these Terms. If you don't agree to these Terms, please don't use our Services.
              </p>
            </section>

            {/* About Us */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. About Bytelyft</h2>
              <p className="leading-relaxed">
                Bytelyft is an indie game development studio committed to creating engaging, 
                community-driven gaming experiences. We operate as a startup focused on innovation, 
                quality, and meaningful player connections.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                By using our Services, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least 13 years old (or the minimum age required in your jurisdiction)</li>
                <li>You have the legal capacity to enter into this agreement</li>
                <li>If you're under 18, you have parental or guardian consent</li>
                <li>You will comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
              <p className="leading-relaxed mb-4">
                To access certain features of our Services, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use cheats, exploits, or unauthorized third-party software</li>
                <li>Distribute malware or engage in hacking activities</li>
                <li>Impersonate others or create fake accounts</li>
                <li>Share inappropriate, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content, games, software, and materials provided through our Services are owned by 
                Bytelyft or our licensors and are protected by copyright, trademark, and other intellectual 
                property laws. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Reverse engineer or decompile our software</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use our trademarks without authorization</li>
              </ul>
            </section>

            {/* User-Generated Content */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User-Generated Content</h2>
              <p className="leading-relaxed mb-4">
                Content you create or share through our Services remains yours, but you grant Bytelyft 
                a non-exclusive, worldwide, royalty-free license to use, display, and distribute such 
                content in connection with our Services. You represent that you own or have the 
                necessary rights to any content you submit.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy</h2>
              <p className="leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                protect your information when you use our Services. By using our Services, you consent 
                to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            {/* Purchases and Payments */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Purchases and Payments</h2>
              <p className="leading-relaxed mb-4">
                If you purchase games or in-game items:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All purchases are final unless otherwise specified</li>
                <li>Prices are subject to change without notice</li>
                <li>You're responsible for all applicable taxes</li>
                <li>Virtual items have no real-world value</li>
                <li>We reserve the right to modify or discontinue items</li>
              </ul>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Service Availability</h2>
              <p className="leading-relaxed">
                We strive to maintain reliable service, but we don't guarantee uninterrupted access. 
                We may modify, suspend, or discontinue Services at any time for maintenance, updates, 
                or other reasons. We'll provide reasonable notice when possible.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers</h2>
              <p className="leading-relaxed mb-4">
                Our Services are provided "as is" without warranties of any kind. We disclaim all 
                warranties, express or implied, including but not limited to warranties of merchantability, 
                fitness for a particular purpose, and non-infringement. We don't warrant that our Services 
                will be error-free or uninterrupted.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Bytelyft shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
                intangible losses resulting from your use of our Services.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account and access to our Services at any time, 
                with or without cause, and with or without notice. You may also terminate your account 
                at any time. Upon termination, your right to use the Services will cease immediately.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. We'll notify you of significant changes 
                by posting the new Terms on our website and updating the "Effective Date" above. 
                Your continued use of our Services after changes become effective constitutes acceptance 
                of the new Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], 
                without regard to its conflict of law principles. Any disputes arising under these Terms 
                shall be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <p className="text-cyan-400 font-semibold">Bytelyft Legal Team</p>
                <p>Email: support@bytelyft.com</p>
                <p>Website: www.bytelyft.com</p>
              </div>
            </section>

            {/* Final Notice */}
            <section className="border-t border-gray-600 pt-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-white">Important:</strong> These Terms constitute the entire agreement 
                between you and Bytelyft regarding your use of our Services. If any provision of these Terms 
                is found to be invalid or unenforceable, the remaining provisions will remain in full force 
                and effect. Our failure to enforce any provision of these Terms will not be deemed a waiver 
                of such provision or any other provision.
              </p>
            </section>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;