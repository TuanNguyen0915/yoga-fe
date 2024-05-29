import {
  Navbar,
  Billing,
  Business,
  CardDeal,
  Clients,
  Cta,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./components"

const App = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1700px] overflow-hidden bg-primary text-white">
      {/* NAVBAR SECTION*/}
      <div className="paddingX">
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="flexStart w-full">
        <div>
          <Hero />
        </div>
      </div>

      <div className="paddingX flex w-full flex-col">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

export default App
