import Image from "next/image";
import Book from "../Book";

export default function Books() {
  return (
    <section id="biografia" className="w-[1000px] font-playfairDisplay m-auto">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Livros</h1>

      <div className="flex flex-col gap-10">

        <hr />

        <div className="flex gap-10">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
}
