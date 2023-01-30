function calPeriod(date1, date2) {
    var diffTime = date2.getTime() - date1.getTime();
    var diffDays = diffTime / (1000 * 3600 * 24);
    var numYears = Math.floor(diffDays / 365);
    var remainderDays = diffDays % 365;
    var numMths = Math.floor(remainderDays * 365 / 30);

    return [numYears, numMths]
};

var currentTime = new Date();
var htxStart = new Date("10/13/2020");
var numYrsMths = calPeriod(htxStart, currentTime);
const workExpDetails = [
    {
        image: "htx",
        title: "Data Scientist",
        company: "Home Team Science & Technology Agency (HTX)",
        duration: `Oct 2020 - Present: ${numYrsMths[0]} Years ${numYrsMths[1]} Months`,
        list: [
            "Designed automated surveillance tool using UiPath RPA and Python scripts",
            "Developed Flask application for road risk exploration using trained classification model",
            "Developed React application with Flask backend, equipped with AI models"
        ]
    }
];

export default workExpDetails