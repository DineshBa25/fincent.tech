import {Container, Header, Sidebar, Sidenav, Content, Navbar, Nav, Divider, Stack, Avatar} from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import React, {useContext, useEffect} from "react";
import SignOut from "@rsuite/icons/legacy/SignOut";
import {auth, UserContext} from "@/pages/firebase";
import {useRouter} from "next/router";
import {Card, Grid, Text, Link, Progress} from "@nextui-org/react";


function handleSignOut(){
    // Implement sign out logic here
    // signout the uesr with firebase
    auth.signOut().then(() => {
        // Sign-out successful.
        console.log("signed out successfully")
        console.log(auth.currentUser)
    }
    ).catch((error) => {
        // An error happened.
        console.log(error)
    }
    );

}



export default function dashboard() {
    const [expand, setExpand] = React.useState(true);
    // @ts-ignore
    const router = useRouter();

    useEffect(() => {
        if (auth.currentUser) {
            console.log("signed in!");
        } else if (auth.currentUser == null) {
            router.push("/auth/login");
        }
    }, [auth.currentUser]);

    if (!auth.currentUser) {
        // user is signed out or still being checked.
        // don't render anything
        return null;
    }



    return (
        <Container style={{height: "100vh", background: "#fff"}}>
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' , background: "#202436"}}
                width={expand ? 260 : 56}

                collapsible
            >
                <Sidenav.Header>
                    <div>
                            <img src="https://i.ibb.co/CM4ZDC1/logo-no-dark1.png" alt="Fincent Logo" height={120} style={{margin: "20px"}} />

                    </div>
                </Sidenav.Header>
                <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                Calculators
                            </Nav.Item>
                            <Nav.Menu
                                eventKey="3"
                                trigger="hover"
                                title="Courses"
                                icon={<MagicIcon />}
                                placement="rightStart"
                            >
                                <Nav.Item eventKey="3-1">Investing</Nav.Item>
                                <Nav.Item eventKey="3-2">Credit Cards</Nav.Item>
                                <Nav.Item eventKey="3-3">Financing</Nav.Item>
                                <Nav.Item eventKey="3-4">Identity Theft</Nav.Item>
                                <Nav.Item eventKey="3-5">Budgeting</Nav.Item>
                                <Nav.Item eventKey="3-6">Insurance</Nav.Item>
                                <Nav.Item eventKey="3-7">Wealth Transfer</Nav.Item>
                            </Nav.Menu>
                            <Nav.Item eventKey="4" style={{color:"#c90000", background: "rgba(255,0,0,0.15)"}} icon={<SignOut />}
                                onClick = { () => {
                                    handleSignOut();
                                    router.push('auth/login');
                                }}
                            >
                                Signout
                            </Nav.Item>
                            {(auth.currentUser) ? <div color={"#fff"}> <Divider/>
                                <Stack
                                    style={{padding: "10px"}}
                                    direction={"row"}
                                    spacing={20}
                                    justifyContent={"center"}
                                >
                                    <Avatar circle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjAmPDFrWgiA7up5qpo0my3SdUrkGB1paLDONlqXnemIPtxiaFTs9WuEMXU192JBvDgc&usqp=CAU" alt="@superman66" />
                                    <h6 style={{color: "#fff"}}>{auth.currentUser.email}</h6>
                                </Stack>
                                <Divider/> </div> : null}
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Sidebar>

            <Container style={{padding: "20px"}}>
                <Header>
                    <h2>Welcome to your dashboard, Joe Aggie</h2>
                </Header>
                <Content>Your journey to financial literacy and impactful wealth building begins here.
                    <Divider/>

                    <h1>Available Courses:</h1>
                    <Stack style={{padding: "10px"}} direction={"row"} spacing={20} justifyContent={"flex-start"} wrap>
                        <CourseCard name={"Budgeting"} description={"Understanding the basics of income and expenses, tracking your spending, and creating a budget that works for you."}/>
                        <CourseCard name={"Saving"} description={"The importance of saving, developing a savings plan, and tips for growing your savings."}/>
                        <CourseCard name={"Investing"} description={"Understanding different types of investments, diversifying your portfolio, and making informed investment decisions."}/>
                        <CourseCard name={"Credit"} description={"Building and maintaining good credit, understanding credit reports, and avoiding debt."}/>
                        <CourseCard name={"Retirement"} description={"Planning for retirement, understanding different retirement savings options, and preparing for retirement."}/>
                        <CourseCard name={"Taxation"} description={"Understanding tax laws and regulations, preparing for tax season, and maximizing tax benefits."}/>
                        <CourseCard name={"Estate Planning"} description={"Planning for the future, understanding the importance of a will and other estate planning documents, and preparing for the distribution of your assets."}/>
                    </Stack>

                </Content>
                <h2>The current user is: {auth.currentUser?.email}</h2>

            </Container>
        </Container>

    );
};

//card component
function CourseCard ( props: { name: string; description: string; } ) {

    return(
            <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                    <img
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="34px"
                        height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                                {props.name}
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{ color: "$accents8" }}>Financial Education</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text>
                        {props.description}
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <Link

                        color="primary"
                        target="_blank"
                        href="https://github.com/nextui-org/nextui"
                    >
                        Continue Course
                    </Link>
                    <Progress value={50} color="primary" />
                </Card.Footer>
            </Card>
    );
}
