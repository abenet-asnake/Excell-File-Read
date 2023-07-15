// installing npm instal xlsx 
const excelReader = require('xlsx');

// reading the file SUmmitGR.xlsx
const readingExcel = excelReader.readFile('SUmmitGR.xlsx');

let sheetData= [];

const readAllSheets=readingExcel.SheetNames;
for(let i = 0; i < readAllSheets.length; i++)
{
   const temp = excelReader.utils.sheet_to_json(
        readingExcel.Sheets[readingExcel.SheetNames[i]])
   temp.forEach((res) => {
      sheetData.push(res)
   })
}
  
// Printing data
console.log(sheetData)