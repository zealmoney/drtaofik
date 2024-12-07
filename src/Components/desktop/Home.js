import { Segment } from "semantic-ui-react"
import { Biography } from "./Biography"
import { AreasOfExpertise } from "./Areas"
import Navbar from "./Navbar"
import Footer from "./Footer"
import NavbarMobile from "../mobile/NavbarMobile"

export const Home = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarMobile mobile />
            </Segment>
        )
    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <Navbar />
                <Biography />
                <AreasOfExpertise />
                <Footer />
            </Segment>
        )
    }
}