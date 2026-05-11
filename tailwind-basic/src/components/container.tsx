import type React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-5xl mx-auto px-4 md:py-4 ${className}`}>
      {children}
    </div>
  );
};
