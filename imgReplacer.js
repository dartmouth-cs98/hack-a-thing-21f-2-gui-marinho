let imgs = document.querySelectorAll('img');
for (image of imgs) {
    var num = Math.floor(Math.random() * 15);
    image.src = chrome.extension.getURL(`images/${num}.jpg`);
}