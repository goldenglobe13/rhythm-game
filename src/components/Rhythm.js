import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
// let Y = 339.86;
let Y = 335.04;
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
  `[{"x":"548.1211548","time":"4635.5","id":1,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.1211548","time":"4833","id":2,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.9385986","time":"5070","id":3,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"5332","id":4,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.5701294","x2":"249.7000427","time":"5332","id":5,"dTime":377.5},{"x":"249.7000427","time":"5709.5","id":6,"endId":4,"type":"endSlide","newType":"endSlide"},{"x":"563.0240479","time":"6032.5","id":7,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"6335","id":8,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"6625","id":9,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"6917","id":10,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"7223","id":11,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"566.6588745","x2":"248.9730835","time":"7223","id":12,"dTime":353},{"x":"248.9730835","time":"7576","id":13,"endId":11,"type":"endSlide","newType":"endSlide"},{"x":"564.114563","time":"7850","id":14,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"8171.5","id":15,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"8469","id":16,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.8398438","time":"8744.5","id":17,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.8398438","x2":"303.1323242","time":"8744.5","id":18,"dTime":299.5},{"x":"303.1323242","time":"9044","id":19,"endId":17,"type":"endSlide","newType":"endSlide"},{"x":"592.4663086","time":"9352","id":20,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"9666.5","id":21,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"9977.5","id":22,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"10260.5","id":23,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"263.1489868","time":"10260.5","id":24,"dTime":367.5},{"x":"263.1489868","time":"10628","id":25,"endId":23,"type":"endSlide","newType":"endSlide"},{"x":"575.3825073","time":"10932","id":26,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"11249","id":27,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.7443237","time":"11529.5","id":28,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"11797","id":29,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"12108.5","id":30,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"271.1456604","time":"12108.5","id":31,"dTime":376},{"x":"271.1456604","time":"12484.5","id":32,"endId":30,"type":"endSlide","newType":"endSlide"},{"x":"580.8347778","time":"12766.5","id":33,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.5684204","time":"13060.5","id":34,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"13336","id":35,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.0240479","time":"13647","id":36,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"14291","id":37,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"14589","id":38,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"14869","id":39,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"15120.5","id":40,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"15420","id":41,"endId":0,"type":"startSlide","newType":"tap"},{"x":"552.1195068","time":"15750.5","id":42,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.6655273","time":"16066","id":43,"endId":0,"type":"startSlide","newType":"tap"},{"x":"555.3909302","time":"16233.5","id":44,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.2116089","time":"16403.5","id":45,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.302063","time":"16700.5","id":46,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.394165","time":"17028","id":47,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17339","id":48,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"17501.5","id":49,"endId":0,"type":"startSlide","newType":"tap"},{"x":"544.4863281","time":"17657.5","id":50,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17934","id":51,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"18238.5","id":52,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.8481445","time":"18540.5","id":53,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.4846802","time":"18855","id":54,"endId":0,"type":"startSlide","newType":"tap"},{"x":"558.2988281","time":"19125","id":55,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"558.2988281","x2":"262.0585327","time":"19125","id":56,"dTime":367},{"x":"262.0585327","time":"19492","id":57,"endId":55,"type":"endSlide","newType":"endSlide"},{"x":"573.9285889","time":"19736.5","id":58,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.2921143","time":"19934","id":59,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"20082.5","id":60,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.3825073","time":"20369","id":61,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"575.3825073","x2":"270.0552063","time":"20369","id":62,"dTime":325},{"x":"270.0552063","time":"20694","id":63,"endId":61,"type":"endSlide","newType":"endSlide"},{"x":"577.5634766","time":"20945.5","id":64,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"21112.5","id":65,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"21293.5","id":66,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"21584.5","id":67,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"572.111145","x2":"263.5124817","time":"21584.5","id":68,"dTime":354},{"x":"263.5124817","time":"21938.5","id":69,"endId":67,"type":"endSlide","newType":"endSlide"},{"x":"585.923584","time":"22194.5","id":70,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"22351.5","id":71,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"22526.5","id":72,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"22802.5","id":73,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"273.690094","time":"22802.5","id":74,"dTime":359.5},{"x":"273.690094","time":"23162","id":75,"endId":73,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"23454","id":76,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"23745.5","id":77,"endId":0,"type":"startSlide","newType":"tap"},{"x":"554.300415","time":"24079","id":78,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"24676","id":79,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"24973","id":80,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"25295","id":81,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25585","id":82,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25882","id":83,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"563.3875122","x2":"266.4203491","time":"25882","id":84,"dTime":383.5},{"x":"266.4203491","time":"26265.5","id":85,"endId":83,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"26514","id":86,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"26843.5","id":87,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"27150.5","id":88,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"27451","id":89,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"27746","id":90,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"28045","id":91,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.7460938","time":"28342.5","id":92,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"28649","id":93,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"28951","id":94,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"581.1983032","x2":"248.6096039","time":"28951","id":95,"dTime":357.5},{"x":"248.6096039","time":"29308.5","id":96,"endId":94,"type":"endSlide","newType":"endSlide"},{"x":"581.5618286","time":"29603","id":97,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"29871.5","id":98,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"30170","id":99,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"30479","id":100,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"30775","id":101,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.831543","time":"31081.5","id":102,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.831543","x2":"277.688385","time":"31081.5","id":103,"dTime":341.5},{"x":"277.688385","time":"31423","id":104,"endId":102,"type":"endSlide","newType":"endSlide"},{"x":"588.1044922","time":"31639","id":105,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"32021","id":106,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.925293","time":"32342.5","id":107,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"32628","id":108,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"32959","id":109,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.3792114","time":"33248.5","id":110,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"33541","id":111,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"33874.5","id":112,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"34173","id":113,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"34456","id":114,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.9268799","x2":"247.5191345","time":"34456","id":115,"dTime":1375.5},{"x":"247.5191345","time":"35831.5","id":116,"endId":114,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"36038","id":117,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"36161.5","id":118,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"36346.5","id":119,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"36511.5","id":120,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.3842773","time":"36673.5","id":121,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"36963.5","id":122,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"274.0535278","time":"36963.5","id":123,"dTime":299.5},{"x":"274.0535278","time":"37263","id":124,"endId":122,"type":"endSlide","newType":"endSlide"},{"x":"541.2149658","time":"37344.5","id":125,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"37456.5","id":126,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"37573","id":127,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"37697.5","id":128,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"37859","id":129,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"38137.5","id":130,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"231.8892975","time":"38137.5","id":131,"dTime":341},{"x":"231.8892975","time":"38478.5","id":132,"endId":130,"type":"endSlide","newType":"endSlide"},{"x":"589.921936","time":"38751.5","id":133,"endId":0,"type":"startSlide","newType":"tap"},{"x":"591.0123901","time":"38914","id":134,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"39084","id":135,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"39276","id":136,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"39425","id":137,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"39563.5","id":138,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"39734.5","id":139,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"39865","id":140,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"40022.5","id":141,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"40144.5","id":142,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"589.1949463","x2":"234.4336853","time":"40144.5","id":143,"dTime":501},{"x":"234.4336853","time":"40645.5","id":144,"endId":142,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"40924.5","id":145,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"41217.5","id":146,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"41387","id":147,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"41528","id":148,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"41664","id":149,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"41826.5","id":150,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"41978.5","id":151,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.2871094","time":"42114","id":152,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.3775635","time":"42265.5","id":153,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"42406","id":154,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"42625.5","id":155,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"580.1079102","x2":"241.3398895","time":"42625.5","id":156,"dTime":887.5},{"x":"241.3398895","time":"43513","id":157,"endId":154,"type":"endSlide","newType":"endSlide"},{"x":"600.8264771","time":"43670","id":158,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"43960","id":159,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"44246.5","id":160,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"44548.5","id":161,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"44828","id":162,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"584.8331299","x2":"249.3365631","time":"44828","id":163,"dTime":308.5},{"x":"249.3365631","time":"45136.5","id":164,"endId":162,"type":"endSlide","newType":"endSlide"},{"x":"562.6606445","time":"45226","id":165,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"45518","id":166,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"45786.5","id":167,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"46116","id":168,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"46423","id":169,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"46644","id":170,"endId":0,"type":"startSlide","newType":"tap"},{"x":"603.3709106","time":"46999.5","id":171,"endId":0,"type":"startSlide","newType":"tap"},{"x":"521.586731","time":"47335","id":172,"endId":0,"type":"startSlide","newType":"tap"},{"x":"615.7293701","time":"47650","id":173,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"47950.5","id":174,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"593.5567627","x2":"226.0735321","time":"47950.5","id":175,"dTime":615.5},{"x":"226.0735321","time":"48566","id":176,"endId":174,"type":"endSlide","newType":"endSlide"},{"x":"530.3103638","time":"48654.5","id":177,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"48913","id":178,"endId":0,"type":"startSlide","newType":"tap"},{"x":"569.5667725","time":"49210","id":179,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"49478","id":180,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"49776","id":181,"endId":0,"type":"startSlide","newType":"tap"},{"x":"564.4780273","time":"50076","id":182,"endId":0,"type":"startSlide","newType":"tap"},{"x":"560.4796143","time":"50399.5","id":183,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"50702.5","id":184,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"51008.5","id":185,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"51307","id":186,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"51644.5","id":187,"endId":0,"type":"startSlide","newType":"tap"},{"x":"567.0224609","time":"51938.5","id":188,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"52229","id":189,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.112854","time":"52514","id":190,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.8381958","time":"52831.5","id":191,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"53097.5","id":192,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"574.6555786","x2":"259.1506653","time":"53097.5","id":193,"dTime":332},{"x":"259.1506653","time":"53429.5","id":194,"endId":192,"type":"endSlide","newType":"endSlide"},{"x":"593.5567627","time":"53776.5","id":195,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"54102.5","id":196,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"54361.5","id":197,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"54637.5","id":198,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"254.7888489","time":"54637.5","id":199,"dTime":375},{"x":"254.7888489","time":"55012.5","id":200,"endId":198,"type":"endSlide","newType":"endSlide"},{"x":"588.831543","time":"55287.5","id":201,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"55428.5","id":202,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"55630.5","id":203,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"55919","id":204,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.4763184","x2":"260.2411194","time":"55919","id":205,"dTime":320.5},{"x":"260.2411194","time":"56239.5","id":206,"endId":204,"type":"endSlide","newType":"endSlide"},{"x":"589.1949463","time":"56490","id":207,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.0157471","time":"56689.5","id":208,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"56822.5","id":209,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"57116.5","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"576.1094971","x2":"258.4236755","time":"57116.5","id":211,"dTime":329.5},{"x":"258.4236755","time":"57446","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":"572.4746704","time":"57744.5","id":213,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"58044","id":214,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"58367.5","id":215,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.4713135","time":"58959.5","id":216,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.019043","time":"59113.5","id":217,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"59239.5","id":218,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"59543.5","id":219,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"248.9730835","time":"59543.5","id":220,"dTime":346},{"x":"248.9730835","time":"59889.5","id":221,"endId":219,"type":"endSlide","newType":"endSlide"},{"x":"591.3758545","time":"60159","id":222,"endId":0,"type":"startSlide","newType":"tap"},{"x":"600.4630127","time":"60289","id":223,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"60430","id":224,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"60769","id":225,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"587.0140381","x2":"266.783844","time":"60769","id":226,"dTime":348.5},{"x":"266.783844","time":"61117.5","id":227,"endId":225,"type":"endSlide","newType":"endSlide"},{"x":"568.8398438","time":"61385.5","id":228,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"61554","id":229,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"61701","id":230,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"61966","id":231,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"261.3315735","time":"61966","id":232,"dTime":366.5},{"x":"261.3315735","time":"62332.5","id":233,"endId":231,"type":"endSlide","newType":"endSlide"},{"x":"583.0157471","time":"62629","id":234,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.7476807","time":"62946","id":235,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"63250","id":236,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.2954102","time":"63857","id":237,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.017395","time":"64020","id":238,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"64167","id":239,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"64435","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"573.2016602","x2":"237.7050629","time":"64435","id":241,"dTime":361.5},{"x":"237.7050629","time":"64796.5","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":"585.1965942","time":"65062.5","id":243,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.1933594","time":"65212","id":244,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.6505737","time":"65342.5","id":245,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"65650.5","id":246,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"239.5224609","time":"65650.5","id":247,"dTime":353},{"x":"239.5224609","time":"66003.5","id":248,"endId":246,"type":"endSlide","newType":"endSlide"},{"x":"598.2820435","time":"66281","id":249,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.3742065","time":"66442.5","id":250,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.6489258","time":"66628.5","id":251,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"66897.5","id":252,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"230.4353485","time":"66897.5","id":253,"dTime":328},{"x":"230.4353485","time":"67225.5","id":254,"endId":252,"type":"endSlide","newType":"endSlide"},{"x":"579.017395","time":"67510","id":255,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"67828","id":256,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"68145.5","id":257,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"571.0206909","x2":"247.1556549","time":"68145.5","id":258,"dTime":332.5},{"x":"247.1556549","time":"68478","id":259,"endId":257,"type":"endSlide","newType":"endSlide"},{"x":"597.5551758","time":"68729.5","id":260,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"68883","id":261,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.7376709","time":"69013.5","id":262,"endId":0,"type":"startSlide","newType":"tap"},{"x":"597.1917114","time":"69322","id":263,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"597.1917114","x2":"268.6012573","time":"69322","id":264,"dTime":357},{"x":"268.6012573","time":"69679","id":265,"endId":263,"type":"endSlide","newType":"endSlide"},{"x":"596.828125","time":"69955","id":266,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"70102","id":267,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"70223.5","id":268,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.6455688","time":"70549","id":269,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"598.6455688","x2":"299.497467","time":"70549","id":270,"dTime":374.5},{"x":"299.497467","time":"70923.5","id":271,"endId":269,"type":"endSlide","newType":"endSlide"},{"x":"599.7360229","time":"71173","id":272,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.2820435","time":"71312.5","id":273,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"71427.5","id":274,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.4679565","time":"71778","id":275,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.4679565","x2":"267.1473389","time":"71778","id":276,"dTime":342.5},{"x":"267.1473389","time":"72120.5","id":277,"endId":275,"type":"endSlide","newType":"endSlide"},{"x":"584.8331299","time":"72444.5","id":278,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"72737.5","id":279,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"73041.5","id":280,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.1044922","x2":"330.7571716","time":"73041.5","id":281,"dTime":145},{"x":"330.7571716","time":"73186.5","id":282,"endId":280,"type":"endSlide","newType":"endSlide"}]`
);
var my_notes = JSON.parse(
  `[{"x":"548.1211548","time":"4635.5","id":1,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.1211548","time":"4833","id":2,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.9385986","time":"5070","id":3,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"5332","id":4,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.5701294","x2":"249.7000427","time":"5332","id":5,"dTime":377.5},{"x":"249.7000427","time":"5709.5","id":6,"endId":4,"type":"endSlide","newType":"endSlide"},{"x":"563.0240479","time":"6032.5","id":7,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"6335","id":8,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"6625","id":9,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"6917","id":10,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"7223","id":11,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"566.6588745","x2":"248.9730835","time":"7223","id":12,"dTime":353},{"x":"248.9730835","time":"7576","id":13,"endId":11,"type":"endSlide","newType":"endSlide"},{"x":"564.114563","time":"7850","id":14,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"8171.5","id":15,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"8469","id":16,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.8398438","time":"8744.5","id":17,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.8398438","x2":"303.1323242","time":"8744.5","id":18,"dTime":299.5},{"x":"303.1323242","time":"9044","id":19,"endId":17,"type":"endSlide","newType":"endSlide"},{"x":"592.4663086","time":"9352","id":20,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"9666.5","id":21,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"9977.5","id":22,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"10260.5","id":23,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"263.1489868","time":"10260.5","id":24,"dTime":367.5},{"x":"263.1489868","time":"10628","id":25,"endId":23,"type":"endSlide","newType":"endSlide"},{"x":"575.3825073","time":"10932","id":26,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"11249","id":27,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.7443237","time":"11529.5","id":28,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"11797","id":29,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"12108.5","id":30,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"271.1456604","time":"12108.5","id":31,"dTime":376},{"x":"271.1456604","time":"12484.5","id":32,"endId":30,"type":"endSlide","newType":"endSlide"},{"x":"580.8347778","time":"12766.5","id":33,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.5684204","time":"13060.5","id":34,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"13336","id":35,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.0240479","time":"13647","id":36,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"14291","id":37,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"14589","id":38,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"14869","id":39,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"15120.5","id":40,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"15420","id":41,"endId":0,"type":"startSlide","newType":"tap"},{"x":"552.1195068","time":"15750.5","id":42,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.6655273","time":"16066","id":43,"endId":0,"type":"startSlide","newType":"tap"},{"x":"555.3909302","time":"16233.5","id":44,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.2116089","time":"16403.5","id":45,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.302063","time":"16700.5","id":46,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.394165","time":"17028","id":47,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17339","id":48,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"17501.5","id":49,"endId":0,"type":"startSlide","newType":"tap"},{"x":"544.4863281","time":"17657.5","id":50,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17934","id":51,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"18238.5","id":52,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.8481445","time":"18540.5","id":53,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.4846802","time":"18855","id":54,"endId":0,"type":"startSlide","newType":"tap"},{"x":"558.2988281","time":"19125","id":55,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"558.2988281","x2":"262.0585327","time":"19125","id":56,"dTime":367},{"x":"262.0585327","time":"19492","id":57,"endId":55,"type":"endSlide","newType":"endSlide"},{"x":"573.9285889","time":"19736.5","id":58,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.2921143","time":"19934","id":59,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"20082.5","id":60,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.3825073","time":"20369","id":61,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"575.3825073","x2":"270.0552063","time":"20369","id":62,"dTime":325},{"x":"270.0552063","time":"20694","id":63,"endId":61,"type":"endSlide","newType":"endSlide"},{"x":"577.5634766","time":"20945.5","id":64,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"21112.5","id":65,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"21293.5","id":66,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"21584.5","id":67,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"572.111145","x2":"263.5124817","time":"21584.5","id":68,"dTime":354},{"x":"263.5124817","time":"21938.5","id":69,"endId":67,"type":"endSlide","newType":"endSlide"},{"x":"585.923584","time":"22194.5","id":70,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"22351.5","id":71,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"22526.5","id":72,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"22802.5","id":73,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"273.690094","time":"22802.5","id":74,"dTime":359.5},{"x":"273.690094","time":"23162","id":75,"endId":73,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"23454","id":76,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"23745.5","id":77,"endId":0,"type":"startSlide","newType":"tap"},{"x":"554.300415","time":"24079","id":78,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"24676","id":79,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"24973","id":80,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"25295","id":81,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25585","id":82,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25882","id":83,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"563.3875122","x2":"266.4203491","time":"25882","id":84,"dTime":383.5},{"x":"266.4203491","time":"26265.5","id":85,"endId":83,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"26514","id":86,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"26843.5","id":87,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"27150.5","id":88,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"27451","id":89,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"27746","id":90,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"28045","id":91,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.7460938","time":"28342.5","id":92,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"28649","id":93,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"28951","id":94,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"581.1983032","x2":"248.6096039","time":"28951","id":95,"dTime":357.5},{"x":"248.6096039","time":"29308.5","id":96,"endId":94,"type":"endSlide","newType":"endSlide"},{"x":"581.5618286","time":"29603","id":97,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"29871.5","id":98,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"30170","id":99,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"30479","id":100,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"30775","id":101,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.831543","time":"31081.5","id":102,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.831543","x2":"277.688385","time":"31081.5","id":103,"dTime":341.5},{"x":"277.688385","time":"31423","id":104,"endId":102,"type":"endSlide","newType":"endSlide"},{"x":"588.1044922","time":"31639","id":105,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"32021","id":106,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.925293","time":"32342.5","id":107,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"32628","id":108,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"32959","id":109,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.3792114","time":"33248.5","id":110,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"33541","id":111,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"33874.5","id":112,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"34173","id":113,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"34456","id":114,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.9268799","x2":"247.5191345","time":"34456","id":115,"dTime":1375.5},{"x":"247.5191345","time":"35831.5","id":116,"endId":114,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"36038","id":117,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"36161.5","id":118,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"36346.5","id":119,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"36511.5","id":120,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.3842773","time":"36673.5","id":121,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"36963.5","id":122,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"274.0535278","time":"36963.5","id":123,"dTime":299.5},{"x":"274.0535278","time":"37263","id":124,"endId":122,"type":"endSlide","newType":"endSlide"},{"x":"541.2149658","time":"37344.5","id":125,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"37456.5","id":126,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"37573","id":127,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"37697.5","id":128,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"37859","id":129,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"38137.5","id":130,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"231.8892975","time":"38137.5","id":131,"dTime":341},{"x":"231.8892975","time":"38478.5","id":132,"endId":130,"type":"endSlide","newType":"endSlide"},{"x":"589.921936","time":"38751.5","id":133,"endId":0,"type":"startSlide","newType":"tap"},{"x":"591.0123901","time":"38914","id":134,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"39084","id":135,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"39276","id":136,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"39425","id":137,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"39563.5","id":138,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"39734.5","id":139,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"39865","id":140,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"40022.5","id":141,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"40144.5","id":142,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"589.1949463","x2":"234.4336853","time":"40144.5","id":143,"dTime":501},{"x":"234.4336853","time":"40645.5","id":144,"endId":142,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"40924.5","id":145,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"41217.5","id":146,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"41387","id":147,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"41528","id":148,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"41664","id":149,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"41826.5","id":150,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"41978.5","id":151,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.2871094","time":"42114","id":152,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.3775635","time":"42265.5","id":153,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"42406","id":154,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"42625.5","id":155,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"580.1079102","x2":"241.3398895","time":"42625.5","id":156,"dTime":887.5},{"x":"241.3398895","time":"43513","id":157,"endId":154,"type":"endSlide","newType":"endSlide"},{"x":"600.8264771","time":"43670","id":158,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"43960","id":159,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"44246.5","id":160,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"44548.5","id":161,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"44828","id":162,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"584.8331299","x2":"249.3365631","time":"44828","id":163,"dTime":308.5},{"x":"249.3365631","time":"45136.5","id":164,"endId":162,"type":"endSlide","newType":"endSlide"},{"x":"562.6606445","time":"45226","id":165,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"45518","id":166,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"45786.5","id":167,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"46116","id":168,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"46423","id":169,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"46644","id":170,"endId":0,"type":"startSlide","newType":"tap"},{"x":"603.3709106","time":"46999.5","id":171,"endId":0,"type":"startSlide","newType":"tap"},{"x":"521.586731","time":"47335","id":172,"endId":0,"type":"startSlide","newType":"tap"},{"x":"615.7293701","time":"47650","id":173,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"47950.5","id":174,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"593.5567627","x2":"226.0735321","time":"47950.5","id":175,"dTime":615.5},{"x":"226.0735321","time":"48566","id":176,"endId":174,"type":"endSlide","newType":"endSlide"},{"x":"530.3103638","time":"48654.5","id":177,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"48913","id":178,"endId":0,"type":"startSlide","newType":"tap"},{"x":"569.5667725","time":"49210","id":179,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"49478","id":180,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"49776","id":181,"endId":0,"type":"startSlide","newType":"tap"},{"x":"564.4780273","time":"50076","id":182,"endId":0,"type":"startSlide","newType":"tap"},{"x":"560.4796143","time":"50399.5","id":183,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"50702.5","id":184,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"51008.5","id":185,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"51307","id":186,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"51644.5","id":187,"endId":0,"type":"startSlide","newType":"tap"},{"x":"567.0224609","time":"51938.5","id":188,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"52229","id":189,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.112854","time":"52514","id":190,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.8381958","time":"52831.5","id":191,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"53097.5","id":192,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"574.6555786","x2":"259.1506653","time":"53097.5","id":193,"dTime":332},{"x":"259.1506653","time":"53429.5","id":194,"endId":192,"type":"endSlide","newType":"endSlide"},{"x":"593.5567627","time":"53776.5","id":195,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"54102.5","id":196,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"54361.5","id":197,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"54637.5","id":198,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"254.7888489","time":"54637.5","id":199,"dTime":375},{"x":"254.7888489","time":"55012.5","id":200,"endId":198,"type":"endSlide","newType":"endSlide"},{"x":"588.831543","time":"55287.5","id":201,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"55428.5","id":202,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"55630.5","id":203,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"55919","id":204,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.4763184","x2":"260.2411194","time":"55919","id":205,"dTime":320.5},{"x":"260.2411194","time":"56239.5","id":206,"endId":204,"type":"endSlide","newType":"endSlide"},{"x":"589.1949463","time":"56490","id":207,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.0157471","time":"56689.5","id":208,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"56822.5","id":209,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"57116.5","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"576.1094971","x2":"258.4236755","time":"57116.5","id":211,"dTime":329.5},{"x":"258.4236755","time":"57446","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":"572.4746704","time":"57744.5","id":213,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"58044","id":214,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"58367.5","id":215,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.4713135","time":"58959.5","id":216,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.019043","time":"59113.5","id":217,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"59239.5","id":218,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"59543.5","id":219,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"248.9730835","time":"59543.5","id":220,"dTime":346},{"x":"248.9730835","time":"59889.5","id":221,"endId":219,"type":"endSlide","newType":"endSlide"},{"x":"591.3758545","time":"60159","id":222,"endId":0,"type":"startSlide","newType":"tap"},{"x":"600.4630127","time":"60289","id":223,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"60430","id":224,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"60769","id":225,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"587.0140381","x2":"266.783844","time":"60769","id":226,"dTime":348.5},{"x":"266.783844","time":"61117.5","id":227,"endId":225,"type":"endSlide","newType":"endSlide"},{"x":"568.8398438","time":"61385.5","id":228,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"61554","id":229,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"61701","id":230,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"61966","id":231,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"261.3315735","time":"61966","id":232,"dTime":366.5},{"x":"261.3315735","time":"62332.5","id":233,"endId":231,"type":"endSlide","newType":"endSlide"},{"x":"583.0157471","time":"62629","id":234,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.7476807","time":"62946","id":235,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"63250","id":236,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.2954102","time":"63857","id":237,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.017395","time":"64020","id":238,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"64167","id":239,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"64435","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"573.2016602","x2":"237.7050629","time":"64435","id":241,"dTime":361.5},{"x":"237.7050629","time":"64796.5","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":"585.1965942","time":"65062.5","id":243,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.1933594","time":"65212","id":244,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.6505737","time":"65342.5","id":245,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"65650.5","id":246,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"239.5224609","time":"65650.5","id":247,"dTime":353},{"x":"239.5224609","time":"66003.5","id":248,"endId":246,"type":"endSlide","newType":"endSlide"},{"x":"598.2820435","time":"66281","id":249,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.3742065","time":"66442.5","id":250,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.6489258","time":"66628.5","id":251,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"66897.5","id":252,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"230.4353485","time":"66897.5","id":253,"dTime":328},{"x":"230.4353485","time":"67225.5","id":254,"endId":252,"type":"endSlide","newType":"endSlide"},{"x":"579.017395","time":"67510","id":255,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"67828","id":256,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"68145.5","id":257,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"571.0206909","x2":"247.1556549","time":"68145.5","id":258,"dTime":332.5},{"x":"247.1556549","time":"68478","id":259,"endId":257,"type":"endSlide","newType":"endSlide"},{"x":"597.5551758","time":"68729.5","id":260,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"68883","id":261,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.7376709","time":"69013.5","id":262,"endId":0,"type":"startSlide","newType":"tap"},{"x":"597.1917114","time":"69322","id":263,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"597.1917114","x2":"268.6012573","time":"69322","id":264,"dTime":357},{"x":"268.6012573","time":"69679","id":265,"endId":263,"type":"endSlide","newType":"endSlide"},{"x":"596.828125","time":"69955","id":266,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"70102","id":267,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"70223.5","id":268,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.6455688","time":"70549","id":269,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"598.6455688","x2":"299.497467","time":"70549","id":270,"dTime":374.5},{"x":"299.497467","time":"70923.5","id":271,"endId":269,"type":"endSlide","newType":"endSlide"},{"x":"599.7360229","time":"71173","id":272,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.2820435","time":"71312.5","id":273,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"71427.5","id":274,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.4679565","time":"71778","id":275,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.4679565","x2":"267.1473389","time":"71778","id":276,"dTime":342.5},{"x":"267.1473389","time":"72120.5","id":277,"endId":275,"type":"endSlide","newType":"endSlide"},{"x":"584.8331299","time":"72444.5","id":278,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"72737.5","id":279,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"73041.5","id":280,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.1044922","x2":"330.7571716","time":"73041.5","id":281,"dTime":145},{"x":"330.7571716","time":"73186.5","id":282,"endId":280,"type":"endSlide","newType":"endSlide"}]`
);

const notesDisp = my_notesDispNew;
const notes = my_notes;

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  // const [beats, setBeats] = useState(notesDisp);
  const [streak, setStreak] = useState("");

  // console.log("Top");
  // console.log(beats);
  // console.log(list);

  console.log(acceptedList);
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
            const diffZero = diffPos(filteredTapList, filteredNotes, 0);
            console.log(filteredNotes);
            console.log(diffZero);
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[0].touch,
                quality: qualityCheck(diffZero),
                type: filteredNotes[0]?.type || "",
                tapId: filteredTapList[0].touch[0].target.id,
              },
            ]);
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
    console.log(notes);
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
      console.log(acceptedList);
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
  //   console.log(id);
  //   setBeats((prevState) => [...prevState].filter((item) => item.id !== id));
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
