import About from "@/components/about";
import Header from "@/components/header";
import Main from "@/components/main";
import Products from "@/components/products";

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
      </div>
    </>
  );
}
