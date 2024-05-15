import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
