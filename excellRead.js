//installing the npm install exceljs 
const ExcelJS = require('exceljs');
// we create workbook object 
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('SummitGR.xlsx').then(() => {
    // Access the worksheets in the workbook
    const worksheet = workbook.getWorksheet('summit');

    worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
        console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
        });
    })

.catch((error) => {
    console.log('Error reading Excel file:', error);
  });
