import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const TheorieParent = ({ children, title }: Props) => {
  return (
    <div className="px-4 mb-32 lg:px-64">
      <h1 className="py-8 text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default TheorieParent;
