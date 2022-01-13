function showPrice(){

    //사용자가 입력한 값을 두개의 변수에 저장하기
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#rate").value;
    

    //두 값이 음수가 아니라면 (양수이면) 실행해라
    if(oPrice > 0 && rate > 0) {
        var savedPrice = oPrice * (rate *0.01);
        var resultPrice = oPrice - savedPrice;
    }

    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " + oPrice + "원이고, 할인율은 " + rate + "% 입니다. "
    +"할인가는 " + resultPrice + "원 입니다. 총 " + savedPrice + "원을 절약했네요! 이대영바보똥꼬네요";}