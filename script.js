function createTable() {
  const table = document.getElementById("myTable");

  // Clear the existing table
  table.innerHTML = "";

  // Get number of rows
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Convert input to integers
  const numRows = parseInt(rn);
  const numCols = parseInt(cn);

  // Input validation
  if (isNaN(numRows) || isNaN(numCols)) {
    alert("Please enter valid numeric values.");
    return;
  }

  if (numRows <= 0 || numCols <= 0) {
    alert("Rows and columns must be greater than 0.");
    return;
  }

  // Create table rows and cells
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
