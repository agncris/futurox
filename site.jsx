/* eslint-disable */
const SiteApp = () => (
  <LangProvider>
    <NavSite current="" />
    <main>
      <HeroSite />
      <Positioning />
      <ServicesNarrative />
      <Founders />
      <ContactSite />
    </main>
    <Footer />
  </LangProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(<SiteApp />);
