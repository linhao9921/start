;(function(){

    /*
    0.白羊座： 3月21日------4月19日
    1.金牛座： 4月20日------5月20日
    2.双子座： 5月21日------6月21日
    3.巨蟹座： 6月22日------7月22日
    4.狮子座： 7月23日------8月22日
    5.处女座： 8月23日------9月22日
    6.天秤座： 9月23日------10月23日
    7.天蝎座： 10月24日-----11月21日
    8.射手座： 11月22日-----12月21日
    9.摩羯座： 12月22日-----1月19日
    10.水瓶座： 1月20日-----2月18日
    11.双鱼座： 2月19日------3月20日
    */

    //星座样式
    var resultSets = [
        {name: "baiyang", value : "白羊座"},
        {name: "jinniu", value : "金牛座"},
        {name: "shuangzi", value : "双子座"},
        {name: "juxie", value : "巨蟹座"},
        {name: "shizi", value : "狮子座"},
        {name: "chunv", value : "处女座"},
        {name: "tianping", value : "天秤座"},
        {name: "tianxie", value : "天蝎座"},
        {name: "sheshou", value : "射手座"},
        {name: "mojie", value : "摩羯座"},
        {name: "shuiping", value : "水瓶座"},
        {name: "shuangyu", value : "双鱼座"}
    ];

    /**
     * 计算结果
     * @param month
     * @param day
     * @returns {number}
     */
    var cResult = function(month , day){
        var index = -1;

        day = parseInt(day);
        switch(parseInt(month)){
            case 3:
                if(day >= 21){
                    index = 0;  //白羊座
                }else{
                    index = 11; //双鱼座
                }
                break;
            case 4:
                if(day >= 20){
                    index = 1;  //金牛座
                }else{
                    index = 0;  //白羊座
                }
                break;
            case 5:
                if(day >= 21){
                    index = 2;  //双子座
                }else{
                    index = 1;  //金牛座
                }
                break;
            case 6:
                if(day >= 22){
                    index = 3;  //巨蟹座
                }else{
                    index = 2;  //双子座
                }
                break;
            case 7:
                if(day >= 23){
                    index = 4;  //狮子座
                }else{
                    index = 3;  //巨蟹座
                }
                break;
            case 8:
                if(day >= 23){
                    index = 5;  //处女座
                }else{
                    index = 4;  //狮子座
                }
                break;
            case 9:
                if(day >= 23){
                    index = 6;  //天秤座
                }else{
                    index = 5;  //处女座
                }
                break;
            case 10:
                if(day >= 24){
                    index = 7;  //天蝎座
                }else{
                    index = 6;  //天秤座
                }
                break;
            case 11:
                if(day >= 22){
                    index = 8;  //射手座
                }else{
                    index = 7;  //天蝎座
                }
                break;
            case 12:
                if(day >= 22){
                    index = 9;  //摩羯座
                }else{
                    index = 8;  //射手座
                }
                break;
            case 1:
                if(day >= 20){
                    index = 10;  //水瓶座
                }else{
                    index = 9;  //摩羯座
                }
                break;
            case 2:
                if(day >= 19){
                    index = 11;  //双鱼座
                }else{
                    index = 10;  //水瓶座
                }
                break;
            default:
                break;
        }

        return index;
    };

    /**
     * 重置数据
     * @param $
     */
    var reset = function($){
        $("#img").removeAttr("class");
        $("#text").html("");
    };

    /**
     * 展示数据
     * @param $
     * @param data
     */
    var show = function($ , data){
        $("#img").addClass("xz").addClass(data.name);
        $("#text").html(data.value);
    };

    /**
     * 入口函数
     */
    window.onload = function(){
        layui.use(['laydate', 'form'], function(){
            var laydate = layui.laydate,
                form = layui.form(),
                $ = layui.jquery;

            //绑定日期按钮
            document.getElementById('date').onclick = function(){
                laydate({elem: this, festival: true})
            };

            //监听充值点击按钮
            $("button[type='reset']").on('click', function(){
                //初始化结果
                reset($);
            });

            //监听提交
            form.on('submit(formOk)', function(data){
                //初始化结果
                reset($);

                var field = data.field;
                var date = field.date;

                var arr = date.split("-");
                if(arr.length >= 3){
                    var month = arr[1];
                    var day = arr[2];

                    var result = cResult(month , day);
                    if(result > -1){
                        var data = resultSets[result];

                        //展示数据到页面
                        show($ , data);
                        layer.msg('计算结果：【' + date + '】是【' +data.value + '】');
                    }else{
                        layer.alert('消息提示：计算错误', {
                            title: '最终的提交信息'
                        });
                    }
                }else{
                    layer.alert('消息提示：输入的数据有误', {
                        title: '最终的提交信息'
                    });
                }
                return false;
            });

            //初始化结果
            reset($);
            layer.msg('消息提示：系统初始化成功！');
        });
    };
})();