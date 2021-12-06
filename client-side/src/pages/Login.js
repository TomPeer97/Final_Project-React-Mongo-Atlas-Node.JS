import { LoginUser } from "../helpers/FetchHelper";
import { Container } from "react-bootstrap";
import Login from "../components/Login/LoginComp";
import { getMeData } from "../helpers/FetchHelper";
import { toast } from "react-toastify";

function LoginPage({ set }) {
  return (
    <Container>
      <Login clickHandler={LoginFunc}></Login>
    </Container>
  );

  function LoginFunc(data) {
    LoginUser(data, (response) => {
      if (response.token) {
        toast("Welcome to U");
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
        });
        window.location.href = "/Home";
      } else {
        toast("Your account details are incorrect.");
      }
    });
  }
}
export default LoginPage;
