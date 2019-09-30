class log {
    constructor() {
        this.$inputphone = $('.text1');//手机号输入框
        this.$inputpass = $('.text2');//密码输入框
        this.$submit = $('.registsubmit');//登录按钮
        this.$check = $('#checkx1');

    }
    init() {
        let _this = this;
        //将cookie中存储的值拿出来
        let cookie_phone = getcookie('phone');
        let cookie_pass = getcookie('pass');
        //console.log(cookie_phone, cookie_pass);
        this.$inputphone.val(cookie_phone);
        this.$inputpass.val(cookie_pass);
        //点击登录按键进行判断
        this.$submit.on('click', function () {
            //将手机号码和密码传值给后端
            $.ajax({
                url: 'http://10.31.162.34/atfullsplit/ugoshop/php/log.php',
                data: {
                    phone: _this.$inputphone.val(),
                    pass: _this.$inputpass.val()
                },
                success: function (d) {
                    if (!d) {//登录失败
                        alert('手机号码或密码错误');
                        _this.$inputpass.val('');
                    } else {//登录成功
                        //跳转到首页
                        location.href = 'huimai.html';
                    }
                }
            });
        });
        this.check();
    }
    check() {//点击checkbox记住密码
        let _this = this;
        this.$check.on('click', function () {
            if ($(this).prop('checked')) {//记住密码
                //console.log('remember password');
                //将密码存进cookie中
                addcookie('phone', _this.$inputphone.val(), 10);
                addcookie('pass', _this.$inputpass.val(), 10);
            } else {//没有记住密码
                console.log('dont remember password');
            }
        });
    }
}
new log().init();