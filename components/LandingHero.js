'use client';
import { useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 fomt-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ['Chatbot.', 'Code Generation.', 'Image Generation.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        {' '}
        Create content using AI 10x faster.
      </div>
      {/* <div>
        <Link href={isSignedIn ? '/dashboard' : '/signup'}>
          <Button
            variant="secondary"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div> */}

      <div>
        <Link href="/sign-in">
          <Button
            variant="secondary"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Login
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button
            variant="secondary"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
