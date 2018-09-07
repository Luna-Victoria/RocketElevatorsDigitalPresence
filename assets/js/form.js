/**	SUBMISSION FORM HIDE PART
*************************************************** **/
  function showHideBuildingDetail(elem){
   if(elem.value =='0') {
      document.getElementById('residential-details').style.display = "block";
      document.getElementById('commercial-details').style.display = "none";
      document.getElementById('corporate-details').style.display = "none";
      document.getElementById('hybride-details').style.display = "none";
}
    if(elem.value =='1') {
      document.getElementById('residential-details').style.display = "none";
      document.getElementById('commercial-details').style.display = "block";
      document.getElementById('corporate-details').style.display = "none";
      document.getElementById('hybride-details').style.display = "none";
}

  if(elem.value =='2') {
      document.getElementById('residential-details').style.display = "none";
      document.getElementById('commercial-details').style.display = "none";
      document.getElementById('corporate-details').style.display = "block";
      document.getElementById('hybride-details').style.display = "none";
}

    if(elem.value =='3') {
    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "block";
}


    if(elem.value =='none') {
    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "none";
}
};



/**	SUBMISSION FORM MATH
*************************************************** **/
function takeValue() {

/** -------------- commercial ---------------------**/

/** calculation Number Escalators **/

  var ComEsc = document.getElementById('commercial-Esc-total');
  var ComNumEsc = document.getElementById('commercial-escalator-num');
  ComEsc.value = ComNumEsc.value;


/** calculation price **/
  var ComInst;
  var ComPrise;
  var ComRadio = document.getElementsByName('commercial-radio');
  if (ComRadio[0].checked) {
    ComPrise = ComRadio[0].value * ComEsc.value
    ComInst = 1.10
  } else if (ComRadio[1].checked) {
    ComPrise = ComRadio[1].value * ComEsc.value
    ComInst = 1.13
  } else if (ComRadio[2].checked) {
    ComPrise = ComRadio[2].value * ComEsc.value
    ComInst = 1.6
  }
  var ComTotal = ComPrise * ComInst;
  document.getElementById('commercial-total-estimate').value = ComTotal.toFixed(2);


/** --------------- residential -------------------- **/

/** calculation Number Escalators **/
    var ResNumApp = (document.getElementById('residen-app-num').value);
    var ResNumFlo = (document.getElementById('residen-floor-num').value);
    var Div = ResNumApp / ResNumFlo;
    var Ave = Math.ceil(Div / 6);
    var FloCheck = Math.ceil(ResNumFlo / 20);
    var ResEsc = Ave * FloCheck;

    document.getElementById('residential-total').value = ResEsc;


/** calculation price **/
    var ResInst;
    var ResPrise;
    var ResRadio = document.getElementsByName('residential-radio');
    if (ResRadio[0].checked) {
      ResPrise = ResRadio[0].value * ResEsc
      ResInst = 1.10
    } else if (ResRadio[1].checked) {
      ResPrise = ResRadio[1].value * ResEsc
      ResInst = 1.13
    } else if (ResRadio[2].checked) {
      ResPrise = ResRadio[2].value * ResEsc
      ResInst = 1.6
    }
    var ResTotal = ResPrise * ResInst;
    document.getElementById('residential-total-estimate').value = ResTotal.toFixed(2);



      /** ------------------- corporate -------------------- **/

      var CorpSum = Number(document.getElementById('corp-num-flo').value) +
      Number(document.getElementById('corp-num-base').value);
      var CorpOcpTotal = CorpSum *
      Number(document.getElementById('corp-num-occupant').value);
      var CorpEsc = CorpOcpTotal / 1000;
      var CorpNumCol = Math.ceil(CorpSum / 20);

      var CorpEscTotal = CorpEsc / CorpNumCol;

      document.getElementById('corporate-total').value = Math.ceil(CorpEscTotal);

/** calculation price **/
      var CorpInst; /** instalation **/
      var CorpPrise; /** valeur des ascensseur **/
      var CorpRadio = document.getElementsByName('corporate-radio');
      if (CorpRadio[0].checked) {
        CorpPrise = CorpRadio[0].value * CorpEscTotal
        CorpInst = 1.10
      } else if (CorpRadio[1].checked) {
        CorpPrise = CorpRadio[1].value * CorpEscTotal
        CorpInst = 1.13
      } else if (CorpRadio[2].checked) {
        CorpPrise = CorpRadio[2].value * CorpEscTotal
        CorpInst = 1.6
      }
      var CorpTotal = CorpPrise * CorpInst;
      document.getElementById('corporate-total-estimate').value = CorpTotal.toFixed(2);


      /** ------------------- hybride -------------------- **/

      var HybSum = Number(document.getElementById('hyb-num-flo').value) +
      Number(document.getElementById('hyb-num-base').value);
      var HybOcpTotal = HybSum *
      Number(document.getElementById('hyb-num-occupant').value);
      var HybEsc = HybOcpTotal / 1000;
      var HybNumCol = Math.ceil(HybSum / 20);
      var HybEscTotal = HybEsc / HybNumCol;
      document.getElementById('hybride-total').value = Math.ceil(HybEscTotal);


/** calculation price **/
      var HybInst;
      var HybPrise;
      var HybRadio = document.getElementsByName('hybride-radio');
      if (HybRadio[0].checked) {
        HybPrise = HybRadio[0].value * HybEscTotal
        HybInst = 1.10
      } else if (HybRadio[1].checked) {
        HybPrise = HybRadio[1].value * HybEscTotal
        HybInst = 1.13
      } else if (HybRadio[2].checked) {
        HybPrise = HybRadio[2].value * HybEscTotal
        HybInst = 1.6
      }
      var HybTotal = HybPrise * HybInst;
      document.getElementById('hybride-total-estimate').value = HybTotal.toFixed(2);


};
