import { LogoLMS } from "@/app/SVGFiles";
import { format } from 'date-fns';

export default function Footer() {
    const year = new Date();

    return (
        <footer>
            <div className="flex flex-col gap-2 font-gloock text-center text-xs text-neutral-400 pb-10 pt-20">
                <LogoLMS className="h-6 m-auto fill-neutral-400" />
                <span>&copy; {format(year, "yyyy")} todos os direitos reservados a Luis Manuel Silva</span>
            </div>
        </footer>
    );
}