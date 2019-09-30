class details {
    constructor() {
        this.$spicBox = $('#spic-box');//装小图和小放的盒子说
        this.$spic = $('.spic img');//小图
        this.$sf = $('.sf');
        //切割网址，拿到sid
        this.$index = location.search.split('=')[1];
        this.$titleBox = $('#goods-describe');
        this.$title = $('.spic h1');//标题描述
        this.$describe = $('.spic p');//小段
        this.$price = $('.box-price span');//价格
        this.$bf = $('.bf');
        this.$bfImg = $('.bf img');
        this.$listBox = $('#list');//小列表
        this.$ul = $('#list ul');
        this.$btn = $('#add-btn');
    }
    init() {
        this.getImg();
        this.zoom();
        this.cut();
        this.shopping();
    }
    //根据sid，得到图片
    getImg() {
        let _this = this;
        //let _this = $(this);
        //将sid的值用ajax发送给后端
        $.ajax({
            url: 'http://10.31.162.34/atfullsplit/ugoshop/php/getImg.php',
            data: {
                sid: this.$index
            },
            dataType: 'json',
            success: function (d) {
                //拿到的是sid那一条数据
                // console.log(d.urls);//一个对象
                _this.$spic.attr('src', d.url);
                //给spic加上一个sid的属性，添加购物车取值
                $('.spic img').attr('sid', d.sid);
                _this.$title.html(d.title);
                _this.$describe.html(d.describe);
                _this.$price.html(d.price);
                //test
                _this.$bfImg.attr('src', d.url);
                //console.log($(this));  jq-->ajax取出的this是ajax对象
                var arr = d.urls.split(',');//数组
                //工具方法
                var str = '';
                $.each(arr, function (index, value) {
                    str += `<li><img src="${value}" style="width:60px"></img></li>`;

                });
                _this.$ul.html(str);
            }
        });

    }
    //放大镜效果
    zoom() {
        // console.log('小图的sid');
        //  console.log(this.$spic.attr('sid'));

        let _this = this;
        //确定小放的大小
        this.$sf.width(this.$spic.width() * this.$bf.width() / this.$bfImg.width());
        this.$sf.height(this.$spic.height() * this.$bf.height() / this.$bfImg.height());
        // console.log(this.$bfImg.width());
        // console.log(this.$bfImg.height());
        //求比例
        var bili = this.$bfImg.width() / this.$spic.width();

        //当鼠标移动到小图的div时，大放显示
        this.$spicBox.hover(function () {
            _this.$titleBox.hide();
            //鼠标跟随移动事件
            $(this).on('mousemove', function (ev) {

                //因为父元素有偏移，还要减去父元素的偏移值
                //jquery中没有clientX、clientY属性
                var $left = ev.pageX - $('.max-box').offset().left - _this.$sf.width() / 2;
                var $top = ev.pageY - $('.max-box').offset().top - _this.$sf.height() / 2;

                if ($left < 0) {
                    $left = 0;
                } else if ($left >= _this.$spicBox.width() - _this.$sf.width()) {
                    $left = _this.$spicBox.width() - _this.$sf.width();
                }
                if ($top < 0) {
                    $top = 0;
                } else if ($top >= _this.$spicBox.height() - _this.$sf.height()) {
                    $top = _this.$spicBox.height() - _this.$sf.height();
                }
                //让小放跟随鼠标移动
                _this.$sf.css('left', $left);
                _this.$sf.css('top', $top);
                _this.$bfImg.css('left', -$left * bili);
                _this.$bfImg.css('top', -$top * bili);
            });
            _this.$sf.show();
            _this.$bf.show();
        }, function () {//移出$spicBox
            _this.$sf.hide();
            _this.$bf.hide();
            _this.$titleBox.show();
        });
    }
    //点击小图进行切换
    cut() {
        let _this = this;
        //事件委托
        $('#list ul').on('click', 'li', function () {
            var imgsrc = $(this).find('img').attr('src');
            // console.log(imgsrc);
            //将小图和大图都换了
            _this.$spic.attr('src', imgsrc);
            _this.$bfImg.attr('src', imgsrc);
        });

        //点击箭头进行切换
        var $num = 5;//放大镜显示6张。
        $('#right').on('click', function () {
            var $list = $('#list ul li');//6
            console.log($list.length);//6
            //当li的个数>5时
            if ($list.length > $num) {
                $num++;
                $('#left').css('color', '#333');
                if ($list.length == $num) {//判断是最后一张图片的时候
                    $('#right').css('color', '#fff');
                }
                $('#list ul').animate({
                    //innerWidth()只加上padding的值
                    left: -($num - 5) * $list.eq(0).innerWidth()
                });
            }
        });
        //左箭头
        $('#left').on('click', function () {
            var $list = $('#list ul li');//8
            if ($num > 5) {
                $num--;
                $('#right').css('color', '#333');
                if ($num <= 6) {
                    $('#left').css('color', '#fff');
                }
                $('#list ul').animate({
                    left: -($num - 5) * $list.eq(0).innerWidth()
                })
            }
        });
    }
    //点击加入购物车按钮将数组保存进cookie中
    shopping() {
        var arrsid = []; //商品的sid
        var arrnum = []; //商品的数量
        //点击加入购物车按钮
        this.$btn.on('click', function () {
            //判断输入框输入的内容一定要是数字
            if(isNaN($('#count').val())){
                alert('请输入数字');
                return;// 不再像下执行
            }
           
            var $sid = $('.spic img').attr('sid');
            //每次点击都价将cookie中的数组拿出来
            if (getcookie('cookiesid') && getcookie('cookienum')) {
                //每一次只要点击加入购物车就要保存进数组
                arrsid = getcookie('cookiesid').split(',');
                arrnum = getcookie('cookienum').split(',');
            }
            console.log(typeof arrnum[2]);
            //判断sid是否存在于数组中
            if($.inArray($sid,arrsid) != -1){//存在
                //商品数量叠加
                var num = parseInt(arrnum[$.inArray($sid,arrsid)]) + parseInt($('#count').val());
              
                arrnum[$.inArray($sid,arrsid)] = num;
                
                addcookie('cookienum',arrnum,10);
            }else{//不存在
                //将sid和num都存进数组中
                arrsid.push($sid);
                addcookie('cookiesid',arrsid,10);
                arrnum.push(parseInt($('#count').val()));
                addcookie('cookienum',arrnum,10);
            }
            console.log(arrsid);
            console.log(arrnum);
            alert(`成功添加${$('#count').val()}件商品到购物车`);
        });
    }
}
new details().init();