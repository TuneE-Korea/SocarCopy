import FooterContent from "./organisms/FooterContent";
import MainContent from "./organisms/MainContent";
import AsideFooter from "./organisms/AsideFooter";
import HeaderContent from "./organisms/HeaderContent";
// 테스트
function App() {
  return (
    <>
      <header style={{ position: "relative" }}>
        <HeaderContent />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <AsideFooter source={"/image/footer.jpg"} />
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
