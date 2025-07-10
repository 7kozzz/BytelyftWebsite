import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" id='privacypolicy'>
      {/* Header */}
      <motion.div
        className="bg-gray-800/60 backdrop-blur-lg border-b border-gray-700/50 pt-20 md:pt-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              Privacy Policy
              <span className="text-cyan-400">🔒</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Bytelyft collects, uses, and protects your information.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <strong>Last Updated:</strong> January 2025
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
            
            {/* Section 1: Introduction */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                1. Introduction
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Welcome to Bytelyft ("we," "our," or "us"). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at bytelyft.io, use our games, or interact with our services (collectively, the "Services").
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                2. Information We Collect
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">2.1 Personal Information</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                  <li>Visit our website or use our services</li>
                  <li>Contact us through our website, email, or other communication channels</li>
                  <li>Create an account for our games or services</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Participate in community discussions, forums, or events</li>
                  <li>Apply for career opportunities with us</li>
                  <li>Provide feedback, reviews, or testimonials</li>
                  <li>Participate in surveys, contests, or promotions</li>
                </ul>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  This information may include your name, email address, phone number, mailing address, username, profile information, payment information (processed by third-party payment processors), and any other information you voluntarily provide to us.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">2.2 Game Data</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  When you play our games, we may collect:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                  <li>Game progress and achievements</li>
                  <li>In-game statistics and performance data</li>
                  <li>Game preferences and settings</li>
                  <li>Technical information about your device and gameplay</li>
                  <li>Multiplayer interaction data</li>
                  <li>In-game purchases and transaction history</li>
                </ul>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">2.3 Technical Information</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  We automatically collect certain technical information when you use our Services:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type, version, and language settings</li>
                  <li>Device information (operating system, hardware specifications, device identifiers)</li>
                  <li>Usage data and website analytics (pages visited, time spent, click patterns)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Referring website or source of traffic</li>
                  <li>Log files and server data</li>
                </ul>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                3. How We Use Your Information
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li>To provide, maintain, and improve our Services</li>
                <li>To process transactions and deliver products or services</li>
                <li>To personalize your gaming experience and user interface</li>
                <li>To communicate with you about our games, services, and updates</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To analyze usage patterns and improve our products and services</li>
                <li>To detect, prevent, and address technical issues or security threats</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
                <li>To send you marketing communications (only with your consent or as permitted by law)</li>
                <li>To conduct research and analytics to improve our business operations</li>
                <li>To protect the rights, property, or safety of Bytelyft, our users, or others</li>
              </ul>
            </section>

            {/* Section 4: Information Sharing */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Services (such as hosting providers, payment processors, and analytics services)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests from government authorities</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent for specific purposes</li>
                <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of Bytelyft, our users, or others, including fraud prevention</li>
              </ul>
            </section>

            {/* Section 5: Data Security */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                5. Data Security
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Our security measures include:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest using industry-standard protocols</li>
                <li>Regular security assessments, vulnerability testing, and updates</li>
                <li>Access controls and multi-factor authentication for internal systems</li>
                <li>Secure hosting with reputable third-party providers</li>
                <li>Employee training on data protection and security best practices</li>
                <li>Incident response procedures for potential data breaches</li>
                <li>Regular backups and disaster recovery planning</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                In the event of a data breach that poses a risk to your personal information, we will notify you and relevant authorities in accordance with applicable laws and regulations.
              </p>
            </section>

            {/* Section 6: Your Rights */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                6. Your Rights and Choices
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Object:</strong> Object to certain processing activities</li>
                <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:privacy@bytelyft.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">privacy@bytelyft.io</a>. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            {/* Section 7: Cookies */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our Services. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve our Services and user experience</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our Services. For more information about cookies and how to manage them, please refer to our Cookie Policy.
              </p>
            </section>

            {/* Section 8: Children's Privacy */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                8. Children's Privacy
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:privacy@bytelyft.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">privacy@bytelyft.io</a>, and we will take steps to remove such information.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove that information from our servers.
              </p>
            </section>

            {/* Section 9: International Users */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                9. International Data Transfers
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than those in your jurisdiction. By using our Services, you consent to the transfer of your information to these countries.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                When we transfer personal information internationally, we implement appropriate safeguards to protect your data in accordance with applicable laws, including standard contractual clauses and other approved transfer mechanisms.
              </p>
            </section>

            {/* Section 10: Data Retention */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                10. Data Retention
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary based on the type of information and applicable legal requirements.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policy and applicable laws.
              </p>
            </section>

            {/* Section 11: Legal Basis for Processing (GDPR) */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                11. Legal Basis for Processing (GDPR)
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                If you are located in the European Economic Area (EEA), we process your personal information based on the following legal bases:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 md:space-y-2 ml-4">
                <li><strong>Consent:</strong> When you have given us clear consent to process your personal information for specific purposes</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal Obligation:</strong> When processing is necessary for compliance with legal obligations</li>
                <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate interests (such as improving our services) and does not override your fundamental rights and freedoms</li>
              </ul>
            </section>

            {/* Section 12: Changes to Policy */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                For significant changes, we may provide additional notice through email or prominent website notifications. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* Section 13: Governing Law */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                13. Governing Law and Jurisdiction
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                This Privacy Policy is governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from this Privacy Policy will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <em>Note: Please consult with legal counsel to determine the appropriate governing law and jurisdiction for your specific situation.</em>
              </p>
            </section>

            {/* Section 14: Contact Information */}
            <section className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-cyan-400/30 pb-2">
                14. Contact Information
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-700/40 rounded-lg p-4 border border-cyan-400/20">
                <p className="text-white font-semibold text-sm md:text-base">Bytelyft Privacy Team</p>
                {/* <p className="text-gray-300 text-sm md:text-base">Email: <a href="mailto:privacy@bytelyft.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">privacy@bytelyft.io</a></p> */}
                <p className="text-gray-300 text-sm md:text-base">Support: <a href="mailto:support@bytelyft.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@bytelyft.io</a></p>
                <p className="text-gray-300 text-sm md:text-base">Website: <a href="https://bytelyft.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">bytelyft.io</a></p>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-700/50 pt-4 md:pt-6 mt-6 md:mt-8">
              <p className="text-gray-400 text-xs md:text-sm text-center">
                This Privacy Policy is effective as of January 2025 and applies to all users of Bytelyft's Services.
              </p>
              <p className="text-gray-400 text-xs md:text-sm text-center mt-2">
                <strong>Disclaimer:</strong> This privacy policy template is for informational purposes only and does not constitute legal advice. Please consult with qualified legal counsel to ensure compliance with applicable laws and regulations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="fixed top-20 right-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
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
        className="fixed bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-lg"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </div>
  );
};

export default PrivacyPolicy;