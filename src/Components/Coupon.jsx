import React,  { useEffect, useState } from "react";
import { Image, Container, Card, Segment,Label } from "semantic-ui-react";

function Coupon() {
    const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://127.0.0.1:5000/data")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <Container>
        <br></br>
          <Segment inverted color='green' tertiary textAlign='center'>Coupons are updates two times in a day. 
         Only New 60 Coupons Will get display on this website everyday!</Segment>
         
          
      <Card.Group centered>
        {/* Card */}
        {user && user.length > 0 && user.map((userObj, index) => (
        <Card key={userObj.id} link href={userObj.link} target='_blank'>
    
          <Image
            src={userObj.img}
            wrapped
            ui={false}
          />
                  <Label  color='red'  attached='top left'>{userObj.date}</Label>

          <Card.Content>
            <Card.Header>
            {userObj.title}
            </Card.Header>
           
            <Card.Description>
            {userObj.description}
            </Card.Description>
          </Card.Content>
        </Card>
))}
      </Card.Group>

    </Container>

  );
}

export default Coupon;
