import { AppBar } from "@mui/material";

export default function Footer() {
    const name = "Folio spark";
    const currentYear = new Date();
    const message = ` ${name} | ${currentYear.getFullYear()} `

    return (
        <AppBar position="static" sx={{mt:3}}>
            <div className="w-full my-2">
                <div className="flex w-full items-center justify-center">
                    <div>
                        <img src="/Logo.svg" className="h-6 rounded-full" />
                    </div>
                    <div className="text-md font-bold ml-2  ">
                        {message}
                    </div>
                </div>


            </div>
        </AppBar>
    )
}
