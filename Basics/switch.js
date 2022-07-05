const day = "sunday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    console.log("Write code examples");
    break;
  case "thursday":
    console.log("record videos");
    break;
  case "friday":
    console.log("upload videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("Not a valid days");
}
