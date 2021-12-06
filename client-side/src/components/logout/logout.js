import { Button } from "react-bootstrap";

function LogoutBtn() {
  return (
    <Button
      variant="dark"
      id="LogoutBtn"
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/Home";
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
