import { Container, Grid, Header, Image, Segment, Transition } from "semantic-ui-react"

export const Biography = () => {

    return(
        <Segment vertical style={{paddingTop: 50, paddingBottom: 50 }}>
            <Container>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Transition>                        
                            <Image size="large" src="../images/doc2.jpg" />
                            </Transition>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Grid stackable>
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
                                        <Header 
                                            as='h4'
                                            content=' Dr. Taofik Yusuf, MD is one of the leading cardiac surgery 
                                                    specialists in the USA.'
                                            style={{
                                                fontFamily: 'Arvo',
                                                fontSize: 18
                                            }}
                                        />
                                        <Header 
                                            as='h4'
                                            content='He is a globally recognized heart surgeon and 
                                                the director of minimally invasive cardiac surgery at UCSF. 
                                                He received advanced training in heart and lung surgery at 
                                                the University Hospital of Los Angeles and University Heart 
                                                Center at Chicago.'
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 'normal'
                                            }}
                                        />
                                        <Image src='../images/sign.png' />
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