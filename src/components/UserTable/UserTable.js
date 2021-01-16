import React from "react";
import Table from "react-bootstrap/Table"


function UserTable({ results, sort }) {

    console.log(results);

    const tableItems = [];

    let usersArray = [];

    
    for (let i = 0; i < results.length; i++) {


        const user = {
         name: results[i].name.first + " " + results[i].name.last,
         location: results[i].location.city + "," + results[i].location.state,
         gender: results[i].gender,
         age: results[i].dob.age,
         email: results[i].email,
         picture: results[i].picture.medium
        }

        usersArray.push(user);

    }

    console.log(usersArray);

    if (sort === "age") {
       usersArray.sort((a, b) => (a.age > b.age) ? 1 : -1); 
    }


    if (sort === "male") {

        usersArray = usersArray.filter((obj) => {
            return obj.gender === "male"})
        console.log(usersArray);

        const tableItems = [];

        for (let i = 0; i < usersArray.length; i++) {

          const name = usersArray[i].name;
          const location = usersArray[i].location
          const gender = usersArray[i].gender;
          const age = usersArray[i].age;
          const email = usersArray[i].email;
          const photo = usersArray[i].picture
        

            tableItems.push(
            <tr key={i}>
              <th>{i}</th>
              <th>{name}</th>
              <th>{location}</th>
              <th>{gender}</th>
              <th>{age}</th>
              <th>{email}</th>
              <th><img src={photo} class="photo" alt="profile" /></th>
                </tr>)
        }


        console.log(tableItems);

        return (<div>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Headshot</th>
          </tr>
        </thead>
        <tbody>
            {tableItems}           
        </tbody>
        </Table>
        </div>)


    } else if (sort === "female") {
        usersArray = usersArray.filter((obj) => {
            return obj.gender === "female"})
        console.log(usersArray);

        const tableItems = [];

        for (let i = 0; i < usersArray.length; i++) {

          const name = usersArray[i].name;
          const location = usersArray[i].location
          const gender = usersArray[i].gender;
          const age = usersArray[i].age;
          const email = usersArray[i].email;
          const photo = usersArray[i].picture
        

            tableItems.push(
            <tr key={i}>
              <th>{i}</th>
              <th>{name}</th>
              <th>{location}</th>
              <th>{gender}</th>
              <th>{age}</th>
              <th>{email}</th>
              <th><img src={photo} class="photo" alt="profile" /></th>
                </tr>)
        }


        console.log(tableItems);

        return (<div>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Headshot</th>
            </tr>
        </thead>
        <tbody>
            {tableItems}           
        </tbody>
        </Table>
        </div>)
    } 


        for (let i = 0; i < usersArray.length; i++) {

          const name = usersArray[i].name;
          const location = usersArray[i].location
          const gender = usersArray[i].gender;
          const age = usersArray[i].age;
          const email = usersArray[i].email;
          const photo = usersArray[i].picture
        

            tableItems.push(
            <tr key={i}>
              <th>{i}</th>
              <th>{name}</th>
              <th>{location}</th>
              <th>{gender}</th>
              <th>{age}</th>
              <th>{email}</th>
              <th><img src={photo} class="photo" alt="profile" /></th>
                </tr>)
        }


        console.log(tableItems);

        return (<div>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Headshot</th>
          </tr>
        </thead>
        <tbody>
        {tableItems}
        </tbody>
      </Table>
      </div>
    )}


export default UserTable;