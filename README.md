# The CSIfy extension: Keep up with the CS Faculty! 


## What you built? 

I built a chrome extension with two very important, impactful functions:

* Replacing the name of the top 100 most searched celebrities with names of CS faculty
* Replacing all pictures with random pictures of CS faculty, taken from the faculty roster on the department website

The extension runs on js and json, and is hosted on the Chrome developer tools. It is around a hundred to two hundred lines of code, and I think it has great potential for expansion and scale.

Please don't show this to other faculty, unless you reckon they'll find it funny. My favorite passtime has been going to gossip tabloids and seeing what the faculty has been up to after hours:

See readmeimgs for images if they don't load. They load on my side of git, but I have been known to mess up images on .md files.

![Didn't know Tim was an artist](\readmeimgs\one.png)

![](\readmeimgs\two.png)

![](\readmeimgs\three.png)

![](\readmeimgs\four.png)

## Who Did What?

I did everything, with a little help from my friends, web tutorials.

## What you learned

Writing Chrome extensions is easy! This was a chance to flex my Javascript skills acquired over Hack-a-Thing 1. I went freehand for this one, based on two extensions I found funny, one for replacing celebrity names with other celebrities, and one for replacing all images with Nick Cage. The code is short, perhaps a hundred something lines across all files, but it took me around five hours of debugging, just because I had no clue how to structure an extension, and tutorials were quite limited. Overall, making interfaces is quite easy, and so is scheduling background tasks and loading image resources. Loading text files proved a challenge I could not overcome, as I could not use Node.js. I ended up formatting the list of celebrity names and professors myself, using regex and sed and then pasting it into my code, hard-coded.

I can see this being such a useful platform. The ability to coordinate with other extensions easily, to use chrome's power, and to schedule many background tasks showed me that extensions are not at all prohibitive to more complicated software. I will say, my current implementation is inefficient as can be: querying over all text in file for 100 celebrities and replacing all images dropped my battery life by around 10%. On the flipside, I came across many hilarious statements I sent to my friends, so I suppose the goal of the hacking was accomplished?

I wish I could do a few more things:

* Coordinate so that images match the names being shown
* Include many more celebrity names, or write a RegEx that just fits any names and turns all of them into CS Faculty
* Add an interface, so that users can turn the image and text replacement on/off or maybe even switch to other department's faculties

I was unfortunately limited by my knowledge of js and json. Gotta work on that, or find a project partner who is a js master. I was very annoyed js has no convenient way of reading text files outside of Node.js, at least that I could find; it limited the number of celebrity names I could include. I also wish the manifest file format was simpler. While google offers incredible documentation, the difference between names in the manifest between update 2 and 3 cost me an hour of banging my head against the wall. You also have to be very careful with how you list functions, kind of like a Makefile, but with even less feedback on what went wrong. Finally, while Chrome offers a dev console for logging, it is so simple, only allowing for message writing to it. I wish I had some more powerful tools for logging; I might need to look further into it.

## Authors

Gui Marinho '22

## Acknowledgments

 **Extension basics tutorial:** https://www.youtube.com/watch?v=FB2gJBoSshM

**Name replacement tutorial:** https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f

**Image replacement tutorials:** https://heptagon.in/2019/03/11/how-to-build-a-chrome-extension-chapter-6-how-to-replace-images-in-a-website/ and https://levelup.gitconnected.com/chrome-extension-tutorial-replace-images-in-any-website-with-pikachu-de2a6e3548bb 

**General google documentation:** https://developer.chrome.com/docs/extensions/mv3/getstarted/
