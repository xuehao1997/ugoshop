//渲染list列表
/*{ <li>
<a href="javascript:;">
    <img src="../img/li1.jpg" alt="商品列表">
    <p>美国西屋营养萃取破壁机</p>
    <em>全家营养一机搞定!</em>
    <span>￥1860</span>
</a>
</li> }*/
let str = '';
$.ajax({
    url:'http://10.31.162.34/atfullsplit/ugoshop/php/getData.php',
    dataType:'json',//string转Object类型
    success:function(d){
    //    for(var i = 0; i<d.length; i++){
    //        str += `<li>
    //             <a href="details.html?sid=${d[i].sid}">
    //                 <img src="${d[i].url}" alt="商品列表">
    //                 <p>${d[i].title}</p>
    //                 <em>${d[i].describe}</em>  
    //                 <span><i>￥</i>${d[i].price}</span>      
    //             </a>
    //        </li>`;
    //    }

     //应该用each方法:节约性能
    $.each(d,function(index,value){
        //点击a标签自动跳转到详情页面，后面跟着sid表示判断
        str += `<li>
                <a href="details.html?sid=${value.sid}" target="_blank">
                    <img data-original="${value.url}" alt="商品列表">
                    <p>${value.title}</p>
                    <em>${value.describe}</em>  
                    <span><i>￥</i>${value.price}</span>      
                </a>
           </li>`;
    });
    $('.goods-list ul').html(str).find('img').lazyload({ effect: "slideDown"});

    // $('img').on('load',function(){
    //   //  $(this).lazyload;
    //     $(this).lazyload({
    //         //   effect: "fadeIn"
    //         effect:"slideDown"
    //         });
    // });
     
    }  
});
//Ajax是异步操作，先执行主线程里面的
// console.log(str);//所以这里拿不到数据