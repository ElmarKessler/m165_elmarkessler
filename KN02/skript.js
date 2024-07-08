use BuchclubDB;

db.createCollection("member", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "gender", "age"],
      properties: {
        name: { bsonType: "string", description: "must be a string and is required" },
        gender: { bsonType: "string", description: "must be a string and is required" },
        age: { bsonType: "int", description: "must be an integer and is required" }
      }
    }
  }
});

db.createCollection("book", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["author", "pages"],
      properties: {
        author: { bsonType: "string", description: "must be a string and is required" },
        pages: { bsonType: "int", description: "must be an integer and is required" }
      }
    }
  }
});

db.createCollection("review", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["rating", "positives", "negatives"],
      properties: {
        rating: { bsonType: "int", description: "must be an integer and is required" },
        positives: { bsonType: "string", description: "must be a string and is required" },
        negatives: { bsonType: "string", description: "must be a string and is required" }
      }
    }
  }
});

db.createCollection("readinglist", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["bookcount", "recentBook"],
      properties: {
        bookcount: { bsonType: "int", description: "must be an integer and is required" },
        recentBook: { bsonType: "string", description: "must be a string and is required" }
      }
    }
  }
});

