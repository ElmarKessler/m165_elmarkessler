use BuchClubDB;

var memberIdToDelete = ObjectId("60c72b2f9af1f9b3b4dcef57");
var meetingIdsToDelete = [ObjectId("60c72b2f9af1f9b3b4dcef60"), ObjectId("60c72b2f9af1f9b3b4dcef61")];

db.members.deleteOne({ _id: memberIdToDelete });

db.meeting.deleteMany({
    $or: [
        { _id: meetingIdsToDelete[0] },
        { _id: meetingIdsToDelete[1] }
    ]
});
