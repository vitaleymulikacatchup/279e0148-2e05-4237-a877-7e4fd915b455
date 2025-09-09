"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="DogCoin Logo"
        buttonText="Join the Pack"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to DogCoin"
          subtitle="Join the pack and earn rewards" 
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Our Mission"
          descriptions={["Empowering the community through shared economy.", "Innovating in the meme coin space.", "Building a fun ecosystem for all."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy DogCoin"
          steps={[
            { title: "Set Up Wallet", description: "Create a wallet to hold your DogCoin.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Purchase DogCoin", description: "Use an exchange to buy DogCoin.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Join the Community", description: "Engage with other DogCoin lovers!", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Our token distribution and roadmap"
          kpiItems={[
            { value: "1 Billion", description: "Total Supply", icon: "Cash" },
            { value: "45%", description: "Circulating Supply", icon: "Percentage" },
            { value: "15%", description: "Team Allocation", icon: "Users" }
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: "2023", title: "Launch", description: "DogCoin launched to great fanfare!" },
            { year: "2024", title: "Partnerships", description: "Establishing key partnerships with vendors to expand use." },
            { year: "2025", title: "Community Fund", description: "Launching a community fund with profitability incentives." }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is DogCoin?", content: "A fun and rewarding memecoin!" },
            { title: "How do I buy?", content: "Setup your wallet and purchase via exchanges." },
            { title: "What are the benefits?", content: "Join community activities and rewards!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="DogCoin"
          logoText="Join the DogCoin Community"
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}