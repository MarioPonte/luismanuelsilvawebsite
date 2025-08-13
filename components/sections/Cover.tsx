import Image from "next/image";

const Cover = () => {
    return (
        <div className="font-playfairDisplay m-auto border-b bg-linear bg-gradient-to-t from-neutral-300 to-white">
            <div className="h-[288px] flex flex-col items-center justify-center">
                <Image src="/images/cover.png" width={1640} height={664} alt="Livros de Luis Manuel Silva" className="max-w-[880px]" />
            </div>
        </div>
    );
}

export default Cover;