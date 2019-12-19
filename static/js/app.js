// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create a function to build the dynamic table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create a function to handle clicks
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered in filter, return only the data with that date
    if (date) {
        // Apply filter to the table data to nly keep rows where 'datetime' value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be original tableData
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.select(#filter-btn).on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
