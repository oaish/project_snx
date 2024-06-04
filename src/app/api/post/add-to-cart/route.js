import {NextResponse} from "next/server";
import connect from "@/lib/db";

export const POST = async (req) => {
    const {email, name, img, type, price} = await req.json();
    try {
        await connect()
        console.log("**********************************************************************************************************")
        console.log(email, name, type, price)
        console.log("**********************************************************************************************************")
        return NextResponse.json({message: 'Model was Saved'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Saving Model: ' + error});
    }
}