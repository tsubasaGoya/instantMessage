const btn = document.querySelector('#sendBtn'),
      messageIn = document.querySelector('#messageIn'),
      messageOut = document.querySelector('#messageOut');

btn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    //console.log(content);
    if (content === '') {
        alert('Please type something to send');
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}