import {Metadata} from "next";
import React from "react";

import {IPost} from "@/types";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let post: IPost = await fetch('https://jsonplaceholder.typicode.com/posts' + params.id)
        .then(value => value.json())

    console.log(post)

    return {
        title: post.title,
        description: post.title
    }
}

type Props = { children: React.ReactNode }

const PostLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PostLayout;