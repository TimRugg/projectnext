const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Project collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectnext",
  // {
  //   useMongoClient: true
  // }
);

const projectSeed = [
  {
    title: "100 Days of Code",
    category: "Project", 
    status: "Idea", 
    progress: 0,
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
  },
  {
    title: "Lord of the Flies",
    category: "Project", 
    status: "Idea", 
    progress: 0, 
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death."
  },
  {
    title: "The Catcher in the Rye",
    category: "Project", 
    status: "Idea", 
    progress: 0, 
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of  copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection."
  },
  {
    title: "The Punch Escrow",
    category: "Project", 
    status: "Idea", 
    progress: 0, 
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by  organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him."
  },
  {
    title: "The Sorcerer's Stone",
    category: "Project", 
    status: "Started", 
    progress: 25, 
    start_date: new Date("<2018-02-19>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny."
  },
  {
    title: "Coraline",
    category: "Project", 
    status: "Idea", 
    progress: 0, 
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life."
  },
  {
    title: "Computer Hardware and Software",
    category: "Project", 
    status: "In Progress", 
    progress:40, 
    start_date: new Date("<2018-04-22>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to cworld of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within."
  },
  {
    title: "The Everything Store",
    start_date: new Date("<2018-04-12>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    category: "Project", 
    status: "Started", 
    progress: 25, 
    description:
      "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to the Internet and forever changed the way we shop and read."
  },
  {
    title: "Total Recall",
    category: "Project", 
    status: "Started", 
    progress: 25, 
    start_date: new Date("<2017-11-14>"), 
    status_date: new Date("<2018-03-11>"),
    active: true,
    description:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall."
  },
  {
    title: "Quest for a Future",
    category: "Project", 
    status: "Completed", 
    progress: 100, 
    start_date: new Date("<2017-11-05>"), 
    status_date: new Date("<2018-02-09>"),
    active: false,
    description:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American  dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy."
  },
  {
    title: "Steve Jobs",
    category: "Project", 
    status: "In Progress", 
    progress: 50, 
    start_date: new Date("<2018-03-29>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality leadership, and values."
  },
  {
    title: "People in a Hurry",
    category: "Project", 
    status: "Idea", 
    progress: 0, 
    start_date: new Date("<2017-12-17>"), 
    status_date: new Date("<2018-02-05>"),
    active: true,
    description:
      "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe."
  },
  {
    title: "1984",
    category: "Project", 
    status: "Completed",
    active: true, 
    progress: 100, 
    start_date: new Date("<2018-01-12>"), 
    status_date: new Date("<2018-04-18>"),
    description:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time."
  },
  {
    title: "Frankenstein",
    category: "Project", 
    status: "In Progress",
    active: true, 
    progress: 60, 
    start_date: new Date("<2018-02-03>"), 
    status_date: new Date("<2018-04-13>"),
    description:
      "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it to look round, to curdle the blood, and quicken the beatings of the heart.\""
  },
  {
    title: "The Great Gatsby",
    category: "Project", 
    status: "In Progress", 
    progress: 75, 
    start_date: new Date("<2018-02-12>"), 
    status_date: new Date("<2018-04-21>"),
    active: true,
    description:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature."
  },
  {
    title: "Born a Crime",
    category: "Project", 
    status: "Started", 
    progress: 10, 
    start_date: new Date("<2018-03-15>"), 
    status_date: new Date("<2018-04-22>"),
    active: true,
    description:
      "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than driven by murderous gangsters, and more."
  }
];

// Actions
const actionSeed = [
  {
    action_step: "Do this first.",
    rank: 1, complete: true, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  },
  {
    action_step: "Do this second.",
    rank: 1, complete: false, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  },
  {
    action_step: "Do this third.",
    rank: 1, complete: false, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  },
  {
    action_step: "Action one.",
    rank: 1, complete: true, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  },
  {
    action_step: "Action two.",
    rank: 1, complete: false, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  },
  {
    action_step: "Action three.",
    rank: 1, complete: false, 
    create_date: new Date("<2018-04-22>"), complete_date: new Date("<2018-04-22>")
  }
];

// Daily Actions
const dailyActionsSeed = [
{
current_date: new Date("<2018-04-22>"),
current_date_complete: false,
current_trend: 12,
longest_trend: 14,
project_1: "Landscape new house.",
action_1: "Remove dead tree in side yard.",
complete_1: false,
project_2: "Create web site for group.",
action_2: "Call and set up meeting to review requirements",
complete_2: false,
project_3: "July 4th Event",
action_3: "Compile list of names.",
complete_3: false
}
];

db.DailyActions
.remove({})
.then(() => db.DailyActions.collection.insertMany(dailyActionsSeed))
.then(data3 => {
  console.log(data3.insertedCount + " DailyActions records inserted!");
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.Action
.remove({})
.then(() => db.Action.collection.insertMany(actionSeed))
.then(data1 => {
  console.log(data1.insertedCount + " Action records inserted!");
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data2 => {
    console.log(data2.insertedCount + " Project records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
