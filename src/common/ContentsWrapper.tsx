import React from "react";

export default function ContentsWrapper({
  title,
  screenReader,
  children,
}: {
  title?: React.ReactNode;
  screenReader?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-20 pb-30">
      {title}
      <h2 className="sr-only">{screenReader}</h2>
      <article className="w-full mt-5">{children}</article>
    </section>
  );
}
