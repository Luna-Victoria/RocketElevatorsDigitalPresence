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
Number.isNaN = function (value) {
        return typeof value === 'number' && isNaN(value);
    };


function takeValue() {

  document.getElementById('commercial-total').value =
  document.getElementById('commercial-escalator-num').value;

/** ---------------------------------------------- **/

/** division **/
    var div = Number(document.getElementById('residen-app-num').value) /
    Number(document.getElementById('residen-floor-num').value);

/** division **/
    var val = Math.ceil(div / 6);


/** multiplication **/
    var mult = Math.ceil(val * 2);


/** plus ou mois 20 **/
    var PlusMinus;

      if (document.getElementById('residen-floor-num').value > 20 ) {

        PlusMinus = mult;

      } else {
        PlusMinus = val;

      }

      document.getElementById('residential-total').value = PlusMinus;


      /** ---------------------------------------------------- **/

      var sum = Number(document.getElementById('corp-num-flo').value) +
      Number(document.getElementById('corp-num-base').value);

      var OcpTotal = sum *
      Number(document.getElementById('corp-num-occupant').value);

      var CorpEsc = OcpTotal / 1000;

      var NumCol = sum / 20;

      var EscTotal = CorpEsc / NumCol;

      document.getElementById('corporate-total').value = Math.ceil(EscTotal);


};
