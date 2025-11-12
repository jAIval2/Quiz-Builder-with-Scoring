import { useState } from 'react';
import { ChevronDown, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface Organ {
  name: string;
  position: { top: string; left: string };
  color: string;
  issues: string[];
}

interface Test {
  id: number;
  name: string;
  icon: string;
}

const organs: Organ[] = [
  {
    name: 'Heart',
    position: { top: '25%', left: '50%' },
    color: '#10b981',
    issues: ['Chest Pain', 'Dizziness', 'Shortness Of Breath', 'Fatigue', 'Pressure'],
  },
  {
    name: 'Liver',
    position: { top: '35%', left: '55%' },
    color: '#6ee7b7',
    issues: ['Jaundice', 'Abdominal Pain', 'Fatigue', 'Loss of Appetite'],
  },
  {
    name: 'Kidneys',
    position: { top: '40%', left: '45%' },
    color: '#34d399',
    issues: ['Back Pain', 'Frequent Urination', 'Blood in Urine', 'Swelling'],
  },
];

const tests: Test[] = [
  { id: 1, name: 'Complete Blood Count', icon: '🩺' },
  { id: 2, name: 'Lipid Profile Test', icon: '🩺' },
  { id: 3, name: 'ECG & Echo Test', icon: '🩺' },
];

export function BodyOrganSelector() {
  const [selectedOrgan, setSelectedOrgan] = useState<Organ>(organs[0]);
  const [gender, setGender] = useState('male');
  const [ageRange, setAgeRange] = useState('below30');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">Health Checkups</p>
          <h2 className="text-3xl text-[#377A97] mb-4">Let Us Suggest You The Best</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a body organ and we'll suggest the best available tests to help in precise diagnosis of the problem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Body Diagram */}
          <div className="bg-gradient-to-br from-[#377A97] to-[#2a5f78] rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 600">
                <defs>
                  <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#377A97', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#4a93b5', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                {/* Medical pattern background */}
                <path d="M50,50 L100,50 L100,100 L50,100 Z M150,50 L200,50 L200,100 L150,100 Z" fill="url(#bodyGradient)" opacity="0.2" />
              </svg>
            </div>

            <div className="relative h-[500px] flex items-center justify-center">
              {/* Organs positioned on background only */}
              <div className="relative w-full h-full">
                {organs.map((organ, idx) => {
                  const top = parseFloat(organ.position.top);
                  const left = parseFloat(organ.position.left);
                  
                  return (
                    <div
                      key={idx}
                      className="absolute cursor-pointer transition-all hover:scale-110"
                      style={{
                        top: organ.position.top,
                        left: organ.position.left,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setSelectedOrgan(organ)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          selectedOrgan.name === organ.name ? 'ring-4 ring-white ring-opacity-60' : ''
                        }`}
                        style={{ backgroundColor: organ.color }}
                      >
                        {selectedOrgan.name === organ.name && (
                          <div className="absolute left-full ml-4 bg-white px-4 py-2 rounded shadow-lg whitespace-nowrap">
                            <span className="text-[#377A97]">{organ.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selection Panel */}
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ageRange} onValueChange={setAgeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Age Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below30">Below 30 Years</SelectItem>
                  <SelectItem value="30-50">30-50 Years</SelectItem>
                  <SelectItem value="above50">Above 50 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <h3 className="text-center text-gray-700 mb-4">
                Commonly faced issues related {selectedOrgan.name}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedOrgan.issues.map((issue, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-2 border-2 border-[#377A97] text-[#377A97] rounded-full text-sm hover:bg-[#377A97] hover:text-white transition-colors"
                  >
                    {issue}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-center text-gray-700 mb-4">
                Suggested Preventive health profile
              </h3>
              <div className="space-y-3">
                {tests.map((test) => (
                  <div
                    key={test.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#63D8A5]/20 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-[#377A97]" />
                      </div>
                      <span className="text-gray-700">{test.name}</span>
                    </div>
                    <Button size="sm" className="bg-[#63D8A5] hover:bg-[#4dc490]">
                      Know More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}