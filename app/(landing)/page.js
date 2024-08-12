import LandingNavbar from '@/components/LandingNavbar';
import LandingHero from '@/components/LandingHero';

export const LandingPage = () => {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: 'url("/headstarter_bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <LandingNavbar />
      <LandingHero />
    </div>
  );
};

export default LandingPage;
