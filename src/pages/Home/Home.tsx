import { Grid } from "@mui/material"
import UserInfo from "./UserInfo/UserInfo"
import ProjectsInfo from "./ProjectsInfo/ProjectsInfo"
import SkillsInfo from "./SkillsInfo/SkillsInfo"

export default function Home() {

    return <>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ px: {} }} justifyContent={'center'} >
            <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                <UserInfo />
            </Grid>
            <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                <ProjectsInfo />
            </Grid>
            <Grid item xs={12} sm={10} md={12} lg={10} xl={4}>
                <SkillsInfo />
            </Grid>
        </Grid>
    </>
}
