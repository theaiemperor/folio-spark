import { Card } from "@mui/material";


export default function SkillItem({ name }: { name: string }) {
    return (
        <Card sx={{ height: 200 }} className="border p-2">
            {name}
        </Card>
    )
}
