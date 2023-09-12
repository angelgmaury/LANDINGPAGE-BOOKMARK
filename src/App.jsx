import ContactSection from "./componets/ContactSection";
import DownloadSection from "./componets/DownloadSection";
import FeaturesSection from "./componets/FeaturesSection";
import Footer from "./componets/Footer";
import MenuMobile from "./componets/MenuMobile";
import QuestionsSection from "./componets/QuestionsSection";
import SectionPrincipal from "./componets/SectionPrincipal";
import Header from "./componets/header";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <header>
        <Header />
        <MenuMobile />
      </header>
      <main>
        <SectionPrincipal />
        <FeaturesSection />
        <DownloadSection />
        <QuestionsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
