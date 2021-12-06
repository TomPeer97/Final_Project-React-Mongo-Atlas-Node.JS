export default function CreateCardValid(
  idName,
  idDiscription,
  idAddress,
  idPhone
) {
  let error = "";
  let data = {
    bizName: document.getElementById(idName).value,
    bizDescription: document.getElementById(idDiscription).value,
    bizAddress: document.getElementById(idAddress).value,
    bizPhone: document.getElementById(idPhone).value,
  };
  if (!data.bizName || data.bizName.length < 6) {
    error = `Your business name must have 6 letters!`;
  }

  if (!data.bizDescription || data.bizDescription.length < 1) {
    error = `Your business Description empty. Please discribe about your business!`;
  }
  if (!data.bizAddress || data.bizAddress.length < 1) {
    error = `Your business Address empty. Please write your business location!`;
  }

  var reges = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
  var res = reges.test(data.bizPhone);
  if (!res) {
    error += "You must enter valid phone number  ";
  }

  return error || data;
}
