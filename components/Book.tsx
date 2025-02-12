import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface BookProps {
    title: string;
}

const Book: React.FC<BookProps> = ({ title }) => {
    return (
        <div className="flex flex-col gap-5 max-w-[220px] text-center text-lg h-full">
            <Image src="/images/books/book1.jpg" width={220} height={334} alt="Um Comboio de Vidas Suspensas" />
            <hr />
            <span className="flex items-center justify-center font-bold h-20">{title}</span>

            <div className="flex flex-col gap-3">
            <Link href="/">
                <Button className="w-full">
                    Resumo
                </Button>
            </Link>

            <Link href="/">
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