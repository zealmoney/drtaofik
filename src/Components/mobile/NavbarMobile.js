import { useState } from "react"
import { Sidebar, Menu, Container, Image, Header, Segment, Icon, Button } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"
import { Biography } from "../desktop/Biography"
import Footer from "../desktop/Footer"
import { AreasOfExpertise } from "../desktop/Areas"

const NavbarMobile = ({mobile}) => {

    const [ sidebarOpened, setSidebarOpened ] = useState()
    const navigate = useNavigate()

    return(
        <>
        <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            inverted
            onHide={() => setSidebarOpened(false)}
            visible={sidebarOpened}          
            >
              
                <Menu.Item as='a'>
                    About
                </Menu.Item>
                <Menu.Item as='a'>
                    Biography
                </Menu.Item>
                <Menu.Item as='a'>
                    Area of Expertise
                </Menu.Item>
                <Menu.Item as='a'>
                    Testimonials
                </Menu.Item>
                <Menu.Item as='a'>
                    Contact
                </Menu.Item>
                <Menu.Item as='a'>
                    <Button color="facebook">
                        Make An Appointment
                    </Button>
                </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     style={{backgroundColor: '#eaf2f8'}}           
                    >
                        <Container>
                            <Image
                                src='../images/logo.png'
                                inline
                                size="tiny"
                                style={{
                                    margin: 0,
                                    height: 60, 
                                    width:  60
                                }}
                            />
                            <Header 
                                style={{
                                    fontFamily: "Roboto",
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    margin: 10
                                }}
                                as="h2"
                    
                            >
                                Dr Taofik Yusuf
                                <Header.Subheader 
                                    style={{
                                        fontFamily: "Arvo",
                                        fontSize: 12,
                                        fontWeight: 'normal',
                                    }}
                                    as="h6"
                    
                                >
                                    CADIAC SURGERY EXPERT
                                </Header.Subheader>
                            </Header>    
                            <Menu.Item  position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="large" name="sidebar" />
                            </Menu.Item>            
                        </Container>
                    </Menu>
                </Segment>
               <Biography />
               <AreasOfExpertise />
               <Footer />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
              
    )

}

export default NavbarMobile
