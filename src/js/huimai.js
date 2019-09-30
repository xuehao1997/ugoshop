
$('.sysp').hover(function () {//鼠标移入导航‘在售分类’：显示二级导航
    //移入显示
    $('.qb_fl').css('display', 'block');
}, function () {
    //移出隐藏
    $('.qb_fl').css('display', 'none');

});

$('.qb_fl').hover(function () {//移出导航，移入二级列表时，二级列表不能消失
    $('.qb_fl').css('display', 'block');
}, function () {
    $('.qb_fl').css('display', 'none');
});


//轮播图
$('.banner').hover(function () {//鼠标移入banner图
    // $('#next').css('display','block');
    $('#next').show(300);
    $('#prev').show(300);
    clearInterval(timer);
}, function () {
    // $('#next').css('display','none');
    $('#next').hide(300);
    $('#prev').hide(300);
    timer = setInterval(function () {
        $index++;
        if ($index > 1) {
            $index = 0;
            $previndex = 1;
        }
        $oImg.eq($previndex).animate({//运动：从右往左
            left: -$widthImg
        });
        $oImg.eq($index).css('left', $widthImg + 'px').animate({
            left: 0
        });
        $previndex = $index;
    }, 1600);
});

var $oImg = $('.scroll img')
var $smallcirle = $('.circle a');//小圆点的类数组中
var $nextArrows = $('#next');
var $prevArrows = $('#prev');
var $widthImg = $oImg.eq(0).width();
var $index = 0;
var $previndex = 0;
$smallcirle.hover(function (ev) {//点击小圆点
    console.log(ev.target.nodeName);
    $index = $(this).index();//当前的索引
    change(ev);
    $previndex = $index;
}, function () {
});
function change(ev){//轮播图方法
    $smallcirle.eq($index).addClass('active').siblings().removeClass('active');
    if($index == 0 && $previndex == 1){
        if(ev.target.id === 'circle-one' ||ev.target.id === 'circle-two'){
            $oImg.eq($previndex).animate({//运动：从左往右
                left:$widthImg
            },500);
            $oImg.eq($index).css('left',-$widthImg+'px').animate({
                left:0
            },500);
        }
    }else if($index == 1 && $previndex == 0){
        if(ev.target.id === 'circle-one' || ev.target.id === 'circle-two'){
            console.log(ev.target.id);
            $oImg.eq($previndex).animate({//从右往左
                left:-$widthImg
            },500);
            $oImg.eq($index).css('left',$widthImg+'px').animate({
                left:0
            },500);
        }
    }
}

$nextArrows.on('click', function (ev) {//点击右箭头
    $index++;
    if ($index > 1) {
        $index = 0;
        $previndex = 1;
    }
    $smallcirle.eq($index).addClass('active').siblings().removeClass('active');
    $oImg.eq($previndex).animate({//运动：从右往左
        left: -$widthImg
    },500);
    $oImg.eq($index).css('left', $widthImg + 'px').animate({
        left: 0
    },500);
    //change(ev);
    $previndex = $index;
});

$prevArrows.on('click', function (ev) {//点击左箭头
    $index--;
    if ($index < 0) {
        $index = 1;
        $previndex = 0;
    }
    $smallcirle.eq($index).addClass('active').siblings().removeClass('active');
    $oImg.eq($previndex).animate({//运动：从左往右
        left: $widthImg
    },500);
    $oImg.eq($index).css('left', -$widthImg + 'px').animate({
        left: 0
    },500);
    // change(ev);
    $previndex = $index;
});

var timer = setInterval(function () {//定时器轮播图片
    $index++;
    if ($index > 1) {
        $index = 0;
        $previndex = 1;
    }
    $oImg.eq($previndex).animate({//运动：从右往左
        left: -$widthImg
    },500);
    $oImg.eq($index).css('left', $widthImg + 'px').animate({
        left: 0
    },500);
    $previndex = $index;
}, 2500);

//楼梯效果
var $louti = $('#loutinav');//获取楼梯：ul
var $floor = $('.louceng');//有多个div
var $stairs = $('#loutinav ul li');
$(window).on('scroll', function(){
    $top = $(this).scrollTop();
    //console.log($(this).scrollTop());   滚动条距离顶部的高度
    if($top >= 400){
        $louti.show(100); 
    }else{
        $louti.hide(100);
    }
    //遍历楼层
    $floor.each(function(index,value){//两层楼：今日必抢   惠买优选
        $currenttop = $(value).offset().top; //每个楼层距离顶部的高度
        //console.log('................'+$top);
        //console.log(index,value);   index始终为0
        if(index == 1){
            console.log($currenttop);
        }
        $stairs.removeClass('active');
        if($currenttop > $top){        
           $stairs.eq(index).addClass('active');
           return false;
        }
    });
});

$stairs.not('.last').on('click', function(){
    //点击到的那个li变颜色，其它不变色
    $(this).addClass('active').siblings().removeClass('active');
    //eq:获取第N个元素，参数是数字
    //index():获取当前元素的序号
   //每一个楼层距离顶部的偏移值都是固定的
    var $top = $floor.eq($(this).index()).offset().top;
    //将html页面移动到这个偏移值
    $('html').animate({
        scrollTop:$top
    });
});
//返回顶部
$stairs.last().on('click',function(){
    $('html').animate({
        scrollTop:0
    });
});












