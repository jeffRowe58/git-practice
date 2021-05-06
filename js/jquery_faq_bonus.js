$('#butt1').click(function (){
    $('#one').toggleClass('pic1');
    $('#one').toggleClass('pic2');
    $('#one').next().toggleClass('pic2');
    $('#one').next().toggleClass('pic1')
});
$('#butt2').click(function (){
    let random = Math.floor(Math.random() * 2);
    let array = ['pic1','pic3'];
    let res = array[random];
    $('#two').toggleClass(res);
    $('.border2').toggleClass('pic2');
    if(res === 'pic1'){
        $('#one').toggleClass('pic1');
        $('#one').toggleClass('pic2');
    }else if(res === 'pic3'){
        $('#three').toggleClass('pic3');
        $('#three').toggleClass('pic2');
    }
});
$('#butt3').click(function (){
    $('#three').toggleClass('pic3');
    $('#three').toggleClass('pic2');
    $('#three').prev().toggleClass('pic2');
    $('#three').prev().toggleClass('pic3')
});