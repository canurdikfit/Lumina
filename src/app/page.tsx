import Achievements from "@/components/Achievements";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Statistics from "@/components/Statistics";
import Youtube from "@/components/Youtube";
import Case from "@/components/Case";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Partner />
      <Youtube />
      <Achievements />
      <Case />
      <Statistics />
      <Team />
      <div className="bg-[url('/images/footer.png')] bg-contain bg-bottom bg-no-repeat">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}