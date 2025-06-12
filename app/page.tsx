import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Play,
  Phone,
  Calendar,
  Shield,
  Clock,
  Target,
  Users,
  Zap,
  Globe,
  CheckCircle,
  Building,
} from "lucide-react"

export default function PearsonAILanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-lg">Pearson</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Solutions
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-black text-white hover:bg-gray-800">Start Free Trial</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 bg-blue-50 text-blue-700 border-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            Introducing Pearson AI 2.0
            <span className="ml-2 bg-blue-600 text-white px-2 py-0.5 rounded text-xs">NEW</span>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Close Deals
            <br />
            <span className="text-blue-600">10x Faster</span>
            <br />
            With AI Agents
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Revolutionary agentic AI that integrates seamlessly with your existing workflow. Transform documents,
            automate processes, and accelerate deal closure with enterprise-grade security.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Law Firms</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="flex items-center">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              SOC 2 Certified
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise Ready
            </div>
          </div>
        </div>
      </section>

      {/* Meet Pearson AI Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700">
            POWERED BY AI
          </Badge>

          <h2 className="text-5xl font-bold mb-4">Meet Pearson AI</h2>
          <h3 className="text-3xl text-blue-600 mb-4">One Platform</h3>
          <h3 className="text-3xl font-bold mb-6">Infinite Possibilities</h3>
          <h3 className="text-2xl text-gray-600 mb-12">Outcomes-Based AI Agents</h3>

          <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
            Pearson delivers outcomes-based AI agents that perform specific tasks with precision, accelerating your
            legal workflow by 10x while maintaining the highest standards of accuracy and compliance.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Intelligent Processing</h4>
                <p className="text-gray-600">Advanced AI that understands legal context and nuance</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Seamless Integration</h4>
                <p className="text-gray-600">Works within your existing tools and processes</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Lightning Fast</h4>
                <p className="text-gray-600">Complete document analysis in seconds, not hours</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Bank-Grade Security</h4>
                <p className="text-gray-600">Enterprise encryption and compliance standards</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">24/7 Availability</h4>
                <p className="text-gray-600">AI agents work around the clock for you</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Precision Results</h4>
                <p className="text-gray-600">99.9% accuracy in document processing and analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transform Your Practice Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-green-50 text-green-700">
            PROVEN RESULTS
          </Badge>

          <h2 className="text-5xl font-bold mb-6">Transform Your Practice</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
            Experience measurable improvements in efficiency, quality, and client satisfaction with Pearson's AI-powered
            legal platform.
          </p>

          {/* Results Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Law Firms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-gray-600">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.5x</div>
              <div className="text-gray-600">ROI Average</div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 text-left">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold">Boost Productivity by 60%</h4>
                      <Badge variant="secondary" className="ml-2 bg-green-50 text-green-700">
                        60% faster
                      </Badge>
                    </div>
                    <p className="text-gray-600">
                      Streamline document processing, contract analysis, and due diligence with AI-powered automation
                      that works around the clock.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-left">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold">Unmatched Quality Assurance</h4>
                      <Badge variant="secondary" className="ml-2 bg-blue-50 text-blue-700">
                        99.9% accuracy
                      </Badge>
                    </div>
                    <p className="text-gray-600">
                      AI agents proactively identify errors, inconsistencies, and compliance issues before documents
                      reach clients, ensuring perfection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-left">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold">Seamless Team Collaboration</h4>
                      <Badge variant="secondary" className="ml-2 bg-purple-50 text-purple-700">
                        Zero learning curve
                      </Badge>
                    </div>
                    <p className="text-gray-600">
                      Enable real-time collaboration across your legal team with intelligent task distribution and
                      progress tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-left">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold">24/7 Intelligent Processing</h4>
                      <Badge variant="secondary" className="ml-2 bg-orange-50 text-orange-700">
                        24/7 uptime
                      </Badge>
                    </div>
                    <p className="text-gray-600">
                      Your AI agents work continuously, processing documents, analyzing contracts, and preparing
                      summaries while you sleep.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of forward-thinking law firms already using Pearson AI to revolutionize their workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-purple-50 text-purple-700">
            TRUSTED BY LEADERS
          </Badge>

          <h2 className="text-5xl font-bold mb-6">Trusted by Leading Firms Worldwide</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
            Join the most prestigious law firms and legal departments who rely on Pearson AI to deliver exceptional
            results for their most demanding clients.
          </p>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">500+ Law Firms</div>
              <div className="text-gray-600">Trusted worldwide</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">SOC 2 Certified</div>
              <div className="text-gray-600">Enterprise security</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">99.9% Uptime</div>
              <div className="text-gray-600">Reliable platform</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">Global Coverage</div>
              <div className="text-gray-600">24/7 support</div>
            </div>
          </div>

          <p className="text-gray-500 mb-8">Trusted by leading organizations</p>

          {/* Partner Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60">
            {[
              "BigLaw Partners",
              "Corporate Legal",
              "Metro Law Group",
              "Global Associates",
              "Premier Legal",
              "Elite Partners",
            ].map((name, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Pearson AI has revolutionized our document review process. What used to take days now takes hours,
                  with better accuracy than ever before."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">Partner at Thompson & Associates</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "The integration with our existing workflow was seamless. Our team productivity increased by 60% in
                  the first month alone."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-600">Legal Director at GlobalTech Corp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Outstanding AI capabilities with enterprise-grade security. Pearson has become an essential part of
                  our legal operations."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold">David Rodriguez</div>
                    <div className="text-sm text-gray-600">Managing Partner at Rodriguez Law</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Join the Future of Legal Practice</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of the legal revolution. Experience what hundreds of leading firms already know - Pearson AI is
              the competitive advantage you've been looking for.
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Start Your Transformation Today
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time: 60-Day Free Trial
          </Badge>

          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform
            <br />
            <span className="text-blue-300">Your Legal Practice?</span>
          </h2>

          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join the legal revolution. Experience what leading firms worldwide already know - Pearson AI is the
            competitive advantage that transforms practices and accelerates success.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
              <span>14-day free trial with full features</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
              <span>No setup fees or hidden costs</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
              <span>Dedicated onboarding specialist</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
              <span>24/7 enterprise support included</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Start Free Trial Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">Need to speak with someone?</span>
            </div>
            <p className="opacity-90">Call us at (555) 123-4567 or chat with our experts</p>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-80">Firms Trust Pearson</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="opacity-80">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-80">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
