import Bio from "@/components/sections/Bio";
import Books from "@/components/sections/Books";
import Comments from "@/components/sections/Comments";
import Cover from "@/components/sections/Cover";

export default function Home() {
  return (
    <>
      <Cover />
      <Books />
      <Bio />
      <Comments />
    </>
  );
}
