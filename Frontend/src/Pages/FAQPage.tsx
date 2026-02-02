import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is VerifyGuard and how does it work?",
    answer:
      "VerifyGuard is a product authentication platform that uses QR code technology powered by blockchain security. Each product gets a unique QR code that customers can scan with their smartphone to instantly verify authenticity. The verification data is stored on a secure, tamper-proof blockchain, making it impossible to forge or manipulate.",
  },
  {
    question: "How do I get started with VerifyGuard?",
    answer:
      "Getting started is simple! Sign up for an account, choose a plan that fits your needs, and integrate our system with your production line. You can generate QR codes individually or in bulk, and we provide detailed documentation and support to help with integration. Most customers are up and running within a week.",
  },
  {
    question: "Can customers verify products without downloading an app?",
    answer:
      "Yes! Customers can verify products using any smartphone camera - no app download required. They simply scan the QR code with their phone's camera app, and they'll be directed to a verification page showing the product's authenticity status.",
  },
  {
    question: "How are the QR codes generated and secured?",
    answer:
      "Each QR code is cryptographically generated with a unique identifier linked to your product database. The codes are secured using blockchain technology, making them impossible to duplicate or tamper with. Even if someone copies a QR code, our system can detect multiple scans from different locations and flag suspicious activity.",
  },
  {
    question: "What happens if a counterfeit product is detected?",
    answer:
      "When a counterfeit is detected, you'll receive an immediate alert via email, SMS, or webhook (depending on your notification settings). The alert includes details like scan location, timestamp, and the product information. You can then take appropriate action, such as contacting law enforcement or investigating your supply chain.",
  },
  {
    question: "How much does VerifyGuard cost?",
    answer:
      "We offer flexible pricing plans to suit businesses of all sizes. Our Starter plan begins at $99/month for up to 1,000 verifications. We also offer Professional and Enterprise plans with advanced features, higher limits, and dedicated support. Contact our sales team for a custom quote based on your specific needs.",
  },
  {
    question: "Can I customize the verification page with my brand?",
    answer:
      "Absolutely! All plans include basic branding options like logo and colors. Professional and Enterprise plans offer full white-label customization, including custom domains, complete design control, and the ability to add custom messaging and marketing content to your verification pages.",
  },
  {
    question: "Is VerifyGuard suitable for small businesses?",
    answer:
      "Yes! We designed VerifyGuard to be accessible for businesses of all sizes. Our Starter plan is perfect for small businesses and startups. The platform is easy to use, requires no technical expertise, and you can start protecting your products with minimal investment.",
  },
  {
    question: "What industries does VerifyGuard serve?",
    answer:
      "VerifyGuard serves a wide range of industries including fashion and apparel, electronics, pharmaceuticals, luxury goods, automotive parts, cosmetics, food and beverage, and many more. Any industry affected by counterfeiting can benefit from our platform.",
  },
  {
    question: "How accurate is the verification system?",
    answer:
      "Our verification system boasts a 99.9% accuracy rate. The blockchain-based technology ensures that verification data cannot be tampered with, and our advanced algorithms can detect suspicious patterns like multiple scans from different geographic locations or unusual scanning frequency.",
  },
  {
    question: "Can I integrate VerifyGuard with my existing systems?",
    answer:
      "Yes! We offer a RESTful API, webhooks, and SDKs for popular programming languages. You can integrate VerifyGuard with your ERP, inventory management system, e-commerce platform, or any other system. Our technical documentation provides detailed integration guides, and our support team is available to help.",
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer:
      "VerifyGuard provides comprehensive analytics including verification attempts, geographic distribution, scan frequency, counterfeit detection rates, and customer engagement metrics. You can generate custom reports, export data to CSV or PDF, and schedule automated report delivery.",
  },
  {
    question: "Is my data secure with VerifyGuard?",
    answer:
      "Security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're ISO 27001 certified, SOC 2 Type II compliant, and follow strict security protocols. Our infrastructure is hosted on enterprise-grade cloud servers with 99.9% uptime SLA.",
  },
  {
    question: "What support do you offer?",
    answer:
      "We offer multiple support channels depending on your plan. All customers get access to our comprehensive knowledge base and email support. Professional plan customers get priority support with faster response times. Enterprise customers receive dedicated account management and 24/7 phone support.",
  },
  {
    question: "Can I try VerifyGuard before committing?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features (no credit card required). This gives you time to test the platform, integrate it with your systems, and see how it works for your specific use case before making a commitment.",
  },
  {
    question: "What if I need to generate a large number of QR codes?",
    answer:
      "Our platform supports bulk code generation. You can upload a CSV file with your product data and generate thousands of QR codes at once. For very large volumes (millions of codes), our Enterprise plan offers optimized batch processing and dedicated infrastructure.",
  },
  {
    question: "How do you prevent QR codes from being copied?",
    answer:
      "While the physical QR code can be copied, our system tracks every scan and can detect when the same code is scanned from multiple locations or with unusual patterns. When suspicious activity is detected, you receive an alert and the verification page can display a warning to customers.",
  },
  {
    question: "What languages does VerifyGuard support?",
    answer:
      "VerifyGuard supports over 50 languages, including English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. The verification pages automatically detect the user's language preference, or you can set a default language for your brand.",
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about VerifyGuard
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you get the answers you need
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Contact Support
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
