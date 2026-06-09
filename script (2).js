// Flashcard Dataset containing visual metadata
const conceptualCards = [
    {
        title: "The Stack (LIFO)",
        description: "A Last-In, First-Out data structure. Elements are appended to the top and removed from the top.",
        elementTxt: "Data Packet"
    },
    {
        title: "Python Lists: .append()",
        description: "Appends an element to the extreme end of an existing sequence array dynamic structure.",
        elementTxt: "New Item ➡️ Array"
    }
];

let currentCardIndex = 0;
let userXP = 0;

// Tab Switching Mechanism
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Card Renderer Architecture 
function loadCard() {
    const cardElement = document.getElementById('card');
    cardElement.classList.remove('flipped');
    
    setTimeout(() => {
        const data = conceptualCards[currentCardIndex];
        document.getElementById('card-title').innerText = data.title;
        document.getElementById('card-desc').innerText = data.description;
        
        // Dynamic Engine Asset Assembly
        const container = document.getElementById('animation-container');
        container.innerHTML = `<div class="animate-element">${data.elementTxt}</div>`;
    }, 200);
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
    updateXP(5);
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % conceptualCards.length;
    loadCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + conceptualCards.length) % conceptualCards.length;
    loadCard();
}

// Gamification Score Keepers
function updateXP(amount) {
    userXP += amount;
    document.getElementById('xp-val').innerText = userXP;
}

// Sandbox Real-time Parsing Simulation Engine
function runCode() {
    const code = document.getElementById('code-editor').value;
    const consoleOut = document.getElementById('console-output');
    const valMsg = document.getElementById('validation-msg');
    
    if (code.includes('.append(') && !code.includes('.add(')) {
        consoleOut.innerHTML = `> python script.py\n['apple', 'banana', 'cherry']\n\nProcess completed successfully.`;
        valMsg.innerHTML = "🎉 Excellent! You correctly used .append() instead of .add().";
        valMsg.className = "validation success-msg";
        updateXP(50);
    } else {
        consoleOut.innerHTML = `> python script.py\nAttributeError: 'list' object has no attribute 'add' on line 4`;
        valMsg.innerHTML = "❌ Compilation Error: Lists in Python use .append() to attach data.";
        valMsg.className = "validation error-msg";
    }
}

// App Initialization
window.onload = () => {
    loadCard();
};