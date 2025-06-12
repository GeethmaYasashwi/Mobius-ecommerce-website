import CasualInspirations from "./components/CasualInspirations";
import HeroGrid from "./components/HeroGrid";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="flex flex-col gap-8 md:gap-12 pb-8">
        <HeroGrid />
        <CasualInspirations />
        
      </main>
    </>
  );
};

export default App;
