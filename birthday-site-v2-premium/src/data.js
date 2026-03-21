// Your Birthday Date (Format: yyyy-mm-ddTHH:MM:SS)
export const BIRTHDAY_DATE = "2025-07-18T00:00:00";

// Add recipient's name here.
export const NAME = "Madam Jii"


// Special Messages Screen
// You can edit each card from here.
// - "title" is optional, if you don’t want it, just remove it.
// - "showIcon" is true to show icon, false to hide it.
// - You can change the "color" and "message" as you like.
export const messages = [
    {
        id: 1,
        color: "from-pink-500 to-rose-500",
        title: "With Love",
        message: "You bring so much joy and happiness to everyone around you! Your smile lights up every room.",
        showIcon: true,
    },
    {
        id: 2,
        color: "from-yellow-500 to-orange-500",
        title: "Dream Big",
        message: "May all your dreams come true and your year be filled with magic and wonder! ✨",
        showIcon: true,
    },
    {
        id: 3,
        color: "from-purple-500 to-indigo-500",
        title: "New Adventures",
        message: "You're absolutely wonderful and deserve all the happiness in the world! 🌟",
        showIcon: true,
    },
    {
        id: 4,
        color: "from-green-500 to-teal-500",
        message: "You're absolutely wonderful and deserve all the happiness in the world! 🌟",
        title: "You're Amazing",
        showIcon: true,
    },
];


// Photo Gallery Screen
// Heading text for the Photo Gallery section (displayed at the top)
export const photoScreenHeading = "Moments With You"

// Subheading text for the Photo Gallery section (optional - you can remove or leave it blank if not needed)
export const photoScreenSubHeading = "Beautiful moments with Madam Jii"

// List of photo objects to display in the gallery
// - Add more photos by copying the same line and changing the id and src
// - Make sure each id is unique and the src points to a valid image path
// Make sure all image files are placed in the `/public/images/` folder
export const photos = [
    { id: 1, src: "/images/1.jpeg" },
    { id: 2, src: "/images/2.jpeg" },
    { id: 3, src: "/images/3.jpeg" },
    { id: 4, src: "/images/4.jpeg" },
]


// Letter Screen
// Main heading for the letter screen
export const letterScreenHeading = "A Special Letter"

// Optional subheading for the letter screen
// If you don't want any subheading, just leave it blank like this: ""
export const letterScreenSubHeading = "Just for you, on your special day 💌"

// Actual letter content to display on the screen
export const letterText = `My Dearest Madam Jii,

On this very special day, I want you to know how incredibly grateful I am to have you in my life. Your birthday isn't just a celebration of another year - it's a celebration of all the joy, laughter, and beautiful memories you bring to this world.

You have this amazing ability to light up any room you enter, to make people smile even on their darkest days, and to spread kindness wherever you go. Your heart is pure gold, and your spirit is absolutely infectious.

Thank you for being the wonderful, amazing, absolutely fantastic person that you are. The world is so much brighter because you're in it.

Happy Birthday, beautiful soul! 🎂✨

With all love and warmest wishes,
Forever Yours 💕`

// Background Music file path
// Place your .mp3 file inside the "public/audio" folder and give the path like below.
export const backgroundMusic = "/audio/bg.mp3"


