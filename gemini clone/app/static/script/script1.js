async function sendData(chat,message,userInput) {
    try {
        const response = await fetch('http://127.0.0.1:5000/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: userInput }),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        // Display response from Flask app
        message.textContent = data.response;
        chat.appendChild(message);
    } catch (error) {
        console.error('Error:', error);
        message.textContent = "Error communicating with the server";
        chat.appendChild(message);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputBar = document.querySelector('.inputbar');
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
            chat.style.marginTop = '12rem'; 
        } //else {
        //     chat.style.height = '53vh';
        //     chat.style.marginTop = ''; 
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
            event.preventDefault(); 


            allBoxes.style.display = 'none';

            
            chat.style.display = 'flex';
            chat.style.flexDirection = 'column';
            chat.style.width = '90%';
            chat.style.height = '51vh';
            chat.style.marginTop = '10rem'; 
            chat.style.alignItems = 'flex-end'; 
            chat.style.gap = '10px';
            chat.style.justifyContent = 'flex-start'; 
            chat.style.paddingRight = '10px'; 
            chat.style.paddingTop = '2rem'; 

            if (window.innerWidth < 550) {
                chat.style.marginTop = '12rem';
                chat.style.overflowY = 'scroll'; 
                lasttext.style.bottom = '5px';
                text.style.height = '20dvh';
            } else {
                chat.style.marginTop = '15rem';
                chat.style.overflowY = 'unset'; 
            }

            

            
            adjustChatHeight();

            
            const message = document.createElement('div');
            message.style.backgroundColor = '#252425'; 
            message.style.color = '#e3e3e3';
            message.style.borderRadius = '10px';
            message.style.padding = '10px';
            message.style.maxWidth = '60%'; 
            message.style.minWidth = '50px'; 
            message.style.wordWrap = 'break-word';
            message.style.marginRight = '10px';
            message.style.transition = 'all 0.5s ease-in-out';
            message.style.opacity = '0';
            message.textContent = inputBar.value;
            message.style.flexShrink = '0';

            const message2 = document.createElement('div');
            message2.style.backgroundColor = '#252425'; 
            message2.style.color = '#e3e3e3';
            message2.style.borderRadius = '10px';
            message2.style.padding = '10px';
            message2.style.maxWidth = '60%'; 
            message2.style.minWidth = '50px'; 
            message2.style.wordWrap = 'break-word';
            message2.style.marginRight = '10px';
            message2.style.transition = 'all 0.5s ease-in-out';
            message2.style.opacity = '0';
            message2.textContent = inputBar.value;
            message2.style.flexShrink = '0';
            message2.style.marginLeft = '10px';
            message2.style.alignSelf = 'flex-start';

            chat.appendChild(message);
            sendData(chat,message2,inputBar.value);
            setTimeout(() => {
                message.style.opacity = '1';
                message2.style.opacity = '1';
            }, 10);

           
            inputBar.value = '';

            chat.scrollTop = chat.scrollHeight;
        }
    });

    window.addEventListener('resize', adjustChatHeight);
    adjustChatHeight();
});
