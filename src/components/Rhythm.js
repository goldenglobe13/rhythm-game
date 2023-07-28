import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
// let Y = 339.86;
let Y = 335.196;
const quality = { accepted: 50, good: 25, perfect: 15 };
function diffPos(first, second, index) {
  const d = Math.abs(
    first[index].touch[0].pageX - second[0]?.x + first[index].touch[0].pageY - Y
  );
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
var my_notesDispNew = JSON.parse(
  `[{"x":"515.4075317","time":"4568","id":1,"endId":0,"type":"tap","newType":"tap"},{"x":"515.0440674","time":"4804","id":2,"endId":0,"type":"tap","newType":"tap"},{"x":"513.2266235","time":"4981","id":3,"endId":0,"type":"tap","newType":"tap"},{"x":"511.4091797","time":"5199","id":4,"endId":0,"type":"tap","newType":"tap"},{"x":"520.1328125","time":"5421","id":5,"endId":0,"type":"tap","newType":"tap"},{"x":"558.2988281","time":"6069","id":6,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"6376","id":7,"endId":0,"type":"tap","newType":"tap"},{"x":"557.9352417","time":"6696","id":8,"endId":0,"type":"tap","newType":"tap"},{"x":"558.2988281","time":"6944","id":9,"endId":0,"type":"tap","newType":"tap"},{"x":"558.6622314","time":"7224","id":10,"endId":0,"type":"tap","newType":"tap"},{"x":"583.0157471","time":"7945","id":11,"endId":0,"type":"tap","newType":"tap"},{"x":"576.1094971","time":"8253","id":12,"endId":0,"type":"tap","newType":"tap"},{"x":"568.4763184","time":"8547","id":13,"endId":0,"type":"tap","newType":"tap"},{"x":"575.3825073","time":"9188","id":14,"endId":0,"type":"tap","newType":"tap"},{"x":"581.925293","time":"9468","id":15,"endId":0,"type":"tap","newType":"tap"},{"x":"579.3808594","time":"9802","id":16,"endId":0,"type":"tap","newType":"tap"},{"x":"574.6555786","time":"10104","id":17,"endId":0,"type":"tap","newType":"tap"},{"x":"578.6539307","time":"10381","id":18,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.6539307","x2":"275.8709717","time":"10381","id":19,"dTime":418},{"x":"275.8709717","time":"10799","id":20,"endId":18,"type":"endSlide","newType":"endSlide"},{"x":"583.0157471","time":"10995","id":21,"endId":0,"type":"tap","newType":"tap"},{"x":"595.0107422","time":"11294","id":22,"endId":0,"type":"tap","newType":"tap"},{"x":"583.0157471","time":"11584","id":23,"endId":0,"type":"tap","newType":"tap"},{"x":"577.1999512","time":"11853","id":24,"endId":0,"type":"tap","newType":"tap"},{"x":"577.1999512","time":"12130","id":25,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"263.5124817","time":"12130","id":26,"dTime":411},{"x":"263.5124817","time":"12541","id":27,"endId":25,"type":"endSlide","newType":"endSlide"},{"x":"587.7410278","time":"12817","id":28,"endId":0,"type":"tap","newType":"tap"},{"x":"585.923584","time":"13104","id":29,"endId":0,"type":"tap","newType":"tap"},{"x":"575.019043","time":"13401","id":30,"endId":0,"type":"tap","newType":"tap"},{"x":"573.5650635","time":"14399","id":31,"endId":0,"type":"tap","newType":"tap"},{"x":"572.8381958","time":"14668","id":32,"endId":0,"type":"tap","newType":"tap"},{"x":"569.9302368","time":"14823","id":33,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"14991","id":34,"endId":0,"type":"tap","newType":"tap"},{"x":"568.4763184","time":"15254","id":35,"endId":0,"type":"tap","newType":"tap"},{"x":"544.1228638","time":"15392","id":36,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"544.1228638","x2":"262.4220276","time":"15392","id":37,"dTime":324},{"x":"262.4220276","time":"15716","id":38,"endId":36,"type":"endSlide","newType":"endSlide"},{"x":"561.206604","time":"15912","id":39,"endId":0,"type":"tap","newType":"tap"},{"x":"568.8398438","time":"16061","id":40,"endId":0,"type":"tap","newType":"tap"},{"x":"566.6588745","time":"16182","id":41,"endId":0,"type":"tap","newType":"tap"},{"x":"565.5684204","time":"16405","id":42,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"565.5684204","x2":"393.2766418","time":"16405","id":43,"dTime":529},{"x":"393.2766418","time":"16934","id":44,"endId":42,"type":"endSlide","newType":"endSlide"},{"x":"584.4697266","time":"17176","id":45,"endId":0,"type":"tap","newType":"tap"},{"x":"588.4679565","time":"17341","id":46,"endId":0,"type":"tap","newType":"tap"},{"x":"577.9268799","time":"17592","id":47,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.9268799","x2":"252.9714203","time":"17592","id":48,"dTime":425},{"x":"252.9714203","time":"18017","id":49,"endId":47,"type":"endSlide","newType":"endSlide"},{"x":"574.6555786","time":"18266","id":50,"endId":0,"type":"tap","newType":"tap"},{"x":"583.7426758","time":"18551","id":51,"endId":0,"type":"tap","newType":"tap"},{"x":"569.2032471","time":"18853","id":52,"endId":0,"type":"tap","newType":"tap"},{"x":"564.114563","time":"19419","id":53,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"19596","id":54,"endId":0,"type":"tap","newType":"tap"},{"x":"566.6588745","time":"19751","id":55,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"20060","id":56,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.112854","x2":"250.7905121","time":"20060","id":57,"dTime":393},{"x":"250.7905121","time":"20453","id":58,"endId":56,"type":"endSlide","newType":"endSlide"},{"x":"575.3825073","time":"20697","id":59,"endId":0,"type":"tap","newType":"tap"},{"x":"580.1079102","time":"20873","id":60,"endId":0,"type":"tap","newType":"tap"},{"x":"577.1999512","time":"21038","id":61,"endId":0,"type":"tap","newType":"tap"},{"x":"565.5684204","time":"21322","id":62,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"565.5684204","x2":"261.3315735","time":"21322","id":63,"dTime":402},{"x":"261.3315735","time":"21724","id":64,"endId":62,"type":"endSlide","newType":"endSlide"},{"x":"572.8381958","time":"21958","id":65,"endId":0,"type":"tap","newType":"tap"},{"x":"579.017395","time":"22115","id":66,"endId":0,"type":"tap","newType":"tap"},{"x":"577.1999512","time":"22272","id":67,"endId":0,"type":"tap","newType":"tap"},{"x":"573.5650635","time":"22565","id":68,"endId":0,"type":"tap","newType":"tap"},{"x":"570.6572266","time":"22868","id":69,"endId":0,"type":"tap","newType":"tap"},{"x":"562.6606445","time":"23191","id":70,"endId":0,"type":"tap","newType":"tap"},{"x":"562.2970581","time":"23436","id":71,"endId":0,"type":"tap","newType":"tap"},{"x":"570.2937622","time":"23678","id":72,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"254.0618591","time":"23678","id":73,"dTime":359},{"x":"254.0618591","time":"24037","id":74,"endId":72,"type":"endSlide","newType":"endSlide"},{"x":"568.8398438","time":"24364","id":75,"endId":0,"type":"tap","newType":"tap"},{"x":"567.3858643","time":"24648","id":76,"endId":0,"type":"tap","newType":"tap"},{"x":"563.7509766","time":"24975","id":77,"endId":0,"type":"tap","newType":"tap"},{"x":"563.7509766","time":"25257","id":78,"endId":0,"type":"tap","newType":"tap"},{"x":"561.5701294","time":"25462","id":79,"endId":0,"type":"tap","newType":"tap"},{"x":"558.6622314","time":"25696","id":80,"endId":0,"type":"tap","newType":"tap"},{"x":"556.8447876","time":"26252","id":81,"endId":0,"type":"tap","newType":"tap"},{"x":"552.4829712","time":"26796","id":82,"endId":0,"type":"tap","newType":"tap"},{"x":"554.6638794","time":"27124","id":83,"endId":0,"type":"tap","newType":"tap"},{"x":"556.8447876","time":"27444","id":84,"endId":0,"type":"tap","newType":"tap"},{"x":"551.3925781","time":"27748","id":85,"endId":0,"type":"tap","newType":"tap"},{"x":"548.1211548","time":"28032","id":86,"endId":0,"type":"tap","newType":"tap"},{"x":"549.9385986","time":"28299","id":87,"endId":0,"type":"tap","newType":"tap"},{"x":"568.8398438","time":"28579","id":88,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.8398438","x2":"248.2460938","time":"28579","id":89,"dTime":522},{"x":"248.2460938","time":"29101","id":90,"endId":88,"type":"endSlide","newType":"endSlide"},{"x":"534.3087158","time":"29305","id":91,"endId":0,"type":"tap","newType":"tap"},{"x":"566.6588745","time":"29591","id":92,"endId":0,"type":"tap","newType":"tap"},{"x":"563.0240479","time":"29882","id":93,"endId":0,"type":"tap","newType":"tap"},{"x":"557.5717773","time":"30195","id":94,"endId":0,"type":"tap","newType":"tap"},{"x":"555.3909302","time":"30515","id":95,"endId":0,"type":"tap","newType":"tap"},{"x":"551.0290527","time":"31084","id":96,"endId":0,"type":"tap","newType":"tap"},{"x":"552.1195068","time":"31617","id":97,"endId":0,"type":"tap","newType":"tap"},{"x":"553.2099609","time":"31888","id":98,"endId":0,"type":"tap","newType":"tap"},{"x":"552.8464966","time":"32154","id":99,"endId":0,"type":"tap","newType":"tap"},{"x":"553.5734253","time":"32388","id":100,"endId":0,"type":"tap","newType":"tap"},{"x":"553.5734253","time":"32580","id":101,"endId":0,"type":"tap","newType":"tap"},{"x":"551.3925781","time":"32746","id":102,"endId":0,"type":"tap","newType":"tap"},{"x":"554.300415","time":"32971","id":103,"endId":0,"type":"tap","newType":"tap"},{"x":"554.6638794","time":"33257","id":104,"endId":0,"type":"tap","newType":"tap"},{"x":"554.6638794","time":"33534","id":105,"endId":0,"type":"tap","newType":"tap"},{"x":"557.5717773","time":"33841","id":106,"endId":0,"type":"tap","newType":"tap"},{"x":"573.9285889","time":"34160","id":107,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"573.9285889","x2":"245.3382263","time":"34160","id":108,"dTime":1412},{"x":"245.3382263","time":"35572","id":109,"endId":107,"type":"endSlide","newType":"endSlide"},{"x":"557.208313","time":"35792","id":110,"endId":0,"type":"tap","newType":"tap"},{"x":"577.5634766","time":"35934","id":111,"endId":0,"type":"tap","newType":"tap"},{"x":"571.0206909","time":"36089","id":112,"endId":0,"type":"tap","newType":"tap"},{"x":"569.2032471","time":"36208","id":113,"endId":0,"type":"tap","newType":"tap"},{"x":"563.3875122","time":"36374","id":114,"endId":0,"type":"tap","newType":"tap"},{"x":"552.1195068","time":"36674","id":115,"endId":0,"type":"tap","newType":"tap"},{"x":"547.0307617","time":"36961","id":116,"endId":0,"type":"tap","newType":"tap"},{"x":"545.9402466","time":"37104","id":117,"endId":0,"type":"tap","newType":"tap"},{"x":"544.4863281","time":"37246","id":118,"endId":0,"type":"tap","newType":"tap"},{"x":"546.3037109","time":"37351","id":119,"endId":0,"type":"tap","newType":"tap"},{"x":"547.7576904","time":"37493","id":120,"endId":0,"type":"tap","newType":"tap"},{"x":"550.6655273","time":"37796","id":121,"endId":0,"type":"tap","newType":"tap"},{"x":"552.4829712","time":"38122","id":122,"endId":0,"type":"tap","newType":"tap"},{"x":"555.3909302","time":"38415","id":123,"endId":0,"type":"tap","newType":"tap"},{"x":"550.6655273","time":"38577","id":124,"endId":0,"type":"tap","newType":"tap"},{"x":"549.2116089","time":"38736","id":125,"endId":0,"type":"tap","newType":"tap"},{"x":"551.3925781","time":"38885","id":126,"endId":0,"type":"tap","newType":"tap"},{"x":"551.0290527","time":"39035","id":127,"endId":0,"type":"tap","newType":"tap"},{"x":"548.1211548","time":"39178","id":128,"endId":0,"type":"tap","newType":"tap"},{"x":"553.5734253","time":"39370","id":129,"endId":0,"type":"tap","newType":"tap"},{"x":"558.2988281","time":"39526","id":130,"endId":0,"type":"tap","newType":"tap"},{"x":"557.208313","time":"39705","id":131,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"557.208313","x2":"231.8892975","time":"39705","id":132,"dTime":698},{"x":"231.8892975","time":"40403","id":133,"endId":131,"type":"endSlide","newType":"endSlide"},{"x":"587.0140381","time":"40802","id":134,"endId":0,"type":"tap","newType":"tap"},{"x":"580.8347778","time":"40968","id":135,"endId":0,"type":"tap","newType":"tap"},{"x":"578.2904053","time":"41111","id":136,"endId":0,"type":"tap","newType":"tap"},{"x":"579.3808594","time":"41244","id":137,"endId":0,"type":"tap","newType":"tap"},{"x":"575.019043","time":"41468","id":138,"endId":0,"type":"tap","newType":"tap"},{"x":"572.111145","time":"41641","id":139,"endId":0,"type":"tap","newType":"tap"},{"x":"572.4746704","time":"41810","id":140,"endId":0,"type":"tap","newType":"tap"},{"x":"585.1965942","time":"42024","id":141,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"237.3415527","time":"42024","id":142,"dTime":796},{"x":"237.3415527","time":"42820","id":143,"endId":141,"type":"endSlide","newType":"endSlide"},{"x":"577.5634766","time":"43301","id":144,"endId":0,"type":"tap","newType":"tap"},{"x":"564.4780273","time":"43671","id":145,"endId":0,"type":"tap","newType":"tap"},{"x":"552.4829712","time":"43959","id":146,"endId":0,"type":"tap","newType":"tap"},{"x":"556.1177979","time":"44253","id":147,"endId":0,"type":"tap","newType":"tap"},{"x":"552.1195068","time":"44549","id":148,"endId":0,"type":"tap","newType":"tap"},{"x":"557.9352417","time":"44893","id":149,"endId":0,"type":"tap","newType":"tap"},{"x":"560.8431396","time":"45237","id":150,"endId":0,"type":"tap","newType":"tap"},{"x":"560.1162109","time":"45538","id":151,"endId":0,"type":"tap","newType":"tap"},{"x":"557.9352417","time":"45861","id":152,"endId":0,"type":"tap","newType":"tap"},{"x":"555.0273438","time":"46148","id":153,"endId":0,"type":"tap","newType":"tap"},{"x":"560.1162109","time":"46420","id":154,"endId":0,"type":"tap","newType":"tap"},{"x":"556.1177979","time":"46733","id":155,"endId":0,"type":"tap","newType":"tap"},{"x":"550.6655273","time":"47099","id":156,"endId":0,"type":"tap","newType":"tap"},{"x":"548.8481445","time":"47392","id":157,"endId":0,"type":"tap","newType":"tap"},{"x":"548.4846802","time":"47649","id":158,"endId":0,"type":"tap","newType":"tap"},{"x":"551.7559814","time":"48012","id":159,"endId":0,"type":"tap","newType":"tap"},{"x":"553.2099609","time":"48330","id":160,"endId":0,"type":"tap","newType":"tap"},{"x":"548.8481445","time":"48630","id":161,"endId":0,"type":"tap","newType":"tap"},{"x":"549.2116089","time":"48915","id":162,"endId":0,"type":"tap","newType":"tap"},{"x":"549.2116089","time":"49188","id":163,"endId":0,"type":"tap","newType":"tap"},{"x":"548.1211548","time":"49512","id":164,"endId":0,"type":"tap","newType":"tap"},{"x":"547.0307617","time":"49817","id":165,"endId":0,"type":"tap","newType":"tap"},{"x":"544.4863281","time":"50154","id":166,"endId":0,"type":"tap","newType":"tap"},{"x":"543.0323486","time":"50438","id":167,"endId":0,"type":"tap","newType":"tap"},{"x":"547.0307617","time":"50736","id":168,"endId":0,"type":"tap","newType":"tap"},{"x":"548.4846802","time":"51030","id":169,"endId":0,"type":"tap","newType":"tap"},{"x":"548.1211548","time":"51336","id":170,"endId":0,"type":"tap","newType":"tap"},{"x":"544.1228638","time":"51648","id":171,"endId":0,"type":"tap","newType":"tap"},{"x":"545.2133789","time":"51954","id":172,"endId":0,"type":"tap","newType":"tap"},{"x":"543.7593384","time":"52253","id":173,"endId":0,"type":"tap","newType":"tap"},{"x":"541.9418945","time":"52456","id":174,"endId":0,"type":"tap","newType":"tap"},{"x":"554.6638794","time":"52716","id":175,"endId":0,"type":"tap","newType":"tap"},{"x":"584.4697266","time":"53248","id":176,"endId":0,"type":"tap","newType":"tap"},{"x":"569.9302368","time":"53511","id":177,"endId":0,"type":"tap","newType":"tap"},{"x":"565.2049561","time":"53743","id":178,"endId":0,"type":"tap","newType":"tap"},{"x":"562.2970581","time":"53899","id":179,"endId":0,"type":"tap","newType":"tap"},{"x":"561.9335938","time":"54050","id":180,"endId":0,"type":"tap","newType":"tap"},{"x":"555.7543945","time":"54350","id":181,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"555.7543945","x2":"336.9364319","time":"54350","id":182,"dTime":371},{"x":"336.9364319","time":"54721","id":183,"endId":181,"type":"endSlide","newType":"endSlide"},{"x":"580.1079102","time":"54972","id":184,"endId":0,"type":"tap","newType":"tap"},{"x":"576.4729614","time":"55114","id":185,"endId":0,"type":"tap","newType":"tap"},{"x":"574.6555786","time":"55269","id":186,"endId":0,"type":"tap","newType":"tap"},{"x":"555.7543945","time":"55546","id":187,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"555.7543945","x2":"258.0602112","time":"55546","id":188,"dTime":431},{"x":"258.0602112","time":"55977","id":189,"endId":187,"type":"endSlide","newType":"endSlide"},{"x":"566.6588745","time":"56239","id":190,"endId":0,"type":"tap","newType":"tap"},{"x":"570.2937622","time":"56390","id":191,"endId":0,"type":"tap","newType":"tap"},{"x":"569.2032471","time":"56545","id":192,"endId":0,"type":"tap","newType":"tap"},{"x":"558.2988281","time":"56808","id":193,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"558.2988281","x2":"280.2327881","time":"56808","id":194,"dTime":354},{"x":"280.2327881","time":"57162","id":195,"endId":193,"type":"endSlide","newType":"endSlide"},{"x":"576.8364868","time":"57437","id":196,"endId":0,"type":"tap","newType":"tap"},{"x":"575.7460938","time":"57724","id":197,"endId":0,"type":"tap","newType":"tap"},{"x":"563.3875122","time":"58015","id":198,"endId":0,"type":"tap","newType":"tap"},{"x":"570.6572266","time":"58545","id":199,"endId":0,"type":"tap","newType":"tap"},{"x":"564.114563","time":"58711","id":200,"endId":0,"type":"tap","newType":"tap"},{"x":"561.9335938","time":"58857","id":201,"endId":0,"type":"tap","newType":"tap"},{"x":"560.8431396","time":"58992","id":202,"endId":0,"type":"tap","newType":"tap"},{"x":"560.8431396","time":"59209","id":203,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"560.8431396","x2":"266.0568848","time":"59209","id":204,"dTime":338},{"x":"266.0568848","time":"59547","id":205,"endId":203,"type":"endSlide","newType":"endSlide"},{"x":"576.4729614","time":"59845","id":206,"endId":0,"type":"tap","newType":"tap"},{"x":"576.4729614","time":"59983","id":207,"endId":0,"type":"tap","newType":"tap"},{"x":"571.7476807","time":"60131","id":208,"endId":0,"type":"tap","newType":"tap"},{"x":"571.0206909","time":"60255","id":209,"endId":0,"type":"tap","newType":"tap"},{"x":"561.9335938","time":"60462","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.9335938","x2":"266.0568848","time":"60462","id":211,"dTime":356},{"x":"266.0568848","time":"60818","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":"563.3875122","time":"61059","id":213,"endId":0,"type":"tap","newType":"tap"},{"x":"564.8414307","time":"61219","id":214,"endId":0,"type":"tap","newType":"tap"},{"x":"564.114563","time":"61374","id":215,"endId":0,"type":"tap","newType":"tap"},{"x":"560.1162109","time":"61510","id":216,"endId":0,"type":"tap","newType":"tap"},{"x":"561.206604","time":"61687","id":217,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.206604","x2":"270.7821655","time":"61687","id":218,"dTime":288},{"x":"270.7821655","time":"61975","id":219,"endId":217,"type":"endSlide","newType":"endSlide"},{"x":"583.3792114","time":"62315","id":220,"endId":0,"type":"tap","newType":"tap"},{"x":"573.9285889","time":"62625","id":221,"endId":0,"type":"tap","newType":"tap"},{"x":"569.9302368","time":"62921","id":222,"endId":0,"type":"tap","newType":"tap"},{"x":"566.2954102","time":"63489","id":223,"endId":0,"type":"tap","newType":"tap"},{"x":"561.9335938","time":"63632","id":224,"endId":0,"type":"tap","newType":"tap"},{"x":"563.0240479","time":"63774","id":225,"endId":0,"type":"tap","newType":"tap"},{"x":"562.2970581","time":"63886","id":226,"endId":0,"type":"tap","newType":"tap"},{"x":"557.208313","time":"64125","id":227,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"557.208313","x2":"247.8826141","time":"64125","id":228,"dTime":337},{"x":"247.8826141","time":"64462","id":229,"endId":227,"type":"endSlide","newType":"endSlide"},{"x":"575.7460938","time":"64742","id":230,"endId":0,"type":"tap","newType":"tap"},{"x":"573.5650635","time":"64877","id":231,"endId":0,"type":"tap","newType":"tap"},{"x":"571.0206909","time":"65012","id":232,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"65145","id":233,"endId":0,"type":"tap","newType":"tap"},{"x":"555.7543945","time":"65327","id":234,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"555.7543945","x2":"261.3315735","time":"65327","id":235,"dTime":317},{"x":"261.3315735","time":"65644","id":236,"endId":234,"type":"endSlide","newType":"endSlide"},{"x":"572.111145","time":"65959","id":237,"endId":0,"type":"tap","newType":"tap"},{"x":"568.4763184","time":"66088","id":238,"endId":0,"type":"tap","newType":"tap"},{"x":"564.8414307","time":"66232","id":239,"endId":0,"type":"tap","newType":"tap"},{"x":"561.5701294","time":"66527","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.5701294","x2":"265.6933899","time":"66527","id":241,"dTime":336},{"x":"265.6933899","time":"66863","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":"559.3891602","time":"67169","id":243,"endId":0,"type":"tap","newType":"tap"},{"x":"559.0256958","time":"67499","id":244,"endId":0,"type":"tap","newType":"tap"},{"x":"560.1162109","time":"67802","id":245,"endId":0,"type":"tap","newType":"tap"},{"x":"558.6622314","time":"68360","id":246,"endId":0,"type":"tap","newType":"tap"},{"x":"552.1195068","time":"68506","id":247,"endId":0,"type":"tap","newType":"tap"},{"x":"552.8464966","time":"68667","id":248,"endId":0,"type":"tap","newType":"tap"},{"x":"548.8481445","time":"68979","id":249,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"548.8481445","x2":"255.1523285","time":"68979","id":250,"dTime":364},{"x":"255.1523285","time":"69343","id":251,"endId":249,"type":"endSlide","newType":"endSlide"},{"x":"565.9319458","time":"69605","id":252,"endId":0,"type":"tap","newType":"tap"},{"x":"560.1162109","time":"69755","id":253,"endId":0,"type":"tap","newType":"tap"},{"x":"558.2988281","time":"69900","id":254,"endId":0,"type":"tap","newType":"tap"},{"x":"553.5734253","time":"70191","id":255,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"553.5734253","x2":"266.4203491","time":"70191","id":256,"dTime":394},{"x":"266.4203491","time":"70585","id":257,"endId":255,"type":"endSlide","newType":"endSlide"},{"x":"569.9302368","time":"70846","id":258,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"71017","id":259,"endId":0,"type":"tap","newType":"tap"},{"x":"562.6606445","time":"71176","id":260,"endId":0,"type":"tap","newType":"tap"},{"x":"553.5734253","time":"71465","id":261,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"553.5734253","x2":"281.6867676","time":"71465","id":262,"dTime":332},{"x":"281.6867676","time":"71797","id":263,"endId":261,"type":"endSlide","newType":"endSlide"},{"x":"574.6555786","time":"72114","id":264,"endId":0,"type":"tap","newType":"tap"},{"x":"568.112854","time":"72395","id":265,"endId":0,"type":"tap","newType":"tap"},{"x":"553.2099609","time":"72688","id":266,"endId":0,"type":"tap","newType":"tap"}]`
);
var my_notes = JSON.parse(
  `[{"x":504.4300003051758,"time":"4568","id":1,"endId":0,"type":"tap","newType":"tap"},{"x":504.11808013916016,"time":"4804","id":2,"endId":0,"type":"tap","newType":"tap"},{"x":502.5585403442383,"time":"4981","id":3,"endId":0,"type":"tap","newType":"tap"},{"x":500.9882278442383,"time":"5199","id":4,"endId":0,"type":"tap","newType":"tap"},{"x":508.3009033203125,"time":"5421","id":5,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"6069","id":6,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"6376","id":7,"endId":0,"type":"tap","newType":"tap"},{"x":538.6128234863281,"time":"6696","id":8,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"6944","id":9,"endId":0,"type":"tap","newType":"tap"},{"x":539.1941909790039,"time":"7224","id":10,"endId":0,"type":"tap","newType":"tap"},{"x":558.7305374145508,"time":"7945","id":11,"endId":0,"type":"tap","newType":"tap"},{"x":553.1874237060547,"time":"8253","id":12,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"8547","id":13,"endId":0,"type":"tap","newType":"tap"},{"x":552.6060180664062,"time":"9188","id":14,"endId":0,"type":"tap","newType":"tap"},{"x":557.8584747314453,"time":"9468","id":15,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"9802","id":16,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"10104","id":17,"endId":0,"type":"tap","newType":"tap"},{"x":555.2322616577148,"time":"10381","id":18,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":303.0614471435547,"time":"10799","id":20,"endId":18,"type":"endSlide","newType":"endSlide"},{"x":558.7305374145508,"time":"10995","id":21,"endId":0,"type":"tap","newType":"tap"},{"x":568.3433685302734,"time":"11294","id":22,"endId":0,"type":"tap","newType":"tap"},{"x":558.7305374145508,"time":"11584","id":23,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"11853","id":24,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"12130","id":25,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":293.14791107177734,"time":"12541","id":27,"endId":25,"type":"endSlide","newType":"endSlide"},{"x":562.5195465087891,"time":"12817","id":28,"endId":0,"type":"tap","newType":"tap"},{"x":561.0560531616211,"time":"13104","id":29,"endId":0,"type":"tap","newType":"tap"},{"x":552.315299987793,"time":"13401","id":30,"endId":0,"type":"tap","newType":"tap"},{"x":551.1525573730469,"time":"14399","id":31,"endId":0,"type":"tap","newType":"tap"},{"x":550.5711898803711,"time":"14668","id":32,"endId":0,"type":"tap","newType":"tap"},{"x":548.2356643676758,"time":"14823","id":33,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"14991","id":34,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"15254","id":35,"endId":0,"type":"tap","newType":"tap"},{"x":527.5365219116211,"time":"15392","id":36,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":292.2758483886719,"time":"15716","id":38,"endId":36,"type":"endSlide","newType":"endSlide"},{"x":541.2390365600586,"time":"15912","id":39,"endId":0,"type":"tap","newType":"tap"},{"x":547.3636093139648,"time":"16061","id":40,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"16182","id":41,"endId":0,"type":"tap","newType":"tap"},{"x":544.7373580932617,"time":"16405","id":42,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":399.34969329833984,"time":"16934","id":44,"endId":42,"type":"endSlide","newType":"endSlide"},{"x":559.8933029174805,"time":"17176","id":45,"endId":0,"type":"tap","newType":"tap"},{"x":563.1009216308594,"time":"17341","id":46,"endId":0,"type":"tap","newType":"tap"},{"x":554.6508636474609,"time":"17592","id":47,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":284.6978759765625,"time":"18017","id":49,"endId":47,"type":"endSlide","newType":"endSlide"},{"x":552.0246505737305,"time":"18266","id":50,"endId":0,"type":"tap","newType":"tap"},{"x":559.3119354248047,"time":"18551","id":51,"endId":0,"type":"tap","newType":"tap"},{"x":547.6542587280273,"time":"18853","id":52,"endId":0,"type":"tap","newType":"tap"},{"x":543.574592590332,"time":"19419","id":53,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"19596","id":54,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"19751","id":55,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"20060","id":56,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":282.9537353515625,"time":"20453","id":58,"endId":56,"type":"endSlide","newType":"endSlide"},{"x":552.6060180664062,"time":"20697","id":59,"endId":0,"type":"tap","newType":"tap"},{"x":556.3950119018555,"time":"20873","id":60,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"21038","id":61,"endId":0,"type":"tap","newType":"tap"},{"x":544.7373580932617,"time":"21322","id":62,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":291.4037780761719,"time":"21724","id":64,"endId":62,"type":"endSlide","newType":"endSlide"},{"x":550.5711898803711,"time":"21958","id":65,"endId":0,"type":"tap","newType":"tap"},{"x":555.52294921875,"time":"22115","id":66,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"22272","id":67,"endId":0,"type":"tap","newType":"tap"},{"x":551.1525573730469,"time":"22565","id":68,"endId":0,"type":"tap","newType":"tap"},{"x":548.8170394897461,"time":"22868","id":69,"endId":0,"type":"tap","newType":"tap"},{"x":542.4018020629883,"time":"23191","id":70,"endId":0,"type":"tap","newType":"tap"},{"x":542.1111145019531,"time":"23436","id":71,"endId":0,"type":"tap","newType":"tap"},{"x":548.5263519287109,"time":"23678","id":72,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":285.56993865966797,"time":"24037","id":74,"endId":72,"type":"endSlide","newType":"endSlide"},{"x":547.3636093139648,"time":"24364","id":75,"endId":0,"type":"tap","newType":"tap"},{"x":546.190788269043,"time":"24648","id":76,"endId":0,"type":"tap","newType":"tap"},{"x":543.2839050292969,"time":"24975","id":77,"endId":0,"type":"tap","newType":"tap"},{"x":543.2839050292969,"time":"25257","id":78,"endId":0,"type":"tap","newType":"tap"},{"x":541.5297470092773,"time":"25462","id":79,"endId":0,"type":"tap","newType":"tap"},{"x":539.1941909790039,"time":"25696","id":80,"endId":0,"type":"tap","newType":"tap"},{"x":537.7407608032227,"time":"26252","id":81,"endId":0,"type":"tap","newType":"tap"},{"x":534.242431640625,"time":"26796","id":82,"endId":0,"type":"tap","newType":"tap"},{"x":535.9966125488281,"time":"27124","id":83,"endId":0,"type":"tap","newType":"tap"},{"x":537.7407608032227,"time":"27444","id":84,"endId":0,"type":"tap","newType":"tap"},{"x":533.3704071044922,"time":"27748","id":85,"endId":0,"type":"tap","newType":"tap"},{"x":530.7441635131836,"time":"28032","id":86,"endId":0,"type":"tap","newType":"tap"},{"x":532.207633972168,"time":"28299","id":87,"endId":0,"type":"tap","newType":"tap"},{"x":547.3636093139648,"time":"28579","id":88,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":280.9088821411133,"time":"29101","id":90,"endId":88,"type":"endSlide","newType":"endSlide"},{"x":519.6678924560547,"time":"29305","id":91,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"29591","id":92,"endId":0,"type":"tap","newType":"tap"},{"x":542.692497253418,"time":"29882","id":93,"endId":0,"type":"tap","newType":"tap"},{"x":538.322135925293,"time":"30195","id":94,"endId":0,"type":"tap","newType":"tap"},{"x":536.577995300293,"time":"30515","id":95,"endId":0,"type":"tap","newType":"tap"},{"x":533.0796890258789,"time":"31084","id":96,"endId":0,"type":"tap","newType":"tap"},{"x":533.9517440795898,"time":"31617","id":97,"endId":0,"type":"tap","newType":"tap"},{"x":534.8238372802734,"time":"31888","id":98,"endId":0,"type":"tap","newType":"tap"},{"x":534.5331497192383,"time":"32154","id":99,"endId":0,"type":"tap","newType":"tap"},{"x":535.1145248413086,"time":"32388","id":100,"endId":0,"type":"tap","newType":"tap"},{"x":535.1145248413086,"time":"32580","id":101,"endId":0,"type":"tap","newType":"tap"},{"x":533.3704071044922,"time":"32746","id":102,"endId":0,"type":"tap","newType":"tap"},{"x":535.7059326171875,"time":"32971","id":103,"endId":0,"type":"tap","newType":"tap"},{"x":535.9966125488281,"time":"33257","id":104,"endId":0,"type":"tap","newType":"tap"},{"x":535.9966125488281,"time":"33534","id":105,"endId":0,"type":"tap","newType":"tap"},{"x":538.322135925293,"time":"33841","id":106,"endId":0,"type":"tap","newType":"tap"},{"x":551.4432754516602,"time":"34160","id":107,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":278.5833740234375,"time":"35572","id":109,"endId":107,"type":"endSlide","newType":"endSlide"},{"x":538.0314483642578,"time":"35792","id":110,"endId":0,"type":"tap","newType":"tap"},{"x":554.3601760864258,"time":"35934","id":111,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"36089","id":112,"endId":0,"type":"tap","newType":"tap"},{"x":547.6542587280273,"time":"36208","id":113,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"36374","id":114,"endId":0,"type":"tap","newType":"tap"},{"x":533.9517440795898,"time":"36674","id":115,"endId":0,"type":"tap","newType":"tap"},{"x":529.8720779418945,"time":"36961","id":116,"endId":0,"type":"tap","newType":"tap"},{"x":529.0000152587891,"time":"37104","id":117,"endId":0,"type":"tap","newType":"tap"},{"x":527.8272323608398,"time":"37246","id":118,"endId":0,"type":"tap","newType":"tap"},{"x":529.2907028198242,"time":"37351","id":119,"endId":0,"type":"tap","newType":"tap"},{"x":530.453483581543,"time":"37493","id":120,"endId":0,"type":"tap","newType":"tap"},{"x":532.7890014648438,"time":"37796","id":121,"endId":0,"type":"tap","newType":"tap"},{"x":534.242431640625,"time":"38122","id":122,"endId":0,"type":"tap","newType":"tap"},{"x":536.577995300293,"time":"38415","id":123,"endId":0,"type":"tap","newType":"tap"},{"x":532.7890014648438,"time":"38577","id":124,"endId":0,"type":"tap","newType":"tap"},{"x":531.6162261962891,"time":"38736","id":125,"endId":0,"type":"tap","newType":"tap"},{"x":533.3704071044922,"time":"38885","id":126,"endId":0,"type":"tap","newType":"tap"},{"x":533.0796890258789,"time":"39035","id":127,"endId":0,"type":"tap","newType":"tap"},{"x":530.7441635131836,"time":"39178","id":128,"endId":0,"type":"tap","newType":"tap"},{"x":535.1145248413086,"time":"39370","id":129,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"39526","id":130,"endId":0,"type":"tap","newType":"tap"},{"x":538.0314483642578,"time":"39705","id":131,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":267.7977828979492,"time":"40403","id":133,"endId":131,"type":"endSlide","newType":"endSlide"},{"x":561.9381790161133,"time":"40802","id":134,"endId":0,"type":"tap","newType":"tap"},{"x":556.9764099121094,"time":"40968","id":135,"endId":0,"type":"tap","newType":"tap"},{"x":554.9415512084961,"time":"41111","id":136,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"41244","id":137,"endId":0,"type":"tap","newType":"tap"},{"x":552.315299987793,"time":"41468","id":138,"endId":0,"type":"tap","newType":"tap"},{"x":549.9797821044922,"time":"41641","id":139,"endId":0,"type":"tap","newType":"tap"},{"x":550.2705001831055,"time":"41810","id":140,"endId":0,"type":"tap","newType":"tap"},{"x":560.4746856689453,"time":"42024","id":141,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":272.1681442260742,"time":"42820","id":143,"endId":141,"type":"endSlide","newType":"endSlide"},{"x":554.3601760864258,"time":"43301","id":144,"endId":0,"type":"tap","newType":"tap"},{"x":543.8652801513672,"time":"43671","id":145,"endId":0,"type":"tap","newType":"tap"},{"x":534.242431640625,"time":"43959","id":146,"endId":0,"type":"tap","newType":"tap"},{"x":537.1593933105469,"time":"44253","id":147,"endId":0,"type":"tap","newType":"tap"},{"x":533.9517440795898,"time":"44549","id":148,"endId":0,"type":"tap","newType":"tap"},{"x":538.6128234863281,"time":"44893","id":149,"endId":0,"type":"tap","newType":"tap"},{"x":540.9483489990234,"time":"45237","id":150,"endId":0,"type":"tap","newType":"tap"},{"x":540.3670043945312,"time":"45538","id":151,"endId":0,"type":"tap","newType":"tap"},{"x":538.6128234863281,"time":"45861","id":152,"endId":0,"type":"tap","newType":"tap"},{"x":536.2872772216797,"time":"46148","id":153,"endId":0,"type":"tap","newType":"tap"},{"x":540.3670043945312,"time":"46420","id":154,"endId":0,"type":"tap","newType":"tap"},{"x":537.1593933105469,"time":"46733","id":155,"endId":0,"type":"tap","newType":"tap"},{"x":532.7890014648438,"time":"47099","id":156,"endId":0,"type":"tap","newType":"tap"},{"x":531.3255310058594,"time":"47392","id":157,"endId":0,"type":"tap","newType":"tap"},{"x":531.0348434448242,"time":"47649","id":158,"endId":0,"type":"tap","newType":"tap"},{"x":533.6610946655273,"time":"48012","id":159,"endId":0,"type":"tap","newType":"tap"},{"x":534.8238372802734,"time":"48330","id":160,"endId":0,"type":"tap","newType":"tap"},{"x":531.3255310058594,"time":"48630","id":161,"endId":0,"type":"tap","newType":"tap"},{"x":531.6162261962891,"time":"48915","id":162,"endId":0,"type":"tap","newType":"tap"},{"x":531.6162261962891,"time":"49188","id":163,"endId":0,"type":"tap","newType":"tap"},{"x":530.7441635131836,"time":"49512","id":164,"endId":0,"type":"tap","newType":"tap"},{"x":529.8720779418945,"time":"49817","id":165,"endId":0,"type":"tap","newType":"tap"},{"x":527.8272323608398,"time":"50154","id":166,"endId":0,"type":"tap","newType":"tap"},{"x":526.6644897460938,"time":"50438","id":167,"endId":0,"type":"tap","newType":"tap"},{"x":529.8720779418945,"time":"50736","id":168,"endId":0,"type":"tap","newType":"tap"},{"x":531.0348434448242,"time":"51030","id":169,"endId":0,"type":"tap","newType":"tap"},{"x":530.7441635131836,"time":"51336","id":170,"endId":0,"type":"tap","newType":"tap"},{"x":527.5365219116211,"time":"51648","id":171,"endId":0,"type":"tap","newType":"tap"},{"x":528.4186477661133,"time":"51954","id":172,"endId":0,"type":"tap","newType":"tap"},{"x":527.2458343505859,"time":"52253","id":173,"endId":0,"type":"tap","newType":"tap"},{"x":525.7924041748047,"time":"52456","id":174,"endId":0,"type":"tap","newType":"tap"},{"x":535.9966125488281,"time":"52716","id":175,"endId":0,"type":"tap","newType":"tap"},{"x":559.8933029174805,"time":"53248","id":176,"endId":0,"type":"tap","newType":"tap"},{"x":548.2356643676758,"time":"53511","id":177,"endId":0,"type":"tap","newType":"tap"},{"x":544.4466781616211,"time":"53743","id":178,"endId":0,"type":"tap","newType":"tap"},{"x":542.1111145019531,"time":"53899","id":179,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"54050","id":180,"endId":0,"type":"tap","newType":"tap"},{"x":536.8686752319336,"time":"54350","id":181,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":352.0276107788086,"time":"54721","id":183,"endId":181,"type":"endSlide","newType":"endSlide"},{"x":556.3950119018555,"time":"54972","id":184,"endId":0,"type":"tap","newType":"tap"},{"x":553.4781112670898,"time":"55114","id":185,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"55269","id":186,"endId":0,"type":"tap","newType":"tap"},{"x":536.8686752319336,"time":"55546","id":187,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":288.77754974365234,"time":"55977","id":189,"endId":187,"type":"endSlide","newType":"endSlide"},{"x":545.6094207763672,"time":"56239","id":190,"endId":0,"type":"tap","newType":"tap"},{"x":548.5263519287109,"time":"56390","id":191,"endId":0,"type":"tap","newType":"tap"},{"x":547.6542587280273,"time":"56545","id":192,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"56808","id":193,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":306.5597457885742,"time":"57162","id":195,"endId":193,"type":"endSlide","newType":"endSlide"},{"x":553.7687606811523,"time":"57437","id":196,"endId":0,"type":"tap","newType":"tap"},{"x":552.8967056274414,"time":"57724","id":197,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"58015","id":198,"endId":0,"type":"tap","newType":"tap"},{"x":548.8170394897461,"time":"58545","id":199,"endId":0,"type":"tap","newType":"tap"},{"x":543.574592590332,"time":"58711","id":200,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"58857","id":201,"endId":0,"type":"tap","newType":"tap"},{"x":540.9483489990234,"time":"58992","id":202,"endId":0,"type":"tap","newType":"tap"},{"x":540.9483489990234,"time":"59209","id":203,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":295.1927795410156,"time":"59547","id":205,"endId":203,"type":"endSlide","newType":"endSlide"},{"x":553.4781112670898,"time":"59845","id":206,"endId":0,"type":"tap","newType":"tap"},{"x":553.4781112670898,"time":"59983","id":207,"endId":0,"type":"tap","newType":"tap"},{"x":549.689094543457,"time":"60131","id":208,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"60255","id":209,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"60462","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":295.1927795410156,"time":"60818","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":542.9932174682617,"time":"61059","id":213,"endId":0,"type":"tap","newType":"tap"},{"x":544.1559600830078,"time":"61219","id":214,"endId":0,"type":"tap","newType":"tap"},{"x":543.574592590332,"time":"61374","id":215,"endId":0,"type":"tap","newType":"tap"},{"x":540.3670043945312,"time":"61510","id":216,"endId":0,"type":"tap","newType":"tap"},{"x":541.2390365600586,"time":"61687","id":217,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":298.98175048828125,"time":"61975","id":219,"endId":217,"type":"endSlide","newType":"endSlide"},{"x":559.0212554931641,"time":"62315","id":220,"endId":0,"type":"tap","newType":"tap"},{"x":551.4432754516602,"time":"62625","id":221,"endId":0,"type":"tap","newType":"tap"},{"x":548.2356643676758,"time":"62921","id":222,"endId":0,"type":"tap","newType":"tap"},{"x":545.3187408447266,"time":"63489","id":223,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"63632","id":224,"endId":0,"type":"tap","newType":"tap"},{"x":542.692497253418,"time":"63774","id":225,"endId":0,"type":"tap","newType":"tap"},{"x":542.1111145019531,"time":"63886","id":226,"endId":0,"type":"tap","newType":"tap"},{"x":538.0314483642578,"time":"64125","id":227,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":280.61820220947266,"time":"64462","id":229,"endId":227,"type":"endSlide","newType":"endSlide"},{"x":552.8967056274414,"time":"64742","id":230,"endId":0,"type":"tap","newType":"tap"},{"x":551.1525573730469,"time":"64877","id":231,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"65012","id":232,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"65145","id":233,"endId":0,"type":"tap","newType":"tap"},{"x":536.8686752319336,"time":"65327","id":234,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":291.4037780761719,"time":"65644","id":236,"endId":234,"type":"endSlide","newType":"endSlide"},{"x":549.9797821044922,"time":"65959","id":237,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"66088","id":238,"endId":0,"type":"tap","newType":"tap"},{"x":544.1559600830078,"time":"66232","id":239,"endId":0,"type":"tap","newType":"tap"},{"x":541.5297470092773,"time":"66527","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":294.9020767211914,"time":"66863","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":539.7856063842773,"time":"67169","id":243,"endId":0,"type":"tap","newType":"tap"},{"x":539.4949188232422,"time":"67499","id":244,"endId":0,"type":"tap","newType":"tap"},{"x":540.3670043945312,"time":"67802","id":245,"endId":0,"type":"tap","newType":"tap"},{"x":539.1941909790039,"time":"68360","id":246,"endId":0,"type":"tap","newType":"tap"},{"x":533.9517440795898,"time":"68506","id":247,"endId":0,"type":"tap","newType":"tap"},{"x":534.5331497192383,"time":"68667","id":248,"endId":0,"type":"tap","newType":"tap"},{"x":531.3255310058594,"time":"68979","id":249,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":286.4520492553711,"time":"69343","id":251,"endId":249,"type":"endSlide","newType":"endSlide"},{"x":545.0280227661133,"time":"69605","id":252,"endId":0,"type":"tap","newType":"tap"},{"x":540.3670043945312,"time":"69755","id":253,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"69900","id":254,"endId":0,"type":"tap","newType":"tap"},{"x":535.1145248413086,"time":"70191","id":255,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":295.4834671020508,"time":"70585","id":257,"endId":255,"type":"endSlide","newType":"endSlide"},{"x":548.2356643676758,"time":"70846","id":258,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"71017","id":259,"endId":0,"type":"tap","newType":"tap"},{"x":542.4018020629883,"time":"71176","id":260,"endId":0,"type":"tap","newType":"tap"},{"x":535.1145248413086,"time":"71465","id":261,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":307.72249603271484,"time":"71797","id":263,"endId":261,"type":"endSlide","newType":"endSlide"},{"x":552.0246505737305,"time":"72114","id":264,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"72395","id":265,"endId":0,"type":"tap","newType":"tap"},{"x":534.8238372802734,"time":"72688","id":266,"endId":0,"type":"tap","newType":"tap"}]`
);

const notesDisp = my_notesDispNew;
const notes = my_notes;

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [beats, setBeats] = useState(notesDisp);
  const [streak, setStreak] = useState("");

  // console.log("Top");
  // console.log(beats);
  // console.log(list);

  // console.log(acceptedList);
  // console.log(notes);
  // console.log(notesDisp);

  const screenH = window.screen.height;
  console.log(screenH);

  useEffect(() => {
    if (acceptedList.length === 0) return;
    if (acceptedList[acceptedList.length - 1]?.quality === "Miss") {
      setStreak("");
    } else {
      setStreak((prevState) => Number(prevState) + 1);
    }
  }, [acceptedList]);

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    console.log(e);

    setList((prevState) => [...prevState, ...e.changedTouches]);
    const tapList = [{ touch: [...e.changedTouches], dur: dur }];
    console.log(tapList);

    // const filteredTapListDur = notes.filter(
    //   (item) => Math.abs(item.time - tapList[0].dur) < 100
    // );
    // if (filteredTapListDur.length === 0) return;

    if (acceptedList.length < notes.length) {
      if (tapList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            item.id === Number(tapList[0]?.touch[0].target.id) &&
            (item.type === "startSlide" || item.type === "tap")
        );
        if (filteredNotes.length === 0) {
          return;
        }
        console.log(filteredNotes);
        const filteredTapList = tapList.filter(
          (item) =>
            item.touch[0].target.className === "Bdot BdotB" ||
            item.touch[0].target.className === "Bdot BdotY"
        );
        console.log(filteredTapList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "startSlide" || item?.type === "tap"
            ? item?.touch[0]?.target.id ===
                filteredTapList[0]?.touch[0]?.target ||
              filteredTapList[1]?.touch[0]?.target
            : false
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          if (filteredTapList.length === 2) {
            console.log("Double");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[1].touch[0].target.id) &&
                (item.type === "startSlide" || item.type === "tap")
            );
            const diffOne = diffPos(filteredTapList, filteredNotes, 1);
            // console.log(diffOne);
            // const diffOne = Math.abs(
            //   filteredTapList[1].touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     filteredTapList[1].touch[0].pageY -
            //     342.14
            // );
            console.log(filteredNotes);
            console.log(diffOne);
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[1].touch,
                quality: qualityCheck(diffOne),
                type: filteredNotes[0]?.type || "",
                tapId: filteredTapList[1].touch[0].target.id,
              },
            ]);
          } else {
            console.log("Single");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[0].touch[0].target.id) &&
                (item.type === "startSlide" || item.type === "tap")
            );
            // const diffZero = Math.abs(
            //   filteredTapList[0].touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     filteredTapList[0].touch[0].pageY -
            //     342.14
            // );
            console.log(filteredNotes);
            const diffZero = diffPos(filteredTapList, filteredNotes, 0);
            console.log(filteredNotes);
            console.log(diffZero);
            setAcceptedList((prevState) => {
              const Duplicate = [...prevState]?.filter(
                (item) => Number(item?.tapId) === filteredNotes[0].id
              );
              console.log(Duplicate);
              if (Duplicate.length === 0) {
                console.log("Here");
                console.log(Duplicate);
                return [
                  ...prevState,
                  {
                    touch: filteredTapList[0].touch,
                    quality: qualityCheck(diffZero),
                    type: filteredNotes[0]?.type || "",
                    tapId: filteredTapList[0].touch[0].target.id,
                  },
                ];
              } else {
                return [...prevState];
              }
            });
            console.log(filteredTapList[0].touch[0].target.id);
            setBeats((prevState) => {
              return [...prevState].filter(
                (item) =>
                  Number(item.id) !==
                    Number(filteredTapList[0].touch[0].target.id) &&
                  item.type === "tap"
              );
            });
          }
        } else return;
      } else return;
    }
  };

  const touchMoveHandler = (e) => {
    const dur = new Date().getTime() - start;
    // console.log("Move");
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

    // const holdList = [{ touch: [...e.changedTouches], dur: dur }];
    const holdList = [...e.changedTouches].map((item) => {
      return { touch: item, dur: dur };
    });
    // console.log(holdList);

    const filteredHoldListDur = notes.filter(
      (item) =>
        item.type === "holdSlide" &&
        Math.abs(item.time - holdList[0].dur + 1392) < 200
    );
    if (filteredHoldListDur.length === 0) return;
    // console.log(filteredHoldListDur);
    if (acceptedList.length < notes.length) {
      if (holdList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            (item.endId === Number(holdList[0]?.touch.target.id) ||
              Number(holdList[1]?.touch?.target.id)) &&
            item.type === "holdSlide"
        );
        // console.log(filteredNotes);
        if (filteredNotes.length === 0) {
          return;
        }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredNotes[0].id)
        );
        if (filteredAccepted.length > 0) {
          return;
        }
        // console.log(filteredAccepted);
        const filteredHoldList = holdList.filter(
          (item) =>
            item.touch?.target.className === "Bdot BdotB" ||
            item.touch?.target.className === "Bdot BdotY"
        );
        // console.log(filteredHoldList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "holdSlide"
            ? item?.endId === filteredHoldList[0]?.touch?.target ||
              filteredHoldList[1]?.touch?.target
            : false
        );
        // console.log(filteredAcceptedList);

        if (filteredAcceptedList.length === 0) {
          if (filteredHoldList.length === 2) {
            console.log("DoubleHold");
            const filteredNotes = notes.filter(
              (item) =>
                (item.endId === Number(filteredHoldList[0].touch.target.id) ||
                  item.endId === Number(filteredHoldList[1].touch.target.id)) &&
                item.type === "holdSlide"
            );
            // console.log(filteredNotes);
            const secondFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[1].touch.target.id)
            );
            // console.log(secondFilteredNote);
            const firstFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch.target.id)
            );
            // console.log(firstFilteredNote);
            // const diffOne = diffPos(holdList, secondFilteredNote, 1);
            const diffOne = Math.abs(
              holdList[1]?.touch.pageX -
                secondFilteredNote[0]?.x +
                holdList[1]?.touch.pageY -
                Y
            );
            // const diffZero = diffPos(holdList, firstFilteredNote, 0);
            const diffZero = Math.abs(
              holdList[0]?.touch.pageX -
                firstFilteredNote[0]?.x +
                holdList[0]?.touch.pageY -
                Y
            );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffOne >= quality.accepted && diffZero >= quality.accepted)
              return;
            // console.log(diffZero);
            // console.log(diffOne);
            if (diffZero < quality.accepted) {
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(firstFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                // console.log(Duplicate);
                if (Duplicate.length === 0) {
                  // console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[0]?.touch,
                      realId: filteredNotes[0].id,
                      endType: true,
                      quality: qualityCheck(diffZero),
                      type: filteredNotes[0]?.type || "",
                      durDouble: holdList[0]?.dur,
                    },
                  ];
                } else {
                  return [...prevState];
                }
              });
            }

            if (diffOne < quality.accepted) {
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(secondFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                // console.log(Duplicate);
                if (Duplicate.length === 0) {
                  // console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[1]?.touch,
                      realId: filteredNotes[1].id,
                      endType: true,
                      quality: qualityCheck(diffOne),
                      type: filteredNotes[1]?.type || "",
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
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch.target.id) &&
                item.type === "holdSlide"
            );
            // const diffZero = diffPos(holdList, filteredNotes, 0);
            const diffZero = Math.abs(
              holdList[0]?.touch.pageX -
                filteredNotes[0]?.x +
                holdList[0]?.touch.pageY -
                Y
            );
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
                (item) => item?.realId === filteredNotes[0].id
              );
              if (Duplicate.length === 0) {
                // console.log(dur);
                return [
                  ...prevState,
                  {
                    touch: holdList[0]?.touch,
                    realId: filteredNotes[0].id,
                    endType: true,
                    quality: qualityCheck(diffZero),
                    type: filteredNotes[0]?.type || "",
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

    const endList = [{ touch: [...e.changedTouches], dur: dur }];
    console.log(endList);
    // console.log(notes);
    const filteredEndListListDur = notes.filter(
      (item) =>
        item.type === "endSlide" &&
        Math.abs(+item.time + 1392 - endList[0].dur) < 200
    );
    console.log(filteredEndListListDur);
    if (filteredEndListListDur.length === 0) return;
    if (acceptedList.length < notes.length) {
      if (endList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            item.endId === Number(endList[0]?.touch[0].target.id) &&
            item.type === "endSlide"
        );
        console.log(filteredNotes);
        if (filteredNotes.length === 0) {
          return;
        }

        const filteredEndList = endList.filter(
          (item) =>
            item.touch[0].target.className === "Bdot BdotB" ||
            item.touch[0].target.className === "Bdot BdotY"
        );
        console.log(filteredEndList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "endSlide"
            ? item?.endId === filteredEndList[0]?.touch[0]?.target ||
              filteredEndList[1]?.touch[0]?.target
            : false
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          if (filteredEndList.length === 2) {
            console.log("DoubleEnd");

            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[1].touch[0].target.id) &&
                item.type === "endSlide"
            );
            const diffOne = diffPos(endList, filteredNotes, 1);
            // const diffOne = Math.abs(
            //   endList[1]?.touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     endList[1]?.touch[0].pageY -
            //     342.14
            // );
            // const diffDuration = Math.abs(
            //   endList[1]?.dur - filteredNotes[0]?.time - 1392
            // );
            console.log(filteredNotes);
            console.log(diffOne);
            if (diffOne >= quality.accepted) return;
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[1]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality: qualityCheck(diffOne),
                type: filteredNotes[0]?.type || "",
                dur: dur,
              },
            ]);

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) => item.endId === Number(endList[0]?.touch[1].target.id)
            //   )
            // );
          } else {
            console.log("SingleEnd");
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[0].touch[0].target.id) &&
                item.type === "endSlide"
            );
            // console.log(filteredNotes);

            const diffZero = diffPos(endList, filteredNotes, 0);
            // const diffZero = Math.abs(
            //   endList[0]?.touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     endList[0]?.touch[0].pageY -
            //     342.14
            // );
            // const diffDuration = Math.abs(
            //   endList[0]?.dur - filteredNotes[0]?.time - 1392
            // );

            if (diffZero >= quality.accepted) return;

            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[0]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality: qualityCheck(diffZero),
                type: filteredNotes[0]?.type || "",
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
    }
  };

  const touchCancelHandler = (e) => {
    // console.log("cancel");
    // setTapList([]);
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
          : item?.touch[0]?.target.id === id.target.id
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
            className="playArea"
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onTouchCancel={touchCancelHandler}
            onTouchMove={touchMoveHandler}
          ></div>
          {/* <div
            style={{ left: `${130}px`, top: `160px` }}
            className={"Ddot"}
          ></div> */}
          <div id="divsList">
            {/* {notesToPers.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.x}px`, top: `88.55%` }}
                  // style={{ left: `${item.x}px`, top: `696px` }}
                  // className={holdingEffect ? "dot holdEffect" : "dot"}
                  className={"Cdot"}
                ></div>
              );
            })} */}
          </div>
          {list.map((touch, i) => {
            return (
              <div
                style={{ left: `${touch.pageX}px`, top: `${touch.pageY}px` }}
                // className={holdingEffect ? "dot holdEffect" : "dot"}
                className={"dot"}
                id={touch.identifier}
                key={touch.identifier}
              ></div>
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
                    <line
                      className="lineStroke"
                      x1={item.x2}
                      y1={5000 - (item.dTime * 3) / 6}
                      x2={item.x1}
                      y2="5000"
                    ></line>
                  </svg>
                );
              } else {
                return (
                  <div
                    onTouchStart={touchStartHandler}
                    onTouchEnd={touchEndHandler}
                    onTouchCancel={touchCancelHandler}
                    onTouchMove={touchMoveHandler}
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
                      left: `${item.x}px`,
                      animationDelay: `${item.time}ms`,
                    }}
                  >
                    {item.id}
                  </div>
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
