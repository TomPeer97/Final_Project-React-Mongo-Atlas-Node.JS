import { registerNewAccount } from "../helpers/FetchHelper";
import { Container } from "react-bootstrap";
import BusinessRegistrationComp from "../components/Registration/BusinessRegistrationComp";
import { useState } from "react";
import { toast } from "react-toastify";
import CreateCardComp from "../components/cards/createCard";
import { insertNewCard } from "../helpers/FetchHelper";
import { LoginUser } from "../helpers/FetchHelper";

function BusinessRegistrationPage() {
  const [isStep1, setIsStep1] = useState(true);
  return (
    <Container>
      {isStep1 && (
        <BusinessRegistrationComp
          clickHandler={registerUser}
          text="Next"
        ></BusinessRegistrationComp>
      )}

      {!isStep1 && (
        <CreateCardComp clickHandler={createBusinessCard}></CreateCardComp>
      )}
    </Container>
  );

  function registerUser(data) {
    //register the business account in our database.
    registerNewAccount(data, (data1) => {
      if (data1._id) {
        toast("Account Created Successfully!");
        setIsStep1(false);
        //delete from our data base the name and biz for login
        delete data.name && delete data.biz;
        //login function
        LoginUser(data, (response) => {
          if (response.token) {
            //give to the user token and login
            localStorage.setItem("token", response.token);
          }
        });
      } else {
        toast("Error Acount was not created");
      }
    });
  }
  //create card function
  function createBusinessCard(data) {
    //create new card to the user with the token from the business registration
    insertNewCard(data, localStorage.getItem("token"), () => {
      toast("Your card created successfully! please login to see your card!");
    });

    window.location.href = "http://localhost:3001/my-cards";
  }
}
export default BusinessRegistrationPage;
