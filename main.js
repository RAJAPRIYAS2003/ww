let profiles = [];

// Function to display profiles
function displayProfiles() {
  const profileList = document.getElementById("profile-list");
  profileList.innerHTML = "";

  profiles.forEach((profile, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Name:</strong> ${profile.name}, 
      <strong>Age:</strong> ${profile.age}, 
      <strong>Gender:</strong> ${profile.gender},
      <strong>Person:</strong> ${profile.person},
      <strong>Lang:</strong> ${profile.lang},
      <strong>Religion:</strong> ${profile.religion},
      <strong>Caste:</strong> ${profile.caste},
      <strong>N:</strong> ${profile.number},
      <strong>Email:</strong> ${profile.email},
      <strong>Password:</strong> ${profile.password}
      <button onclick="editProfile(${index})">Edit</button>
      <button onclick="deleteProfile(${index})">Delete</button>
    `;
    profileList.appendChild(li);
  });
}

// Function to add or update profile
function addOrUpdateProfile(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const personInput = document.getElementById("person");
  const langInput = document.getElementById("lang");
  const religionInput = document.getElementById("religion");
  const casteInput = document.getElementById("caste");
  const numberInput = document.getElementById("number");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  

  // Validate inputs
  let isValid = true;
  if (nameInput.value.trim() === "") {
    document.getElementById("name-error").innerText = "Name is required";
    isValid = false;
  } else {
    document.getElementById("name-error").innerText = "";
  }
  if (ageInput.value === "" || parseInt(ageInput.value) < 18) {
    document.getElementById("age-error").innerText = "Age must be 18 or above";
    isValid = false;
  } else {
    document.getElementById("age-error").innerText = "";
  }
  if (genderInput.value === "") {
    document.getElementById("gender-error").innerText = "Gender is required";
    isValid = false;
  } else {
    document.getElementById("gender-error").innerText = "";
  }
  if (personInput.value === "") {
    document.getElementById("person-error").innerText = "person is required";
    isValid = false;
  } else {
    document.getElementById("person-error").innerText = "";
  }
  if (langInput.value === "") {
    document.getElementById("lang-error").innerText = "lang is required";
    isValid = false;
  } else {
    document.getElementById("lang-error").innerText = "";
  }
   if (religionInput.value === "") {
    document.getElementById("religion-error").innerText = "religion is required";
    isValid = false;
  } else {
    document.getElementById("religion-error").innerText = "";
  }
   if (casteInput.value === "") {
    document.getElementById("caste-error").innerText = "caste is required";
    isValid = false;
  } else {
    document.getElementById("caste-error").innerText = "";
  }
   if (numberInput.value === "") {
    document.getElementById("number-error").innerText = "number is required";
    isValid = false;
  } else {
    document.getElementById("number-error").innerText = "";
  }
   if (emailInput.value === "") {
    document.getElementById("email-error").innerText = "email is required";
    isValid = false;
  } else {
    document.getElementById("email-error").innerText = "";
  }
   if (passwordInput.value === "") {
    document.getElementById("password-error").innerText = "password is required";
    isValid = false;
  } else {
    document.getElementById("password-error").innerText = "";
  }

  
  if (!isValid) {
    return;
  }

  const profileIndex = document.getElementById("profile-index").value;
  if (profileIndex !== "") {
    // Update existing profile
    profiles[profileIndex] = {
      name: nameInput.value.trim(),
      age: parseInt(ageInput.value),
      gender: genderInput.value,
      person:personInput.value,
      lang:langInput.value,
      religion:religionInput.value,
      caste:casteInput.value,
      number:numberInput.value,
      email:emailInput.value,
      password:passwordInput.value
      
    };
  } else {
    // Add new profile
    profiles.push({
      name: nameInput.value.trim(),
      age: parseInt(ageInput.value),
      gender: genderInput.value,
      person:personInput.value,
      lang:langInput.value,
      religion:religionInput.value,
      caste:casteInput.value,
      number:numberInput.value,
      email:emailInput.value,
      password:passwordInput.value
     
    });
  }

  // Clear form inputs
  clearForm();

  // Display profiles
  displayProfiles();
}

// Function to edit profile
function editProfile(index) {
  const profile = profiles[index];
  document.getElementById("name").value = profile.name;
  document.getElementById("age").value = profile.age;
  document.getElementById("gender").value = profile.gender;
  document.getElementById("person").value = profile.person;
  document.getElementById("lang").value = profile.lang;
  document.getElementById("religion").value = profile.religion;
  document.getElementById("caste").value = profile.caste;
  document.getElementById("number").value = profile.number;
  document.getElementById("email").value = profile.email;
  document.getElementById("password").value = profile.password;
  
 
  document.getElementById("profile-index").value = index;
}

// Function to delete profile
function deleteProfile(index) {
  const confirmation = confirm("Are you sure you want to delete this profile?");
  if (confirmation) {
    profiles.splice(index, 1);
    displayProfiles();
  }
}

// Function to clear form inputs and errors
function clearForm() {
  document.getElementById("profile-form").reset();
  document.getElementById("profile-index").value = "";
  document.querySelectorAll('.error').forEach(error => error.innerText = '');
}

// Attach event listener to form submission
document.getElementById("profile-form").addEventListener("submit", addOrUpdateProfile);

// Initial display of profiles
displayProfiles();