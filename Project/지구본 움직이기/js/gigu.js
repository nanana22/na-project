$(document).ready(function(){
    //지구 이미지 웹요소(노드) 찾아서 저장
    var $gigu = $("#gigu");

    //버튼에 이벤트 등록: (5초만에 왼쪽으로 480px만큼 이동)
    //요소.animate(): 애니메이션하는 함수
    $("#btnStart").click(function(){ 
        $gigu.animate({
            left : "480px"
        }, 5000);
    })//버튼을 클릭하면 콜백함수가 실행된다.
})