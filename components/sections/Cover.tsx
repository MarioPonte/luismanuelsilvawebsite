import Image from "next/image";

const Cover = () => {
    return (
        <div className="pt-20 font-playfairDisplay m-auto border-b">
            <div className="h-[260px] flex flex-col items-center justify-end">
                <Image src="/images/cover.png" width={1640} height={664} alt="Livros de Luis Manuel Silva" className="max-w-[600px]" />
            </div>
        </div>
    );
}

export default Cover;