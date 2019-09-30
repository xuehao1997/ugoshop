
class Reg {
    constructor() {
        this.$inputphone = $('.text1');//手机号输入框
        this.$inputpassword = $('.text2');//密码输入框
        this.$inputaffirm = $('.text3');//确认密码输入框
        this.$btnsubmit = $('#btn1');//提交按钮
        this.$empty = $('#empty');//请输入手机号码提示
        this.$verify = $('#varify-password');//密码警告
        this.$againverify = $('#onceagain-varify');//确认密码
    }
    init() {
        //this.$exist.hide();
        let _this = this;
        this.$inputphone.focus(function () {
            _this.$empty.show();
        });
        this.$inputphone.blur(function () {
            let reg = /^1[3456789]\d{9}$/;
            if ($(this).val() == '') {
                _this.$empty.css('background', '#fff3f3');
                _this.$empty.css('color', '#eb0007');
                _this.$empty.html('手机号码不能为空');
            } else {//在不为空的情况下判断
                if (!reg.test($(this).val())) {
                    _this.$empty.html('手机号码格式不正确');
                } else {//判断数据库中有没有重复号码
                    $.ajax({
                        url: 'http://10.31.162.34/atfullsplit/ugoshop/php/getreg.php',
                        data: {
                            checkphone: $(this).val(),//手机号码
                        },
                        success: function (d) {
                            console.log(d);
                            if (!d) {//不存在
                                _this.$empty.css('background', 'white');
                                _this.$empty.css('color', 'green');
                                _this.$empty.html('该号码可以使用');
                            } else {//存在
                                _this.$empty.html('该号码已存在');
                            }
                        }
                    });
                }
            }
        });
        //密码框得到焦点
        let flag = false;
        this.$inputpassword.focus(function () {
            _this.$verify.css('background', 'white');
            _this.$verify.css('color', 'green');
            _this.$verify.html('6-20位，字母数字和符号的组合');
            _this.$verify.show();
        });
        //密码框失去焦点
        this.$inputpassword.blur(function () {
            let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/g;
            if ($(this).val() === '') {
                _this.$verify.css('background', '#fff3f3');
                _this.$verify.css('color', '#eb0007');
                _this.$verify.html('密码不能为空');
                _this.$verify.show();
            } else {
                if (reg.test($(this).val())) {
                    _this.$verify.css('background', 'white');
                    _this.$verify.css('color', 'green');
                    _this.$verify.html('密码可以使用');
                } else {
                    _this.$verify.css('background', '#fff3f3');
                    _this.$verify.css('color', '#eb0007');
                    _this.$verify.html('密码格式不正确');
                }
            }
        });
        this.commit();
        this.affirm();
    }
    commit() {//提交
        let _this = this;
        this.$btnsubmit.on('click', function () {
            //将手机号、密码提交到数据库
            $.ajax({
                url: 'http://10.31.162.34/atfullsplit/ugoshop/php/getreg.php',
                data: {
                    finalphone: _this.$inputphone.val(),
                    finalpass: _this.$inputpassword.val()
                },
                error: function () {
                    throw new Error('json获取错误');
                }
            });
        });
    }
    //确认密码判断重复
    affirm() {
        let _this = this;
        this.$inputaffirm.focus(function () {
            _this.$againverify.css('background', 'white');
            _this.$againverify.css('color', 'green');
            _this.$againverify.html('请再次输入密码');
            _this.$againverify.show(200);
        });
        this.$inputaffirm.blur(function () {
            if ($(this).val() != '') {
                //判断和密码框的输入是否一致
                if ($(this).val() == _this.$inputpassword.val()) {
                    _this.$againverify.css('background', 'white');
                    _this.$againverify.css('color', 'green');
                    _this.$againverify.html('通过');
                } else {
                    _this.$againverify.css('background', '#fff3f3');
                    _this.$againverify.css('color', '#eb0007');
                    _this.$againverify.html('两次输入密码不一致');
                }
            } else {
                _this.$againverify.css('background', '#fff3f3');
                    _this.$againverify.css('color', '#eb0007');
                    _this.$againverify.html('不能为空');
            }
        });
    }
}
new Reg().init();
