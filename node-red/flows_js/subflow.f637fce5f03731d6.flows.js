const Node = {
  "id": "f637fce5f03731d6",
  "type": "subflow",
  "name": "DB Connect",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "033530a7c06198ea"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 970,
      "y": 100,
      "wires": [
        {
          "id": "91e8aa626025470f",
          "port": 0
        },
        {
          "id": "d5faa1e7f26636e4",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1000,
    "y": 240,
    "wires": [
      {
        "id": "91e8aa626025470f",
        "port": 0
      },
      {
        "id": "c3049ebe67d10519",
        "port": 0
      }
    ]
  }
}

module.exports = Node;