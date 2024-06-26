import React, {FC} from "react";

import {IPost} from "@/types";

interface IProps {
    params: {
        id: string
    }
}

const PostPage: FC<IProps> = async ({params: {id}}) => {

    let post: IPost = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(value => value.json());

    return (
        <div>
            {post.id} : {post.title} {post.body}
        </div>
    )
}

export default PostPage;