$(function() {

    var count = 1;

    $("#addBtn").on("click", function(){
        let divtest = "<div class='addDiv' id='div" + count + "'>" + "</div>"
        $('.div').append(divtest);
        $('#div' + count).height(100).width(100);
        count++;
    });

    $(document).on('click', '.addDiv' , function() {
        let tmpid = $(this).attr("id");
        console.log(tmpid);
        let nowAngle = getRotationDegrees($("#" + tmpid));
        let pulsAngle = nowAngle + 10;
        $("#" + tmpid).css( { transform: "rotate(" + pulsAngle + "deg)" });
    });

//    $(document).on('click', '.div1' , function() {
//        console.log("div Click");
//        $(this).remove();
//    });


    function getRotationDegrees(obj) {
        var matrix = obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        if (angle < 0) {
            angle = angle + 360;
        }
        return angle;
    }
});