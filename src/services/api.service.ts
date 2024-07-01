import {urlBuilder} from "@/constants/urls";

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers(), {
            //  cache: "no-store",//SSR
            // cache:'force-cache'//SSG
            next: {revalidate: 60}//ISR
        })
            .then(value => value.json());
        console.log(users);
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.singleUsers(id))
            .then(value => value.json());
        console.log(user);
        return user;
    }
}
export {
    userService
}