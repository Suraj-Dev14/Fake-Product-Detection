import { Link } from "react-router";
import { Shield, Target, Users, Award, Heart, Lightbulb } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About VerifyGuard</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to eliminate counterfeit products and protect brands worldwide
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VerifyGuard was founded in 2020 with a clear mission: to make product verification 
              accessible, reliable, and effortless for brands and consumers alike. We believe that 
              every customer deserves to know they're purchasing authentic products, and every brand 
              deserves protection from counterfeiters.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our cutting-edge QR code technology, powered by blockchain security, provides an 
              unbreakable seal of authenticity. We've helped thousands of brands across industries 
              protect their reputation and build trust with their customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From small businesses to Fortune 500 companies, VerifyGuard is the trusted partner 
              in the fight against counterfeiting.
            </p>
          </div>
          <div>
            {/* <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team working together"
              className="rounded-lg shadow-xl w-full"
            /> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                We build products and relationships based on trust, transparency, and 
                unwavering commitment to our customers' success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of technology to stay ahead of 
                counterfeiters and provide cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Their success 
                is our success, and we're dedicated to their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-blue-100">
                Making a real difference in the fight against counterfeiting
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10M+</div>
                <div className="text-blue-100">Products Verified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-blue-100">Brands Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">2020: The Beginning</h3>
              </div>
              <p className="text-gray-700">
                Founded by a team of security experts and entrepreneurs who witnessed the 
                devastating impact of counterfeit products on both businesses and consumers. 
                We set out to create a solution that would be both effective and easy to implement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">2021: Innovation</h3>
              </div>
              <p className="text-gray-700">
                Launched our blockchain-powered verification system, making product authentication 
                truly tamper-proof. This breakthrough technology set us apart in the industry and 
                attracted our first major enterprise clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">2023: Global Expansion</h3>
              </div>
              <p className="text-gray-700">
                Expanded to serve clients in over 150 countries, with support for 50+ languages. 
                Our team grew to include experts from around the world, all dedicated to our mission.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">2026: Industry Leader</h3>
              </div>
              <p className="text-gray-700">
                Recognized as the leading product verification platform, with over 10 million 
                products protected and countless counterfeit attempts thwarted. We continue to 
                innovate and expand our capabilities to serve our growing customer base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the people leading the fight against counterfeiting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-gray-700">
                Former security executive with 15+ years in anti-counterfeiting technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-linear-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-gray-600 mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-gray-700">
                Blockchain expert and former lead engineer at major tech companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Rodriguez</h3>
              <p className="text-gray-600 mb-2">VP of Operations</p>
              <p className="text-sm text-gray-700">
                Supply chain specialist with expertise in global logistics and quality control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with VerifyGuard to protect your brand and build customer trust
          </p>
          <Link 
            to="/signup" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </div>
  );
}
