const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

var fr = new FileReader();

fr.onload=function(){
    document.getElementById('output')
            .textContent = fr.result;
}

var celebrities = ["Miley Cyrus","Kim Kardashian","Kayne West","Margaret Thatcher","George Washington","Ghandi","Nelson Mandela","Christopher Columbus","Justin Beiber","Lady Gaga","Katy Perry","Justin Timberlake","Jay Leno","David Letterman","Elle McPherson","Jennifer Aniston","Donald Duck","Pluto","Goofy","Johnny Depp","Brittney Spears","Paris Hilton","Hugh Jackman","Vladimir Putin","Daniel Radcliffe","David Beckham","Madonna","Eminem","Matt Damon","Jack Nicholson","Kylie Minogue","Roger Federer","Andrew Murray","Serena Williams","Brad Pitt","Mickey Mouse","Simon Cowell","Ludwig Beethoven","Warren Buffett","Lewis Carroll","Queen Elizabeth II","Charles Darwin","Albert Einstein","Henry Ford","Bill Gates","Steve Jobs","Vincent van Gogh","Thomas Jefferson","Stanley Kubrik","Charles Lindbergh","Courtney Love","Kurt Cobain","Michelangelo","Amadeus Mozart","Sir Isaac Newton","George Orwell","Andy Warhol","Orson Welles","Leonardo Da Vinci","Walt Disney","Abraham Lincoln","William Shakespeare","Martin Luther King","John F Kennedy","Princess Diana","Mother Teresa","Thomas Edison","Benjamin Franklin","Neil Armstrong","Napoleon","Elvis Presley","Mohammad Ali","Marilyn Monroe","Pablo Picasso","Charles Dickens","Cleopatra","John Lennon","Michael Jordan","Mark Twain","Nicole Kidman","Barack Obama","Robert Pattison","Hugh Heffner","JK Rowling","Bill Clinton","Elizabeth Taylor","Tom Cruise","Clint Eastwood","Alfred Hitchcock","Stephen Hawking","Tom Hanks","Oprah Winfrey","Beyonce","Hilary Clinton","Dr Seuss","Ray Charles","Sean Connery","Julia Roberts","Pele","Meryl Streep","Helen Keller","Robin Williams","Steve Martin","Fred Astaire","Whoopi Goldberg","Jane Austen","Bob Hope","Jessica Simpson","Frank Lloyd Wright","Pamela Anderson","Susan Boyle","Mae West","Snoopy","Jim Carrey","Michael J Fox"]
var professors = ["Chris Bailey-Kellogg","Devin Balkcom","Andrew Campbell","Amit Chakrabarti","Deeparnab 'DeepC' Chakrabarty","Thomas H. Cormen","Wojciech Jarosz","Prasad Jayanti","Vasanta Kommineni","Provost David Kotz '83","Timothy J. Pierson","Temiloluwa O. Prioleau","Alberto Quattrini Li","Tim Tregubov","Soroush Vosoughi","Xing-Dong 'XD' Yang","Charles C. Palmer"]

for (let i=0; i < text.length; i++) {
    for (let celeb=0; celeb < celebrities.length; celeb++) {
        console.log('Looking for ${celebrity[celeb]}')
        if (text[i].innerHTML.includes(celebrities[celeb])) {
            text[i].innerHTML = text[i].innerHTML.replace(celebrities[celeb], professors[Math.floor(Math.random() * professors.length)])
        }
    }
}