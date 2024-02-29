// Load elements from local storage or use default values
var elements = [
    "Toxic Feminism - Is it good for the society?",
    "The importance of laughter in everyday life",
    "The impact of social media on society",
    "Exploring the concept of artificial intelligence",
    "The benefits and drawbacks of remote work",
    "The role of education in shaping the future",
    "Overcoming adversity: Lessons from personal challenges",
    "The ethics of gene editing technology",
    "The future of transportation: Flying cars or sustainable alternatives?",
    "Exploring cultural diversity in a globalized world",
    "The power of storytelling in communication",
    "The significance of volunteering in community development",
    "The pros and cons of renewable energy sources",
    "The influence of music on emotions and behavior",
    "The importance of mental health awareness in schools and workplaces",
    "The role of governments in combating climate change",
    // "Resilience",
    "Harmony",
    "Discovery",
    "Justice",
    "Transformation",
    // "Serendipity",
    "Balance",
    "Reflection",
    "Progress",
    "Empowerment",
    "Wonder",
    "Courage",
    // "Connection",
    "Authenticity",
    "The power of regeneration in nature",
    "Personal growth: How to regenerate oneself after setbacks",
    "Regenerating urban spaces: Transforming cities for a sustainable future",
    "Regenerative medicine: Revolutionizing healthcare through stem cell research",
    "Cultivating hope: How communities can regenerate after disasters",
    "Regenerating relationships: Restoring trust and harmony",
    "Renewable energy: Harnessing nature's power to regenerate our planet",
    "The art of self-care: Practices to regenerate mind, body, and soul",
    "Rejuvenating creativity: Overcoming creative blocks to regenerate inspiration",
    "From waste to wealth: Strategies for regenerating resources and reducing environmental impact",
    "Nature's Renewal",
    "Personal Growth",
    // "Urban Revitalization",
    // "Stem Cell Therapy",
    // "Community Resilience",
    "Sustainable Cities",
    "Healing Relationships",
    "Renewable Energy",
    "Mindful Restoration",
    // "Creative Rejuvenation",
    // "Pneumonoultramicroscopicsilicovolcanoconiosis (45 letters) - a lung disease caused by inhaling very fine ash and sand dust.",
    // "Hippopotomonstrosesquippedaliophobia (36 letters) - the fear of long words.",
    // "Supercalifragilisticexpialidocious (34 letters) - famously coined in the movie 'Mary Poppins,' it's a word used to express approval or to describe something fantastic.",
    // "Antidisestablishmentarianism (28 letters) - a political position opposed to the withdrawal of state support from an established church.",
    // "Floccinaucinihilipilification (29 letters) - the act of estimating something as worthless.",
    // "Honorificabilitudinitatibus (27 letters) - a state of being able to achieve honors.",
    // "Pseudopseudohypoparathyroidism (30 letters) - a genetic disorder that mimics the symptoms of pseudohypoparathyroidism.",
    "Human Connection",
    "Globalization Effects",
    "Technological Advancements",
    // "Workplace Dynamics",
    "Future Trends",
    // "Ethical Considerations",
    "Emotional Well-being",
    // "Environmental Sustainability",
    "Social Influencers",
    // "Community Resilience",
    "Human Brain Exploration",
    "Privacy Rights",
    "Innovation Strategies",
    "Psychological Health",
    // "Workforce Transformation",
    // "Sustainable Living",
    // "Social Justice",
    "Healthcare Evolution",
    "Time Management",
    "Effective Communication",
    "Economic Equality",
    // "Empathy and Compassion",
    // "Cultural Evolution",
    // "Conflict Resolution",
    "Lifelong Learning",
    "Capitalism is improving living conditions of human society or making humans slaves to capitalistic system?",
    "What are the social behaviours with remarkable new patterns amongst genZ when compared to genX?",
    "Anime",
    "Avengers",
    "Elon",
    "AI takes over the world",
    "The Weeknd (Artist)",
    "a typical weekend",
    "Apple",
    "Netflix",
    "Kshitij sir",
    // "Wrong answers only challenge",
    // "Talk about your 1st ex",
    "talk about your 1st failure",
    "1 hobby you have but people don't know",
    // "if u want to clear memories of a person from sst who it is gng to be",
    // "if u r opposite gender of urs then whom u gonna try",
    "worst heartbreak ever",
    "what would u do when u get a month full of holidays",
    "what would u do with ur first salary",
    "how u deal with depression",
    "Academic Scores are not a good measure of intelligence",
    "Do We Need More Entrepreneurs or Managers?",
    // "Ignorance is bliss",
    "Is Work-Life Balance a Myth?",
    "Why is junk food bad?",
    "Are outdoor games good?",
    "Why is social media important?",
    // "All that glitters is not gold",
    "Hard Work Vs Smart Work",
    "Are Scores a good measure of Intelligence?",
    "The significance of a person’s handwriting",
    "Why books are important",
    "Great things about the ocean",
    // "How to save money",
    "Animals are stress relievers",
    "Online communication and real-life friendship",
    "Creativity cannot be taught",
    "Why is a failure the greatest teacher?",
    // "Sex Education",
    // "How Digital Banking Helped India in its GDP"
];


// Function to save elements array to local storage
function saveElementsToLocalStorage() {
    localStorage.setItem('elements', JSON.stringify(elements));
}

// Function to select a random element from the list, remove it, and display it
function selectRandomElement() {
    if (elements.length === 0) {
        document.getElementById("output").innerHTML = "<p>No elements left!</p>";
        return;
    }

    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements.splice(randomIndex, 1)[0];
    saveElementsToLocalStorage(); // Save updated elements array to local storage
    document.getElementById("output").innerHTML = "<p><span id=\"selected_element\">Selected Element: </span>" + randomElement + "</p>";
}

// Load elements from local storage when the page is loaded
window.onload = function () {
    if (localStorage.getItem('elements')) {
        elements = JSON.parse(localStorage.getItem('elements'));
    }
};