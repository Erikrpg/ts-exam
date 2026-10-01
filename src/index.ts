console.log("Cinema Management System Erik");

let MovieName: string = "Resident Evil";
let MovieYear: number = 2026;
let MovieInCinema: boolean = true;
let MovieRate: number = 7.6;

console.log(MovieName, MovieYear, MovieInCinema, MovieRate);

function getMovieInfo(
  name: string,
  Year: number,
  InCinema: true,
  rate: number,
) {
  return `MovieName: ${name}, MovieYear: ${Year}, MovieInCinema: ${InCinema}, MovieStar: ${rate}`;
}

console.log(getMovieInfo(MovieName, MovieYear, MovieInCinema, MovieRate));

function getRatingLabel(rate: number): string {
  if (rate >= 9) {
    return "Masterpiece";
  } else if (rate >= 7) {
    return "Great";
  } else if (rate >= 4) {
    return "Average";
  } else {
    return "Poor";
  }
}

console.log(getRatingLabel(7.6));

let Movies: string[] = [
  "Resident Evil",
  "Spider-man",
  "Iron man",
  "Batman",
  "Jumanji",
];

for (let i = 0; i < Movies.length; i++) {
  console.log(i, Movies[i]);
}

type TMovie = {
  id: string;
  title: string;
  genre: string;
  duration: number;
  rating: number;
};

interface IDirector {
  firstName: string;
  lastName: string;
  country: string;
  birthYear: number;
}

let director1: IDirector = {
  firstName: "Zach",
  lastName: "Cregger",
  country: "USA",
  birthYear: 1981,
};

let movie1: TMovie = {
  id: "tt35538033",
  title: "Resident Evil",
  genre: "Horror,Survival,ZombieHorror,Monster",
  duration: 1.34,
  rating: 7.6,
};

console.log(director1);
console.log(movie1);

class Actor {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;

  constructor(
    firstName: string,
    lastName: string,
    nationality: string,
    age: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.age = age;
  }

  getBio(): string {
    return `Name: ${this.firstName} ${this.lastName} Nationality: ${this.nationality} Age: ${this.age}`;
  }
}

let actor1 = new Actor("Austin", "Abrams", "USA", 30);

console.log(actor1);

class LeadActor extends Actor {
  Awards: string[];

  constructor(
    firstName: string,
    lastName: string,
    nationality: string,
    age: number,
    Awards: string[],
  ) {
    super(firstName, lastName, nationality, age);
    this.Awards = Awards;
  }

  getAwards(): string[] {
    return this.Awards;
  }

  getBio(): string {
    return `Name: ${this.firstName} ${this.lastName} Nationality: ${this.nationality} Age: ${this.age} Awards: ${this.Awards}`;
  }
}

let LeadActor1 = new LeadActor("Austin", "Abrams", "USA", 30, [
  "Rising Star Award",
  "No more award",
]);

console.log(LeadActor1.getAwards());

console.log(LeadActor1.getBio());

console.log(actor1.getBio());
