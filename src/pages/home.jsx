import React, { useContext } from 'react';
import { context } from '../context';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserAvatar from '../components/userAvatar';
import UserInformation from '../components/userInformation';
import UserNumbers from '../components/userNumbers';

export default function Home() {
  
    const ctx = useContext(context)
 
    return (
        <Container>
            <Header />
            <UserContainer>
            {ctx.userData?.name ?
            <React.Fragment>
                <UserAvatar url={ctx.userData?.avatar_url} />
                <UserInformation name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                <UserNumbers repos={ctx.userData?.public_repos || 0} starred={ctx.userStarred}/>
                </React.Fragment>
                : undefined}
            </UserContainer>
        </Container>
    );
}