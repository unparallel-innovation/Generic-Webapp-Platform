"use client"

import Image from "next/image";
import {useSession} from "next-auth/react";
import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import Loading from "@/components/Loading";


export default function Home() {
    const {data: session} = useSession();
    console.log("session",session)

    function renderContent(){
        if(session) return <Welcome/>
        if(session === null) return <Login/>
        return <Loading />
    }

    return (
    < >
        {renderContent()}
    </>
    );
}
