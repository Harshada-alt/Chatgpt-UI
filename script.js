// JavaScript functionality for your chat app can be added here

// Function to create a new chat and add it to the list
document.querySelector('.new-chat-button').addEventListener('click', function () {
    const chatList = document.querySelector('.chat-list');
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.textContent = 'New Chat';
    chatList.appendChild(chatItem);
});
// Add the following JavaScript code

function sendMessage() {
    // Add your logic to handle sending the message
    console.log("Message sent!");
    // You can add more functionality here based on your application's requirements
}


// Add the following JavaScript code

function sendMessage() {
    // Get the message input value
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    // Clear the message input
    messageInput.value = '';

    // Get the message area element
    const messageArea = document.querySelector('.message-area');

    // Create a new div element to hold the message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.textContent = message;

    // Append the message div to the message area
    messageArea.appendChild(messageDiv);
}
const hideButton = document.querySelector('hide-left-pane-Button');
const leftPane = document.querySelector('leftPane');
const hideButtonTop = document.querySelector('hide-left-pane-button');

// Function to hide the left pane and create the hide button at the top left
hideButton.addEventListener('click', () => {
    leftPane.style.display = 'none';
    
    // Set the display style of the top-left hide button to 'block'
    hideButtonTop.style.display = 'block';
});

// Function to show the left pane and hide the top-left hide button
hideButtonTop.addEventListener('click', () => {
    leftPane.style.display = 'block';
    hideButtonTop.style.display = 'none';
});


// Function to change button color on click
function changeButtonColor(buttonId) {
    const button = document.querySelector(`#${buttonId}`);
    button.classList.toggle("dark-button");
}

