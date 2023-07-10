//installing the npm install exceljs 
const ExcelJS = require('exceljs');
// we create workbook object 
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('SummitGR.xlsx').then(() => {
    // Access the worksheets in the workbook
    const worksheet = workbook.getWorksheet('summit');

    //Iterate through the rows in the worksheet
    worksheet.eachRow((row,rowNumber) => {
        // Iterate through the cells in each row
        row.eachCell((cell,colNumber) => {
// Access cell values
console.log('Cell ${cell.address}: ${cell.value}');
        });
    });
});