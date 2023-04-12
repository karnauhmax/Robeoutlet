const framelessSteps = [{
    id: 1,
    title: "Select the finish",
    itemsType: "default",
    showSelected: false,
    items: [{
        title: "Silver Mirror",
        img: "silver-mirror.jpg",
      },
      {
        title: "Grey Mirror",
        img: "grey-mirror.jpg",
      },
      {
        title: "Super White glass",
        img: "super-white-glass.jpg",
        table: [
          [750, 810, 970],
          [860, 910, 1090],
          [930, 990, 1190],
          [1020, 1160, 1390],
          [1110, 1190, 1430],
          [1200, 1260, 1510],
          [1290, 1350, 1610],
          [1380, 1430, 1710],
        ]
      },
      {
        title: "Black glass",
        img: "black-glass.jpg",
        table: [
          [730, 765, 918],
          [855, 890, 1065],
          [880, 915, 1095],
          [995, 1040, 1245],
          [1030, 1065, 1275],
          [1270, 1325, 1590],
          [1445, 1495, 1795],
          [1480, 1515, 1815],
          [1495, 1550, 1860],
          [1930, 2030, 2435],
          [2030, 2080, 2495],
          [2060, 2130, 2555],
          [2390, 2570, 2890]
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Select the Frames and tracks color",
    itemsType: "preview",
    showSelected: true,
    items: [{
        title: "White",
        img: "framed-super-white-glass.jpg",
        color: "#FFFFFF"
      },
      {
        title: "Matt Black",
        img: "framed-silver-doors-matt-black.jpg",
        color: "#14100F"
      },
      {
        title: "Chrome",
        img: "framed-super-white-chrome.jpg",
        color: "#A49F9B"
      },
      {
        title: "Matt Silver",
        img: "framed-silver-doors.jpg",
        color: "#D9D8D7"
      },
    ]
  },
  {
    id: 3,
    title: "Select the Tracks",
    itemsType: "default",
    showSelected: true,
    items: [{
        title: "Double 82 mm",
        img: "framed-silver-doors.jpg",
        trackValue: 'double'
      },
      {
        title: "Triple 122 mm",
        img: "framed-silver-doors.jpg",
        trackValue: 'triple'
      },
    ]
  },
  {
    id: 4,
    title: "Select the door type",
    itemsType: "final",
    showSelected: true,
  },
];

export default framelessSteps
