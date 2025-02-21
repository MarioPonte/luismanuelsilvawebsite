import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BookProps {
    title: string;
    cover: string;
    description: any;
    buyLink: string;
}

const BookSec: React.FC<BookProps> = ({ title, cover, description, buyLink }) => {
    return (
        <div id={title} className="flex flex-col gap-6 pt-28">
            <hr />
            <div className="flex gap-10">
                <Image src={cover} width={300} height={440} alt={title} className="border" />
                <div className="flex flex-col gap-4">
                    <h1 className="font-gloock text-3xl">{title}</h1>
                    <div className="text-justify flex flex-col gap-2">
                        {description}
                    </div>
                    <Link href={buyLink} target="_blank">
                        <Button className="w-fit bg-yellow-500 hover:bg-amber-500 text-black border-2 border-black font-semibold">
                            <span>Comprar na Amazon</span>
                            <ShoppingCart />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookSec;