const fs = require('fs');
const path = require('path');

const techTitles = [
  "Clean Code", "The Pragmatic Programmer", "Designing Data-Intensive Applications", 
  "Code Complete", "Introduction to Algorithms", "Refactoring", 
  "The Mythical Man-Month", "Structure & Interpretation of Computer Programs", "Patterns of Enterprise Application Architecture",
  "Working Effectively with Legacy Code", "Clean Architecture", "Domain-Driven Design",
  "Design Patterns", "You Don't Know JS", "Computer Networking: A Top-Down Approach",
  "Accelerate", "The Phoenix Project", "Continuous Delivery"
];

const techAuthors = [
  "Robert C. Martin", "Andy Hunt & Dave Thomas", "Martin Kleppmann", 
  "Steve McConnell", "Thomas H. Cormen", "Martin Fowler", 
  "Fred Brooks", "Harold Abelson", "Martin Fowler",
  "Michael Feathers", "Robert C. Martin", "Eric Evans",
  "Erich Gamma", "Kyle Simpson", "James Kurose",
  "Nicole Forsgren", "Gene Kim", "Jez Humble"
];

const bizTitles = [
  "Zero to One", "The Lean Startup", "Good to Great", 
  "Thinking, Fast and Slow", "The Intelligent Investor", "Blue Ocean Strategy",
  "Start With Why", "The Hard Thing About Hard Things", "Shoe Dog",
  "Measure What Matters", "The Innovator's Dilemma", "Outliers",
  "Rich Dad Poor Dad", "The E-Myth Revisited", "High Output Management",
  "Built to Last", "Crossing the Chasm", "Rework"
];

const bizAuthors = [
  "Peter Thiel", "Eric Ries", "Jim Collins", 
  "Daniel Kahneman", "Benjamin Graham", "W. Chan Kim",
  "Simon Sinek", "Ben Horowitz", "Phil Knight",
  "John Doerr", "Clayton M. Christensen", "Malcolm Gladwell",
  "Robert T. Kiyosaki", "Michael E. Gerber", "Andrew S. Grove",
  "Jim Collins", "Geoffrey A. Moore", "Jason Fried"
];

const pdTitles = [
  "Atomic Habits", "Deep Work", "Mindset", 
  "The 7 Habits of Highly Effective People", "Can't Hurt Me", "Man's Search for Meaning",
  "The Power of Habit", "Grit", "Flow",
  "Extreme Ownership", "The Subtle Art of Not Giving a F*ck", "Daring Greatly",
  "Quiet", "Essentialism", "Atomic Habits II",
  "How to Win Friends & Influence People", "The 5 AM Club", "The Alchemist"
];

const pdAuthors = [
  "James Clear", "Cal Newport", "Carol S. Dweck", 
  "Stephen R. Covey", "David Goggins", "Viktor E. Frankl",
  "Charles Duhigg", "Angela Duckworth", "Mihaly Csikszentmihalyi",
  "Jocko Willink", "Mark Manson", "Brené Brown",
  "Susan Cain", "Greg McKeown", "James Clear",
  "Dale Carnegie", "Robin Sharma", "Paulo Coelho"
];

const gradients = [
  "linear-gradient(135deg, #1b2755, #101535)", // Deep Blue
  "linear-gradient(135deg, #87361a, #4a1d0d)", // Burnt Orange
  "linear-gradient(135deg, #a78120, #5c450c)", // Golden Yellow
  "linear-gradient(135deg, #5c1822, #300c11)", // Burgundy
  "linear-gradient(135deg, #15523a, #0b2e20)", // Deep Green
  "linear-gradient(135deg, #7c5c3e, #453221)", // Earthy Tan
  "linear-gradient(135deg, #22252a, #111316)"  // Dark Obsidian
];

const accentColors = ["#FFCC00", "#D4AF37", "#FF9900", "#E5C158"];

const generateCategoryBooks = (titles, authors, category) => {
  return titles.map((title, index) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const priceVal = 1500 + Math.floor(Math.random() * 2000 / 100) * 100; // between 1500 and 3500, rounded to 100
    const rating = (4.5 + Math.random() * 0.5).toFixed(1);
    const pages = 200 + Math.floor(Math.random() * 600);
    const year = 1990 + Math.floor(Math.random() * 35);
    const gradIndex = (index + category.charCodeAt(0)) % gradients.length;
    const accentIndex = (index + category.charCodeAt(1)) % accentColors.length;
    
    return {
      id,
      title,
      author: authors[index],
      category,
      description: `${title} is a foundational book in the field of ${category}. Written by the acclaimed author ${authors[index]}, it provides key insights, models, and strategies that have shaped modern thinking. This book is essential reading for professionals, students, and practitioners alike seeking to master the principles of ${category.toLowerCase()}.`,
      price: `KSh ${priceVal.toLocaleString()}`,
      priceVal,
      rating: parseFloat(rating),
      pages,
      year,
      accentColor: accentColors[accentIndex],
      gradient: gradients[gradIndex]
    };
  });
};

const allBooks = [
  ...generateCategoryBooks(techTitles, techAuthors, "Technology"),
  ...generateCategoryBooks(bizTitles, bizAuthors, "Business"),
  ...generateCategoryBooks(pdTitles, pdAuthors, "Personal Development")
];

const targetPath = path.join(__dirname, 'src', 'data', 'books.json');
fs.writeFileSync(targetPath, JSON.stringify(allBooks, null, 2), 'utf-8');
console.log(`Successfully generated 54 books (18 per category) at: ${targetPath}`);
