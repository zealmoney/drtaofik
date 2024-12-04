import { Container, Image, Menu } from "semantic-ui-react"
import '../../fonts/BebasNeue-Regular.ttf'

export const Navbar = () => {

    return(
        <Menu
            size="tiny"
            secondary
            style={{
                fontFamily: "Bebas Neue",
                fontSize: 20,
                fontWeight: 'normal',
                verticalAlign: 'middle'
            }}
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
                <Menu.Item as='a' position="right">
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
            </Container>
        </Menu>
    )
}