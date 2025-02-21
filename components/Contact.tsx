import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
    return (
        <Card className="p-4 flex justify-center">
            <div className="flex flex-col gap-4 font-gloock w-fit">
                <a href="mailto:lmpintosilva@gmail.com" className="flex gap-2 w-fit border rounded-md p-2">
                    <Mail />
                    <span>lmpintosilva@gmail.com</span>
                </a>
                <div className="flex justify-between">
                    <a href="https://www.facebook.com/LuisManuelSilvaOficial" target="_blank" className="flex gap-2 w-fit border rounded-md p-2">
                        <Image src="/images/socialMedia/facebook.svg" width={24} height={24} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/luismanuelsilvaautor" target="_blank" className="flex gap-2 w-fit border rounded-md p-2">
                        <Image src="/images/socialMedia/instagram.svg" width={24} height={24} alt="instagram" />
                    </a>
                    <a href="https://www.amazon.es/stores/author/B0CBL78NRS/allbooks" target="_blank" className="flex gap-2 w-fit border rounded-md p-2">
                        <Image src="/images/socialMedia/amazon.svg" width={24} height={24} alt="amazon" />
                    </a>
                    <a href="" target="_blank" className="flex gap-2 w-fit border rounded-md p-2">
                        <Image src="/images/socialMedia/whatsapp.svg" width={24} height={24} alt="whatsapp" />
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default Contact;