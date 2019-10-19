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
        $("#open-name-box").append(`<p id="open-fsd">Full Stack Developer</h1>`)
        homePage()
    };
    // makes about page
    let aboutPage = function(){
         // 
        $("#about-content").append('<section id="about-box"></section>');
        $("#about-box").append('<h2>About me</h2>');
        $("#about-box").append('<hr id="title-block">');
        $("#about-box").append('<section class="flex-word"></section>');
        $(".flex-word").append('<section id="shark-box"></section>');
        $("#shark-box").append('<img class="portfolio-pick" src="assets/images/aTidBitBroody (4).jpg" alt="Profile pick">');
        $(".flex-word").append(` <p id="p-side">I’ve always had a tenacity for taking things apart. As a child I would do so without any real plan for how to put it all back together again. Items of all kinds, but more often than not clothing, and electronics. Thing like the cassette player I had as a kid (The speakers where frankly to small so I pulled some bigger ones out of an old broken boombox my father had, and haphazardly attempted to fuze the two together), the three piece suit my aunt got me for someone's wedding. ( It didn’t take me long to turn it into a skirt and matching trench coat), or the locking mechanism on my father briefcase.(there was no plan there I just wanted to see how it worked.) My father paid the price as his latch remained firmly open from that point forward.<br><br> The same goes for my first computer windows 95. In a sense, this was the beginning of my love for technology. I’d spend hours just messing with it making my alerts say something funny, changing it’s strange computer voice, making it say curse words, or see how it handles gibberish. Finally taking it apart and painting box strange colors. <br><br> In my life I have had many careers. At age 16 I costarted a small fill studio we made promotional videos for local businesses. Then later I started my own custom clothing company which ran full steam for about 6 years, and still exists to this day on a smaller scale. I was on the board of directors for the 501-c7 Nonprofit MIssion Control for 8 years, and I have been a hair stylist, specializing in creative color for 13 years. 6 of which have been spent and the multi award winning salon GlamaRama. Through this I have an extensive history of working in groups, and on teams. Both in leadership roles, and in hands on positions.<br><br> Many people assume that my passion is presentation, but this is merely a side effect of my actual passion. Which is simply to learn how things work. A suet is only as good as it’s stitching. <br><br>   My interests in tech are expensive. I am extremely excited to be joining this industry.</p>`);
        // $("#about-box").append('<article id="p-below"></article>');
        // $("#p-below").append('<p>  The same goes for my first computer windows 95. In a sense, this was the beginning of my love for technology. I’d spend hours just messing with it making my alerts say something funny, changing it’s strange computer voice, making it say curse words, or see how it handles gibberish. Finally taking it apart and painting box strange colors. <br><br> In my life I have had many careers. At age 16 I costarted a small fill studio we made promotional videos for local businesses. Then later I started my own custom clothing company which ran full steam for about 6 years, and still exists to this day on a smaller scale. I was on the board of directors for the 501-c7 Nonprofit MIssion Control for 8 years, and I have been a hair stylist, specializing in creative color for 13 years. 6 of which have been spent and the multi award winning salon GlamaRama. Through this I have an extensive history of working in groups, and on teams. Both in leadership roles, and in hands on positions.<br><br> Many people assume that my passion is presentation, but this is merely a side effect of my actual passion. Which is simply to learn how things work. A suet is only as good as it’s stitching. <br><br>   My interests in tech are expensive. I am extremely excited to be joining this industry.</p>');
    };
    // makes portfolio page
    let portfolioPage = function(){
        // navMakerA();
        $("#port-content").append('<hr id="port-box"></section>');
        $("#port-box").append('<h2>Welcome to my portfolio.</h2>');
        $("#port-box").append('<hr id="title-block"></section>');
        $("#port-box").append('<section class="flex-container"></section>');
        $(".flex-container").append('<section class="flex-first-imgs"></section>');

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-1"></section>');
        $("#gif-1").append('<section class="banner" id="banner-1"></section>');
        $("#banner-1").append('<p class="portfolio-word">John Waters themed HangMan</p>');
        $("#gif-1").append('<img class="portfolio-pick" src="assets/images/gif/johnwater2.gif" alt="hangman">');
        $("#gif-1").append('<section class="f-r-se" id="links-1"></section>');
        $("#links-1").append('<a href="https://github.com/Zevubu/Word-Guess-Game">Github</a>')
        $("#links-1").append('<a href="">Visit Site</a>')

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-2"></section>');
        $("#gif-2").append('<section class="banner" id="banner-2"></section>');
        $("#banner-2").append('<p class="portfolio-word">Genesis P-Orridge Trivia</p>');
        $("#gif-2").append('<img class="portfolio-pick" src="assets/images/gif/geniP.gif" alt="Trivia Game">');
        $("#gif-2").append('<section class="f-r-se" id="links-2"></section>');
        $("#links-2").append('<a href="https://github.com/Zevubu/TriviaGame">Github</a>')
        $("#links-2").append('<a href="">Visit Site</a>')

        $(".flex-first-imgs").append('<section class="pick-word" id="gif-3"></section>');
        $("#gif-3").append('<section class="banner" id="banner-3"></section>');
        $("#banner-3").append('<p class="portfolio-word">Steven Universe Battle Game</p>');
        $("#gif-3").append('<img class="portfolio-pick" src="assets/images/gif/steven.gif" alt="RPG Game">');
        $("#gif-3").append('<section class="f-r-se" id="links-3"></section>');
        $("#links-3").append('<a href="https://github.com/Zevubu/unit-4-game">Github</a>')
        $("#links-3").append('<a href="">Visit Site</a>')
        
        
        $(".flex-container").append('<section class ="flex-aside-imgs"></section>');
        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-4"></section>');
        $("#gif-4").append('<section class="banner" id="banner-4"></section>');
        $("#banner-4").append('<p class="portfolio-word">Giftastic Gif Searcher</p>');
        $("#gif-4").append('<img class="portfolio-pick" src="assets/images/gif/gifamizer.gif" alt="Giftastic">');
        $("#gif-4").append('<section class="f-r-se" id="links-4"></section>');
        $("#links-4").append('<a href="https://github.com/Zevubu/GifTastic">Github</a>')
        $("#links-4").append('<a href="">Visit Site</a>')

        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-5"></section>');
        $("#gif-5").append('<section class="banner" id="banner-5"></section>');
        $("#banner-5").append('<p class="portfolio-word">Train scheduler</p>');
        $("#gif-5").append('<img class="portfolio-pick" src="assets/images/gif/train.gif" alt="Train Scheduler">');
        $("#gif-5").append('<section class="f-r-se" id="links-5"></section>');
        $("#links-5").append('<a href="https://github.com/Zevubu/train-scheduler">Github</a>')
        $("#links-5").append('<a href="">Visit Site</a>')

        $(".flex-aside-imgs").append('<section class="pick-word" id="gif-6"></section>');
        $("#gif-6").append('<section class="banner" id="banner-6"></section>');
        $("#banner-6").append('<p class="portfolio-word">LIRI Personal Assistant</p>');
        $("#gif-6").append('<img class="portfolio-pick" src="assets/images/gif/LIRI.gif" alt="LIRI">');
        $("#gif-6").append('<section class="f-r-se" id="links-6"></section>');
        $("#links-6").append('<a href="https://github.com/Zevubu/LIRIBot">Github</a>')
        $("#links-6").append('<a href="">Visit Site</a>')
        // $(".flex-aside-imgs").append('<section class="filler"></section>');
        

    };
    // makes contacts page
    let contactPage = function(){
        // navMakerA();
        $("#contact-content").append('<section id="contact-box"></section>');
        $("#contact-box").append('<h2 id="style-text">Contact Me</h2>');
        $("#contact-box").append('<form id="contact-form" action="/my-handling-form-page" method="post"></form>');
        $("#contact-form").append('<section id="name-info"></section>');
        $("#name-info").append('<label for="name">Name:</label>');
        $("#name-info").append('<input id="name" type="text" id="name" name="user_name">');
        $("#contact-form").append('<section id="email-area"></section>');
        $("#email-area").append('<label for="mail">E-mail:</label>');
        $("#email-area").append('<input type="email" id="mail" name="user_mail">');
        $("#contact-form").append('<section id="msg-area"></section>');
        $("#msg-area").append('<lable for="msg">Message:</lable>');
        $("#msg-area").append(' <textarea id="msg" name="user_message"></textarea>');
        $("#contact-form").append('<section id="send-btn-area"></section>');
        $("#send-btn-area").append('<p id="msg-btn" type="submit">Send</p>');
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