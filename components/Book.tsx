import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Book() {
    return (
        <div className="flex flex-col gap-5 max-w-[220px] text-center text-lg">
            <Image src="/images/books/book1.jpg" width={220} height={334} alt="Um Comboio de Vidas Suspensas" />
            <hr />
            <span className="font-bold">Um Comboio de Vidas Suspensas</span>

            <div className="flex flex-col gap-3">
            <Link href="/">
                <Button className="w-full">
                    Resumo
                </Button>
            </Link>

            <Link href="/">
                <Button className="w-full">
                    Comprar na Amazon
                </Button>
            </Link>
            </div>
        </div>
    );
}
