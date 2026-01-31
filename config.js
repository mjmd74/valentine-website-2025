// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "to my sweet denny",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "SURPRISE ! OPEN ME",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['₊˚⊹', 'ᰔ ', 'ꨄ︎'],  // Heart emojis
        bears: ['♡' , '𖤐 ' , 'ℓo͟v͟ꫀ ყoυ']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "hi bby, let's check first.. do u like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "DUH! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine for February 14th, 2025? ₊˚⊹♡ ", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AS U SHOULDDD ILY MORE BBY",  // Shows when they go past 5000%
        high: " MHM THATS RIGHT!!",              // Shows when they go past 1000%
        normal: "you should love me more than that.. smh"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAYYYYYY I LOVE YOU BABY I'M SO LUCKY TO HAVE YOU",
        message: "Can't wait to celebrate our first valentine (and all the upcoming ones) with you",
        emojis: " ₊˚⊹ ᰔ ꨄ︎ ♡ 𝟏𝟏:𝟏𝟏 ִ ࣪𖤐 ℓo͟v͟ꫀ ყoυ .ᐟ "  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#A4BAC6",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#A4BAC6",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#2A0007",     // Button color (should stand out against the background)
        buttonHover: "#3A000B",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#FF5A67"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "10s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dch1di6yu/video/upload/v1769795415/Shania_Twain_-_You_re_Still_The_One_Lyrics_-_Young_Pilgrim_Music_qjkjtg.mp3", // Music streaming URL
        startText: "CLICK ON ME!",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
