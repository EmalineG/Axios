const submissions = [];
let globalId = 4

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);  
    },
    getFortune: (req, res) => {
        const fortunes = ["A friend is a present you give yourself.", "A gambler not only will lose what he has, but also will lose what he doesn’t have.", "Believe in yourself and others will too.", "Allow compassion to guide your decisions.", "A golden egg of opportunity falls into your lap this month."];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
    getLetter: (req, res) => {
        const letters = ["a","b","c","d","e"];
        let randomIndex = Math.floor(Math.random() * letters.length);
        let randomLetter = letters[randomIndex];
        res.status(200).send(randomLetter);
    },
    getNumber: (req, res) => {
        const numbers = ["1","2","3","4","5"];
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumbers = numbers[randomIndex];
        res.status(200).send(randomNumbers);
    },
    getColor: (req, res) => {
        const colors = ["red","blue","pink","green","violet"];
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColors = colors[randomIndex];
        res.status(200).send(randomColors);
    },
    
}