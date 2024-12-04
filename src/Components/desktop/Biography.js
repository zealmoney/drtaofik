import { Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const Biography = () => {

    return(
        <Segment vertical style={{paddingTop: 50}}>
            <Container>
                <Grid>
                    <Grid.Row style={{paddingBottom: 50}}>
                        <Grid.Column width={7}>
                            <Image size="large" src="../images/doctor.jpg" />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header 
                                            as="h2"
                                            content="About"
                                            style={{
                                                fontFamily: 'Roboto',
                                                color: '#3f6aa3'
                                            }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header 
                                            as="h1"
                                            content="Dr. Taofik Yusuf"
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 50,
                                                fontWeight: 'normal'    
                                            }}
                                        />
                                        <p
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 18
                                            }}
                                        >
                                            Dr. Taofik Yusuf, MD is one of the leading cardiac surgery 
                                            specialists in the USA.
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 13,
                                                fontWeight: "normal"
                                            }}
                                        >
                                            He is a globally recognized heart surgeon and 
                                            the director of minimally invasive cardiac surgery at UCSF. 
                                            He received advanced training in heart and lung surgery at 
                                            the University Hospital of Los Angeles and University Heart 
                                            Center at Atlanta.
                                        </p>
                                        <p>
                                            Signature
                                        </p>
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