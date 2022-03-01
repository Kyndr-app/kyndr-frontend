const names = [
  "Aaliyah",
  "Aaron",
  "Abagail",
  "Abbey",
  "Abbie",
  "Abbigail",
  "Abby",
  "Abdiel",
  "Abdul",
  "Abdullah",
  "Abe",
  "Abel",
  "Abelardo",
  "Abigail",
  "Abigale",
  "Abigayle",
  "Abner",
  "Abraham",
  "Ada",
  "Adah",
  "Adalberto",
  "Adaline",
  "Adam",
  "Adan",
  "Addie",
  "Addison",
  "Adela",
  "Adelbert",
  "Adele",
  "Adelia",
  "Adeline",
  "Adell",
  "Adella",
  "Adelle",
  "Aditya",
  "Adolf",
  "Adolfo",
  "Adolph",
  "Adolphus",
  "Adonis",
  "Adrain",
  "Adrian",
  "Adriana",
  "Adrianna",
  "Adriel",
  "Adrien",
  "Adrienne",
  "Afton",
  "Aglae",
  "Agnes",
  "Agustin",
  "Agustina",
  "Ahmad",
  "Ahmed",
  "Aida",
  "Aidan",
  "Aiden",
  "Aileen",
  "Aimee",
  "Aisha",
  "Aiyana",
  "Akeem",
];

const domains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "comcast.net",
  "msn.com",
];

export const getRandomEmail = () => {
  const domain = getRandomElement(domains);
  const name = getRandomElement(names).toLowerCase();
  return `${name}@${domain}`;
};

export function getRandomDate(end = new Date(), start = new Date(2022, 0, 1)) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
}

export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export function getRandomName() {
  return getRandomElement(names);
}

export function descendingComparator(a, b, orderBy) {
  if (typeof a[orderBy] === "object") {
    if (b[orderBy].name < a[orderBy].name) {
      return -1;
    }
    if (b[orderBy].name > a[orderBy].name) {
      return 1;
    }
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const statues = ["Withdraw All", "Completed", "Deposit"];
export const getRandomStatus = () => {
  return getRandomElement(statues);
};

// Get random number between min and max
export function getRandomInt(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
