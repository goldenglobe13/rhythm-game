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
  `[{"x":"548.1211548","time":"4443.5","id":1,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.1211548","time":"4641","id":2,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.9385986","time":"4878","id":3,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"5140","id":4,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"561.5701294","x2":"249.7000427","time":"5140","id":5,"dTime":377.5},{"x":"249.7000427","time":"5517.5","id":6,"endId":4,"type":"endSlide","newType":"endSlide"},{"x":"563.0240479","time":"5840.5","id":7,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"6143","id":8,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"6433","id":9,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.5701294","time":"6725","id":10,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"7031","id":11,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"566.6588745","x2":"248.9730835","time":"7031","id":12,"dTime":353},{"x":"248.9730835","time":"7384","id":13,"endId":11,"type":"endSlide","newType":"endSlide"},{"x":"564.114563","time":"7658","id":14,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"7979.5","id":15,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"8277","id":16,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.8398438","time":"8552.5","id":17,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.8398438","x2":"303.1323242","time":"8552.5","id":18,"dTime":299.5},{"x":"303.1323242","time":"8852","id":19,"endId":17,"type":"endSlide","newType":"endSlide"},{"x":"592.4663086","time":"9160","id":20,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"9474.5","id":21,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"9785.5","id":22,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"10068.5","id":23,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"263.1489868","time":"10068.5","id":24,"dTime":367.5},{"x":"263.1489868","time":"10436","id":25,"endId":23,"type":"endSlide","newType":"endSlide"},{"x":"575.3825073","time":"10740","id":26,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"11057","id":27,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.7443237","time":"11337.5","id":28,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"11605","id":29,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"11916.5","id":30,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"271.1456604","time":"11916.5","id":31,"dTime":376},{"x":"271.1456604","time":"12292.5","id":32,"endId":30,"type":"endSlide","newType":"endSlide"},{"x":"580.8347778","time":"12574.5","id":33,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.5684204","time":"12868.5","id":34,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"13144","id":35,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.0240479","time":"13455","id":36,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"14099","id":37,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"14397","id":38,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"14677","id":39,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"14928.5","id":40,"endId":0,"type":"startSlide","newType":"tap"},{"x":"557.5717773","time":"15228","id":41,"endId":0,"type":"startSlide","newType":"tap"},{"x":"552.1195068","time":"15558.5","id":42,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.6655273","time":"15874","id":43,"endId":0,"type":"startSlide","newType":"tap"},{"x":"555.3909302","time":"16041.5","id":44,"endId":0,"type":"startSlide","newType":"tap"},{"x":"549.2116089","time":"16211.5","id":45,"endId":0,"type":"startSlide","newType":"tap"},{"x":"550.302063","time":"16508.5","id":46,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.394165","time":"16836","id":47,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17147","id":48,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"17309.5","id":49,"endId":0,"type":"startSlide","newType":"tap"},{"x":"544.4863281","time":"17465.5","id":50,"endId":0,"type":"startSlide","newType":"tap"},{"x":"545.2133789","time":"17742","id":51,"endId":0,"type":"startSlide","newType":"tap"},{"x":"551.0290527","time":"18046.5","id":52,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.8481445","time":"18348.5","id":53,"endId":0,"type":"startSlide","newType":"tap"},{"x":"548.4846802","time":"18663","id":54,"endId":0,"type":"startSlide","newType":"tap"},{"x":"558.2988281","time":"18933","id":55,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"558.2988281","x2":"262.0585327","time":"18933","id":56,"dTime":367},{"x":"262.0585327","time":"19300","id":57,"endId":55,"type":"endSlide","newType":"endSlide"},{"x":"573.9285889","time":"19544.5","id":58,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.2921143","time":"19742","id":59,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"19890.5","id":60,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.3825073","time":"20177","id":61,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"575.3825073","x2":"270.0552063","time":"20177","id":62,"dTime":325},{"x":"270.0552063","time":"20502","id":63,"endId":61,"type":"endSlide","newType":"endSlide"},{"x":"577.5634766","time":"20753.5","id":64,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"20920.5","id":65,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"21101.5","id":66,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.111145","time":"21392.5","id":67,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"572.111145","x2":"263.5124817","time":"21392.5","id":68,"dTime":354},{"x":"263.5124817","time":"21746.5","id":69,"endId":67,"type":"endSlide","newType":"endSlide"},{"x":"585.923584","time":"22002.5","id":70,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"22159.5","id":71,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"22334.5","id":72,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"22610.5","id":73,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"273.690094","time":"22610.5","id":74,"dTime":359.5},{"x":"273.690094","time":"22970","id":75,"endId":73,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"23262","id":76,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"23553.5","id":77,"endId":0,"type":"startSlide","newType":"tap"},{"x":"554.300415","time":"23887","id":78,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"24484","id":79,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"24781","id":80,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"25103","id":81,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25393","id":82,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"25690","id":83,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"563.3875122","x2":"266.4203491","time":"25690","id":84,"dTime":383.5},{"x":"266.4203491","time":"26073.5","id":85,"endId":83,"type":"endSlide","newType":"endSlide"},{"x":"578.2904053","time":"26322","id":86,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"26651.5","id":87,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"26958.5","id":88,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"27259","id":89,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"27554","id":90,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"27853","id":91,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.7460938","time":"28150.5","id":92,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"28457","id":93,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"28759","id":94,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"581.1983032","x2":"248.6096039","time":"28759","id":95,"dTime":357.5},{"x":"248.6096039","time":"29116.5","id":96,"endId":94,"type":"endSlide","newType":"endSlide"},{"x":"581.5618286","time":"29411","id":97,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"29679.5","id":98,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"29978","id":99,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"30287","id":100,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"30583","id":101,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.831543","time":"30889.5","id":102,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.831543","x2":"277.688385","time":"30889.5","id":103,"dTime":341.5},{"x":"277.688385","time":"31231","id":104,"endId":102,"type":"endSlide","newType":"endSlide"},{"x":"588.1044922","time":"31447","id":105,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.2854614","time":"31829","id":106,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.925293","time":"32150.5","id":107,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"32436","id":108,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"32767","id":109,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.3792114","time":"33056.5","id":110,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"33349","id":111,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"33682.5","id":112,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"33981","id":113,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"34264","id":114,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.9268799","x2":"247.5191345","time":"34264","id":115,"dTime":1375.5},{"x":"247.5191345","time":"35639.5","id":116,"endId":114,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"35846","id":117,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"35969.5","id":118,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.1061401","time":"36154.5","id":119,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.9268799","time":"36319.5","id":120,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.3842773","time":"36481.5","id":121,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"36771.5","id":122,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"274.0535278","time":"36771.5","id":123,"dTime":299.5},{"x":"274.0535278","time":"37071","id":124,"endId":122,"type":"endSlide","newType":"endSlide"},{"x":"541.2149658","time":"37152.5","id":125,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"37264.5","id":126,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"37381","id":127,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"37505.5","id":128,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.5618286","time":"37667","id":129,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"37945.5","id":130,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"585.1965942","x2":"231.8892975","time":"37945.5","id":131,"dTime":341},{"x":"231.8892975","time":"38286.5","id":132,"endId":130,"type":"endSlide","newType":"endSlide"},{"x":"589.921936","time":"38559.5","id":133,"endId":0,"type":"startSlide","newType":"tap"},{"x":"591.0123901","time":"38722","id":134,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"38892","id":135,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"39084","id":136,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"39233","id":137,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"39371.5","id":138,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"39542.5","id":139,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.8364868","time":"39673","id":140,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"39830.5","id":141,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"39952.5","id":142,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"589.1949463","x2":"234.4336853","time":"39952.5","id":143,"dTime":501},{"x":"234.4336853","time":"40453.5","id":144,"endId":142,"type":"endSlide","newType":"endSlide"},{"x":"577.9268799","time":"40732.5","id":145,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.8347778","time":"41025.5","id":146,"endId":0,"type":"startSlide","newType":"tap"},{"x":"585.1965942","time":"41195","id":147,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"41336","id":148,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.7410278","time":"41472","id":149,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"41634.5","id":150,"endId":0,"type":"startSlide","newType":"tap"},{"x":"581.1983032","time":"41786.5","id":151,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.2871094","time":"41922","id":152,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.3775635","time":"42073.5","id":153,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"42214","id":154,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"42433.5","id":155,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"580.1079102","x2":"241.3398895","time":"42433.5","id":156,"dTime":887.5},{"x":"241.3398895","time":"43321","id":157,"endId":154,"type":"endSlide","newType":"endSlide"},{"x":"600.8264771","time":"43478","id":158,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"43768","id":159,"endId":0,"type":"startSlide","newType":"tap"},{"x":"589.1949463","time":"44054.5","id":160,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"44356.5","id":161,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"44636","id":162,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"584.8331299","x2":"249.3365631","time":"44636","id":163,"dTime":308.5},{"x":"249.3365631","time":"44944.5","id":164,"endId":162,"type":"endSlide","newType":"endSlide"},{"x":"562.6606445","time":"45034","id":165,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.7426758","time":"45326","id":166,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"45594.5","id":167,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"45924","id":168,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"46231","id":169,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.0256958","time":"46452","id":170,"endId":0,"type":"startSlide","newType":"tap"},{"x":"603.3709106","time":"46807.5","id":171,"endId":0,"type":"startSlide","newType":"tap"},{"x":"521.586731","time":"47143","id":172,"endId":0,"type":"startSlide","newType":"tap"},{"x":"615.7293701","time":"47458","id":173,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"47758.5","id":174,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"593.5567627","x2":"226.0735321","time":"47758.5","id":175,"dTime":615.5},{"x":"226.0735321","time":"48374","id":176,"endId":174,"type":"endSlide","newType":"endSlide"},{"x":"530.3103638","time":"48462.5","id":177,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"48721","id":178,"endId":0,"type":"startSlide","newType":"tap"},{"x":"569.5667725","time":"49018","id":179,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.4746704","time":"49286","id":180,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"49584","id":181,"endId":0,"type":"startSlide","newType":"tap"},{"x":"564.4780273","time":"49884","id":182,"endId":0,"type":"startSlide","newType":"tap"},{"x":"560.4796143","time":"50207.5","id":183,"endId":0,"type":"startSlide","newType":"tap"},{"x":"547.7576904","time":"50510.5","id":184,"endId":0,"type":"startSlide","newType":"tap"},{"x":"559.7526855","time":"50816.5","id":185,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.6588745","time":"51115","id":186,"endId":0,"type":"startSlide","newType":"tap"},{"x":"563.3875122","time":"51452.5","id":187,"endId":0,"type":"startSlide","newType":"tap"},{"x":"567.0224609","time":"51746.5","id":188,"endId":0,"type":"startSlide","newType":"tap"},{"x":"565.9319458","time":"52037","id":189,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.112854","time":"52322","id":190,"endId":0,"type":"startSlide","newType":"tap"},{"x":"572.8381958","time":"52639.5","id":191,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"52905.5","id":192,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"574.6555786","x2":"259.1506653","time":"52905.5","id":193,"dTime":332},{"x":"259.1506653","time":"53237.5","id":194,"endId":192,"type":"endSlide","newType":"endSlide"},{"x":"593.5567627","time":"53584.5","id":195,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"53910.5","id":196,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"54169.5","id":197,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"54445.5","id":198,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"578.2904053","x2":"254.7888489","time":"54445.5","id":199,"dTime":375},{"x":"254.7888489","time":"54820.5","id":200,"endId":198,"type":"endSlide","newType":"endSlide"},{"x":"588.831543","time":"55095.5","id":201,"endId":0,"type":"startSlide","newType":"tap"},{"x":"582.2886963","time":"55236.5","id":202,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.3808594","time":"55438.5","id":203,"endId":0,"type":"startSlide","newType":"tap"},{"x":"568.4763184","time":"55727","id":204,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"568.4763184","x2":"260.2411194","time":"55727","id":205,"dTime":320.5},{"x":"260.2411194","time":"56047.5","id":206,"endId":204,"type":"endSlide","newType":"endSlide"},{"x":"589.1949463","time":"56298","id":207,"endId":0,"type":"startSlide","newType":"tap"},{"x":"583.0157471","time":"56497.5","id":208,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.1079102","time":"56630.5","id":209,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.1094971","time":"56924.5","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"576.1094971","x2":"258.4236755","time":"56924.5","id":211,"dTime":329.5},{"x":"258.4236755","time":"57254","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":"572.4746704","time":"57552.5","id":213,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"57852","id":214,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.9285889","time":"58175.5","id":215,"endId":0,"type":"startSlide","newType":"tap"},{"x":"580.4713135","time":"58767.5","id":216,"endId":0,"type":"startSlide","newType":"tap"},{"x":"575.019043","time":"58921.5","id":217,"endId":0,"type":"startSlide","newType":"tap"},{"x":"578.2904053","time":"59047.5","id":218,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"59351.5","id":219,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"248.9730835","time":"59351.5","id":220,"dTime":346},{"x":"248.9730835","time":"59697.5","id":221,"endId":219,"type":"endSlide","newType":"endSlide"},{"x":"591.3758545","time":"59967","id":222,"endId":0,"type":"startSlide","newType":"tap"},{"x":"600.4630127","time":"60097","id":223,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.5567627","time":"60238","id":224,"endId":0,"type":"startSlide","newType":"tap"},{"x":"587.0140381","time":"60577","id":225,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"587.0140381","x2":"266.783844","time":"60577","id":226,"dTime":348.5},{"x":"266.783844","time":"60925.5","id":227,"endId":225,"type":"endSlide","newType":"endSlide"},{"x":"568.8398438","time":"61193.5","id":228,"endId":0,"type":"startSlide","newType":"tap"},{"x":"576.4729614","time":"61362","id":229,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"61509","id":230,"endId":0,"type":"startSlide","newType":"tap"},{"x":"570.2937622","time":"61774","id":231,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"570.2937622","x2":"261.3315735","time":"61774","id":232,"dTime":366.5},{"x":"261.3315735","time":"62140.5","id":233,"endId":231,"type":"endSlide","newType":"endSlide"},{"x":"583.0157471","time":"62437","id":234,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.7476807","time":"62754","id":235,"endId":0,"type":"startSlide","newType":"tap"},{"x":"561.9335938","time":"63058","id":236,"endId":0,"type":"startSlide","newType":"tap"},{"x":"566.2954102","time":"63665","id":237,"endId":0,"type":"startSlide","newType":"tap"},{"x":"579.017395","time":"63828","id":238,"endId":0,"type":"startSlide","newType":"tap"},{"x":"574.6555786","time":"63975","id":239,"endId":0,"type":"startSlide","newType":"tap"},{"x":"573.2016602","time":"64243","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"573.2016602","x2":"237.7050629","time":"64243","id":241,"dTime":361.5},{"x":"237.7050629","time":"64604.5","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":"585.1965942","time":"64870.5","id":243,"endId":0,"type":"startSlide","newType":"tap"},{"x":"593.1933594","time":"65020","id":244,"endId":0,"type":"startSlide","newType":"tap"},{"x":"586.6505737","time":"65150.5","id":245,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.1999512","time":"65458.5","id":246,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.1999512","x2":"239.5224609","time":"65458.5","id":247,"dTime":353},{"x":"239.5224609","time":"65811.5","id":248,"endId":246,"type":"endSlide","newType":"endSlide"},{"x":"598.2820435","time":"66089","id":249,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.3742065","time":"66250.5","id":250,"endId":0,"type":"startSlide","newType":"tap"},{"x":"590.6489258","time":"66436.5","id":251,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"66705.5","id":252,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"577.5634766","x2":"230.4353485","time":"66705.5","id":253,"dTime":328},{"x":"230.4353485","time":"67033.5","id":254,"endId":252,"type":"endSlide","newType":"endSlide"},{"x":"579.017395","time":"67318","id":255,"endId":0,"type":"startSlide","newType":"tap"},{"x":"577.5634766","time":"67636","id":256,"endId":0,"type":"startSlide","newType":"tap"},{"x":"571.0206909","time":"67953.5","id":257,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"571.0206909","x2":"247.1556549","time":"67953.5","id":258,"dTime":332.5},{"x":"247.1556549","time":"68286","id":259,"endId":257,"type":"endSlide","newType":"endSlide"},{"x":"597.5551758","time":"68537.5","id":260,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"68691","id":261,"endId":0,"type":"startSlide","newType":"tap"},{"x":"595.7376709","time":"68821.5","id":262,"endId":0,"type":"startSlide","newType":"tap"},{"x":"597.1917114","time":"69130","id":263,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"597.1917114","x2":"268.6012573","time":"69130","id":264,"dTime":357},{"x":"268.6012573","time":"69487","id":265,"endId":263,"type":"endSlide","newType":"endSlide"},{"x":"596.828125","time":"69763","id":266,"endId":0,"type":"startSlide","newType":"tap"},{"x":"601.9169922","time":"69910","id":267,"endId":0,"type":"startSlide","newType":"tap"},{"x":"594.2837524","time":"70031.5","id":268,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.6455688","time":"70357","id":269,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"598.6455688","x2":"299.497467","time":"70357","id":270,"dTime":374.5},{"x":"299.497467","time":"70731.5","id":271,"endId":269,"type":"endSlide","newType":"endSlide"},{"x":"599.7360229","time":"70981","id":272,"endId":0,"type":"startSlide","newType":"tap"},{"x":"598.2820435","time":"71120.5","id":273,"endId":0,"type":"startSlide","newType":"tap"},{"x":"592.4663086","time":"71235.5","id":274,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.4679565","time":"71586","id":275,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.4679565","x2":"267.1473389","time":"71586","id":276,"dTime":342.5},{"x":"267.1473389","time":"71928.5","id":277,"endId":275,"type":"endSlide","newType":"endSlide"},{"x":"584.8331299","time":"72252.5","id":278,"endId":0,"type":"startSlide","newType":"tap"},{"x":"584.8331299","time":"72545.5","id":279,"endId":0,"type":"startSlide","newType":"tap"},{"x":"588.1044922","time":"72849.5","id":280,"endId":0,"type":"startSlide","newType":"startSlide"},{"h":true,"x1":"588.1044922","x2":"330.7571716","time":"72849.5","id":281,"dTime":145},{"x":"330.7571716","time":"72994.5","id":282,"endId":280,"type":"endSlide","newType":"endSlide"}]`
);
var my_notes = JSON.parse(
  `[{"x":530.7441635131836,"time":"4443.5","id":1,"endId":0,"type":"tap","newType":"tap"},{"x":530.7441635131836,"time":"4641","id":2,"endId":0,"type":"tap","newType":"tap"},{"x":532.207633972168,"time":"4878","id":3,"endId":0,"type":"tap","newType":"tap"},{"x":541.5297470092773,"time":"5140","id":4,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":282.08167266845703,"time":"5517.5","id":6,"endId":4,"type":"endSlide","newType":"endSlide"},{"x":542.692497253418,"time":"5840.5","id":7,"endId":0,"type":"tap","newType":"tap"},{"x":545.0280227661133,"time":"6143","id":8,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"6433","id":9,"endId":0,"type":"tap","newType":"tap"},{"x":541.5297470092773,"time":"6725","id":10,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"7031","id":11,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":281.4902648925781,"time":"7384","id":13,"endId":11,"type":"endSlide","newType":"endSlide"},{"x":543.574592590332,"time":"7658","id":14,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"7979.5","id":15,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"8277","id":16,"endId":0,"type":"tap","newType":"tap"},{"x":547.3636093139648,"time":"8552.5","id":17,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":324.9233093261719,"time":"8852","id":19,"endId":17,"type":"endSlide","newType":"endSlide"},{"x":566.3085327148438,"time":"9160","id":20,"endId":0,"type":"tap","newType":"tap"},{"x":557.5577774047852,"time":"9474.5","id":21,"endId":0,"type":"tap","newType":"tap"},{"x":549.9797821044922,"time":"9785.5","id":22,"endId":0,"type":"tap","newType":"tap"},{"x":548.5263519287109,"time":"10068.5","id":23,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":292.8572311401367,"time":"10436","id":25,"endId":23,"type":"endSlide","newType":"endSlide"},{"x":552.6060180664062,"time":"10740","id":26,"endId":0,"type":"tap","newType":"tap"},{"x":560.4746856689453,"time":"11057","id":27,"endId":0,"type":"tap","newType":"tap"},{"x":556.1042938232422,"time":"11337.5","id":28,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"11605","id":29,"endId":0,"type":"tap","newType":"tap"},{"x":560.4746856689453,"time":"11916.5","id":30,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":299.27245330810547,"time":"12292.5","id":32,"endId":30,"type":"endSlide","newType":"endSlide"},{"x":556.9764099121094,"time":"12574.5","id":33,"endId":0,"type":"tap","newType":"tap"},{"x":544.7373580932617,"time":"12868.5","id":34,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"13144","id":35,"endId":0,"type":"tap","newType":"tap"},{"x":542.692497253418,"time":"13455","id":36,"endId":0,"type":"tap","newType":"tap"},{"x":533.0796890258789,"time":"14099","id":37,"endId":0,"type":"tap","newType":"tap"},{"x":538.322135925293,"time":"14397","id":38,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"14677","id":39,"endId":0,"type":"tap","newType":"tap"},{"x":539.4949188232422,"time":"14928.5","id":40,"endId":0,"type":"tap","newType":"tap"},{"x":538.322135925293,"time":"15228","id":41,"endId":0,"type":"tap","newType":"tap"},{"x":533.9517440795898,"time":"15558.5","id":42,"endId":0,"type":"tap","newType":"tap"},{"x":532.7890014648438,"time":"15874","id":43,"endId":0,"type":"tap","newType":"tap"},{"x":536.577995300293,"time":"16041.5","id":44,"endId":0,"type":"tap","newType":"tap"},{"x":531.6162261962891,"time":"16211.5","id":45,"endId":0,"type":"tap","newType":"tap"},{"x":532.4982833862305,"time":"16508.5","id":46,"endId":0,"type":"tap","newType":"tap"},{"x":530.1627655029297,"time":"16836","id":47,"endId":0,"type":"tap","newType":"tap"},{"x":528.4186477661133,"time":"17147","id":48,"endId":0,"type":"tap","newType":"tap"},{"x":530.453483581543,"time":"17309.5","id":49,"endId":0,"type":"tap","newType":"tap"},{"x":527.8272323608398,"time":"17465.5","id":50,"endId":0,"type":"tap","newType":"tap"},{"x":528.4186477661133,"time":"17742","id":51,"endId":0,"type":"tap","newType":"tap"},{"x":533.0796890258789,"time":"18046.5","id":52,"endId":0,"type":"tap","newType":"tap"},{"x":531.3255310058594,"time":"18348.5","id":53,"endId":0,"type":"tap","newType":"tap"},{"x":531.0348434448242,"time":"18663","id":54,"endId":0,"type":"tap","newType":"tap"},{"x":538.9035034179688,"time":"18933","id":55,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":291.9851760864258,"time":"19300","id":57,"endId":55,"type":"endSlide","newType":"endSlide"},{"x":551.4432754516602,"time":"19544.5","id":58,"endId":0,"type":"tap","newType":"tap"},{"x":551.7339630126953,"time":"19742","id":59,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"19890.5","id":60,"endId":0,"type":"tap","newType":"tap"},{"x":552.6060180664062,"time":"20177","id":61,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":298.400390625,"time":"20502","id":63,"endId":61,"type":"endSlide","newType":"endSlide"},{"x":554.3601760864258,"time":"20753.5","id":64,"endId":0,"type":"tap","newType":"tap"},{"x":553.7687606811523,"time":"20920.5","id":65,"endId":0,"type":"tap","newType":"tap"},{"x":550.8618698120117,"time":"21101.5","id":66,"endId":0,"type":"tap","newType":"tap"},{"x":549.9797821044922,"time":"21392.5","id":67,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":293.14791107177734,"time":"21746.5","id":69,"endId":67,"type":"endSlide","newType":"endSlide"},{"x":561.0560531616211,"time":"22002.5","id":70,"endId":0,"type":"tap","newType":"tap"},{"x":561.9381790161133,"time":"22159.5","id":71,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"22334.5","id":72,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"22610.5","id":73,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":301.3173065185547,"time":"22970","id":75,"endId":73,"type":"endSlide","newType":"endSlide"},{"x":554.9415512084961,"time":"23262","id":76,"endId":0,"type":"tap","newType":"tap"},{"x":545.0280227661133,"time":"23553.5","id":77,"endId":0,"type":"tap","newType":"tap"},{"x":535.7059326171875,"time":"23887","id":78,"endId":0,"type":"tap","newType":"tap"},{"x":540.076286315918,"time":"24484","id":79,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"24781","id":80,"endId":0,"type":"tap","newType":"tap"},{"x":540.076286315918,"time":"25103","id":81,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"25393","id":82,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"25690","id":83,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":295.4834671020508,"time":"26073.5","id":85,"endId":83,"type":"endSlide","newType":"endSlide"},{"x":554.9415512084961,"time":"26322","id":86,"endId":0,"type":"tap","newType":"tap"},{"x":553.7687606811523,"time":"26651.5","id":87,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"26958.5","id":88,"endId":0,"type":"tap","newType":"tap"},{"x":540.076286315918,"time":"27259","id":89,"endId":0,"type":"tap","newType":"tap"},{"x":551.4432754516602,"time":"27554","id":90,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"27853","id":91,"endId":0,"type":"tap","newType":"tap"},{"x":552.8967056274414,"time":"28150.5","id":92,"endId":0,"type":"tap","newType":"tap"},{"x":553.7687606811523,"time":"28457","id":93,"endId":0,"type":"tap","newType":"tap"},{"x":557.2670593261719,"time":"28759","id":94,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":281.19957733154297,"time":"29116.5","id":96,"endId":94,"type":"endSlide","newType":"endSlide"},{"x":557.5577774047852,"time":"29411","id":97,"endId":0,"type":"tap","newType":"tap"},{"x":556.3950119018555,"time":"29679.5","id":98,"endId":0,"type":"tap","newType":"tap"},{"x":548.5263519287109,"time":"29978","id":99,"endId":0,"type":"tap","newType":"tap"},{"x":564.5543746948242,"time":"30287","id":100,"endId":0,"type":"tap","newType":"tap"},{"x":556.9764099121094,"time":"30583","id":101,"endId":0,"type":"tap","newType":"tap"},{"x":563.3916091918945,"time":"30889.5","id":102,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":304.52491760253906,"time":"31231","id":104,"endId":102,"type":"endSlide","newType":"endSlide"},{"x":562.8102340698242,"time":"31447","id":105,"endId":0,"type":"tap","newType":"tap"},{"x":564.5543746948242,"time":"31829","id":106,"endId":0,"type":"tap","newType":"tap"},{"x":557.8584747314453,"time":"32150.5","id":107,"endId":0,"type":"tap","newType":"tap"},{"x":557.5577774047852,"time":"32436","id":108,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"32767","id":109,"endId":0,"type":"tap","newType":"tap"},{"x":559.0212554931641,"time":"33056.5","id":110,"endId":0,"type":"tap","newType":"tap"},{"x":559.3119354248047,"time":"33349","id":111,"endId":0,"type":"tap","newType":"tap"},{"x":559.6026229858398,"time":"33682.5","id":112,"endId":0,"type":"tap","newType":"tap"},{"x":553.7687606811523,"time":"33981","id":113,"endId":0,"type":"tap","newType":"tap"},{"x":554.6508636474609,"time":"34264","id":114,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":280.32750701904297,"time":"35639.5","id":116,"endId":114,"type":"endSlide","newType":"endSlide"},{"x":554.6508636474609,"time":"35846","id":117,"endId":0,"type":"tap","newType":"tap"},{"x":558.1491928100586,"time":"35969.5","id":118,"endId":0,"type":"tap","newType":"tap"},{"x":559.6026229858398,"time":"36154.5","id":119,"endId":0,"type":"tap","newType":"tap"},{"x":554.6508636474609,"time":"36319.5","id":120,"endId":0,"type":"tap","newType":"tap"},{"x":549.3984069824219,"time":"36481.5","id":121,"endId":0,"type":"tap","newType":"tap"},{"x":554.9415512084961,"time":"36771.5","id":122,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":301.6079788208008,"time":"37071","id":124,"endId":122,"type":"endSlide","newType":"endSlide"},{"x":525.2110061645508,"time":"37152.5","id":125,"endId":0,"type":"tap","newType":"tap"},{"x":560.1840209960938,"time":"37264.5","id":126,"endId":0,"type":"tap","newType":"tap"},{"x":562.5195465087891,"time":"37381","id":127,"endId":0,"type":"tap","newType":"tap"},{"x":566.3085327148438,"time":"37505.5","id":128,"endId":0,"type":"tap","newType":"tap"},{"x":557.5577774047852,"time":"37667","id":129,"endId":0,"type":"tap","newType":"tap"},{"x":560.4746856689453,"time":"37945.5","id":130,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":267.7977828979492,"time":"38286.5","id":132,"endId":130,"type":"endSlide","newType":"endSlide"},{"x":564.2636947631836,"time":"38559.5","id":133,"endId":0,"type":"tap","newType":"tap"},{"x":565.1357574462891,"time":"38722","id":134,"endId":0,"type":"tap","newType":"tap"},{"x":561.9381790161133,"time":"38892","id":135,"endId":0,"type":"tap","newType":"tap"},{"x":563.6822967529297,"time":"39084","id":136,"endId":0,"type":"tap","newType":"tap"},{"x":553.1874237060547,"time":"39233","id":137,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"39371.5","id":138,"endId":0,"type":"tap","newType":"tap"},{"x":554.9415512084961,"time":"39542.5","id":139,"endId":0,"type":"tap","newType":"tap"},{"x":553.7687606811523,"time":"39673","id":140,"endId":0,"type":"tap","newType":"tap"},{"x":553.4781112670898,"time":"39830.5","id":141,"endId":0,"type":"tap","newType":"tap"},{"x":563.6822967529297,"time":"39952.5","id":142,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":269.8326110839844,"time":"40453.5","id":144,"endId":142,"type":"endSlide","newType":"endSlide"},{"x":554.6508636474609,"time":"40732.5","id":145,"endId":0,"type":"tap","newType":"tap"},{"x":556.9764099121094,"time":"41025.5","id":146,"endId":0,"type":"tap","newType":"tap"},{"x":560.4746856689453,"time":"41195","id":147,"endId":0,"type":"tap","newType":"tap"},{"x":563.6822967529297,"time":"41336","id":148,"endId":0,"type":"tap","newType":"tap"},{"x":562.5195465087891,"time":"41472","id":149,"endId":0,"type":"tap","newType":"tap"},{"x":554.3601760864258,"time":"41634.5","id":150,"endId":0,"type":"tap","newType":"tap"},{"x":557.2670593261719,"time":"41786.5","id":151,"endId":0,"type":"tap","newType":"tap"},{"x":561.3467636108398,"time":"41922","id":152,"endId":0,"type":"tap","newType":"tap"},{"x":562.2288665771484,"time":"42073.5","id":153,"endId":0,"type":"tap","newType":"tap"},{"x":561.9381790161133,"time":"42214","id":154,"endId":0,"type":"tap","newType":"tap"},{"x":556.3950119018555,"time":"42433.5","id":155,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":275.3757553100586,"time":"43321","id":157,"endId":154,"type":"endSlide","newType":"endSlide"},{"x":573.0144500732422,"time":"43478","id":158,"endId":0,"type":"tap","newType":"tap"},{"x":567.761962890625,"time":"43768","id":159,"endId":0,"type":"tap","newType":"tap"},{"x":563.6822967529297,"time":"44054.5","id":160,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"44356.5","id":161,"endId":0,"type":"tap","newType":"tap"},{"x":560.1840209960938,"time":"44636","id":162,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":281.7809524536133,"time":"44944.5","id":164,"endId":162,"type":"endSlide","newType":"endSlide"},{"x":542.4018020629883,"time":"45034","id":165,"endId":0,"type":"tap","newType":"tap"},{"x":559.3119354248047,"time":"45326","id":166,"endId":0,"type":"tap","newType":"tap"},{"x":562.8102340698242,"time":"45594.5","id":167,"endId":0,"type":"tap","newType":"tap"},{"x":550.2705001831055,"time":"45924","id":168,"endId":0,"type":"tap","newType":"tap"},{"x":562.8102340698242,"time":"46231","id":169,"endId":0,"type":"tap","newType":"tap"},{"x":539.4949188232422,"time":"46452","id":170,"endId":0,"type":"tap","newType":"tap"},{"x":575.0492782592773,"time":"46807.5","id":171,"endId":0,"type":"tap","newType":"tap"},{"x":509.4636459350586,"time":"47143","id":172,"endId":0,"type":"tap","newType":"tap"},{"x":584.9628067016602,"time":"47458","id":173,"endId":0,"type":"tap","newType":"tap"},{"x":567.1806259155273,"time":"47758.5","id":174,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":263.1266860961914,"time":"48374","id":176,"endId":174,"type":"endSlide","newType":"endSlide"},{"x":516.4602508544922,"time":"48462.5","id":177,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"48721","id":178,"endId":0,"type":"tap","newType":"tap"},{"x":547.9449462890625,"time":"49018","id":179,"endId":0,"type":"tap","newType":"tap"},{"x":550.2705001831055,"time":"49286","id":180,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"49584","id":181,"endId":0,"type":"tap","newType":"tap"},{"x":543.8652801513672,"time":"49884","id":182,"endId":0,"type":"tap","newType":"tap"},{"x":540.6576614379883,"time":"50207.5","id":183,"endId":0,"type":"tap","newType":"tap"},{"x":530.453483581543,"time":"50510.5","id":184,"endId":0,"type":"tap","newType":"tap"},{"x":540.076286315918,"time":"50816.5","id":185,"endId":0,"type":"tap","newType":"tap"},{"x":545.6094207763672,"time":"51115","id":186,"endId":0,"type":"tap","newType":"tap"},{"x":542.9932174682617,"time":"51452.5","id":187,"endId":0,"type":"tap","newType":"tap"},{"x":545.9001083374023,"time":"51746.5","id":188,"endId":0,"type":"tap","newType":"tap"},{"x":545.0280227661133,"time":"52037","id":189,"endId":0,"type":"tap","newType":"tap"},{"x":546.7822036743164,"time":"52322","id":190,"endId":0,"type":"tap","newType":"tap"},{"x":550.5711898803711,"time":"52639.5","id":191,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"52905.5","id":192,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":289.6596450805664,"time":"53237.5","id":194,"endId":192,"type":"endSlide","newType":"endSlide"},{"x":567.1806259155273,"time":"53584.5","id":195,"endId":0,"type":"tap","newType":"tap"},{"x":556.3950119018555,"time":"53910.5","id":196,"endId":0,"type":"tap","newType":"tap"},{"x":553.1874237060547,"time":"54169.5","id":197,"endId":0,"type":"tap","newType":"tap"},{"x":554.9415512084961,"time":"54445.5","id":198,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":286.1613464355469,"time":"54820.5","id":200,"endId":198,"type":"endSlide","newType":"endSlide"},{"x":563.3916091918945,"time":"55095.5","id":201,"endId":0,"type":"tap","newType":"tap"},{"x":558.1491928100586,"time":"55236.5","id":202,"endId":0,"type":"tap","newType":"tap"},{"x":555.8136291503906,"time":"55438.5","id":203,"endId":0,"type":"tap","newType":"tap"},{"x":547.0729217529297,"time":"55727","id":204,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":290.53172302246094,"time":"56047.5","id":206,"endId":204,"type":"endSlide","newType":"endSlide"},{"x":563.6822967529297,"time":"56298","id":207,"endId":0,"type":"tap","newType":"tap"},{"x":558.7305374145508,"time":"56497.5","id":208,"endId":0,"type":"tap","newType":"tap"},{"x":556.3950119018555,"time":"56630.5","id":209,"endId":0,"type":"tap","newType":"tap"},{"x":553.1874237060547,"time":"56924.5","id":210,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":289.0682373046875,"time":"57254","id":212,"endId":210,"type":"endSlide","newType":"endSlide"},{"x":550.2705001831055,"time":"57552.5","id":213,"endId":0,"type":"tap","newType":"tap"},{"x":551.4432754516602,"time":"57852","id":214,"endId":0,"type":"tap","newType":"tap"},{"x":551.4432754516602,"time":"58175.5","id":215,"endId":0,"type":"tap","newType":"tap"},{"x":556.6856918334961,"time":"58767.5","id":216,"endId":0,"type":"tap","newType":"tap"},{"x":552.315299987793,"time":"58921.5","id":217,"endId":0,"type":"tap","newType":"tap"},{"x":554.9415512084961,"time":"59047.5","id":218,"endId":0,"type":"tap","newType":"tap"},{"x":554.3601760864258,"time":"59351.5","id":219,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":281.4902648925781,"time":"59697.5","id":221,"endId":219,"type":"endSlide","newType":"endSlide"},{"x":565.4364547729492,"time":"59967","id":222,"endId":0,"type":"tap","newType":"tap"},{"x":572.7237319946289,"time":"60097","id":223,"endId":0,"type":"tap","newType":"tap"},{"x":567.1806259155273,"time":"60238","id":224,"endId":0,"type":"tap","newType":"tap"},{"x":561.9381790161133,"time":"60577","id":225,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":295.7741470336914,"time":"60925.5","id":227,"endId":225,"type":"endSlide","newType":"endSlide"},{"x":547.3636093139648,"time":"61193.5","id":228,"endId":0,"type":"tap","newType":"tap"},{"x":553.4781112670898,"time":"61362","id":229,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"61509","id":230,"endId":0,"type":"tap","newType":"tap"},{"x":548.5263519287109,"time":"61774","id":231,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":291.4037780761719,"time":"62140.5","id":233,"endId":231,"type":"endSlide","newType":"endSlide"},{"x":558.7305374145508,"time":"62437","id":234,"endId":0,"type":"tap","newType":"tap"},{"x":549.689094543457,"time":"62754","id":235,"endId":0,"type":"tap","newType":"tap"},{"x":541.8204345703125,"time":"63058","id":236,"endId":0,"type":"tap","newType":"tap"},{"x":545.3187408447266,"time":"63665","id":237,"endId":0,"type":"tap","newType":"tap"},{"x":555.52294921875,"time":"63828","id":238,"endId":0,"type":"tap","newType":"tap"},{"x":552.0246505737305,"time":"63975","id":239,"endId":0,"type":"tap","newType":"tap"},{"x":550.8618698120117,"time":"64243","id":240,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":272.4588317871094,"time":"64604.5","id":242,"endId":240,"type":"endSlide","newType":"endSlide"},{"x":560.4746856689453,"time":"64870.5","id":243,"endId":0,"type":"tap","newType":"tap"},{"x":566.8899383544922,"time":"65020","id":244,"endId":0,"type":"tap","newType":"tap"},{"x":561.6474609375,"time":"65150.5","id":245,"endId":0,"type":"tap","newType":"tap"},{"x":554.0594482421875,"time":"65458.5","id":246,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":273.9122848510742,"time":"65811.5","id":248,"endId":246,"type":"endSlide","newType":"endSlide"},{"x":570.9695739746094,"time":"66089","id":249,"endId":0,"type":"tap","newType":"tap"},{"x":568.6340560913086,"time":"66250.5","id":250,"endId":0,"type":"tap","newType":"tap"},{"x":564.8450393676758,"time":"66436.5","id":251,"endId":0,"type":"tap","newType":"tap"},{"x":554.3601760864258,"time":"66705.5","id":252,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":266.62499237060547,"time":"67033.5","id":254,"endId":252,"type":"endSlide","newType":"endSlide"},{"x":555.52294921875,"time":"67318","id":255,"endId":0,"type":"tap","newType":"tap"},{"x":554.3601760864258,"time":"67636","id":256,"endId":0,"type":"tap","newType":"tap"},{"x":549.1077194213867,"time":"67953.5","id":257,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":280.0368118286133,"time":"68286","id":259,"endId":257,"type":"endSlide","newType":"endSlide"},{"x":570.3882064819336,"time":"68537.5","id":260,"endId":0,"type":"tap","newType":"tap"},{"x":573.8865356445312,"time":"68691","id":261,"endId":0,"type":"tap","newType":"tap"},{"x":568.9347763061523,"time":"68821.5","id":262,"endId":0,"type":"tap","newType":"tap"},{"x":570.097526550293,"time":"69130","id":263,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":297.23763275146484,"time":"69487","id":265,"endId":263,"type":"endSlide","newType":"endSlide"},{"x":569.8068084716797,"time":"69763","id":266,"endId":0,"type":"tap","newType":"tap"},{"x":573.8865356445312,"time":"69910","id":267,"endId":0,"type":"tap","newType":"tap"},{"x":567.761962890625,"time":"70031.5","id":268,"endId":0,"type":"tap","newType":"tap"},{"x":571.2602920532227,"time":"70357","id":269,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":322.00640869140625,"time":"70731.5","id":271,"endId":269,"type":"endSlide","newType":"endSlide"},{"x":572.1323547363281,"time":"70981","id":272,"endId":0,"type":"tap","newType":"tap"},{"x":570.9695739746094,"time":"71120.5","id":273,"endId":0,"type":"tap","newType":"tap"},{"x":566.3085327148438,"time":"71235.5","id":274,"endId":0,"type":"tap","newType":"tap"},{"x":563.1009216308594,"time":"71586","id":275,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":296.0648498535156,"time":"71928.5","id":277,"endId":275,"type":"endSlide","newType":"endSlide"},{"x":560.1840209960938,"time":"72252.5","id":278,"endId":0,"type":"tap","newType":"tap"},{"x":560.1840209960938,"time":"72545.5","id":279,"endId":0,"type":"tap","newType":"tap"},{"x":562.8102340698242,"time":"72849.5","id":280,"endId":0,"type":"startSlide","newType":"startSlide"},{"x":347.07586669921875,"time":"72994.5","id":282,"endId":280,"type":"endSlide","newType":"endSlide"}]`
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
