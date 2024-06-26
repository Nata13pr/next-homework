import {number} from "prop-types";

interface IUser {
    id: number;
    name: string;
    email: string;
}

interface IComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}