export default function info(args) {
  const info = "Session ID: " + localStorage.getItem("queryId") + "\n" +
               "Show Stats: " + localStorage.getItem("useStats") + "\n" +
               "Stream: " + localStorage.getItem("useStream") + "\n" +
               "Role: " + localStorage.getItem("role") + "\n";

  return info;
}