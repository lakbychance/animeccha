import clsx from "clsx";
import React from "react";

const Layout: React.FC = ({ children }) => {

  return (
    <main className={clsx('min-h-[calc(100vh-12rem)]')}>
      <div className={clsx('flex flex-col md:grid md:grid-cols-3 gap-4 p-8')}>
        {children}
      </div>
    </main>
  );
};
export default Layout;
