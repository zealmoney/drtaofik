import { useState } from "react"
import { Sidebar, Menu, Container, Image, Header, Segment, Icon } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"

const NavbarMobile = () => {

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
                     style={{backgroundColor: '#FFFFFF'}}           
                    >
                        <Container>
                            <Image
                                src="../images/logo.png" 
                                size="tiny"
                                inline
                                fluid
                                style={{
                                    margin: 0
                                }}
                            />
                            <Header
                                as="h2"
                                style={{
                                    fontFamily: "Bebas Neue",
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                                color="green"
                            >
                                Dr Taofik Yusuf
                                <Header.Subheader as="h6">
                                    CADIAC EXPERT
                                </Header.Subheader>
                            </Header> 
                            <Menu.Item  position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="large" name="sidebar" />
                            </Menu.Item>            
                        </Container>
                    </Menu>
                </Segment>
               
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
              
    )

}

export default NavbarMobile
