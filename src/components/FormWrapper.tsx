import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "left", marginTop: "-1.5rem" }}>{title}</h2>
      <div
        style={{
          borderBottom: "1px #ece7e2 solid",
          marginTop: "-1rem",
          marginBottom: "3.5rem",
        }}
      ></div>
      <div
        style={{
          display: "grid",
          gap: "1rem 3rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
