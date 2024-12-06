import { Segment, Menu,Header, Button, Container, Image } from "semantic-ui-react"
import '../../../src/style.css'
const Navbar = () => {
    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <Menu
            size="large"
            secondary  
            style={{margin: 0, padding: 0}}
            >
                <Container>
                <Image 
                    src='../images/logo.png'
                    inline
                    style={{
                        margin: 0,
                        height: 70, 
                        width: 70
                    }}
                />
                <Menu.Item>
                    <Header 
                     style={{
                        fontFamily: "Roboto",
                        fontSize: 20,
                        fontWeight: 'bold'
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
                </Menu.Item>
                <Menu.Item as="a"  position="right">About</Menu.Item>
                <Menu.Item as="a">Biography</Menu.Item>
                <Menu.Item as="a">Area of Expertise</Menu.Item>
                <Menu.Item as="a">Testimonials</Menu.Item>
                <Menu.Item>
                    <Button color="facebook">
                        Make an Appointment
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>
    </Segment>

    )
   
}
export default Navbar