//installing the npm install exceljs 
const ExcelJS = require('exceljs');
// we create workbook object 
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('SummitGR.xlsx').then(() => {
    // Access the worksheets in the workbook
    const worksheet = workbook.getWorksheet('summit');
});