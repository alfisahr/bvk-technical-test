import Container from "./Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  useContainer?: boolean;
};

const Layout = ({ children, useContainer = true }: LayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      {useContainer ? (
        <div className={useContainer ? "py-10" : ""}>
          <Container>{children}</Container>
        </div>
      ) : (
        <div className={useContainer ? "py-10" : ""}>{children}</div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
