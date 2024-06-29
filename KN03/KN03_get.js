use BuchClubDB;

print("Abfrage 1:");
db.members.find({}, { _id: 1, name: 1, gender: 1, age: 1 }).forEach(printjson);

print("Abfrage 2:");
db.books.find({ author: { $regex: ".*Author.*" } }).forEach(printjson);

print("Abfrage 3:");
db.meeting.find({ date: { $gte: new Date("2023-01-01") } }).forEach(printjson);

print("Abfrage 4:");
db.readinglist.find({
    $or: [
        { bookcount: { $gt: 10 } },
        { recentBook: "Recent Book 2" }
    ]
}).forEach(printjson);

print("Abfrage 5:");
db.books.find({
    pages: { $gt: 250 },
    author: "Author 2"
}).forEach(printjson);

print("Abfrage 6:");
db.members.find({}, { _id: 0, name: 1, gender: 1, age: 1 }).forEach(printjson);
