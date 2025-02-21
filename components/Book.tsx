import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface BookProps {
    title: string;
    cover: string;
    buyLink: string;
}

const Book: React.FC<BookProps> = ({ title, cover, buyLink }) => {
    return (
        <div className="flex flex-col gap-5 max-w-[220px] text-center text-lg h-full">
            <Link href="/">
                <Image src={cover} width={220} height={334} alt={title} className="border h-80 hover:opacity-90 transition-opacity duration-300 relative z-10" />
            </Link>
            <hr />
            <span className="flex items-center justify-center font-bold h-20">{title}</span>

            <div className="flex flex-col gap-3">
                <Link href={`/livros/#${title}`}>
                    <Button className="w-full">
                        Resumo
                    </Button>
                </Link>

                <Link href={buyLink} target="_blank">
                    <Button className="w-full bg-yellow-500 hover:bg-amber-500 text-black border-2 border-black font-semibold">
                        <span>Comprar na Amazon</span>
                        <ShoppingCart />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Book;