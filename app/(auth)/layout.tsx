import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};

export default layout;
