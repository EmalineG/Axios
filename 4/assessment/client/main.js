const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const letterBtn = document.getElementById("letterButton")

const getLetter = () => {
    axios.get("http://localhost:4000/api/letter/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

letterBtn.addEventListener('click', getLetter)


const numberBtn = document.getElementById("numberButton")

const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

numberBtn.addEventListener('click', getNumber)

const colorBtn = document.getElementById("colorButton")

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

colorBtn.addEventListener('click', getColor)
