const Node = {
  "id": "310f915d8edfc229",
  "type": "switch",
  "z": "78f25d49af5c6439",
  "name": "",
  "property": "config.currentRetryAttempt",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lte",
      "v": "config.retryAttempts",
      "vt": "msg"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 630,
  "y": 100,
  "wires": [
    [],
    []
  ]
}

module.exports = Node;