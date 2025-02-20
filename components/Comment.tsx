import { Card } from "@/components/ui/card";
import React from "react";

interface CommentProps {
    userName: string;
    rate: string;
    date: string;
    message: string;
}

const Comment: React.FC<CommentProps> = ({ userName, rate, date, message }) => {
    return (
        <Card className="p-4">
            <div className="flex flex-col gap-1 font-gloock">
                <span className="underline">{userName}</span>
                <span className="underline">{rate}</span>
                <span className="text-[10px] text-neutral-500">{date}</span>
            </div>
            <div className="text-sm mt-3">
                <p>{message}</p>
            </div>
        </Card>
    );
}

export default Comment;