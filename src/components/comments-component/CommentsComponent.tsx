import React, {FC} from 'react';
import Link from "next/link";

import {IComment} from "@/types";

const CommentsComponent: FC = async () => {
    let comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())


    return (
        <div>
            <ul>
                {
                    comments.map((comment: IComment) => (
                        <li key={comment.id}>
                            <Link href={`/comments/${comment.id}`}>{comment.id} : {comment.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CommentsComponent;