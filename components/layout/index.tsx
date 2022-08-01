import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pageTitle = router.pathname.substring(1);
  return (
    <div className="main-container">
      <header className="header">
        <div className="header__circle"></div>
        <h3 className="header__title">
          Rhyz Arong |{" "}
          <span className="header__sub-title">
            {pageTitle === "/" ? "Home" : pageTitle}
          </span>
        </h3>
      </header>
      {children}
      <footer className="footer">
        <h3 className="footer__text">
          <span>&copy;</span> Rhyz Arong 2022
        </h3>
      </footer>
    </div>
  );
};
export default Layout;
