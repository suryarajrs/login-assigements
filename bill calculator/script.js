document.addEventListener("DOMContentLoaded", () => {
    const calculateBillButton = document.getElementById("calculate-bill");
    const summaryName = document.getElementById("summary-name");
    const summaryDatetime = document.getElementById("summary-datetime");
    const totalAmount = document.getElementById("total-amount");
    const rows = document.querySelectorAll("#product-table tbody tr");
  
    // Function to calculate subtotal for each row dynamically
    const calculateSubtotal = (row) => {
      const quantityInput = row.children[1].querySelector("input");
      const rateInput = row.children[2].querySelector("input");
      const subtotalCell = row.children[3];
      
      // Parse Quantity and Rate values
      const quantity = parseFloat(quantityInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      
      // Calculate and update Subtotal
      const subtotal = quantity * rate;
      subtotalCell.textContent = subtotal.toFixed(2); // Update the Subtotal cell
      return subtotal;
    };
  
    // Event Listener for 'Calculate Bill' button
    calculateBillButton.addEventListener("click", () => {
      // Get Customer Name and Date/Time
      const customerName = document.getElementById("customer-name").value.trim();
      const datetime = document.getElementById("date-time").value;
  
      let total = 0; // Initialize total amount
  
      // Loop through rows to calculate each subtotal and sum the total
      rows.forEach((row) => {
        total += calculateSubtotal(row);
      });
  
      // Update Bill Summary Section
      summaryName.textContent = customerName || "N/A";
      summaryDatetime.textContent = datetime || "N/A";
      totalAmount.textContent = total.toFixed(2);
    });
  
    // Add input listeners for real-time updates of subtotal on input changes
    rows.forEach((row) => {
      const quantityInput = row.children[1].querySelector("input");
      const rateInput = row.children[2].querySelector("input");
  
      const onInput = () => calculateSubtotal(row);
  
      quantityInput.addEventListener("input", onInput);
      rateInput.addEventListener("input", onInput);
    });
  });
  