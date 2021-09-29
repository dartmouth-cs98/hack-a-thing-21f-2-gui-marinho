const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
const celebrities = 

for (let i=0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Tim Tregubov')) {
        text[i].innerHTML = text[i].innerHTML.replace('Tim Tregubov', 'Sexiest man alive')
    }
}