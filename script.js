const questions = [
    { question: "What's your go-to outfit?", answers: ["Jeans & Tee", "Flowy Dress", "Leather Jacket", "Tailored Suit"] },
    { question: "Choose a color palette:", answers: ["Neutrals", "Pastels", "Bold Colors", "Monochrome"] },
    // Add additional questions here...
];

const categories = {
    "Classic": {
        indices: [0],
        description: "You're timeless, elegant, and always polished."
    },
    "Boho": {
        indices: [1],
        description: "You're free-spirited and drawn to flowy dresses."
    },
    // Add more categories...
};

let currentQuestionIndex = 0;
let userResponses = [];

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-btn");

    questionContainer.innerHTML = "";
    const questionData = questions[currentQuestionIndex];
    const questionHTML = `
        <p>${questionData.question}</p>
        ${questionData.answers.map((answer, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label>
        `).join("")}
    `;
    questionContainer.innerHTML = questionHTML;
    nextButton.style.display = "block";
}

function handleNext() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer before proceeding!");
        return;
    }
    userResponses.push(Number(selectedAnswer.value));
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    let category = "Classic";
    let maxMatches = 0;
    for (const [key, value] of Object.entries(categories)) {
        const matches = value.indices.filter(index => userResponses.includes(index)).length;
        if (matches > maxMatches) {
            maxMatches = matches;
            category = key;
        }
    }
    document.getElementById("result-text").textContent = `You are ${category}!`;
    document.getElementById("result-description").textContent = categories[category].description;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", handleNext);
document.addEventListener("DOMContentLoaded", loadQuestion);
