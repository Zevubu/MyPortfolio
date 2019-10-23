window.onload = function(){
    let navBox = document.getElementById("nav-box");
    let openBox = document.getElementById("open-box");
    let portfolio = document.getElementById("port-box"); 
    let contactBox = document.getElementById("contact-box");

    // cazy idea is the page should always be in motion just a bit using set interval and animate.

    let navMakerB = function(){
        $("#nav-below").append('<nav id="nav-box" class="f-r-c"></nav>')
        $("#nav-box").append(`<a class="nav-btn" href="#home" value="home"><p>Home</p></a>`)
        $("#nav-box").append(`<a class="nav-btn" href="#about" value="about"><p>About</p></a>`)
        $("#nav-box").append(`<a class="nav-btn" href="#portfolio" value="portfolio"><p>Potfolio</p></a>`)
        $("#nav-box").append(`<a class="nav-btn" href="#contact" value="contact"><p>Contact</p></a>`)
        // $(".nav-btn").on("click", function(){
        //     console.log("click")
        //     let pageChoice = $(this).text();
        //     $("#page-content").empty();
        //     // $("#nav-below").animate({ 
        //     //     marginbottum: "+=250px",
        //     // }, 1000 );
        //     // $("#nav-above").empty();
        //     // $("#nav-below").empty();
        //     // $("#nav-aside").empty()
    
    
        //     if (pageChoice === "Home"){
        //         homePage();
        //     }
        //     else if (pageChoice === "About"){
        //         aboutPage();
        //     }
        //     else if (pageChoice === "Potfolio"){
        //         portfolioPage();
        //     }
        //     else if (pageChoice === "Contact Me"){
        //         contactPage();
        //     }
        //     console.log(pageChoice);
        // });
    
    };
    let homePage = function(){
        aboutPage();
        portfolioPage();
        contactPage();
        findMePage()
    
        // $("#page-content").append('<img src="assets/images/sharke_clipped_rev_1.png">');
        
    };
    // makes opening page
    let openingPage = function(){
        navMakerB()
        $("#head-box").append('<section class="f-r-se" id="open-box"></section>') 
        // $("#open-box").append(`<section id="open-img-box"></section>`)
        // $("#open-img-box").append(`<img id="opening-img" src="assets/images/crown_clipped_tinyer.png">`)
        $("#open-box").append(`<section class="f-c-se" id="open-name-box"></section>`)
        $("#open-name-box").append(`<h1 id="open-name">Zev Ubu Hoffman</h1>`)
        $("#open-name-box").append(`<p id="open-fsd">A Full Stack Web Developer</h1>`)
        homePage()
    };
    // makes about page
    let aboutPage = function(){
         // 
        $("#about-content").append('<section id="about-box"></section>');
        $("#about-box").append('<h2 class="header-text">A little about me</h2>');
        $("#about-box").append('<hr id="title-block">');
        $("#about-box").append('<section class="flex-word"></section>');
        $(".flex-word").append('<section id="shark-box"></section>');
        $("#shark-box").append('<img class="portfolio-pick" src="assets/images/aTidBitBroody (4).jpg" alt="Profile pick">');
        $(".flex-word").append('<section id="word-box"></section>');
        $("#word-box").append(` <p id="p-side">As reached my 30s, I looked back at my eclectic yet highly productive work history, and I found within all of my career paths two common threads. A passion for design and engineering. <br>
        Whether this be the 6 years I’ve spent studying and working as a fashion designer and pattern maker. With a focus on custom leather accessories. To my love of social engineering, with the 8 years spent in event production and management. On the board of directors at the 501-c7 Nonprofit Mission Control SF.  Or the 13 years I’ve been a hairstylist specializing in creative color, cuts and dreadlock. My primary source of income. <br>
        Not to mention my side projects and hobbies. like the small film studio I co-started at 16, or my skills as an amateur carpenter.<br>
        Because of all of this I have an extensive history of working in groups, and on teams. Both in leadership roles, and in hands on positions. <br>
        My interests in tech are extensive, and I am extremely excited to be joining this industry.</p>`);
        
        $("#word-box").append('<section id="skill-content"></section>');
        
        $("#skill-content").append('<section id="front-end" class="icon-area"></section>');
        $("#front-end").append('<img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML5">');
        $("#front-end").append('<img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS3">');
        $("#front-end").append('<img class="icon darker" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="Javascript">');
        $("#front-end").append('<img class="icon" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="Node">');
        
        $("#skill-content").append('<section id="back-end" class="icon-area"></section>');
        $("#back-end").append('<img class="icon" src="https://www.innocreate.com/wp-content/uploads/2017/07/jsonlogo-300x300.png" alt="Html">');
        $("#back-end").append('<img class="icon darker" src="https://www.fullstacklabs.co/img/developersReact/React@2x.png" alt="React">');
        $("#back-end").append('<img class="icon" src="http://pngimg.com/uploads/mysql/mysql_PNG9.png" alt="MySQL">');
        $("#back-end").append('<img class="icon" src="assets/images/icons/mongo.png" alt="MongoDB">');
        $("#back-end").append('<img class="icon" src="https://hangtenseo.com/wp-content/uploads/2019/10/Python-Logo.png" alt="Python">');
       
        $("#skill-content").append('<section id="next-end" class="icon-area"></section>');
        $("#next-end").append('<img class="icon" src="assets/images/icons/output-onlinepngtools.png" alt="Bootstrap">');
        $("#next-end").append('<img class="icon" src="https://i.pinimg.com/originals/34/20/e5/3420e571b3d7a4a348d8fad91e3bfda4.png" alt="Jquery">');
        
    };
    // makes portfolio page
    let portfolioPage = function(){
        // navMakerA();
        $("#port-content").append('<hr id="port-box"></section>');
        $("#port-box").append('<h2 class="header-text">Welcome to my portfolio.</h2>');
        $("#port-box").append('<hr id="title-block"></section>');
        $("#port-box").append('<section class="flex-container"></section>');
        $(".flex-container").append('<section class="flex-first-imgs"></section>');

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-3"></section>');
        $("#gif-3").append('<section class="banner" id="banner-3"></section>');
        $("#banner-3").append('<p class="portfolio-word">Lost&Hound Lost Pet Finder</p>');
        $("#gif-3").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/lost-and-hound-IMG.jpg" data-still="assets/images/gif/gif-img/lost-and-hound-IMG.jpg" data-animate="assets/images/gif/lost-and-hound.gif" data-state="still" alt="Lost & Hound pet finder.">');
        $("#gif-3").append('<section class="f-r-se" id="links-3"></section>');
        $("#links-3").append('<a class="port-btn" href="https://github.com/Zevubu/pet-finder">Github</a>')
        $("#links-3").append('<a class="port-btn" href="http://cryptic-gorge-70462.herokuapp.com/">Visit Site</a>')

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-2"></section>');
        $("#gif-2").append('<section class="banner" id="banner-2"></section>');
        $("#banner-2").append('<p class="portfolio-word">Genesis P-Orridge Trivia</p>');
        $("#gif-2").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/genPImg.jpg" data-still="assets/images/gif/gif-img/genPImg.jpg" data-animate="assets/images/gif/geniP.gif" data-state="still" alt="Genisis P Trivia Game">');
        $("#gif-2").append('<section class="f-r-se" id="links-2"></section>');
        $("#links-2").append('<a class="port-btn" href="https://github.com/Zevubu/TriviaGame">Github</a>')
        $("#links-2").append('<a class="port-btn" href="https://zevubu.github.io/TriviaGame/">Visit Site</a>')

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-1"></section>');
        $("#gif-1").append('<section class="banner" id="banner-1"></section>');
        $("#banner-1").append('<p class="portfolio-word">John Waters themed HangMan</p>');
        $("#gif-1").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/johnIMG.jpg" data-still="assets/images/gif/gif-img/johnIMG.jpg" data-animate="assets/images/gif/johnwater2.gif" data-state="still" alt="John Waters Hangman Game">');
        $("#gif-1").append('<section class="f-r-se" id="links-1"></section>');
        $("#links-1").append('<a class="port-btn" href="https://github.com/Zevubu/Word-Guess-Game">Github</a>')
        $("#links-1").append('<a class="port-btn" href="https://zevubu.github.io/Word-Guess-Game/">Visit Site</a>')

        

        // $(".flex-first-imgs").append('<section class="pick-word" id="gif-3"></section>');
        // $("#gif-3").append('<section class="banner" id="banner-3"></section>');
        // $("#banner-3").append('<p class="portfolio-word">Steven Universe Battle Game</p>');
        // $("#gif-3").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/stevenIMG.jpg" data-still="assets/images/gif/gif-img/stevenIMG.jpg" data-animate="assets/images/gif/steven.gif" data-state="still" alt="Steven Universe R.P.G game">');
        // $("#gif-3").append('<section class="f-r-se" id="links-3"></section>');
        // $("#links-3").append('<a class="port-btn" href="https://github.com/Zevubu/unit-4-game">Github</a>')
        // $("#links-3").append('<a class="port-btn" href="https://zevubu.github.io/unit-4-game/">Visit Site</a>')
        
        
        $(".flex-container").append('<section class ="flex-aside-imgs"></section>');
        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-4"></section>');
        $("#gif-4").append('<section class="banner" id="banner-4"></section>');
        $("#banner-4").append('<p class="portfolio-word">Giftastic Gif Searcher</p>');
        $("#gif-4").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/gifamizerIMG.jpg" data-still="assets/images/gif/gif-img/gifamizerIMG.jpg" data-animate="assets/images/gif/gifamizer.gif" data-state="still" alt="Giftastic">');
        $("#gif-4").append('<section class="f-r-se" id="links-4"></section>');
        $("#links-4").append('<a class="port-btn" href="https://github.com/Zevubu/GifTastic">Github</a>')
        $("#links-4").append('<a class="port-btn" href="https://zevubu.github.io/GifTastic/">Visit Site</a>')

        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-5"></section>');
        $("#gif-5").append('<section class="banner" id="banner-5"></section>');
        $("#banner-5").append('<p class="portfolio-word">Train scheduler</p>');
        $("#gif-5").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/trainIMG.jpg" data-still="assets/images/gif/gif-img/trainIMG.jpg" data-animate="assets/images/gif/train.gif" data-state="still" alt="Train Scheduler">');
        $("#gif-5").append('<section class="f-r-se" id="links-5"></section>');
        $("#links-5").append('<a class="port-btn" href="https://github.com/Zevubu/train-scheduler">Github</a>')
        $("#links-5").append('<a class="port-btn" href="https://zevubu.github.io/train-scheduler/">Visit Site</a>')

        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-6"></section>');
        $("#gif-6").append('<section class="banner" id="banner-6"></section>');
        $("#banner-6").append('<p class="portfolio-word">LIRI Personal Assistant</p>');
        $("#gif-6").append('<img class="portfolio-pick gif" src="assets/images/gif/gif-img/LiriIMG.jpg" data-still="assets/images/gif/gif-img/LiriIMG.jpg" data-animate="assets/images/gif/LIRI.gif" data-state="still" alt="LIRI Bot Personal Assitent">');
        $("#gif-6").append('<section class="f-r-se" id="links-6"></section>');
        $("#links-6").append('<a class="port-btn" href="https://github.com/Zevubu/LIRIBot">Github</a>')
        $("#links-6").append('<a class="port-btn" href="">No Site</a>')
        // $(".flex-aside-imgs").append('<section class="filler"></section>');
        
        $(".gif").hover( function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
        


    };
    // makes contacts page

    let contactPage = function(){
        // navMakerA();
        $("#contact-content").append('<section id="contact-box"></section>');
        $("#contact-box").append('<h2 id="style-text">Contact Me</h2>');
        $("#contact-box").append('<form id="contact-form" action="assets/php/mail.php/" method="POST"></form>');
        $("#contact-form").append('<section id="name-info"></section>');
        $("#name-info").append('<label id="style-text" for="name">Name:</label>');
        $("#name-info").append('<input id="name" type="text" id="name" name="name">');
        $("#contact-form").append('<section id="email-area"></section>');
        $("#email-area").append('<label id="style-text" for="mail">E-mail:</label>');
        $("#email-area").append('<input type="email" id="mail" name="mail">');
        $("#contact-form").append('<section id="msg-area"></section>');
        $("#msg-area").append('<lable id="style-text" for="msg">Message:</lable>');
        $("#msg-area").append(' <textarea id="msg" name="message"></textarea>');
        $("#contact-form").append('<section id="send-btn-area"></section>');
        $("#send-btn-area").append('<input id="msg-btn" type="submit" name="submit value="Send">');
    };

    let findMePage = function(){
        // navMakerA();
        $("#find-me-content").append('<section id="find-me-box"></section>');
        $("#find-me-box").append('<h2 id="style-text">Find Me Online</h2>');
        $("#find-me-box").append('<section id="find-me-area" class="icon-area"></section>');
        $("#find-me-area").append('<a href="https://github.com/Zevubu"><img class="icon" src="https://cdn0.iconfinder.com/data/icons/social-circle/595/github-512.png" alt="GitHub"></a>');
        $("#find-me-area").append('<a href="https://www.linkedin.com/in/zev-hoffman-b5770532/"><img class="icon" src="https://pndblog.typepad.com/.a/6a00e0099631d0883301bb09d01edf970d-800wi" alt="CSS3"></a>');
        $("#find-me-area").append('<a href="https://stackoverflow.com/users/11111018/zev-hoffman"><img class="icon" src="https://www.shareicon.net/data/512x512/2015/08/30/93392_stackoverflow_512x512.png" alt="Javascript"></a>');   
    };


    openingPage()
    // let navBtn = document.getElementsByClassName("nav-btn");

    // navBtn.addEventListener("click", function(){
    //     event.preventDefault();

    // $(".nav-btn").on("click", function(){
    //     console.log("click")
    //     let pageChoice = $(this).text();
    //     $("#page-content").empty();
    //     // $("#nav-below").animate({ 
    //     //     marginbottom: "+=250px",
    //     // }, 1000 );
    //     // $("#nav-above").empty();
    //     // $("#nav-below").empty();
        


    //     if (pageChoice === "Home"){
            
    //     }
    //     else if (pageChoice === "About"){
    //         aboutPage();
    //     }
    //     else if (pageChoice === "Potfolio"){
    //         portfolioPage();
    //     }
    //     else if (pageChoice === "Contact Me"){
    //         contactPage();
    //     }
    //     console.log(pageChoice);
    // });

    

};