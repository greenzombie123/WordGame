let db;
let version = 8;
let databaseName = "TestData";
let hasCreateDatabase = false;

export const wordDatabase = ({ handleLoadWords }) => {
  const loadDatabase = () => {
    const request = window.indexedDB.open(databaseName, version);

    request.onsuccess = (event) => {
      
      console.log("Database has opened successfully", event);

      db = event.target.result;

      db.onerror = (event)=>{
        console.log("There was an error", event);
      }

      const request = db
        .transaction("local", "readwrite")
        .objectStore("local")
        .get(1);

      request.onsuccess = (event) => {

        console.log("Words loaded succesfully", event);

        const words = event.target.result.words;

        if (hasCreateDatabase) {
          hasCreateDatabase = false;
        } else handleLoadWords(words);
      };
    };

    request.onupgradeneeded = (event) => {

      console.log("Version number has changed", event);

      db = event.target.result;

      db.deleteObjectStore("local")
      const objectstore = db.createObjectStore("local", { keyPath: "id" });

      db.onerror = (event) => {
        console.log("Something went wrong", event);
      };

      objectstore.transaction.oncomplete = (event) => {

        console.log("Store created", event);

        hasCreateDatabase = true;

        const local = { id: 1, words: initialWords };

        const request = db
          .transaction("local", "readwrite")
          .objectStore("local")
          .add(local);

        request.onsuccess = (event) => {
          console.log("Words were added", event);
        };
      };
    };
  };

  const updateDatabase = (words) => {
    const request = window.indexedDB.open(databaseName, version);

    request.onsuccess = (event) => {
      db = event.target.result;

      const local = db.transaction("local", "readwrite").objectStore("local");

      local.add(words);
    };
  };

  return { loadDatabase, updateDatabase };
};

const initialWords = [
  { word: "apple", file: new File(["aaa"], "a"), id: 1, hasWord: false },
  { word: "bird", file: new File(["aaa"], "a"), id: 2, hasWord: false },
  { word: "snake", file: new File(["aaa"], "a"), id: 3, hasWord: false },
  { word: "ice cream", file: new File(["aaa"], "a"), id: 4, hasWord: false },
];

const localSet = {
  words: [
    { word: "orange", file: new File(["aaa"], "a"), id: 1, hasWord: false },
    { word: "quarter", file: new File(["aaa"], "a"), id: 2, hasWord: false },
    { word: "jack", file: new File(["aaa"], "a"), id: 3, hasWord: false },
    {
      word: "ice cream apple",
      file: new File(["aaa"], "a"),
      id: 4,
      hasWord: false,
    },
  ],
};
