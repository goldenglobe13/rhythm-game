import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
// let Y = 339.86;

const tileTouchDisplay = [
  0, 8.35, 16.68, 25, 33.34, 41.67, 50, 58.33, 66.66, 75, 83.32, 91.65, 100,
];

const tileTouch = [
  0, 17.5, 24, 30.5, 37, 43.5, 50, 56.5, 63, 69.5, 76, 82.5, 100,
];

let my_notesDispNew = JSON.parse(
  `[{"x":25,"time":"4568","id":1,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"4804","id":2,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"4981","id":3,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"5199","id":4,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"5421","id":5,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"6069","id":6,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"6376","id":7,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"6696","id":8,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"6944","id":9,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"7224","id":10,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"7945","id":11,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"8253","id":12,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"8547","id":13,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"9188","id":14,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"9468","id":15,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"9802","id":16,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"10104","id":17,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"10381","id":18,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"10381","id":19,"dTime":418},{"x":58.33,"time":"10799","id":20,"endId":18,"type":"endSlide","newType":"endSlide"},{"x":25,"time":"10995","id":21,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"11294","id":22,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"11584","id":23,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"11853","id":24,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"12130","id":25,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"12130","id":26,"dTime":411},{"x":33.34,"time":"12541","id":27,"endId":25,"type":"endSlide","newType":"endSlide"},{"x":66.66,"time":"12817","id":28,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"13104","id":29,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"13401","id":30,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"14399","id":31,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"14668","id":32,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"14823","id":33,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"14991","id":34,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"15254","id":35,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"15254","id":36,"dTime":231},{"x":33.34,"time":"15485","id":37,"endId":35,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"15485","id":38,"dTime":231},{"x":58.33,"time":"15716","id":39,"endId":35,"type":"endSlide","newType":"endSlide"},{"x":33.34,"time":"15912","id":40,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"16061","id":41,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"16182","id":42,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"16405","id":43,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"16405","id":44,"dTime":265},{"x":58.33,"time":"16670","id":45,"endId":43,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"16670","id":46,"dTime":264},{"x":33.34,"time":"16934","id":47,"endId":43,"type":"endSlide","newType":"endSlide"},{"x":58.33,"time":"17130","id":48,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"17279","id":49,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"17400","id":50,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"17592","id":51,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"17592","id":52,"dTime":213},{"x":33.34,"time":"17805","id":53,"endId":51,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"17805","id":54,"dTime":212},{"x":58.33,"time":"18017","id":55,"endId":51,"type":"endSlide","newType":"endSlide"},{"x":25,"time":"18266","id":56,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"18551","id":57,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"18853","id":58,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"19419","id":59,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"19596","id":60,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"19751","id":61,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"20060","id":62,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"20060","id":63,"dTime":197},{"x":58.33,"time":"20257","id":64,"endId":62,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"20257","id":65,"dTime":196},{"x":33.34,"time":"20453","id":66,"endId":62,"type":"endSlide","newType":"endSlide"},{"x":58.33,"time":"20697","id":67,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"20873","id":68,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"21038","id":69,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"21257","id":70,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"21257","id":71,"dTime":234},{"x":33.34,"time":"21491","id":72,"endId":70,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"21491","id":73,"dTime":233},{"x":58.33,"time":"21724","id":74,"endId":70,"type":"endSlide","newType":"endSlide"},{"x":25,"time":"21958","id":75,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"22115","id":76,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"22272","id":77,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"22565","id":78,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"22868","id":79,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"23191","id":80,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"23436","id":81,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"23678","id":82,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":25,"x2":66.66,"time":"23678","id":83,"dTime":359},{"x":66.66,"time":"24037","id":84,"endId":82,"type":"endSlide","newType":"endSlide"},{"x":8.35,"time":"24364","id":85,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"24648","id":86,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"24975","id":87,"endId":0,"type":"tap","newType":"tap"},{"x":91.65,"time":"25257","id":88,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"25462","id":89,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"25696","id":90,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"26252","id":91,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"26796","id":92,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"27124","id":93,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"27444","id":94,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"27748","id":95,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"28032","id":96,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"28299","id":97,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"28579","id":98,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":16.68,"x2":58.33,"time":"28579","id":99,"dTime":522},{"x":58.33,"time":"29101","id":100,"endId":98,"type":"endSlide","newType":"endSlide"},{"x":8.35,"time":"29305","id":101,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"29591","id":102,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"29882","id":103,"endId":0,"type":"tap","newType":"tap"},{"x":91.65,"time":"30195","id":104,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"30515","id":105,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"31084","id":106,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"31617","id":107,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"31888","id":108,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"32154","id":109,"endId":0,"type":"tap","newType":"tap"},{"x":83.32,"time":"32388","id":110,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"32580","id":111,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"32746","id":112,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"32971","id":113,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"33257","id":114,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"33534","id":115,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"33841","id":116,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"34160","id":117,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":16.68,"x2":58.33,"time":"34160","id":118,"dTime":1412},{"x":58.33,"time":"35572","id":119,"endId":117,"type":"endSlide","newType":"endSlide"},{"x":25,"time":"35792","id":120,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"35934","id":121,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"36089","id":122,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"36208","id":123,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"36374","id":124,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"36674","id":125,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"36961","id":126,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"37104","id":127,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"37246","id":128,"endId":0,"type":"tap","newType":"tap"},{"x":8.35,"time":"37351","id":129,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"37493","id":130,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"37796","id":131,"endId":0,"type":"tap","newType":"tap"},{"x":91.65,"time":"38122","id":132,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"38415","id":133,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"38577","id":134,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"38736","id":135,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"38885","id":136,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"39035","id":137,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"39178","id":138,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"39370","id":139,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"39526","id":140,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"39705","id":141,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":66.66,"x2":41.67,"time":"39705","id":142,"dTime":698},{"x":41.67,"time":"40403","id":143,"endId":141,"type":"endSlide","newType":"endSlide"},{"x":66.66,"time":"40802","id":144,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"40968","id":145,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"41111","id":146,"endId":0,"type":"tap","newType":"tap"},{"x":8.35,"time":"41244","id":147,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"41468","id":148,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"41641","id":149,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"41810","id":150,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"42024","id":151,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"42024","id":152,"dTime":796},{"x":58.33,"time":"42820","id":153,"endId":151,"type":"endSlide","newType":"endSlide"},{"x":50,"time":"43301","id":154,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"43671","id":155,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"43959","id":156,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"44253","id":157,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"44549","id":158,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"44893","id":159,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"45237","id":160,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"45538","id":161,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"45861","id":162,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"46148","id":163,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"46420","id":164,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"46733","id":165,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"47099","id":166,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"47392","id":167,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"47649","id":168,"endId":0,"type":"tap","newType":"tap"},{"x":83.32,"time":"48012","id":169,"endId":0,"type":"tap","newType":"tap"},{"x":8.35,"time":"48330","id":170,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"48630","id":171,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"48915","id":172,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"49188","id":173,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"49512","id":174,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"49817","id":175,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"50154","id":176,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"50438","id":177,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"50736","id":178,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"51030","id":179,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"51336","id":180,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"51648","id":181,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"51954","id":182,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"52253","id":183,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"52456","id":184,"endId":0,"type":"tap","newType":"tap"},{"x":8.35,"time":"52716","id":185,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"53248","id":186,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"53511","id":187,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"53743","id":188,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"53899","id":189,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"54050","id":190,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"54350","id":191,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"54350","id":192,"dTime":186},{"x":58.33,"time":"54536","id":193,"endId":191,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"54536","id":194,"dTime":185},{"x":33.34,"time":"54721","id":195,"endId":191,"type":"endSlide","newType":"endSlide"},{"x":58.33,"time":"54972","id":196,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"55114","id":197,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"55269","id":198,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"55546","id":199,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"55546","id":200,"dTime":216},{"x":33.34,"time":"55762","id":201,"endId":199,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"55762","id":202,"dTime":215},{"x":58.33,"time":"55977","id":203,"endId":199,"type":"endSlide","newType":"endSlide"},{"x":33.34,"time":"56239","id":204,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"56390","id":205,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"56545","id":206,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"56808","id":207,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"56808","id":208,"dTime":177},{"x":58.33,"time":"56985","id":209,"endId":207,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"56985","id":210,"dTime":177},{"x":33.34,"time":"57162","id":211,"endId":207,"type":"endSlide","newType":"endSlide"},{"x":16.68,"time":"57437","id":212,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"57724","id":213,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"58015","id":214,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"58545","id":215,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"58711","id":216,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"58857","id":217,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"58992","id":218,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"59209","id":219,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":25,"time":"59209","id":220,"dTime":169},{"x":25,"time":"59378","id":221,"endId":219,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":25,"x2":41.67,"time":"59378","id":222,"dTime":169},{"x":41.67,"time":"59547","id":223,"endId":219,"type":"endSlide","newType":"endSlide"},{"x":25,"time":"59845","id":224,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"59983","id":225,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"60131","id":226,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"60255","id":227,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"60462","id":228,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":66.66,"x2":33.34,"time":"60462","id":229,"dTime":178},{"x":33.34,"time":"60640","id":230,"endId":228,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":41.67,"time":"60640","id":231,"dTime":178},{"x":41.67,"time":"60818","id":232,"endId":228,"type":"endSlide","newType":"endSlide"},{"x":50,"time":"61059","id":233,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"61219","id":234,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"61374","id":235,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"61510","id":236,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"61687","id":237,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"61975","id":238,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"62315","id":239,"endId":0,"type":"tap","newType":"tap"},{"x":41.67,"time":"62625","id":240,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"62921","id":241,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"63489","id":242,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"63703","id":243,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"63886","id":244,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"64125","id":245,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"64125","id":246,"dTime":169},{"x":58.33,"time":"64294","id":247,"endId":247,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"64294","id":248,"dTime":168},{"x":33.34,"time":"64462","id":249,"endId":247,"type":"endSlide","newType":"endSlide"},{"x":58.33,"time":"64742","id":250,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"64945","id":251,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"65145","id":252,"endId":0,"type":"tap","newType":"tap"},{"x":58.33,"time":"65327","id":253,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"65327","id":254,"dTime":159},{"x":33.34,"time":"65486","id":255,"endId":257,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"65486","id":256,"dTime":158},{"x":58.33,"time":"65644","id":257,"endId":257,"type":"endSlide","newType":"endSlide"},{"x":33.34,"time":"65959","id":258,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"66088","id":259,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"66232","id":260,"endId":0,"type":"tap","newType":"tap"},{"x":33.34,"time":"66527","id":261,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":33.34,"x2":58.33,"time":"66527","id":262,"dTime":168},{"x":58.33,"time":"66695","id":263,"endId":265,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":58.33,"x2":33.34,"time":"66695","id":264,"dTime":168},{"x":33.34,"time":"66863","id":265,"endId":265,"type":"endSlide","newType":"endSlide"},{"x":75,"time":"67169","id":266,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"67499","id":267,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"67802","id":268,"endId":0,"type":"tap","newType":"tap"},{"x":8.35,"time":"68360","id":269,"endId":0,"type":"tap","newType":"tap"},{"x":83.32,"time":"68506","id":270,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"68667","id":271,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"68979","id":272,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":66.66,"x2":16.68,"time":"68979","id":273,"dTime":182},{"x":16.68,"time":"69161","id":274,"endId":276,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":16.68,"x2":41.67,"time":"69161","id":275,"dTime":182},{"x":41.67,"time":"69343","id":276,"endId":276,"type":"endSlide","newType":"endSlide"},{"x":83.32,"time":"69605","id":277,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"69755","id":278,"endId":0,"type":"tap","newType":"tap"},{"x":75,"time":"69900","id":279,"endId":0,"type":"tap","newType":"tap"},{"x":25,"time":"70191","id":280,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":25,"x2":66.66,"time":"70191","id":281,"dTime":197},{"x":66.66,"time":"70388","id":282,"endId":284,"type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":66.66,"x2":41.67,"time":"70388","id":283,"dTime":197},{"x":41.67,"time":"70585","id":284,"endId":284,"type":"endSlide","newType":"endSlide"},{"x":16.68,"time":"70846","id":285,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"71017","id":286,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"71176","id":287,"endId":0,"type":"tap","newType":"tap"},{"x":16.68,"time":"71465","id":288,"endId":0,"type":"tap","newType":"tap"},{"x":66.66,"time":"71797","id":289,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"72114","id":290,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"72395","id":291,"endId":0,"type":"tap","newType":"tap"},{"x":50,"time":"72688","id":292,"endId":0,"type":"tap","newType":"tap"}]`
);
let my_notes = JSON.parse(
  `[{"x":29.829055297274245,"time":"4568","id":1,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"4804","id":2,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":70.17094384587554,"time":"4981","id":3,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":49.99999914314978,"time":"5199","id":4,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":29.829055297274245,"time":"5421","id":5,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":70.17094384587554,"time":"6069","id":6,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":49.99999914314978,"time":"6376","id":7,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":29.829055297274245,"time":"6696","id":8,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"6944","id":9,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":70.17094384587554,"time":"7224","id":10,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":36.38842449511301,"time":"7945","id":11,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":49.99999914314978,"time":"8253","id":12,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":63.610467597557886,"time":"8547","id":13,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":29.829055297274245,"time":"9188","id":14,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"9468","id":15,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":70.17094384587554,"time":"9802","id":16,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":49.99999914314978,"time":"10104","id":17,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":36.38842449511301,"time":"10381","id":18,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"10799","id":20,"endId":18,"type":"endSlide","newType":"endSlide","tile":7},{"x":29.829055297274245,"time":"10995","id":21,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"11294","id":22,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":29.829055297274245,"time":"11584","id":23,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"11853","id":24,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":57.020796748685285,"time":"12130","id":25,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"12541","id":27,"endId":25,"type":"endSlide","newType":"endSlide","tile":4},{"x":63.610467597557886,"time":"12817","id":28,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":49.99999914314978,"time":"13104","id":29,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":36.38842449511301,"time":"13401","id":30,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":23.284040911101858,"time":"14399","id":31,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"14668","id":32,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"14823","id":33,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"14991","id":34,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"15254","id":35,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"15485","id":37,"endId":35,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":57.020796748685285,"time":"15716","id":39,"endId":35,"type":"endSlide","newType":"endSlide","tile":7},{"x":36.38842449511301,"time":"15912","id":40,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"16061","id":41,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"16182","id":42,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"16405","id":43,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"16670","id":45,"endId":43,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"16934","id":47,"endId":43,"type":"endSlide","newType":"endSlide","tile":4},{"x":57.020796748685285,"time":"17130","id":48,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"17279","id":49,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"17400","id":50,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"17592","id":51,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"17805","id":53,"endId":51,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":57.020796748685285,"time":"18017","id":55,"endId":51,"type":"endSlide","newType":"endSlide","tile":7},{"x":29.829055297274245,"time":"18266","id":56,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":42.97801565691553,"time":"18551","id":57,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":57.020796748685285,"time":"18853","id":58,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":36.38842449511301,"time":"19419","id":59,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"19596","id":60,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"19751","id":61,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"20060","id":62,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"20257","id":64,"endId":62,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"20453","id":66,"endId":62,"type":"endSlide","newType":"endSlide","tile":4},{"x":57.020796748685285,"time":"20697","id":67,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"20873","id":68,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"21038","id":69,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"21257","id":70,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"21491","id":72,"endId":70,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":57.020796748685285,"time":"21724","id":74,"endId":70,"type":"endSlide","newType":"endSlide","tile":7},{"x":29.829055297274245,"time":"21958","id":75,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":57.020796748685285,"time":"22115","id":76,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":23.284040911101858,"time":"22272","id":77,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":49.99999914314978,"time":"22565","id":78,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":29.829055297274245,"time":"22868","id":79,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":70.17094384587554,"time":"23191","id":80,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":23.284040911101858,"time":"23436","id":81,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":29.829055297274245,"time":"23678","id":82,"endId":0,"type":"startSlide","newType":"startSlide","tile":3},{"x":63.610467597557886,"time":"24037","id":84,"endId":82,"type":"endSlide","newType":"endSlide","tile":8},{"x":16.73129687913216,"time":"24364","id":85,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":49.99999914314978,"time":"24648","id":86,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":36.38842449511301,"time":"24975","id":87,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":83.26759264298808,"time":"25257","id":88,"endId":0,"type":"tap","newType":"tap","tile":11},{"x":42.97801565691553,"time":"25462","id":89,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":29.829055297274245,"time":"25696","id":90,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":23.284040911101858,"time":"26252","id":91,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":42.97801565691553,"time":"26796","id":92,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":57.020796748685285,"time":"27124","id":93,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":70.17094384587554,"time":"27444","id":94,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":42.97801565691553,"time":"27748","id":95,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":29.829055297274245,"time":"28032","id":96,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"28299","id":97,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":23.284040911101858,"time":"28579","id":98,"endId":0,"type":"startSlide","newType":"startSlide","tile":2},{"x":57.020796748685285,"time":"29101","id":100,"endId":98,"type":"endSlide","newType":"endSlide","tile":7},{"x":16.73129687913216,"time":"29305","id":101,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":49.99999914314978,"time":"29591","id":102,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":36.38842449511301,"time":"29882","id":103,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":83.26759264298808,"time":"30195","id":104,"endId":0,"type":"tap","newType":"tap","tile":11},{"x":42.97801565691553,"time":"30515","id":105,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":29.829055297274245,"time":"31084","id":106,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":23.284040911101858,"time":"31617","id":107,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":42.97801565691553,"time":"31888","id":108,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":57.020796748685285,"time":"32154","id":109,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":76.71485717952054,"time":"32388","id":110,"endId":0,"type":"tap","newType":"tap","tile":10},{"x":42.97801565691553,"time":"32580","id":111,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":29.829055297274245,"time":"32746","id":112,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"32971","id":113,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":36.38842449511301,"time":"33257","id":114,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":23.284040911101858,"time":"33534","id":115,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":49.99999914314978,"time":"33841","id":116,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":23.284040911101858,"time":"34160","id":117,"endId":0,"type":"startSlide","newType":"startSlide","tile":2},{"x":57.020796748685285,"time":"35572","id":119,"endId":117,"type":"endSlide","newType":"endSlide","tile":7},{"x":29.829055297274245,"time":"35792","id":120,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"35934","id":121,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":23.284040911101858,"time":"36089","id":122,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"36208","id":123,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":42.97801565691553,"time":"36374","id":124,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":29.829055297274245,"time":"36674","id":125,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"36961","id":126,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":23.284040911101858,"time":"37104","id":127,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"37246","id":128,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":16.73129687913216,"time":"37351","id":129,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":57.020796748685285,"time":"37493","id":130,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":36.38842449511301,"time":"37796","id":131,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":83.26759264298808,"time":"38122","id":132,"endId":0,"type":"tap","newType":"tap","tile":11},{"x":29.829055297274245,"time":"38415","id":133,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"38577","id":134,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":23.284040911101858,"time":"38736","id":135,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":42.97801565691553,"time":"38885","id":136,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":63.610467597557886,"time":"39035","id":137,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":29.829055297274245,"time":"39178","id":138,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":49.99999914314978,"time":"39370","id":139,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":23.284040911101858,"time":"39526","id":140,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":63.610467597557886,"time":"39705","id":141,"endId":0,"type":"startSlide","newType":"startSlide","tile":8},{"x":42.97801565691553,"time":"40403","id":143,"endId":141,"type":"endSlide","newType":"endSlide","tile":5},{"x":63.610467597557886,"time":"40802","id":144,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":23.284040911101858,"time":"40968","id":145,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"41111","id":146,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":16.73129687913216,"time":"41244","id":147,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":49.99999914314978,"time":"41468","id":148,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":42.97801565691553,"time":"41641","id":149,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":23.284040911101858,"time":"41810","id":150,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":36.38842449511301,"time":"42024","id":151,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"42820","id":153,"endId":151,"type":"endSlide","newType":"endSlide","tile":7},{"x":49.99999914314978,"time":"43301","id":154,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"43671","id":155,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"43959","id":156,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"44253","id":157,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"44549","id":158,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"44893","id":159,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":23.284040911101858,"time":"45237","id":160,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"45538","id":161,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":29.829055297274245,"time":"45861","id":162,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":70.17094384587554,"time":"46148","id":163,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":23.284040911101858,"time":"46420","id":164,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"46733","id":165,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":23.284040911101858,"time":"47099","id":166,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":63.610467597557886,"time":"47392","id":167,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":29.829055297274245,"time":"47649","id":168,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":76.71485717952054,"time":"48012","id":169,"endId":0,"type":"tap","newType":"tap","tile":10},{"x":16.73129687913216,"time":"48330","id":170,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":49.99999914314978,"time":"48630","id":171,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"48915","id":172,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"49188","id":173,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"49512","id":174,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"49817","id":175,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":23.284040911101858,"time":"50154","id":176,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":63.610467597557886,"time":"50438","id":177,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":29.829055297274245,"time":"50736","id":178,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":57.020796748685285,"time":"51030","id":179,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":70.17094384587554,"time":"51336","id":180,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":23.284040911101858,"time":"51648","id":181,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":57.020796748685285,"time":"51954","id":182,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":29.829055297274245,"time":"52253","id":183,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"52456","id":184,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":16.73129687913216,"time":"52716","id":185,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":29.829055297274245,"time":"53248","id":186,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":42.97801565691553,"time":"53511","id":187,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":23.284040911101858,"time":"53743","id":188,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":23.284040911101858,"time":"53899","id":189,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":23.284040911101858,"time":"54050","id":190,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":36.38842449511301,"time":"54350","id":191,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"54536","id":193,"endId":191,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"54721","id":195,"endId":191,"type":"endSlide","newType":"endSlide","tile":4},{"x":57.020796748685285,"time":"54972","id":196,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"55114","id":197,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"55269","id":198,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"55546","id":199,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"55762","id":201,"endId":199,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":57.020796748685285,"time":"55977","id":203,"endId":199,"type":"endSlide","newType":"endSlide","tile":7},{"x":36.38842449511301,"time":"56239","id":204,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"56390","id":205,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"56545","id":206,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"56808","id":207,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"56985","id":209,"endId":207,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"57162","id":211,"endId":207,"type":"endSlide","newType":"endSlide","tile":4},{"x":23.284040911101858,"time":"57437","id":212,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":49.99999914314978,"time":"57724","id":213,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":70.17094384587554,"time":"58015","id":214,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":29.829055297274245,"time":"58545","id":215,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"58711","id":216,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":36.38842449511301,"time":"58857","id":217,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":57.020796748685285,"time":"58992","id":218,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"59209","id":219,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":29.829055297274245,"time":"59378","id":221,"endId":219,"type":"holdSlide","newType":"holdSlide","tile":3},{"x":42.97801565691553,"time":"59547","id":223,"endId":219,"type":"endSlide","newType":"endSlide","tile":5},{"x":29.829055297274245,"time":"59845","id":224,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":57.020796748685285,"time":"59983","id":225,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":23.284040911101858,"time":"60131","id":226,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":63.610467597557886,"time":"60255","id":227,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":63.610467597557886,"time":"60462","id":228,"endId":0,"type":"startSlide","newType":"startSlide","tile":8},{"x":36.38842449511301,"time":"60640","id":230,"endId":228,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":42.97801565691553,"time":"60818","id":232,"endId":228,"type":"endSlide","newType":"endSlide","tile":5},{"x":49.99999914314978,"time":"61059","id":233,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"61219","id":234,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"61374","id":235,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"61510","id":236,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"61687","id":237,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":70.17094384587554,"time":"61975","id":238,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":36.38842449511301,"time":"62315","id":239,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":42.97801565691553,"time":"62625","id":240,"endId":0,"type":"tap","newType":"tap","tile":5},{"x":70.17094384587554,"time":"62921","id":241,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":36.38842449511301,"time":"63489","id":242,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"63703","id":243,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"63886","id":244,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"64125","id":245,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"64294","id":247,"endId":247,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"64462","id":249,"endId":247,"type":"endSlide","newType":"endSlide","tile":4},{"x":57.020796748685285,"time":"64742","id":250,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"64945","id":251,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"65145","id":252,"endId":0,"type":"tap","newType":"tap","tile":7},{"x":57.020796748685285,"time":"65327","id":253,"endId":0,"type":"startSlide","newType":"startSlide","tile":7},{"x":36.38842449511301,"time":"65486","id":255,"endId":257,"type":"holdSlide","newType":"holdSlide","tile":4},{"x":57.020796748685285,"time":"65644","id":257,"endId":257,"type":"endSlide","newType":"endSlide","tile":7},{"x":36.38842449511301,"time":"65959","id":258,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"66088","id":259,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"66232","id":260,"endId":0,"type":"tap","newType":"tap","tile":4},{"x":36.38842449511301,"time":"66527","id":261,"endId":0,"type":"startSlide","newType":"startSlide","tile":4},{"x":57.020796748685285,"time":"66695","id":263,"endId":265,"type":"holdSlide","newType":"holdSlide","tile":7},{"x":36.38842449511301,"time":"66863","id":265,"endId":265,"type":"endSlide","newType":"endSlide","tile":4},{"x":70.17094384587554,"time":"67169","id":266,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":49.99999914314978,"time":"67499","id":267,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":29.829055297274245,"time":"67802","id":268,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":16.73129687913216,"time":"68360","id":269,"endId":0,"type":"tap","newType":"tap","tile":1},{"x":76.71485717952054,"time":"68506","id":270,"endId":0,"type":"tap","newType":"tap","tile":10},{"x":29.829055297274245,"time":"68667","id":271,"endId":0,"type":"tap","newType":"tap","tile":3},{"x":63.610467597557886,"time":"68979","id":272,"endId":0,"type":"startSlide","newType":"startSlide","tile":8},{"x":23.284040911101858,"time":"69161","id":274,"endId":276,"type":"holdSlide","newType":"holdSlide","tile":2},{"x":42.97801565691553,"time":"69343","id":276,"endId":276,"type":"endSlide","newType":"endSlide","tile":5},{"x":76.71485717952054,"time":"69605","id":277,"endId":0,"type":"tap","newType":"tap","tile":10},{"x":23.284040911101858,"time":"69755","id":278,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":70.17094384587554,"time":"69900","id":279,"endId":0,"type":"tap","newType":"tap","tile":9},{"x":29.829055297274245,"time":"70191","id":280,"endId":0,"type":"startSlide","newType":"startSlide","tile":3},{"x":63.610467597557886,"time":"70388","id":282,"endId":284,"type":"holdSlide","newType":"holdSlide","tile":8},{"x":42.97801565691553,"time":"70585","id":284,"endId":284,"type":"endSlide","newType":"endSlide","tile":5},{"x":23.284040911101858,"time":"70846","id":285,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":23.284040911101858,"time":"71017","id":286,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":23.284040911101858,"time":"71176","id":287,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":23.284040911101858,"time":"71465","id":288,"endId":0,"type":"tap","newType":"tap","tile":2},{"x":63.610467597557886,"time":"71797","id":289,"endId":0,"type":"tap","newType":"tap","tile":8},{"x":49.99999914314978,"time":"72114","id":290,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"72395","id":291,"endId":0,"type":"tap","newType":"tap","tile":6},{"x":49.99999914314978,"time":"72688","id":292,"endId":0,"type":"tap","newType":"tap","tile":6}]`
);

const notesDisp = my_notesDispNew;
const notes = my_notes;

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [beats, setBeats] = useState(notesDisp);
  const [streak, setStreak] = useState("");
  const [tilesActive, setTilesActive] = useState([]);
  const [notesDispState, setNotesDispState] = useState(notesDisp);
  const [notesState, setNotesState] = useState(notes);

  const body = document.body;
  const screenH = body.getBoundingClientRect().height;
  const screenW = body.getBoundingClientRect().width;
  console.log(screenH);
  console.log(screenW);

  let Y = 0.82 * screenH;
  const quality = { accepted: 50, good: 35, perfect: 20 };
  function diffPos(first, second, index) {
    console.log(Y);
    const d =
      Math.abs(first[index].touch.pageX - (second[0]?.x * screenW) / 100) +
      Math.abs(first[index].touch.pageY - Y);
    return d;
  }

  function qualityCheck(diff) {
    let q = "";
    switch (true) {
      case diff < quality.perfect:
        q = "SuperPerfect";
        break;
      case diff < quality.good:
        q = "Perfect";
        break;
      case diff < quality.accepted:
        q = "Good";
        break;
      default:
        q = "Miss";
    }
    console.log(q);
    return q;
  }

  // console.log("Top");
  // console.log(beats);
  // console.log(list);
  //console.log(tilesActive);
  // console.log(notes.length);
  // console.log(acceptedList.length);
  //console.log(acceptedList);
  // console.log(notes);
  // console.log(notesDisp);
  //console.log(notesState);
  // console.log(notesDispState);

  useEffect(() => {
    if (acceptedList.length === 0) return;
    if (acceptedList[acceptedList.length - 1]?.quality === "Miss") {
      setStreak("");
    } else {
      setStreak((prevState) => Number(prevState) + 1);
    }
    // if (acceptedList[acceptedList.length - 1]?.type === "tap") {
    //   const iD = Number(acceptedList[acceptedList.length - 1]?.tapId);
    //   setBeats((prevState) => [...prevState].filter((item) => item.id !== iD));
    // }
    // setList((prevState) =>
    //   [...prevState].filter((item) => {
    //     console.log(item);
    //     console.log(item.target.id);
    //     return item.target.id !== "";
    //   })
    // );
  }, [acceptedList]);

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    console.log(e);

    console.log(e.touches);
    setList((prevState) => [...prevState, ...e.changedTouches]);

    const arrayOfDiffs = [...list, ...e.changedTouches].map((items) =>
      tileTouch.map((item) => Math.abs((item * screenW) / 100 - items.pageX))
    );
    console.log(arrayOfDiffs);
    const arrayOfIndexes = arrayOfDiffs.map((item) =>
      item.indexOf(Math.min(...item))
    );
    console.log(arrayOfIndexes);
    const tilesAct = arrayOfIndexes.map((item, i) => {
      return { tile: item, touch: [...list, ...e.changedTouches][i] };
    });
    setTilesActive(tilesAct);

    const filteredTilesActive = tilesAct.filter(
      (item) => item.touch.identifier === [...e.changedTouches][0].identifier
    );
    console.log(filteredTilesActive);
    // setList((prevState) => [...e.changedTouches]);
    const tapList = [
      {
        touch: filteredTilesActive[0].touch,
        dur: dur,
        tile: filteredTilesActive[0].tile,
      },
    ];
    console.log(tapList);

    // const filteredTapListDur = notes.filter(
    //   (item) => Math.abs(item.time - tapList[0].dur) < 100
    // );
    // if (filteredTapListDur.length === 0) return;
    let filteredNotes = [];
    if (acceptedList.length < notes.length) {
      if (tapList.length > 0) {
        filteredNotes = notesState.filter(
          (item) =>
            Math.abs(+item.time + 1392 - Number(tapList[0]?.dur)) < 200 &&
            Number(item.tile) === Number(tapList[0]?.tile) &&
            (item.type === "startSlide" || item.type === "tap")
        );
        if (filteredNotes.length === 0) {
          return;
        }
        console.log(filteredNotes);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "startSlide" || item?.type === "tap"
            ? item?.id === filteredNotes[0]?.id
            : false
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          console.log("Single");
          // const filteredNotes = notes.filter(
          //   (item) =>
          //     Math.abs(+item.time + 1392 - Number(tapList[0]?.dur)) < 200 &&
          //     Number(item.tile) === Number(tapList[0]?.tile) &&
          //     (item.type === "startSlide" || item.type === "tap")
          // );

          console.log(filteredNotes);
          const diffZero = diffPos(tapList, filteredNotes, 0);
          console.log(filteredNotes[0]);
          console.log(diffZero);
          // if (diffZero <= 50) {
          //   setBeats((prevState) => {
          //     return [...prevState].filter(
          //       (item) =>
          //         Number(item.id) !==
          //           Number(filteredTapList[0].touch[0].target.id) &&
          //         item.type === "tap"
          //     );
          //   });
          // }
          let checkAcc = false;
          setAcceptedList((prevState) => {
            const Duplicate = [...prevState]?.filter(
              (item) => Number(item?.id) === filteredNotes[0].id
            );
            console.log(Duplicate);
            if (Duplicate.length === 0) {
              console.log(Duplicate);
              checkAcc = true;
              console.log(checkAcc);
              return [
                ...prevState,
                {
                  touch: tapList[0].touch,
                  quality: qualityCheck(diffZero),
                  type: filteredNotes[0]?.type || "",
                  id: filteredNotes[0]?.id,
                },
              ];
            } else {
              return [...prevState];
            }
          });
          console.log(checkAcc);
          setNotesState((prevState) =>
            [...prevState].filter(
              (item) => +item.id !== Number(filteredNotes[0]?.id)
            )
          );
          if (filteredNotes[0]?.type === "tap")
            setNotesDispState((prevState) =>
              [...prevState].filter(
                (item) => +item.id !== Number(filteredNotes[0]?.id)
              )
            );
        } else return;
      } else return;
    }
  };

  const touchMoveHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("Move");
    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => item.identifier === touch.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );

    const mappedTouchList = [...list].map((item, i) => {
      const k = [...e.changedTouches].filter(
        (touch) => item.identifier === touch.identifier
      );
      return ch.includes(item.identifier) ? k[0] : item;
    });

    const arrayOfDiffs = mappedTouchList.map((items) =>
      tileTouch.map((item) => Math.abs((item * screenW) / 100 - items.pageX))
    );

    const arrayOfIndexes = arrayOfDiffs.map((item) =>
      item.indexOf(Math.min(...item))
    );

    const tilesAct = arrayOfIndexes.map((item, i) => {
      return { tile: item, touch: [...list, ...e.changedTouches][i] };
    });

    setTilesActive(tilesAct);

    // const holdList = [
    //   {
    //     touch: tilesAct[0].touch,
    //     dur: dur,
    //     tile: tilesAct[0].tile,
    //   },
    // ];
    // console.log(holdList);
    const holdList = tilesAct.map((item) => {
      return { touch: item.touch, dur: dur, tile: item.tile };
    });
    console.log(holdList);

    const filteredHoldList = notes.filter(
      (item) =>
        (item.type === "holdSlide" &&
          Number(item.tile) === Number(holdList[0]?.tile) &&
          Math.abs(+item.time + 1392 - holdList[0].dur) < 50) ||
        (item.type === "holdSlide" &&
          Number(item.tile) === Number(holdList[1]?.tile) &&
          Math.abs(+item.time + 1392 - holdList[0].dur) < 50)
    );
    console.log(filteredHoldList);

    if (filteredHoldList.length === 0) return;
    console.log(filteredHoldList);
    if (acceptedList.length < notes.length) {
      if (holdList.length > 0) {
        // const filteredNotes = notes.filter(
        //   (item) =>
        //     (item.endId === Number(holdList[0]?.touch.target.id) ||
        //       Number(holdList[1]?.touch?.target.id)) &&
        //     item.type === "holdSlide"
        // );
        // // console.log(filteredNotes);
        // if (filteredNotes.length === 0) {
        //   return;
        // }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredHoldList[0].id)
        );
        if (filteredAccepted.length > 0) {
          return;
        }
        console.log(filteredAccepted);
        // const filteredAcceptedList = acceptedList.filter((item) =>
        //   item?.type === "holdSlide"
        //     ? item?.endId === filteredHoldList[0]?.touch?.target ||
        //       filteredHoldList[1]?.touch?.target
        //     : false
        // );
        // console.log(filteredAcceptedList);

        if (filteredAccepted.length === 0) {
          if (filteredHoldList.length === 2) {
            console.log("DoubleHold");
            // const filteredNotes = notes.filter(
            //   (item) =>
            //     (item.endId === Number(filteredHoldList[0].touch.target.id) ||
            //       item.endId === Number(filteredHoldList[1].touch.target.id)) &&
            //     item.type === "holdSlide"
            // );
            // console.log(filteredNotes);
            const secondFilteredNote = filteredHoldList.filter(
              (item) => item.tile === Number(filteredHoldList[1].tile)
            );
            // console.log(secondFilteredNote);
            const firstFilteredNote = filteredHoldList.filter(
              (item) => item.tile === Number(filteredHoldList[0].tile)
            );
            // console.log(firstFilteredNote);
            const diffOne = diffPos(holdList, secondFilteredNote, 1);
            // const diffOne = Math.abs(
            //   holdList[1]?.touch.pageX -
            //     secondFilteredNote[0]?.x +
            //     holdList[1]?.touch.pageY -
            //     Y
            // );
            const diffZero = diffPos(holdList, firstFilteredNote, 0);
            // const diffZero = Math.abs(
            //   holdList[0]?.touch.pageX -
            //     firstFilteredNote[0]?.x +
            //     holdList[0]?.touch.pageY -
            //     Y
            // );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            console.log(diffOne);
            console.log(diffZero);
            if (diffOne >= quality.accepted && diffZero >= quality.accepted)
              return;
            // console.log(diffZero);
            // console.log(diffOne);
            if (diffZero < quality.accepted) {
              console.log("diffZero");
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(firstFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) => item?.realId === firstFilteredNote[0].id

                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                console.log(Duplicate);
                if (Duplicate.length === 0) {
                  console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[0]?.touch,
                      realId: filteredHoldList[0].id,
                      id: filteredHoldList[0].id,
                      endType: true,
                      quality: qualityCheck(diffZero),
                      type: filteredHoldList[0]?.type || "",
                      durDouble: holdList[0]?.dur,
                    },
                  ];
                } else {
                  return [...prevState];
                }
              });
            }

            if (diffOne < quality.accepted) {
              console.log("diffOne");
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(secondFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) => item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                console.log(Duplicate);
                if (Duplicate.length === 0) {
                  console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[1]?.touch,
                      realId: filteredHoldList[1].id,
                      id: filteredHoldList[1].id,
                      endType: true,
                      quality: qualityCheck(diffOne),
                      type: filteredHoldList[1]?.type || "",
                      durDouble: holdList[1]?.dur,
                    },
                  ];
                } else {
                  return [...prevState];
                }
              });
            }

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) =>
            //       item.endId === Number(holdList[1]?.touch.target.id) &&
            //       item.type === "holdSlide"
            //   )
            // );
          } else {
            console.log("SingleHold");
            // console.log(holdList[0]?.dur);
            const filteredHoldList = notes.filter(
              (item) =>
                Number(item.tile) === Number(holdList[0]?.tile) &&
                Math.abs(+item.time + 1392 - holdList[0].dur) < 50
            );
            const diffZero = diffPos(holdList, filteredHoldList, 0);
            // const diffZero = Math.abs(
            //   holdList[0]?.touch.pageX -
            //     filteredNotes[0]?.x +
            //     holdList[0]?.touch.pageY -
            //     Y
            // );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffZero >= quality.accepted) return;
            // console.log(diffZero);
            setAcceptedList((prevState) => {
              // console.log([...prevState]);
              // console.log(filteredNotes[0].id);
              const Duplicate = [...prevState]?.filter(
                (item) => item?.realId === filteredHoldList[0].id
              );
              if (Duplicate.length === 0) {
                // console.log(dur);
                return [
                  ...prevState,
                  {
                    touch: holdList[0]?.touch,
                    realId: filteredHoldList[0].id,
                    id: filteredHoldList[0].id,
                    endType: true,
                    quality: qualityCheck(diffZero),
                    type: filteredHoldList[0]?.type || "",
                    durSingle: holdList[0]?.dur,
                  },
                ];
              } else {
                return [...prevState];
              }
            });

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) =>
            //       item.endId === Number(holdList[0]?.touch.target.id) &&
            //       item.type === "holdSlide"
            //   )
            // );
          }
        } else return;
      }
    }
  };

  const touchEndHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("end");

    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) => {
      return [...prevState].filter(
        (item) => item.identifier !== e.changedTouches[0].identifier
      );
    });

    console.log([...tilesActive]);
    console.log(e.changedTouches);
    const filteredTiles = [...tilesActive].filter(
      (item) =>
        item.touch.identifier !== e.changedTouches[0].identifier ||
        item.touch.identifier !==
          e.changedTouches[e.changedTouches.length - 1].identifier
    );
    console.log(filteredTiles);

    setTilesActive(filteredTiles);

    const filteredTilesActive = [...tilesActive].filter(
      (item) => item.touch.identifier === [...e.changedTouches][0].identifier
    );
    console.log(filteredTilesActive);
    // setList((prevState) => [...e.changedTouches]);
    const endList = [
      {
        touch: filteredTilesActive[0].touch,
        dur: dur,
        tile: filteredTilesActive[0].tile,
      },
    ];
    console.log(endList);

    const filteredEndList = notes.filter(
      (item) =>
        item.type === "endSlide" &&
        Number(item.tile) === Number(endList[0]?.tile) &&
        Math.abs(+item.time + 1392 - endList[0].dur) < 200
    );
    console.log(filteredEndList);
    if (filteredEndList.length === 0) return;
    if (acceptedList.length < notes.length) {
      if (endList.length > 0) {
        // const filteredNotes = notes.filter(
        //   (item) =>
        //     item.endId === Number(endList[0]?.touch[0].target.id) &&
        //     item.type === "endSlide"
        // );
        // console.log(filteredNotes);

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "endSlide"
            ? item?.realId === filteredEndList[0]?.id ||
              item?.realId === filteredEndList[1]?.id
            : false
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          console.log("SingleEnd");
          console.log(filteredEndList);
          // const filteredNotes = notes.filter(
          //   (item) =>
          //     item.endId ===
          //       Number(filteredEndListListDur[0].touch[0].target.id) &&
          //     item.type === "endSlide"
          // );
          // console.log(filteredNotes);

          const diffZero = diffPos(endList, filteredEndList, 0);

          if (diffZero >= quality.accepted) return;

          setAcceptedList((prevState) => [
            ...prevState,
            {
              touch: endList[0]?.touch,
              realId: filteredEndList[0].id,
              endType: true,
              quality: qualityCheck(diffZero),
              type: filteredEndList[0]?.type || "",
              dur: dur,
            },
          ]);

          // setBeats((prevState) =>
          //   [...prevState].filter(
          //     (item) => item.endId === Number(endList[0]?.touch[0].target.id)
          //   )
          // );
        }
      }
    }
  };

  const touchCancelHandler = (e) => {
    console.log("cancel");
    setTilesActive([]);
  };

  // useEffect(() => {
  //   console.log(list);
  //   console.log(tapList);
  //   console.log(endList);
  //   // console.log(moveList);
  //   console.log(holdList);
  //   console.log(acceptedList);

  //   if (
  //     acceptedList.length > 0 &&
  //     acceptedList[acceptedList.length - 1].quality !== "Miss" &&
  //     list.length > 0 &&
  //     list[0]?.target?.className === "Bdot"
  //   ) {
  //     setHoldingEffect(true);
  //   } else {
  //     holdingEffect && setHoldingEffect(false);
  //   }

  // }, [
  //   tapList,
  //   acceptedList.length,
  //   start,
  //   acceptedList,
  //   endList,
  //   // moveList,
  //   holdList,
  //   holdingEffect,
  //   list,
  // ]);

  const missHandler = (id) => {
    if (acceptedList.length < notes.length) {
      console.log(id.target.id);
      // console.log(acceptedList);
      const filteredAcceptedList = acceptedList.filter((item) =>
        item?.endType
          ? item?.realId === Number(id.target.id)
          : Number(item?.id) === Number(id.target.id)
      );
      console.log(filteredAcceptedList);
      if (filteredAcceptedList.length > 0) {
        return;
      } else {
        setAcceptedList((prevState) => [
          ...prevState,
          {
            touch: [{ target: id.target }],
            missId: id.target.id,
            quality: "Miss",
          },
        ]);
      }
    }
  };

  // const clickHandler = (id) => {
  //   const filteredNotes = notes.filter(
  //     (item) => item.type === "tap" && Number(item.id) === id
  //   );
  //   console.log(filteredNotes);
  //   if (filteredNotes.length === 1) {
  //     console.log(id);
  //     setBeats((prevState) => [...prevState].filter((item) => item.id !== id));
  //   }
  // };

  return (
    <>
      <div className="bigContainer">
        <div className="touchContainer">
          <div
            className="playAreaTr"
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onTouchCancel={touchCancelHandler}
            onTouchMove={touchMoveHandler}
          ></div>
          <div
            className="playArea"
            // onTouchStart={touchStartHandler}
            // onTouchEnd={touchEndHandler}
            // onTouchCancel={touchCancelHandler}
            // onTouchMove={touchMoveHandler}
          ></div>
          {/* <div id="divsList"></div> */}
          {tilesActive?.map((item, i) => {
            return (
              <div
                style={{
                  left: `${tileTouchDisplay[item.tile]}%`,
                  top: `90%`,
                  width: `15.9%`,
                }}
                // className={holdingEffect ? "dot holdEffect" : "dot"}
                className={"tile"}
                id={item.touch.identifier}
                key={item.touch.identifier}
              ></div>
            );
          })}
          {/* <div
            style={{
              left: `8.35%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileR"}
          ></div>
          <div
            style={{
              left: `16.68%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileG"}
          ></div>
          <div
            style={{
              left: `25.01%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileB"}
          ></div>
          <div
            style={{
              left: `33.34%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileR"}
          ></div>
          <div
            style={{
              left: `41.67%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileG"}
          ></div>
          <div
            style={{
              left: `50%`,
              top: `90%`,
              width: `15.9%`,
              opacity: "30%",
            }}
            // className={holdingEffect ? "dot holdEffect" : "dot"}
            className={"tile tileB"}
          ></div>

          <div
            style={{ left: `9.73%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div>
          <div
            style={{ left: `17.68%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div>
          <div
            style={{ left: `25.63%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div>
          <div
            style={{ left: `33.58%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div>
          <div
            style={{ left: `41.53%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div>
          <div
            style={{ left: `50%`, top: `87.5%` }}
            // style={{ left: `${item.x}px`, top: `696px` }}
            className={"Bdot BdotY"}
          ></div> */}

          {start &&
            notesDispState
              .filter((item) => !item.h)
              .map((item, i) => {
                return (
                  <div
                    // onTouchStart={touchStartHandler}
                    // onTouchEnd={touchEndHandler}
                    // onTouchCancel={touchCancelHandler}
                    // onTouchMove={touchMoveHandler}
                    onClick={(e, id) => {
                      console.log(item.id);
                      console.log(e);
                      e.preventDefault();
                      // clickHandler(item.id);
                    }}
                    onAnimationEnd={(id) => {
                      missHandler(id);
                    }}
                    key={item.id}
                    id={item.id}
                    className={
                      item.newType === "tap" ? "Bdot BdotB" : "Bdot BdotY"
                    }
                    style={{
                      left: `${item.x}%`,
                      animationDelay: `${item.time}ms`,
                      "--2-slide-top": `${2 * screenH + 16}px`,
                    }}
                  >
                    {i + 1}
                  </div>
                );
              })}
          {start &&
            notesDisp.map((item, i) => {
              if (item.h) {
                return (
                  <svg
                    className="lineA"
                    id={item.id}
                    key={item.id}
                    style={{
                      "--1-slide-top": `calc((1600px + ${item.dTime}px)*3/6 + 0px)`,
                      width: "1000",
                      height: "10000",
                      animationDelay: `${item.time}ms`,
                      top: `0px`,
                      animationDuration: `calc(var(--base-duration) + ${item.dTime}ms)`,
                    }}
                  >
                    {/* <line
                      className="lineStroke"
                      x1={item.x2}
                      y1={5000 - (item.dTime * 3) / 6}
                      x2={item.x1}
                      y2="5000"
                    ></line> */}
                    <line
                      className="lineStroke"
                      x1={`${(item.x2 * screenW) / 100}px`}
                      y1={5000 - (item.dTime * 3) / 6}
                      x2={`${(item.x1 * screenW) / 100}px`}
                      y2="5000"
                    ></line>
                  </svg>
                );
              } else {
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="Edot"
                    style={{
                      left: `${item.x}%`,
                      animationDelay: `${item.time}ms`,
                    }}
                  ></div>
                );
              }
            })}
        </div>
      </div>
      <div className="quality">
        <div>{acceptedList[acceptedList?.length - 1]?.quality}</div>
        <div>{streak}</div>
      </div>
      {acceptedList.length === notes.length && (
        <div className="summary">
          <div>Summary</div>
          <div>
            SuperPerfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "SuperPerfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Perfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Perfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Good:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Good") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Miss:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Miss") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>Total: {acceptedList.length}</div>
        </div>
      )}
      {/* <div className="curtain"></div> */}
      <div className="xline"></div>
      <div className="yline1"></div>
      <div className="yline2"></div>
    </>
  );
};

export default Rhythm;
