// `app/page.tsx` is the UI for the `/` URL
import "./global.css";
import Header from "./userinfo/page";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

export default function Page() {
  return (
    <div className="warp_div">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
