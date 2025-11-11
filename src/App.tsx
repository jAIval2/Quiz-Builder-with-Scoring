import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HealthPackages } from './components/HealthPackages';
import { BodyOrganSelector } from './components/BodyOrganSelector';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MostPopularTests } from './components/MostPopularTests';
import { BrowseTestByHabit } from './components/BrowseTestByHabit';
import { BrowseTestByRisks } from './components/BrowseTestByRisks';
import { Testimonials } from './components/Testimonials';
import { Statistics } from './components/Statistics';
import { AppComingSoon } from './components/AppComingSoon';
import { ExpertLabScientists } from './components/ExpertLabScientists';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <HealthPackages />
        <BodyOrganSelector />
        <WhyChooseUs />
        <MostPopularTests />
        <BrowseTestByHabit />
        <BrowseTestByRisks />
        <Testimonials />
        <Statistics />
        <AppComingSoon />
        <ExpertLabScientists />
        <Newsletter />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}