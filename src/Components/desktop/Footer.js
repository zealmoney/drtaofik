import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

const Footer = () => {
    return(
        <Segment vertical style={{paddingTop: 50}}>
            <Container>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header>
                                        Phone
                                    </Header>
                                    <Header color="blue" as="h3">            
                                        P: +1 708 567 8901   
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header>
                                        Consulting hours:
                                    </Header>
                                    <Header disabled>
                                        9 am to 5 pm on Weekdays
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header
                                        content="© 2024. Dr. Taofik Yusuf. All Rights Reserved"
                                        disabled
                                        as="h4"
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header>
                                        Address
                                    </Header>
                                    <Header disabled>
                                        178 West 27th Street, Suite 527, Homewood IL 60430
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    <Icon size="large" name="youtube" />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Icon size="large" name="facebook f" />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Icon size="large" name="instagram" />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Icon size="large" name="twitter" />
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Icon size="large" name="linkedin" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                       

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </Segment>
    )
}
export default Footer