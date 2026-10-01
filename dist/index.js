"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Cinema Management System Erik");
let MovieName = "Resident Evil";
let MovieYear = 2026;
let MovieInCinema = true;
let MovieRate = 7.6;
console.log(MovieName, MovieYear, MovieInCinema, MovieRate);
function getMovieInfo(name, Year, InCinema, rate) {
    return `MovieName: ${name}, MovieYear: ${Year}, MovieInCinema: ${InCinema}, MovieStar: ${rate}`;
}
console.log(getMovieInfo(MovieName, MovieYear, MovieInCinema, MovieRate));
function getRatingLabel(rate) {
    if (rate >= 9) {
        return "Masterpiece";
    }
    else if (rate >= 7) {
        return "Great";
    }
    else if (rate >= 4) {
        return "Average";
    }
    else {
        return "Poor";
    }
}
console.log(getRatingLabel(7.6));
let Movies = [
    "Resident Evil",
    "Spider-man",
    "Iron man",
    "Batman",
    "Jumanji",
];
for (let i = 0; i < Movies.length; i++) {
    console.log(i, Movies[i]);
}
let director1 = {
    firstName: "Zach",
    lastName: "Cregger",
    country: "USA",
    birthYear: 1981,
};
let movie1 = {
    id: "tt35538033",
    title: "Resident Evil",
    genre: "Horror,Survival,ZombieHorror,Monster",
    duration: 1.34,
    rating: 7.6,
};
console.log(director1);
console.log(movie1);
class Actor {
    firstName;
    lastName;
    nationality;
    age;
    constructor(firstName, lastName, nationality, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationality = nationality;
        this.age = age;
    }
    getBio() {
        return `Name: ${this.firstName} ${this.lastName} Nationality: ${this.nationality} Age: ${this.age}`;
    }
}
let actor1 = new Actor("Austin", "Abrams", "USA", 30);
console.log(actor1);
class LeadActor extends Actor {
    Awards;
    constructor(firstName, lastName, nationality, age, Awards) {
        super(firstName, lastName, nationality, age);
        this.Awards = Awards;
    }
    getAwards() {
        return this.Awards;
    }
    getBio() {
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
//# sourceMappingURL=index.js.map