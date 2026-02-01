import { Shield, Lock, Database, Eye, Key, CheckCircle } from "lucide-react";

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. Learn how we protect your
            information and maintain the highest standards of security.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Security Measures Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600">
              All data transmission is encrypted using industry-standard TLS 1.3
              protocol, ensuring your information remains secure in transit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Encrypted Storage
            </h3>
            <p className="text-gray-600">
              All sensitive data is encrypted at rest using AES-256 encryption,
              providing maximum protection for your stored information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Access Control
            </h3>
            <p className="text-gray-600">
              Multi-factor authentication and role-based access control ensure
              only authorized users can access your data.
            </p>
          </div>
        </div>

        {/* Detailed Security Information */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Infrastructure Security
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cloud Infrastructure
                    </h4>
                    <p className="text-gray-700">
                      Hosted on enterprise-grade cloud infrastructure with 99.9%
                      uptime SLA, automatic failover, and redundant backups
                      across multiple geographic regions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      DDoS Protection
                    </h4>
                    <p className="text-gray-700">
                      Advanced DDoS mitigation and traffic filtering to ensure
                      service availability even under attack conditions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Network Isolation
                    </h4>
                    <p className="text-gray-700">
                      Segregated network architecture with firewalls and
                      intrusion detection systems monitoring all traffic.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Protection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Data Backups
                </h3>
                <p className="text-gray-700 mb-4">
                  Automated daily backups with 30-day retention. Point-in-time
                  recovery capabilities ensure data can be restored if needed.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Encrypted backup storage</li>
                  <li>• Geographic redundancy</li>
                  <li>• Regular restore testing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Data Retention
                </h3>
                <p className="text-gray-700 mb-4">
                  Clear data retention policies ensure information is kept only
                  as long as necessary and securely deleted when no longer
                  needed.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Secure data deletion</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Compliance with regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Compliance & Certifications
            </h2>
            <div className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Standards
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">ISO 27001 Certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        SOC 2 Type II Compliant
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">GDPR Compliant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">CCPA Compliant</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Regular Audits
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We undergo regular third-party security audits and
                    penetration testing to identify and address potential
                    vulnerabilities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quarterly penetration testing</li>
                    <li>• Annual compliance audits</li>
                    <li>• Continuous vulnerability scanning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Security Monitoring
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Eye className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    24/7 Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Our security operations center monitors systems around the
                    clock, with automated alerts and incident response
                    procedures in place.
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Real-time threat detection
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Automated security responses
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Security incident logging
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Regular security reports
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Responsible Disclosure
            </h2>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-200">
              <p className="text-gray-700 mb-4">
                We welcome security researchers to report vulnerabilities
                responsibly. If you discover a security issue, please contact
                our security team immediately.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">
                  Security Contact:
                </p>
                <p className="text-gray-700">Email: security@verifyguard.com</p>
                <p className="text-gray-700">PGP Key: Available upon request</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
