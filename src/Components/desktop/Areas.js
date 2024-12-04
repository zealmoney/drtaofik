import { Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const AreasOfExpertise = () => {

    return(
        <Segment vertical style={{paddingTop: 70, backgroundColor: '#eaf2f8'}}>
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header 
                                as="h1"
                                content="Areas of Expertise"
                                style={{
                                    fontFamily: 'Roboto',
                                    color: '#3f6aa3'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src="../images/docscan.jpg" rounded />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Header 
                                as="h4"
                                textAlign="center"
                                content="Diabetic heart disease"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                People with diabetes are more likely to have certain conditions 
                                that increase the chances of having heart disease or high blood 
                                pressure.
                            </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                        <Header 
                                as="h4"
                                textAlign="center"
                                content="Atherosclerosis"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                Atherosclerosis is a condition where the arteries become 
                                narrowed and hardened due to a buildup of plaque around 
                                the artery wall.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle">
                            <Header 
                                as="h4"
                                textAlign="center"
                                content="Prediabetes"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                This condition arises when your blood glucose level 
                                is higher than normal but not high enough for 
                                diabetes.
                            </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Segment size="large" raised>
                            <Header 
                                as="h4"
                                textAlign="center"
                                content="Dietary and exercise counseling"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                Changing unhealthy eating habits and maintaining good ones 
                                greatly reduces the risk for heart disease.
                            </p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Image src="../images/docscan.jpg" rounded />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingBottom: 50}}>
                        <Grid.Column verticalAlign="middle">
                            <Segment size="large" raised>
                            <Header 
                                as="h4"
                                textAlign="center"
                                content="Coronary artery disease"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                Coronary artery disease is the narrowing or blockage of 
                                the coronary arteries, usually caused by atherosclerosis.
                            </p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Header 
                                as="h4"
                                textAlign="center"
                                content="Heart failure"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                            />
                            <p style={{lineHeight: '2em'}}>
                                Heart failure is characterized by the heart's inability 
                                to pump an adequate supply of blood to the body.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}