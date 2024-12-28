document.addEventListener("DOMContentLoaded", function () {
    const inputBar = document.querySelector('.inputbar');
    const inputcontainer = document.querySelector('.inputcontainer');
    const allBoxes = document.querySelector('.all_boxes');
    const chat = document.querySelector('.chat');
    const lasttext = document.querySelector('.lasttext');
    const text = document.querySelector('.text');

    function adjustChatHeight() {
        if (window.innerHeight < 560) {
            lasttext.style.bottom = '5px';
            inputBar.style.position = 'absolute';
            chat.style.marginTop = '0';
            chat.style.height = '60vh';
            // text.style.display = 'none';
        }
        else if (window.innerHeight <= 670) {
            chat.style.height = '42vh';
            chat.style.marginTop = '8rem';
        } else if (window.innerHeight <= 712) {
            chat.style.height = '50vh';
            chat.style.marginTop = '8rem';
        } else if (window.innerHeight <= 787) {
            chat.style.height = '50vh';
            chat.style.marginTop = '10rem';
        } else if (window.innerHeight < 880) {
            chat.style.height = '50vh';
            chat.style.marginTop = '12rem'; // Ensure marginTop is applied
        } //else {
        //     chat.style.height = '53vh';
        //     chat.style.marginTop = ''; // Reset marginTop for larger heights
        // }
    }

    inputBar.addEventListener('keypress', function (event) {

        if (event.key === 'Enter' && inputBar.value.trim() !== "" && window.innerHeight < 560) {
            event.preventDefault();
            // lasttext.style.bottom = '5px';
            // inputBar.style.position = 'absolute';
            text.style.display = 'none';

        }

        if (event.key === 'Enter' && inputBar.value.trim() !== "" && window.innerHeight < 795 ) {
            event.preventDefault();
            chat.style.height = '60vh';
            chat.style.marginTop = '0rem';
            lasttext.style.bottom = '10px'
            lasttext.style.position = 'relative'
            // inputcontainer.style.bottom = '100px';
            // text.style.display = 'none';

        }


        if (event.key === 'Enter' && inputBar.value.trim() !== "") {
            event.preventDefault(); // Prevent default form submission behavior


            // Hide the all_boxes div
            allBoxes.style.display = 'none';

            // Apply the specified CSS properties to the chat div
            chat.style.display = 'flex';
            chat.style.flexDirection = 'column';
            chat.style.width = '90%';
            chat.style.height = '51vh';
            chat.style.marginTop = '10rem'; // Set the initial marginTop
            chat.style.alignItems = 'flex-end'; // Align messages to the right
            chat.style.gap = '10px';
            chat.style.justifyContent = 'flex-start'; // Align messages to the top
            chat.style.paddingRight = '10px'; // Add padding to move messages more to the right
            chat.style.paddingTop = '2rem'; // Add top padding to prevent messages from going too far up

            if (window.innerWidth < 550) {
                chat.style.marginTop = '12rem';
                chat.style.overflowY = 'scroll'; // Enable vertical scrolling
                lasttext.style.bottom = '5px';
                text.style.height = '20dvh';
            } else {
                chat.style.marginTop = '15rem';
                chat.style.overflowY = 'unset'; // Disable scrolling for larger screens
            }

            

            // Adjust the chat div height based on the viewport height
            adjustChatHeight();

            // Create a new message div
            const message = document.createElement('div');
            message.style.backgroundColor = '#252425'; // Adjust color as needed
            message.style.color = '#e3e3e3';
            message.style.borderRadius = '10px';
            message.style.padding = '10px';
            message.style.maxWidth = '60%'; // Adjust the maximum width as needed
            message.style.minWidth = '50px'; // Set a minimum width to prevent early wrapping
            message.style.wordWrap = 'break-word';
            message.style.marginRight = '10px'; // Move the message a bit more to the right
            message.style.transition = 'all 0.5s ease-in-out';
            message.style.opacity = '0';
            message.textContent = inputBar.value;
            message.style.flexShrink = '0';

            // Append the message to the chat div
            chat.appendChild(message);

            setTimeout(() => {
                message.style.opacity = '1';
            }, 10);

            // Clear the input bar
            inputBar.value = '';

            chat.scrollTop = chat.scrollHeight;
        }
    });

    window.addEventListener('resize', adjustChatHeight);
    adjustChatHeight();
});
