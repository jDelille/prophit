import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SecondaryNavbar from "../components/navbar/SecondaryNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import "@/app/scss/globals.scss";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="layout">
      <Navbar />
      <SecondaryNavbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </main>
  );
}
