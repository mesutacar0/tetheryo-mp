export class User {
  constructor(
    firstName,
    lastName,
    userName,
    email,
    password,
    whatsappNo,
    address
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.whatsappNo = whatsappNo;
    this.address = address;
    this.isApproved = false;
    this.isDeleted = false;
  }
}
