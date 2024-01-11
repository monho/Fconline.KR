// `app/page.tsx` is the UI for the `/` URL
import "./global.css";
import Header from "./userinfo/page";

export default function Page() {
  return 
  (
    <div className="warp_div">
        <Header />
        <div></div>
    </div>
  )
}