use BuchClubDB;

var memberToUpdate = ObjectId("60c72b2f9af1f9b3b4dcef57");
db.members.updateOne(
    { _id: memberToUpdate },
    { $set: { age: 29 } }
);

db.books.updateMany(
    {
        $or: [
            { author: "Author One" },
            { pages: { $gt: 250 } }
        ]
    },
    { $set: { pages: 250 } }
);

var memberToReplace = ObjectId("60c72b2f9af1f9b3b4dcef57");

db.member.replaceOne(
    { _id: memberToReplace },
    {
        _id: memberToReplace,
        name: "Updated Name",
        gender: "non-binary",
        age: 29
    }
);

