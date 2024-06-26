import React, {FC} from "react";

import {IComment} from "@/types";

interface IProps {
    params: {
        id: string
    }
}

const CommentPage: FC<IProps> = async ({params: {id}}) => {

    let comment: IComment = await fetch('https://jsonplaceholder.typicode.com/comments/' + id)
        .then(value => value.json());

    return (
        <div>
            {comment.id} : {comment.name} - {comment.body}
        </div>
    )
}

export default CommentPage;