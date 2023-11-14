// script.js

// Get the input field and chatbox
const userInput = document.getElementById('user-input');
const chatbox = document.querySelector('.chatbox');

// Event listener for user input
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            // Display user message in chatbox
            displayMessage(userMessage, 'user');

            // Process user input (you can add your logic here)
            const chatbotResponse = getChatbotResponse(userMessage);

            // Display chatbot response
            displayMessage(chatbotResponse, 'chatbot');

            // Clear input field
            userInput.value = '';
        }
    }
});

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    const li = document.createElement('li');
    li.classList.add(sender);
    li.textContent = message;
    chatbox.appendChild(li);
}

// Example chatbot logic (replace with your own)
function getChatbotResponse(userMessage) {
    // Implement your chatbot's logic here
    // For now, let's just echo the user's message
    return `You said: "${userMessage}"`;
}
