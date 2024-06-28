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

var meetingToReplace = ObjectId("60c72b2f9af1f9b3b4dcef60");
db.meeting.replaceOne(
    { _id: meetingToReplace },
    {
        _id: meetingToReplace,
        date: new Date("2023-06-15"),
        bookToDiscuss: "Book Two Updated",
        duration: 3.0,
        attendees: 20
    }
);
