import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Products from "@/components/products";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="enter-page">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
      <div className="container">
        <About />
        <Products />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
