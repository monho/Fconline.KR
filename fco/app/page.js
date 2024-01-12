// `app/page.tsx` is the UI for the `/` URL
import "./global.css";
import Header from "./userinfo/page";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

export default function Page() {
  return (
    <div className="Warp">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}