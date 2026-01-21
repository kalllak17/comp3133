const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const outputCanadaFile = 'canada.txt';
const outputUSAFile = 'usa.txt';


function deleteFile(filePath){
    if (fs.existsSync(filePath)){
        fs.unlinkSync(filePath)
    }
}
deleteFile(outputCanadaFile)
deleteFile(outputUSAFile)


const canadaStream = fs.createWriteStream(outputCanadaFile);
const usaStream = fs.createWriteStream(outputUSAFile);

const header = 'country,year,population\n';
canadaStream.write(header);
usaStream.write(header);

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();

        const line = `${row.country},${row.year},${row.population}\n`;

        if (country === 'canada') {
            canadaStream.write(line);
        }

        if (country === 'united states' || country === 'usa') {
            usaStream.write(line);
        }
    })
    .on('end', () => {
        canadaStream.end();
        usaStream.end();
        console.log('Canada and USA files created successfully');
    });