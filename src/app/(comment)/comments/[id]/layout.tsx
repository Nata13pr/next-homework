import {Metadata} from "next";
import React from "react";

import {IComment} from "@/types";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let comment: IComment = await fetch('https://jsonplaceholder.typicode.com/comments' + params.id)
        .then(value => value.json())

    console.log(comment)

    return {
        title: comment.email,
        description: comment.email
    }
}

type Props = { children: React.ReactNode }

const CommentLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CommentLayout;