import React from 'react';
import { motion } from 'motion/react';

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Last Updated: July 9, 2025
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
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website 
                or use our games. They help us provide you with a better experience by remembering your 
                preferences, analyzing how you use our services, and improving our offerings.
              </p>
              <p className="leading-relaxed">
                This Cookie Policy explains what cookies are, how Bytelyft uses them, and how you can 
                manage your cookie preferences.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="leading-relaxed mb-4">
                Bytelyft uses cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your login status and preferences</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized gaming experiences</li>
                <li>Improve our website and game performance</li>
                <li>Deliver relevant content and advertisements</li>
                <li>Ensure security and prevent fraud</li>
                <li>Support customer service and technical support</li>
              </ul>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              {/* Essential Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">1. Essential Cookies</h3>
                <p className="leading-relaxed mb-2">
                  These cookies are necessary for our website and games to function properly. They cannot be disabled.
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Purpose:</strong> Authentication, security, basic website functionality</p>
                  <p className="text-sm"><strong>Duration:</strong> Session or until logout</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> No</p>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Performance Cookies</h3>
                <p className="leading-relaxed mb-2">
                  These cookies collect information about how you use our website and games to help us improve performance.
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Purpose:</strong> Analytics, performance monitoring, error reporting</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes</p>
                </div>
              </div>

              {/* Functionality Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-3">3. Functionality Cookies</h3>
                <p className="leading-relaxed mb-2">
                  These cookies remember your preferences and settings to provide a personalized experience.
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Purpose:</strong> User preferences, language settings, customization</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes</p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3">4. Marketing Cookies</h3>
                <p className="leading-relaxed mb-2">
                  These cookies are used to deliver relevant advertisements and track advertising effectiveness.
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Purpose:</strong> Targeted advertising, campaign tracking</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes</p>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="leading-relaxed mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
                <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                <li><strong>Game Engines:</strong> For game functionality and performance</li>
                <li><strong>Content Delivery Networks:</strong> For faster content delivery</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie practices. We recommend 
                reviewing their policies for more information.
              </p>
            </section>

            {/* Gaming-Specific Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Gaming-Specific Cookies</h2>
              <p className="leading-relaxed mb-4">
                For our games, we use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Save your game progress and achievements</li>
                <li>Remember your game settings and preferences</li>
                <li>Provide leaderboards and social features</li>
                <li>Prevent cheating and maintain game integrity</li>
                <li>Deliver in-game purchases and virtual items</li>
                <li>Enable multiplayer functionality</li>
              </ul>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Browser Settings</h3>
                  <p className="leading-relaxed">
                    You can manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>View cookies stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block all cookies (may affect functionality)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Cookie Consent Banner</h3>
                  <p className="leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences</li>
                    <li>Learn more about each cookie type</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Opt-Out Links</h3>
                  <p className="leading-relaxed mb-2">
                    You can opt out of specific tracking cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300">Google Analytics Opt-out</a></li>
                    <li>Interest-based advertising: <a href="http://www.aboutads.info/choices/" className="text-cyan-400 hover:text-cyan-300">Digital Advertising Alliance</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impact of Disabling Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Impact of Disabling Cookies</h2>
              <p className="leading-relaxed mb-4">
                If you disable cookies, you may experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Difficulty logging in or staying logged in</li>
                <li>Loss of personalized settings and preferences</li>
                <li>Reduced website functionality</li>
                <li>Inability to save game progress</li>
                <li>Less relevant content and advertisements</li>
                <li>Repeated requests for consent</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain cookie data for different periods depending on the type:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Deleted after their expiration date (up to 2 years)</li>
                <li><strong>Local storage:</strong> Remains until manually deleted or cleared</li>
              </ul>
            </section>

            {/* Updates to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or legal requirements. We'll notify you of significant changes by posting the updated 
                policy on our website and updating the "Last Updated" date above.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about our cookie practices, please contact us:
              </p>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <p className="text-cyan-400 font-semibold">Bytelyft Privacy Team</p>
                <p>Email: support@bytelyft.io</p>
                <p>Website: www.bytelyft.io</p>
                <p>Subject: Cookie Policy Inquiry</p>
              </div>
            </section>

            {/* Final Notice */}
            <section className="border-t border-gray-600 pt-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-400/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white">Remember:</strong> By continuing to use our website and games, 
                  you consent to our use of cookies as described in this policy. You can change your cookie 
                  preferences at any time through your browser settings or by contacting us directly.
                </p>
              </div>
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

export default CookiePolicy;