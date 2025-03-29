import Hero from "@/components/Hero";

import { Marquee } from "@/components/magicui/marquee";

export default function MainPage() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <div className="bg-gradient-to-b from-gray-900 to-black border-t border-purple-500/20">
        <Marquee className="py-6" pauseOnHover/>
        
      </div>
    </div>
  );
}