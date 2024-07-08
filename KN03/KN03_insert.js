var member1Id = new ObjectId();
var member2Id = new ObjectId();
var member3Id = new ObjectId();
var member4Id = new ObjectId();
var member5Id = new ObjectId();

var meeting1Id = new ObjectId();
var meeting2Id = new ObjectId();
var meeting3Id = new ObjectId();

var readinglist1Id = new ObjectId();

var book1Id = new ObjectId();
var book2Id = new ObjectId();
var book3Id = new ObjectId();
var book4Id = new ObjectId();
var book5Id = new ObjectId();

var review1Id = new ObjectId();
var review2Id = new ObjectId();
var review3Id = new ObjectId();

db.member.insertMany([
    { _id: member1Id, name: "Alice", gender: "female", age: 28 },
    { _id: member2Id, name: "Bob", gender: "male", age: 32 },
    { _id: member3Id, name: "Charlie", gender: "male", age: 24 },
    { _id: member4Id, name: "Diana", gender: "female", age: 30 },
    { _id: member5Id, name: "Edward", gender: "male", age: 26 }
]);

db.meeting.insertMany([
    { _id: meeting1Id, date: new Date("2023-06-15"), bookToDiscuss: "Book A", duration: 1.5, attendees: 5 },
    { _id: meeting2Id, date: new Date("2023-07-20"), bookToDiscuss: "Book B", duration: 2.0, attendees: 4 },
    { _id: meeting3Id, date: new Date("2023-08-10"), bookToDiscuss: "Book C", duration: 1.0, attendees: 6 }
]);

db.readinglist.insertMany([
    { _id: readinglist1Id, bookcount: 10, recentBook: "Recent Book 1" },
]);

db.book.insertMany([
    { _id: book1Id, author: "Author 1", pages: 300 },
    { _id: book2Id, author: "Author 2", pages: 250 },
    { _id: book3Id, author: "Author 3", pages: 400 },
    { _id: book4Id, author: "Author 4", pages: 320 },
    { _id: book5Id, author: "Author 5", pages: 280 }
]);

db.review.insertOne({
    _id: review1Id,
    rating: 4,
    positives: "Great character development",
    negatives: "Slow start"
});

db.review.insertMany([
    {
        _id: review2Id,
        rating: 5,
        positives: "Engaging plot",
        negatives: "None"
    },
    {
        _id: review3Id,
        rating: 3,
        positives: "Interesting themes",
        negatives: "Underdeveloped characters"
    }
]);
