{/* <script type="text/javascript"> */}
function showName() {
  // Show filled name inside h1
  let username = document.getElementById("name").value;
  document.getElementById("dName").innerText = username;
  // console.log(username)
}

function showGender() {
  // Show the selected gender inside h2
  let username = document.getElementById("gender").value;
  document.getElementById("dGender").innerText = username;
}

function showEmail() {
  // Show the filled email inside h3
  let username = document.getElementById("email").value;
  document.getElementById("dEmail").innerText = username;
}

function showMobile() {
  // Show the filled mobile inside h4
  let username = document.getElementById("mobile").value;
  document.getElementById("dMobile").innerText = username;
}

function resetForm() {
  // Reset all the form elements to default values (blank "")
  document.getElementById("dName").innerText = "NAME";
  document.getElementById("dGender").innerText = "GENDER";
  document.getElementById("dEmail").innerText = "EMAIL";
  document.getElementById("dMobile").innerText = "MOBILE";
  
}

function resetDisplay() {
  // Reset all the headings (h1, h2, h3, h4) to blank values
  document.getElementById("dName").innerText = "";
  document.getElementById("dGender").innerText = "";
  document.getElementById("dEmail").innerText = "";
  document.getElementById("dMobile").innerText = "";
}
// </script>