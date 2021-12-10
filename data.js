var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09530707924832882,
          "pitch": 0.006215561333512198,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7492413053874483,
          "pitch": 0.03717271635629338,
          "rotation": 6.283185307179586,
          "target": "1-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3288808462971158,
          "pitch": 0.00815624849751373,
          "title": "Weird Statue",
          "text": "We don't know what it is either lmao"
        }
      ]
    },
    {
      "id": "1-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7372211430901316,
        "pitch": 0.03980727019436969,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.4752854860508258,
          "pitch": 0.1061168263299912,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.014758747191271127,
        "pitch": -0.017116596887667868,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.7074670017094356,
          "pitch": 0.09110572113682558,
          "rotation": 11.780972450961727,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4078681344752368,
          "pitch": -0.29305919043593853,
          "title": "Coffee",
          "text": "Get some coffee for studying here!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
