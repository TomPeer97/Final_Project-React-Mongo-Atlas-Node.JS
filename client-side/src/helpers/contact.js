import { toast } from "react-toastify";

export default function ContactValidation(
  ContactName,
  ContactEmail,
  ContactSubject,
  ContactQuestion
) {
  let error = "";
  var data = {
    name: document.getElementById(ContactName).value,
    email: document.getElementById(ContactEmail).value,
    subject: document.getElementById(ContactSubject).value,
    question: document.getElementById(ContactQuestion).value,
  };
  if (!data.name || data.name.length < 3) {
    error = `*Your name must have at list 3 letters  *`;
    toast("Your name must have at list 3 letters");
  }

  if (data.email) {
    var reges =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = reges.test(data.email);
    if (!res) {
      error += "Must enter  valid email   *";
      toast("Must enter  valid email");
    }
  } else {
    error += "Must enter  valid email   *";
    toast("Must enter  valid email");
  }

  return error || data;
}
