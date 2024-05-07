import { Card, Grid } from "@mui/material";
import SkillItem from "./Components/SkillItem";

export default function SkillsInfo() {
    const skills = ['React', 'C++', 'Python', 'Rust']
    return (
        <Card className="border p-2 h-full">
            <Grid container spacing={2} >
                {
                    skills.map(item => {
                        return <Grid item key={item} xs={12} sm={6} lg={3} xl={6}>
                            <SkillItem name={item} />
                        </Grid>
                    })
                }
            </Grid>
        </Card>
    )
}
