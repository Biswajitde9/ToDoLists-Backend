async function performDelete() {
    // Get the list of checked tasks.
    const checkedLists = [];
    const selectChecked = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    for (const checkbox of selectChecked) {
      checkedLists.push(checkbox.getAttribute("id"));
    }
  
    // Convert the list of checked tasks to JSON.
     const checkedList = JSON.stringify(checkedLists);
  
    // Redirect to the delete tasks page with the list of checked tasks as a parameter.
    window.location.href = `/delete-todo/${checkedList}`;
  }
  
  // Get the date picker element.
  const datePicker = document.getElementById("date");
  
  // Get the current date.
  const todayDate = new Date().toISOString().split("T")[0];
  
  // Set the minimum date for the date picker to the current date.
  datePicker.setAttribute("min", todayDate);