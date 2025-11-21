document.getElementById("generate").addEventListener("click", function() {
  // Get input values
  document.getElementById("r-name").innerText = document.getElementById("name").value;
  document.getElementById("r-title").innerText = document.getElementById("title").value;
  document.getElementById("r-summary").innerText = document.getElementById("summary").value;
  document.getElementById("r-address").innerText = document.getElementById("address").value;
  document.getElementById("r-phone").innerText = document.getElementById("phone").value;
  document.getElementById("r-email").innerText = document.getElementById("email").value;
  document.getElementById("r-education").innerText = document.getElementById("education").value;

  // Show resume and hide form
  document.getElementById("form-section").style.display = "none";
  document.getElementById("resume-section").style.display = "block";
});
