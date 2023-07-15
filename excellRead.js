// installing npm instal xlsx 
const excelReader = require('xlsx');

// reading the file SUmmitGR.xlsx
const readingExcel = excelReader.readFile('SUmmitGR.xlsx');
// sheet data which stores the data of the excel using json
let sheetData= [];
// it reads the excel file sheet names 
const readAllSheets=readingExcel.SheetNames;
// for loop to read all sheets in the excel file
for(let i = 0; i < readAllSheets.length; i++)
{
   // console.log(readAllSheets[i])
   // console.log(readingExcel.Sheets[readingExcel.SheetNames[i]])
   // having temp variable to store the data of excel data in json format
   const temp = excelReader.utils.sheet_to_json(
    // reading the excel sheets in the array 
        readingExcel.Sheets[readingExcel.SheetNames[i]])
   temp.forEach((res) => {
    // store it in the array of sheet data by pushing
      sheetData.push(res)
   })
}
  
// Printing data
console.log(sheetData)