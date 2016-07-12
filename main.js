(function(){
    function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
 
function transferTo(){
    var flag = isWeiXin();
    if(flag){
        window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.shaoshaohuo.app";
    }else{
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            //安卓手机
            window.location.href = "http://192.168.1.27:8080/source/app/a.apk";
         
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            //苹果手机
            window.location.href = "Items://itunes.apple.com/gb/app/yi-dong-cai-bian/id391945719?mt=8";
         
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
            //alert("winphone手机");
            // window.location.href = "mobile/index.html";
        }
    }
}
}())