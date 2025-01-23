const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
  console.log("Hello");
  event.preventDefault();

  const lusername = document.getElementById("lusername").value;
  const lpassword = document.getElementById("lpassword").value;
  console.log(lusername)
  console.log(lpassword)

  try {
    // Make the POST request
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lusername, lpassword }), // Send as JSON
    });

    
    if (!res.ok) {
      const errorMessage = await res.text(); 
      throw new Error(`Error ${res.status}: ${errorMessage}`);
    }

    const result = await res.json();


    if (result.success) {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  } catch (err) {
    // Handle errors
    console.error("Error:", err.message);
    alert("An error occurred: " + err.message);
  }
});
