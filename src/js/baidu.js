//登录动态窗口
(function() {
    var flag = 0,
        $denglu = $('.denglu'),
        $baidu = $('#baidu');

    function get() {     
        $('body').append($('<div class="content"><button class="box">x</button><input type="text" placeholder="手机号/邮箱/用户名"><input type="text" placeholder="密码"><button class="dl">登录</button></div>'));   
        $('.box').click(function() {
            $('.content').css('display','none');
        })
    }
    
    $denglu.click(function() {
        if(flag == 0) {
            flag = 1;
            get();
        }else{
            $('.content').css('display','block');           
        }
    })
}());


//搜索框
    var ojsonp = document.getElementById('jsonp');
    var oInput = document.getElementById('inp');
    var oUl = document.getElementById('oul');
    var oss = document.getElementById('ss');
    var newData = {};
    var duyi;
    oInput.onkeyup = function() {
        if(oInput.value) {
            if(newData[oInput.value]) {
                getUl(newData[oInput.value]);
            }else{
                var oScript = document.createElement('script');
                oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+oInput.value+'&cb=duyi';        
                document.body.appendChild(oScript);
                oScript.remove();
            }
        }else{
            oUl.innerHTML = '';
            oUl.style.display = 'none';
        }
    }
    //callback函数
    
    function duyi (data) {
        console.log(data);
        newData[oInput.value] = data.s;
        var arr = data.s;
        getUl(arr);
    }

    function getUl (Array) {
        var Arr = Array;
        oUl.innerHTML = '';
        if(Arr.length){
            Arr.forEach(function (ele,index) {
            //循环遍历，添加到列表
                var oLi = document.createElement('li');
                var oA = document.createElement('a');
                oA.innerHTML= ele;
                oA.href = 'https://www.baidu.com/s?wd=' + ele;
                oA.style.textDecoration = 'none';
                oLi.appendChild(oA);
                oUl.appendChild(oLi);
            });
            oUl.style.display = 'block';
        }else{
            oUl.innerHTML = '';
            oUl.style.display = 'none';
        }
    }

    
    ojsonp.onmouseenter = function () {
        ojsonp.onclick = function () {
            if(oInput.value) {
                if(newData[oInput.value]) {
                    console.log(666);
                    getUl(newData[oInput.value]);
                    ojsonp.onclick = null;
                }
            }else{
                oUl.innerHTML = '';
                oUl.style.display = 'none';
            }
        }
    }
    ojsonp.onmouseleave = function () {
        document.onclick = function () {
            console.log(333);
            oUl.innerHTML = '';
            oUl.style.display = 'none';
            document.onclick = null;
        }
    }





