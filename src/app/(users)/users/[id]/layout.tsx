import { userService } from "@/services/api.service";
import { Metadata } from "next";

import React from "react";

export const generateMetadata=async ({params}:{params:{id:string}}) : Promise<Metadata> =>{
   let user=await userService.getUserById(params.id)
    return {title:user?.username}
}

type Props={children:React.ReactNode}
const UserLayout=({children}:Props)=>{
    return (
        <div>
            {children}
        </div>
    )
}
export default UserLayout;