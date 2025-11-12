import { Button } from './ui/button';

interface Feature {
  title: string;
  subtitle: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: '800+ Different Tests',
    subtitle: 'Experienced Professionals',
    icon: '🔬',
  },
  {
    title: 'High-End Technology',
    subtitle: 'State-Of-The-Art Technology',
    icon: '🏥',
  },
  {
    title: 'Free Home Sampling',
    subtitle: 'Sampling At Your Address',
    icon: '🏠',
  },
  {
    title: 'Patient Support',
    subtitle: 'Advice And Recommendations',
    icon: '💊',
  },
];

const certifications = [
  'Drug Enforcement Agency (DEA) No. RG0105216',
  'Food and Drug Administration (FDA) No. 2182801',
  'International Standards Organization (ISO9001 and ISO17025)',
  'United States Department of Agriculture (USDA) No. 35-R-034',
];

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#63D8A5]/20 to-[#63D8A5]/40 rounded-lg flex items-center justify-center">
                  <div className="text-4xl">{feature.icon}</div>
                </div>
                <h3 className="text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Why Choose Us */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">Why Choose Us</p>
            <h2 className="text-3xl text-[#377A97] mb-6">
              We'll Ensure You Always
              <br />
              Get The Best Results
            </h2>
            
            <p className="text-gray-600 mb-4">
              Your full-service lab for clinical trials. Our mission is to ensure the generation of accurate.
            </p>
            
            <p className="text-gray-700 mb-4">
              Novalab is registered with the following governmental agencies:
            </p>

            <ul className="space-y-3 mb-6">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#63D8A5] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{cert}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-[#63D8A5] hover:bg-[#4dc490] text-white">
              View List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
