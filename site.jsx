/* eslint-disable */
const SiteApp = () => (
  <React.Fragment>
    <NavSite current="" />
    <main>
      <HeroSite />
      <Positioning />
      <ServicesNarrative />
      <Founders />
      <ContactSite />
    </main>
    <Footer />
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("root")).render(<SiteApp />);
