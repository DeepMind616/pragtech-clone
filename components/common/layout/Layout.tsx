import { FC, ReactNode } from "react";
import Navigation from "../navigation";
import Footer from "../footer";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
