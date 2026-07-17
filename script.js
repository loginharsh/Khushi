/* ==========================================
            BIRTHDAY SURPRISE - JS
        Made with ❤️ by Ashu (UX Refactored)
========================================== */

"use strict";

/* ==========================================
            DOM ELEMENTS
========================================== */
const loading = document.getElementById("loading");
const loadingProgress = document.getElementById("loadingProgress");
const loadingPercent = document.getElementById("loadingPercent");

const netflixIntro = document.getElementById("netflixIntro");
const intro = document.getElementById("intro");
const introTyping = document.getElementById("introTyping");

const bookCover = document.getElementById("bookCover");
const openBook = document.getElementById("openBook");

const storyPage = document.getElementById("storyPage");
const storyText = document.getElementById("storyText");
const nextToLetter = document.getElementById("nextToLetter");

const letterPage = document.getElementById("letterPage");
const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterContent = document.getElementById("letterContent");

const scrapbookPage = document.getElementById("scrapbookPage");
const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryDate = document.getElementById("memoryDate");
const memoryDescription = document.getElementById("memoryDescription");
const nextMemory = document.getElementById("nextMemory");
const prevMemory = document.getElementById("prevMemory");

const timelinePage = document.getElementById("timelinePage");
const timelineNext = document.getElementById("timelineNext");

const birthdayPage = document.getElementById("birthdayPage");
const blowCandles = document.getElementById("blowCandles");
const flames = document.querySelectorAll(".flame");

const giftPage = document.getElementById("giftPage");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

const nightPage = document.getElementById("nightPage");
const nightStars = document.getElementById("nightStars");
const fireflyContainer = document.getElementById("firefliesNight");

const finalMessage = document.getElementById("finalMessage");
const finalLetter = document.getElementById("finalLetter");

const secretPage = document.getElementById("secretPage");
const secretButton = document.getElementById("secretButton");
const floatingPhotos = document.getElementById("floatingPhotos");

const loveMeter = document.getElementById("loveMeter");
const meterFill = document.getElementById("meterFill");
const lovePercent = document.getElementById("lovePercent");

const backTop = document.getElementById("backTop");
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");
const cursorGlow = document.getElementById("cursorGlow");
const transitionOverlay = document.getElementById("pageTransition");

/* ==========================================
            STORY TEXT CONTENT
========================================== */
const story = `Once upon a time...

There was a boy named Harsh.

He never knew someone could completely change his life.

Then one day...

A beautiful girl entered his world.

Her name was Khushi...

But he lovingly called her...

❤️ Billi ❤️

Every smile of hers became his happiness.

Every call became his favorite moment.

Every memory became a chapter.

Today...

On your birthday...

I want to remind you that...

You are the most beautiful chapter of my life.`;

const letter = `Dear Khushi ❤️,

Happy Birthday.

Thank you for making my life brighter.

Thank you for every smile.

Every laugh.

Every little fight.

Every hug.

Every memory.

No matter where life takes us...

You will always be my favorite person.

I promise to keep making beautiful memories with you.

I love you more every single day.

Daddy loves you baccha ❤️

Forever yours,

❤️ Harsh ❤️`;

const memories = [
    {
        image: "img1.jpeg",
        title: "The Beginning ❤️",
        date: "Where everything started",
        text: "The day we first talked... I never imagined that one conversation would become my favorite chapter."
    },
    {
        image: "img2.jpeg",
        title: "First Smile 😊",
        date: "A Beautiful Memory",
        text: "Your smile became my favorite place. Every time you smiled, my whole day became brighter."
    },
    {
        image: "img3.jpeg",
        title: "Our First Date 🌸",
        date: "One of My Happiest Days",
        text: "That day will always stay in my heart. Every little moment felt magical because you were beside me."
    },
    {
        image: "img4.jpeg",
        title: "Our Crazy Moments 😂",
        date: "Laughing Together",
        text: "From silly jokes to endless laughs, every moment with you became a memory I never want to lose."
    },
    {
        image: "img5.jpeg",
        title: "My Favorite Person ❤️",
        date: "Everyday Feels Special",
        text: "You make ordinary days feel extraordinary just by being there."
    },
    {
        image: "img6.jpeg",
        title: "Beautiful Memories 📸",
        date: "Captured Forever",
        text: "Every picture reminds me that life became much more beautiful after you entered it."
    },
    {
        image: "img7.jpeg",
        title: "Happy Birthday Khushi 🎂",
        date: "18 July ❤️",
        text: "Today is your special day. Thank you for being my happiness, my peace, and my favorite person."
    }
];

const quotes = [
    "You are my sunshine ☀️",
    "You complete me ❤️",
    "Forever starts with you 💖",
    "My favorite hello ❤️",
    "My always ❤️"
];

const loveMessages = [
    "I Love You ❤️",
    "My Khushi 🩷",
    "Forever Together 💞",
    "Happy Birthday 🎂",
    "You're My Home 🏡",
    "My Favorite Person ❤️",
    "Harsh ❤️ Khushi"
];

const endingText = `My Dear Khushi ❤️

If I had one wish...

It would be to celebrate every birthday with you.

I don't know what tomorrow holds...

But I know one thing.

I will always pray for your happiness.

Thank you for being my smile.

My peace.

My favorite notification.

My best memory.

My home.

Happy Birthday Khushi ❤️

I Love You Forever.

Daddy loves you baccha ❤️

— Harsh ❤️`;

let currentMemory = 0;
let typingIntervals = [];

/* ==========================================
            TYPEWRITER HELPER
========================================== */
function typeText(element, text, speed = 35, callback = null) {
    // Clear any existing typing intervals
    typingIntervals.forEach(interval => clearInterval(interval));
    typingIntervals = [];

    element.innerHTML = "";
    let i = 0;

    const timer = setInterval(() => {
        if (i < text.length) {
            const char = text.charAt(i);
            if (char === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += char;
            }
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);

    typingIntervals.push(timer);
}

/* ==========================================
            PAGE TRANSITION FUNCTION (GSAP)
========================================== */
function showPage(page) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    page.classList.remove("hidden");
}

function transitionPage(nextPage, callback = null) {
    const onPageVisible = () => {
        showPage(nextPage);
        if (callback) callback();
        
        // Context specific page triggers
        if (nextPage === storyPage) {
            typeStory();
        } else if (nextPage === timelinePage) {
            animateTimeline();
        } else if (nextPage === birthdayPage) {
            animateBirthday();
        } else if (nextPage === nightPage) {
            generateStars();
            generateFireflies();
        } else if (nextPage === secretPage) {
            createFloatingPhotos();
        }
    };

    if (typeof gsap !== "undefined" && transitionOverlay) {
        const tl = gsap.timeline();
        
        // Disable scroll indicator for page moves
        scrollIndicatorToggle(false);

        tl.to(transitionOverlay, {
            scaleY: 1,
            transformOrigin: "bottom",
            duration: 0.6,
            ease: "power3.inOut"
        })
        .call(onPageVisible)
        .to(transitionOverlay, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.6,
            ease: "power3.inOut",
            delay: 0.15
        });
    } else {
        onPageVisible();
    }
}

function scrollIndicatorToggle(show) {
    const scrollInd = document.getElementById("scrollIndicator");
    if (scrollInd) {
        scrollInd.style.display = show ? "flex" : "none";
    }
}

/* ==========================================
            IMAGE PRELOADER & LOADING PROGRESS
========================================== */
window.addEventListener("DOMContentLoaded", () => {
    // Hide standard cursor, initialize follower styles
    if (cursorFollower) {
        cursorFollower.style.width = "32px";
        cursorFollower.style.height = "32px";
    }

    // Start preloader
    let progress = 0;
    const totalDuration = 3200; // 3.2s load simulation + assets caching
    const tick = 40;
    const increment = 100 / (totalDuration / tick);

    // Image preloading logic
    const preloadPromises = memories.map(mem => {
        return new Promise(resolve => {
            try {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = mem.image;
            } catch (e) {
                resolve();
            }
        });
    });

    const loadTimer = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadTimer);
            
            // Wait for all memory images to finish preloading, then go to next page
            Promise.all(preloadPromises).then(() => {
                setTimeout(() => {
                    transitionPage(netflixIntro, startNetflix);
                }, 400);
            });
        }

        if (loadingProgress) loadingProgress.style.width = progress + "%";
        if (loadingPercent) loadingPercent.innerHTML = Math.floor(progress) + "%";
    }, tick);

    // Set up custom cursor listener
    initCustomCursor();
});

/* ==========================================
            NETFLIX INTRO
========================================== */
function startNetflix() {
    setTimeout(() => {
        if (netflixIntro) {
            netflixIntro.classList.add("fadeOut");
        }
    }, 3800);

    setTimeout(() => {
        transitionPage(intro, startIntro);
    }, 4600);
}

/* ==========================================
            INTRO
========================================== */
function startIntro() {
    const introText = "Every love story is beautiful... But ours is my favorite. ❤️";
    typeText(introTyping, introText, 55, () => {
        setTimeout(() => {
            transitionPage(bookCover, initBookCover);
        }, 1500);
    });
}

function initBookCover() {
    // Auto tilt book using VanillaTilt if loaded
    if (typeof VanillaTilt !== "undefined") {
        const book = document.querySelector(".book3D");
        if (book) {
            VanillaTilt.init(book, {
                max: 12,
                speed: 400,
                glare: true,
                "max-glare": 0.3
            });
        }
    }
}

/* ==========================================
            OPEN STORYBOOK
========================================== */
const handleOpenBook = () => {
    transitionPage(storyPage);
};

if (openBook) {
    openBook.addEventListener("click", (e) => {
        e.stopPropagation();
        handleOpenBook();
    });
}

const bookCoverCard = document.querySelector(".cover");
if (bookCoverCard) {
    bookCoverCard.addEventListener("click", handleOpenBook);
}

function typeStory() {
    typeText(storyText, story, 35);
}

/* ==========================================
            GO TO LETTER
========================================== */
nextToLetter.addEventListener("click", () => {
    transitionPage(letterPage);
});

/* ==========================================
            LETTER INTERACTION
========================================== */
openLetterBtn.addEventListener("click", () => {
    if (envelope) {
        envelope.classList.add("open");
        setTimeout(() => {
            typeLetter();
        }, 800);
    }
});

function typeLetter() {
    typeText(letterContent, letter, 28, () => {
        // Auto scroll letter content gently as it writes
        const letterPaper = document.querySelector(".letter-paper");
        if (letterPaper) {
            const scrollInterval = setInterval(() => {
                if (letterPaper.scrollTop < letterPaper.scrollHeight - letterPaper.clientHeight) {
                    letterPaper.scrollTop += 1.5;
                } else {
                    clearInterval(scrollInterval);
                }
            }, 50);
        }
    });
}

// Secret Double-Click Envelope to Scrapbook Transition
setTimeout(() => {
    if (openLetterBtn) {
        openLetterBtn.addEventListener("dblclick", () => {
            openScrapbook();
        });
    }
}, 500);

function openScrapbook() {
    currentMemory = 0;
    loadMemory(currentMemory);
    transitionPage(scrapbookPage);
}

/* ==========================================
            SCRAPBOOK MEMORIES
========================================== */
function loadMemory(index) {
    if (typeof gsap !== "undefined") {
        // Advanced slide-and-fade for premium memory transitions
        gsap.timeline()
            .to([memoryImage, memoryTitle, memoryDate, memoryDescription], {
                opacity: 0,
                y: -15,
                duration: 0.25,
                ease: "power2.in"
            })
            .call(() => {
                memoryImage.src = memories[index].image;
                memoryTitle.innerHTML = memories[index].title;
                memoryDate.innerHTML = memories[index].date;
                memoryDescription.innerHTML = memories[index].text;
            })
            .fromTo([memoryImage, memoryTitle, memoryDate, memoryDescription],
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
    } else {
        // Fallback
        memoryImage.src = memories[index].image;
        memoryTitle.innerHTML = memories[index].title;
        memoryDate.innerHTML = memories[index].date;
        memoryDescription.innerHTML = memories[index].text;
    }
}

nextMemory.addEventListener("click", () => {
    currentMemory++;
    if (currentMemory >= memories.length) {
        transitionPage(timelinePage);
        return;
    }
    loadMemory(currentMemory);
});

prevMemory.addEventListener("click", () => {
    currentMemory--;
    if (currentMemory < 0) {
        currentMemory = 0;
    }
    loadMemory(currentMemory);
});

/* ==========================================
            TIMELINE
========================================== */
function animateTimeline() {
    if (typeof gsap !== "undefined") {
        gsap.fromTo(".timeline-item", 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)" }
        );
    }
}

timelineNext.addEventListener("click", () => {
    transitionPage(birthdayPage);
});

/* ==========================================
            BIRTHDAY PAGE (CAKE)
========================================== */
function animateBirthday() {
    if (typeof gsap !== "undefined") {
        gsap.from(".cakeContainer", { scale: 0.7, opacity: 0, duration: 1, ease: "back.out(1.2)" });
    }
}

blowCandles.addEventListener("click", () => {
    if (typeof gsap !== "undefined") {
        gsap.to(flames, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut"
        });
    } else {
        flames.forEach(flame => {
            flame.style.opacity = "0";
            flame.style.transform = "scale(0)";
        });
    }

    createConfetti();

    setTimeout(() => {
        transitionPage(giftPage);
    }, 3200);
});

/* ==========================================
            CONFETTI SYSTEM
========================================== */
function createConfetti() {
    const colors = ["#ff1493", "#ff69b4", "#ffc0cb", "#ffffff", "#ffd700", "#ff4d6d"];
    const container = document.getElementById("confettiContainer");
    if (!container) return;

    for (let i = 0; i < 180; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (6 + Math.random() * 10) + "px";
        confetti.style.height = (10 + Math.random() * 15) + "px";
        confetti.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/* ==========================================
            GIFT BOX
========================================== */
giftBox.addEventListener("click", () => {
    giftBox.classList.add("open");
    if (giftMessage) {
        giftMessage.innerHTML = "❤️ I Have One More Surprise ❤️";
    }
    createFireworks();

    setTimeout(() => {
        transitionPage(nightPage);
    }, 3200);
});

/* ==========================================
            FIREWORKS
========================================== */
function createFireworks() {
    const colors = ["#ff0055", "#00ffcc", "#ffcc00", "#ff33ff", "#33ff33", "#0099ff"];
    for (let i = 0; i < 35; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 80 + "vh";
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}

/* ==========================================
            NIGHT SKY (STARS & FIREFLIES)
========================================== */
function generateStars() {
    if (!nightStars) return;
    nightStars.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = (1.5 + Math.random() * 2.5) + "s";
        fragment.appendChild(star);
    }
    nightStars.appendChild(fragment);
}

function generateFireflies() {
    if (!fireflyContainer) return;
    fireflyContainer.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 25; i++) {
        const fly = document.createElement("div");
        fly.className = "firefly";
        fly.style.left = Math.random() * 100 + "vw";
        fly.style.top = Math.random() * 100 + "vh";
        fly.style.animationDelay = Math.random() * 4 + "s";
        fly.style.animationDuration = (5 + Math.random() * 4) + "s";
        fragment.appendChild(fly);
    }
    fireflyContainer.appendChild(fragment);
}

// Night page click trigger
setTimeout(() => {
    if (nightPage) {
        nightPage.addEventListener("click", () => {
            transitionPage(finalMessage, showFinalLetter);
        });
    }
}, 500);

/* ==========================================
            FINAL LETTER
========================================== */
function showFinalLetter() {
    typeText(finalLetter, endingText, 35, () => {
        setTimeout(() => {
            transitionPage(secretPage);
        }, 4000);
    });
}

/* ==========================================
            SECRET PAGE & FLOATING PHOTOS
========================================== */
function createFloatingPhotos() {
    if (!floatingPhotos) return;
    floatingPhotos.innerHTML = "";

    for (let i = 1; i <= 7; i++) {
        const img = document.createElement("img");
        img.src = `img${i}.jpeg`;
        img.className = "floatPhoto";
        img.style.left = (10 + Math.random() * 70) + "vw";
        img.style.top = (15 + Math.random() * 55) + "vh";
        img.style.animationDelay = Math.random() * 4 + "s";
        img.style.transform = `rotate(${Math.random() * 24 - 12}deg)`;
        
        floatingPhotos.appendChild(img);
    }
}

// Grand Finale Trigger
secretButton.addEventListener("click", () => {
    secretButton.innerHTML = "❤️ I Love You Billi ❤️";
    grandFinale();
});

function grandFinale() {
    createFireworks();
    releaseBalloons();
    
    // Fallback fireflies/stars
    generateStars();
    generateFireflies();

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 150);
    }

    // Hide secret button
    if (secretButton) {
        if (typeof gsap !== "undefined") {
            gsap.to(secretButton, { opacity: 0, scale: 0.8, duration: 0.5, pointerEvents: "none" });
        } else {
            secretButton.style.display = "none";
        }
    }

    // Fade in and play the surprise video
    const videoCont = document.getElementById("videoContainer");
    const video = document.getElementById("surpriseVideo");
    if (videoCont) {
        videoCont.classList.remove("hidden");
        setTimeout(() => {
            videoCont.classList.add("show");
        }, 100);
    }
    if (video) {
        video.play().catch(err => {
            console.log("Autoplay blocked, user can click play control", err);
        });
    }

    // Add cinematic ending text banner positioned at the top (top: 15%)
    const exists = document.getElementById("finale-banner");
    if (!exists) {
        const ending = document.createElement("div");
        ending.id = "finale-banner";
        ending.innerHTML = `
            <h1 style="
                position: fixed;
                top: 15%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: clamp(1.8rem, 4.5vw, 3.2rem);
                text-align: center;
                z-index: 999999;
                text-shadow: 0 0 25px var(--primary), 0 0 45px var(--secondary);
                font-family: var(--font-heading);
                pointer-events: none;
                width: 90vw;
            ">
                Happy Birthday ❤️<br>
                My Beautiful Khushi ❤️
            </h1>
        `;
        document.body.appendChild(ending);
    }
}

/* ==========================================
            BALLOONS SYSTEM
========================================== */
function releaseBalloons() {
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement("div");
        balloon.innerHTML = "🎈";
        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.bottom = "-100px";
        balloon.style.fontSize = (30 + Math.random() * 30) + "px";
        balloon.style.zIndex = "99999";
        balloon.style.pointerEvents = "none";
        
        balloon.animate([
            { transform: "translateY(0) rotate(0deg)" },
            { transform: `translateY(-120vh) rotate(${Math.random() * 40 - 20}deg)` }
        ], {
            duration: 6000 + Math.random() * 3500,
            easing: "ease-out"
        });

        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 9500);
    }
}

/* ==========================================
            FLOATING HEARTS & PETALS LOOPS
========================================== */
const heartContainer = document.getElementById("heart-container");
function createHeart() {
    if (!heartContainer) return;
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animationDuration = (4.5 + Math.random() * 4.5) + "s";
    
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

const petalsContainer = document.getElementById("petals");
function createPetal() {
    if (!petalsContainer) return;
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (14 + Math.random() * 20) + "px";
    petal.style.animationDuration = (5 + Math.random() * 4) + "s";
    
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 9000);
}

const butterfliesContainer = document.getElementById("butterflies");
function createButterfly() {
    if (!butterfliesContainer) return;
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.innerHTML = "🦋";
    butterfly.style.top = (10 + Math.random() * 70) + "vh";
    butterfly.style.animationDuration = (8 + Math.random() * 8) + "s";
    
    butterfliesContainer.appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 16000);
}

const sparkleContainer = document.getElementById("sparkles");
function createSparkle() {
    if (!sparkleContainer) return;
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    
    const size = (3 + Math.random() * 4) + "px";
    sparkle.style.width = size;
    sparkle.style.height = size;
    sparkle.style.opacity = Math.random();

    sparkle.animate([
        { transform: "scale(0)", opacity: 0 },
        { transform: "scale(1.4)", opacity: 1 },
        { transform: "scale(0)", opacity: 0 }
    ], {
        duration: 2000,
        easing: "ease-in-out"
    });

    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2100);
}

// Particle Loops (Start only on load)
setInterval(createHeart, 380);
setInterval(createPetal, 680);
setInterval(createButterfly, 4500);
setInterval(createSparkle, 180);

/* ==========================================
            FLOATING LOVE MESSAGES
========================================== */
function floatingMessage() {
    const msg = document.createElement("div");
    msg.innerHTML = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    msg.style.position = "fixed";
    msg.style.left = (5 + Math.random() * 80) + "vw";
    msg.style.bottom = "0";
    msg.style.color = "white";
    msg.style.fontWeight = "bold";
    msg.style.fontSize = "22px";
    msg.style.textShadow = "0 0 10px var(--secondary), 0 0 20px var(--primary)";
    msg.style.pointerEvents = "none";
    msg.style.zIndex = "9999";

    msg.animate([
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-110vh)", opacity: 0 }
    ], {
        duration: 6500,
        easing: "linear"
    });

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 6500);
}

setInterval(floatingMessage, 5500);

/* ==========================================
            MOBILE TOUCH HEARTS
========================================== */
document.addEventListener("touchstart", (e) => {
    const heart = document.createElement("div");
    heart.className = "cursor-heart";
    heart.innerHTML = "❤️";
    heart.style.left = e.touches[0].clientX + "px";
    heart.style.top = e.touches[0].clientY + "px";
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});

/* ==========================================
            BACK TO TOP BUTTON
========================================== */
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        if (backTop) backTop.style.display = "flex";
    } else {
        if (backTop) backTop.style.display = "none";
    }
});

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ==========================================
            HUD - LOVE METER
========================================== */
function increaseLoveMeter() {
    let value = 0;
    const timer = setInterval(() => {
        value++;
        if (meterFill) meterFill.style.width = value + "%";
        if (lovePercent) lovePercent.innerHTML = value + "%";

        if (value >= 100) {
            clearInterval(timer);
            if (lovePercent) lovePercent.innerHTML = "∞ ❤️";
        }
    }, 80);
}

// Single trigger initialization for love meter
increaseLoveMeter();

/* ==========================================
            CUSTOM CURSOR LOOP & HOVER EFFECTS
========================================== */
let mouse = { x: 0, y: 0 };
let dotPos = { x: 0, y: 0 };
let followPos = { x: 0, y: 0 };

function initCustomCursor() {
    document.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Hover scales
    const hoverElements = "button, a, #giftBox, .envelope, #prevMemory, #nextMemory, img";
    
    // Observe DOM for added elements to apply hover states
    const applyHovers = () => {
        document.querySelectorAll(hoverElements).forEach(el => {
            // Remove first to prevent double bindings
            el.removeEventListener("mouseenter", onHoverEnter);
            el.removeEventListener("mouseleave", onHoverLeave);
            
            el.addEventListener("mouseenter", onHoverEnter);
            el.addEventListener("mouseleave", onHoverLeave);
        });
    };

    function onHoverEnter() {
        if (cursorFollower) {
            cursorFollower.style.width = "48px";
            cursorFollower.style.height = "48px";
            cursorFollower.style.borderColor = "var(--secondary)";
            cursorFollower.style.backgroundColor = "rgba(255, 77, 109, 0.1)";
        }
        if (cursor) {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
            cursor.style.backgroundColor = "var(--secondary)";
        }
    }

    function onHoverLeave() {
        if (cursorFollower) {
            cursorFollower.style.width = "32px";
            cursorFollower.style.height = "32px";
            cursorFollower.style.borderColor = "var(--primary)";
            cursorFollower.style.backgroundColor = "transparent";
        }
        if (cursor) {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.backgroundColor = "var(--primary)";
        }
    }

    // Direct cursor heartbeat effect on move
    document.addEventListener("mousemove", (e) => {
        if (Math.random() > 0.90) {
            const heart = document.createElement("div");
            heart.className = "cursor-heart";
            heart.innerHTML = "❤️";
            heart.style.left = e.clientX + "px";
            heart.style.top = e.clientY + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }
    });

    // Run animation frames
    function render() {
        // Interpolate main dot position
        dotPos.x += (mouse.x - dotPos.x) * 0.25;
        dotPos.y += (mouse.y - dotPos.y) * 0.25;

        // Interpolate follower circle position (more lag)
        followPos.x += (mouse.x - followPos.x) * 0.12;
        followPos.y += (mouse.y - followPos.y) * 0.12;

        if (cursor) {
            cursor.style.left = dotPos.x + "px";
            cursor.style.top = dotPos.y + "px";
        }

        if (cursorFollower) {
            cursorFollower.style.left = followPos.x + "px";
            cursorFollower.style.top = followPos.y + "px";
        }

        if (cursorGlow) {
            cursorGlow.style.left = mouse.x + "px";
            cursorGlow.style.top = mouse.y + "px";
        }

        requestAnimationFrame(render);
    }
    
    // Apply hovers & watch changes
    applyHovers();
    setInterval(applyHovers, 2000); // Periodically check for dynamic elements
    
    requestAnimationFrame(render);
}