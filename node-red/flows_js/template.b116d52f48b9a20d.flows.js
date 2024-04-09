const Node = {
  "id": "b116d52f48b9a20d",
  "type": "template",
  "z": "7d89c5933c6ac70c",
  "name": "Forespørgsel ↓\\n Opret device tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 820,
  "wires": [
    [
      "d39a8f957eb52656"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{data.tablename}} (
	observedAt TIMESTAMP NOT NULL,
	type VARCHAR(255),
	value FLOAT SIGNED,
	
	UNIQUE(type, value)
);
`

module.exports = Node;