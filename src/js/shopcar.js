//渲染列表
function goodslist(s,n){//s:  sid    n:   sid对应的数量
    $.ajax({
        url:'http://10.31.162.34/atfullsplit/ugoshop/php/getData.php',
        dataType:'json',
        success:function(d){//将数据中所有的值取到,用sid进行筛选
            $.each(d,function(index,value){
                if(s == value.sid){
                   // console.log(value);
                    var $cloneBox = $('.goods-items:hidden').clone(true,true);
                    $cloneBox.find('#goods-img').attr('src',value.url);
                    $cloneBox.find('#goods-img').attr('sid',value.sid);
                    //console.log(value.sid);
                    $cloneBox.find('#title-item').html(value.title);
                    $cloneBox.find('#describe-item').html(value.describe);
                    $cloneBox.find('#unit-price').html(value.price);
                    $cloneBox.find('input').val(n);
                    var sum = value.price*n;
                    $cloneBox.find('#total-prices').html(sum.toFixed(2));
                    $cloneBox.css('display','block');
                    $('.content').append($cloneBox);
                }
            });
        }
    });
}

//取出cookie中的值（一组逗号分隔的值），用split分隔成数组
if(getcookie('cookiesid') && getcookie('cookienum')){
    var s = getcookie('cookiesid').split(',');
    var n = getcookie('cookienum').split(',');
    $.each(s,function(index,value){
        goodslist(s[index], n[index]);
    });
}

//点击+（加号）  数量改变：总和改变   input改变   小计改变
$('#add').on('click',function(){
    //必须要通过父元素才能获取值
    var $count = $(this).parents('.goods-items').find('#number').val();
    $count++;
    $(this).parents('.goods-items').find('#number').val($count);
    $(this).parents('.goods-items').find('#total-prices').html(singlegoodsprice($(this)));
    allprice();
    //设置cookie
    setcookie($(this));
});
//点击- （减号）
$('#reduce').on('click',function(){
    var $count = $(this).parents('.goods-items').find('#number').val();
    $count--;
    if($count < 1){
        $count = 1;
    }
    $(this).parents('.goods-items').find('#number').val($count);
    $(this).parents('.goods-items').find('#total-prices').html(singlegoodsprice($(this)));
    allprice();
    //存入cookie中
    setcookie($(this));
});

//点击全选按钮
$('.all-select').on('change',function(){//checkbox用的是change事件
    if($(this).prop('checked')){
        $("input[type='checkbox']").prop("checked",true);
    }else{
        $("input[type='checkbox']").prop("checked",false);
    }
    allprice();
});
//点击其它按钮：如果条目选中按钮=按钮总和,全选按钮也要为true
//:checkbox 选择器选取类型为 checkbox 的 <input> 元素
var $inputs=$('.goods-items:visible').find(':checkbox');
$('.content').on('change',$inputs,function(){//事件委托
    //思路：全部的checkbox等于选中的chexkbox
    if($('.goods-items:visible').find('input:checkbox').length == $('.goods-items').find('input:checked').size()){
        $('.all-select').prop('checked',true);
    }else{
        $('.all-select').prop('checked',false);
    }
    allprice();//点击单个条目调用计算总价方法
});

//计算商品的总价和总件数
function allprice(){
    var count = 0;
    var allprice = 0;
    //遍历整个选中的商品条目
    $('.goods-items:visible').each(function(index,value){
        if($(value).find(':checkbox').prop('checked')){
            count += parseInt($(value).find('div').find('#number').val());
            allprice += parseInt($(value).find('div').find('#total-prices').html());
        }
    });
    $('.sum-box').find('#selected').html('已选择'+count+'件商品');
    $('.sum-box').find('#sum-price').html('￥'+allprice.toFixed(2)); 

    //没有输出？？？？？？？？？？？？
    console.log(count);
    console.log(allprice);
}

//直接改变input的值
$('.goods-items').find('#number').on('input',function(){
    $(this).parents('.goods-items').find('#total-prices').html(singlegoodsprice($(this)));
    priceall();
    setcookie($(this));
});

//删除单个商品要用事件委托
$('.content').on('click','.goods-items #a-del',function(){
    //不能直接操作cookie，要获取cookie的数组
    cookietoarray();
    if(confirm('确定要删除吗？')){
        $(this).parents('.goods-items').remove();
    }
    delgoodslist($(this).parents('.goods-items').find('#goods-img').attr('sid'),arrsid);
    allprice();
    console.log($(this));//点击删除的a标签
   //$('.goods-items').empty();删除全部
});

//删除全部商品的函数
$('.sum-box #delete-all').on('click', function() {
    cookietoarray();//得到数组,上面的删除cookie需要。
    //console.log('hello');
    if(confirm('你确定要全部删除吗？')){
        $('.goods-items:visible').each(function() {
            if ($(this).find('input:checkbox').is(':checked')) {//复选框一定是选中的
                $(this).remove();//this指向goods-items
                console.log($(this));
                delgoodslist($(this).find('img').attr('sid'), arrsid);
            }
        });
        allprice();
    }
});

//改变后的商品价格
function singlegoodsprice(obj) { //obj:当前元素
    var $dj = parseFloat(obj.parents('.goods-items').find('#unit-price').html());//单价
    var $cnum = parseInt(obj.parents('.goods-items').find('#number').val());//数量
    return ($dj * $cnum).toFixed(2);//结果
}

var arrsid = [];
var arrnum = [];
//获取cookie数组
function cookietoarray(){
    //如果cookie值存在就保存进数组
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        arrsid = getcookie('cookiesid').split(',');
        arrnum = getcookie('cookienum').split(',');
    }
}
//改变cookie的值
function setcookie(obj){
    cookietoarray();//arrsid     arrnum
    //要获取到sid的标识和cookie的arrsid所匹配
    var id = obj.parents('.goods-items').find('div').find('#goods-img').attr('sid');
    //console.log(id);
    arrnum[$.inArray(id,arrsid)] = obj.parents('.goods-items').find('#number').val();
   // console.log(obj.parents('.goods-items').find('#number').val());
   addcookie('cookienum',arrnum.toString(),10);
}

//删除cookie
function delgoodslist(sid, arrsid) {//sid：当前删除的sid，arrsid:cookie的sid的值
    var $index = -1;
    $.each(arrsid,function(index,value){//删除的sid对应的索引位置。 index:数组项的索引
        if(sid==value){
            $index=index;//如果传入的值和数组的值相同，返回值对应的索引。
        }
    });
    arrsid.splice($index, 1);//删除数组对应的值
    arrnum.splice($index, 1);//删除数组对应的值
    addcookie('cookiesid', arrsid.toString(), 7);//添加cookie
    addcookie('cookienum', arrnum.toString(), 7);//添加cookie
}

