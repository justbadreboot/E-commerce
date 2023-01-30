import About from "../components/About";
import TeamCard from "../components/cards/TeamCard";
import MainLayout from "../Layout/MainLayout";

const AboutPage =()=>{
    return(
        <>
            <MainLayout>
                <About />
                <TeamCard />
            </MainLayout>
        </>
    )
}
export default AboutPage;