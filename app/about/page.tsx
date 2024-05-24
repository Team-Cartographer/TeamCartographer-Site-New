import Footer from "@/components/footer";

const About = () => {
    return ( 
        <div className="h-screen flex flex-col gap-y-2 w-full items-center justify-center">
            <h1 className="pb-8 text-4xl font-bold">Who Are We?</h1>
            <div className="flex flex-col w-[50%] gap-y-3">
            <p className="text-white">
            <b>Team Cartographer</b> is a group of high school and college students driven to apply knowledge in the STEM field and inspire future generations. 
            </p>

            <p>
            The team was initially established in 2022 by two Anaheim high schoolers, who, motivated by a previous engineering competition, sought out another opportunity in computer science, recruiting other students who shared the same passions. As such, Team Cartographer began its first competition participating in the 2023 NASA App Development Challenge, where they distinguished themselves as one of the top three finalists nationwide. 
            </p>

            <p>
            Since then, Team Cartographer has gone on to place highly both in national and global rankings  in the JAXA-NASA Kibo Robot Programming Challenge and NASA Space Apps Challenge. Most recently, the team received an invitation to the Johnson Space Center in the Spring of 2024, to test and present their Augmented Reality spacesuit technology for future spaceflight needs. 
            </p>

            <p>
            Beyond their accolades, Team Cartographer actively engages with their community through outreach to schools in the Orange County area as well as FIRST Robotics League, aiming to educate and cultivate a love for STEM. These achievements serve as a testament to Team Cartographer’s commitment to pushing the boundaries of innovation in science and technology through collaboration. 
            </p>

            <p className="text-muted-foreground">
            Interested in working with us? Contact us at <a href='mailto:teamcartographer@gmail.com' className="hover:underline text-white"><i>teamcartographer@gmail.com</i></a>
            </p>
            </div>
            <Footer />
        </div>
     );
}
 
export default About;