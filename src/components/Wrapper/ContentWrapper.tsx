import { ReactNode } from "react";


export default function ContentWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-[80vh]">
            {children}
        </div>
    )
}
