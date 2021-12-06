import { Container } from "react-bootstrap";
import { useState } from "react";
import LoginPage from "./Login";
import SimpleRegistrationComp from "../components/Registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import { toast } from "react-toastify";

function SimpleRegistration() {
  const [isStep1, setIsStep1] = useState(true);
  return (
    <Container>
      {isStep1 && (
        <SimpleRegistrationComp
          clickHandler={registerUser}
          text="sign up"
        ></SimpleRegistrationComp>
      )}
      {!isStep1 && <LoginPage></LoginPage>}
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast("Account Created Successfully!");
        setIsStep1(false);
      } else {
        toast("Error Acount was not created");
      }
    });
  }
}

export default SimpleRegistration;
