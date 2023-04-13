CREATE TABLE todos (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   todo text NOT NULL
);

INSERT INTO todos (todo)
VALUES('Clean your room'),
('Take out the trash'),
('Make your bed');