use BuchClubDB;

// 1. Abfrage auf die 'members' Collection mit einer Projektion, bei der die _id auch ausgegeben wird
print("Abfrage 1:");
db.members.find({}, { _id: 1, name: 1, gender: 1, age: 1 }).forEach(printjson);

// 2. Abfrage auf die 'books' Collection mit einer Regex, um einen Teilstring zu finden
print("Abfrage 2:");
db.books.find({ author: { $regex: ".*Author.*" } }).forEach(printjson);

// 3. Abfrage auf die 'meeting' Collection mit einer Filterung auf ein DateTime Feld
print("Abfrage 3:");
db.meeting.find({ date: { $gte: new Date("2023-01-01") } }).forEach(printjson);

// 4. Abfrage auf die 'readinglist' Collection mit einer ODER-Verknüpfung in der Filterung
print("Abfrage 4:");
db.readinglist.find({
    $or: [
        { bookcount: { $gt: 10 } },
        { recentBook: "Recent Book 2" }
    ]
}).forEach(printjson);

// 5. Abfrage auf die 'books' Collection mit einer UND-Verknüpfung in der Filterung
print("Abfrage 5:");
db.books.find({
    pages: { $gt: 250 },
    author: "Author 2"
}).forEach(printjson);

// 6. Abfrage auf die 'members' Collection mit einer Projektion, bei der die _id nicht ausgegeben wird
print("Abfrage 6:");
db.members.find({}, { _id: 0, name: 1, gender: 1, age: 1 }).forEach(printjson);
