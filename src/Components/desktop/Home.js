import { Segment } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import { Biography } from "./Biography"
import { AreasOfExpertise } from "./Areas"

export const Home = () => {

    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <Navbar />
            <Biography />
            <AreasOfExpertise />
        </Segment>
    )
}