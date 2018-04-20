/*
* @Author: Administrator
* @Date:   2018-03-31 09:06:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-18 16:12:48
*/

// var weather;

// $.ajax({
// 	url: "https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
// 	dataType: "jsonp",
// 	type: "get",
// 	success:function(obj){
// 		weather=obj.data.weather;
// 		console.log(weather);

// 	},
// })
function updata(weather){
	// 上面的数据
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;
	var current_temperature=document.querySelector(".temperature");
	current_temperature.innerHTML="&nbsp;"+weather.current_temperature+"°";
	var quality_level=document.querySelector(".zhuangkuang h3");
	quality_level.innerHTML=weather.quality_level;
	var current_condition=document.querySelector(".condition");
	current_condition.innerHTML=weather.current_condition;
	// 今天
	var dat_condition=document.querySelector(".today .yinqing .yinqing1");
	dat_condition.innerHTML=weather.dat_condition;
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
	var dat_weather_icon_id=document.querySelector(".tu");
	dat_weather_icon_id.style.backgroundImage=`url(img/${weather.dat_weather_icon_id}.png)`;
	// 明天
    var tomorrow_condition=document.querySelector(".tomorrow .yinqing .yinqing1");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
	var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
	var tomorrow_weather_icon_id=document.querySelector(".tu1");
	tomorrow_weather_icon_id.style.backgroundImage=`url(img/${weather.tomorrow_weather_icon_id}.png)`;

//创建change2
    var str="";
    weather.hourly_forecast.forEach((item, index)=>{
        // console.log(item, index);
        str=str+`
           <div class="change2">
               <span id="span1">${item.hour}:00</span>
               <div class="tutu" style="background-image: url(img/${item.weather_icon_id}.png);"></div>
               <span id="span2">${item.temperature}°</span>
           </div>
        `
    })
    $(".change1").html(str);
// for(var i in weather.hourly_forecast){
// 	//创建元素
//     var change2=document.createElement("div");
//     //添加类名
//     change2.className="change2";
//     //获取父元素
//     var change1=document.querySelector(".change1");
//     // 插入元素
//     change1.appendChild(change2);
//     // 创建span1
//     var span1=document.createElement("span");
//     span1.id="span1";
//     span1.innerHTML=weather.hourly_forecast[i].hour+":00";
//     change2.appendChild(span1);
//     //创建图标
//     var weather_icon_id=document.createElement("div");
//     weather_icon_id.className="tutu";
//     weather_icon_id.style.backgroundImage=`url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
//     change2.appendChild(weather_icon_id);
//     //创建span2
//     var span2=document.createElement("span");
//     span2.id="span2";
//     span2.innerHTML=weather.hourly_forecast[i].temperature+"°";
//     change2.appendChild(span2);
// } 
    var str2="";
    weather.forecast_list.forEach((item,index)=>{
        str2=str2+`
        <div class="shiwutian1">
                <div class="shiwutian2">
                    <div class="con_wea">
                       <span id="date_month">${item.date.slice(5,7)}/${item.date.slice(8)}
                       </span>
                    </div>
                    <div class="con_weah">${item.condition}</div>
                    <div class="con_pich" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                    <div class="con_high">${item.high_temperature}°</div>
                    <div class="con_low">${item.low_temperature}°</div>
                    <div class="con_wind">${item.wind_direction}</div>
                    <div class="con_level">${item.wind_level}级</div>
        </div>
        `
    })
        $(".shiwutian1").html(str2);
// for(var j in weather.forecast_list){
// 	// 创建shiwutian2
// 	var shiwutian2=document.createElement("div");
// 	shiwutian2.className="shiwutian2";
// 	var shiwutian1=document.querySelector(".shiwutian1");
// 	shiwutian1.appendChild(shiwutian2);
// 	// 创建时间
// 	var con_wea=document.createElement("div");
// 	con_wea.className="con_wea";
// 	shiwutian2.appendChild(con_wea);
//     // 创建月
//     var date=document.createElement("span");
//     date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
//     con_wea.appendChild(date);
//     // 创建con_weah
//     var con_weah=document.createElement("div");
//     con_weah.className="con_weah";
//     con_weah.innerHTML=weather.forecast_list[j].condition;
//     shiwutian2.appendChild(con_weah);
//     // 创建con_pich
//     var con_pich=document.createElement("div");
//     con_pich.className="con_pich";
//     con_pich.style.backgroundImage=`url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
//     shiwutian2.appendChild(con_pich);
//     // 创建con_high
//     var con_high=document.createElement("div");
//     con_high.className="con_high";
//     con_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
//     shiwutian2.appendChild(con_high);
//     // 创建con_low
//     var con_low=document.createElement("div");
//     con_low.className="con_low";
//     con_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
//     shiwutian2.appendChild(con_low);
//     // 创建con_wind
//     var con_wind=document.createElement("div");
//     con_wind.className="con_wind";
//     con_wind.innerHTML=weather.forecast_list[j].wind_direction;
//     shiwutian2.appendChild(con_wind);
//     // 创建con_level
//     var con_level=document.createElement("div");
//     con_level.className="con_level";
//     con_level.innerHTML=weather.forecast_list[j].wind_level+"级";
//     shiwutian2.appendChild(con_level);
// }

    
}

var city;

$.ajax({
    url: "https://www.toutiao.com/stream/widget/local_weather/city/",
    dataType: "jsonp",
    type: "get",
    success:function(obj){
    city=obj.data;
    updata1(city);
    },
})

function updata1(city){

    var hotcity=document.querySelector(".hotcity");
    for(var m in city){
    // 一级省
    var tour=document.createElement("div");
    tour.className="tour";
    tour.innerHTML=m;
    hotcity.appendChild(tour);
    // 二级省
    var tour_box1=document.createElement("div");
    tour_box1.className="tour_box1";
    hotcity.appendChild(tour_box1);

    for(var j in city[m]){
    // console.log(j);
    var tour_box=document.createElement("div");
    tour_box.className="tour_box";
    tour_box.innerHTML=j;
    tour_box1.appendChild(tour_box);  
    }
}
}

function AJAX(str){
    var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
    $.ajax({
        url: url1,
        type: 'get',
        dataType: 'jsonp',
        success:function(obj){
            var weather=obj.data.weather;
            updata(weather);
            $(".location").css({"display":"none"});
            $(".hide").addClass('block');
        }
    })
    
    
}
window.onload=function(){
    // updata();
    // updata1();
    $(".tour_box").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })
    $(".city").on("click",function(){
         $(".location").css({"display":"block"});
    })

    $("input").on("focus",function(){
        $(".seacher_box2").html("搜索");
    })
    
    var button=document.querySelector(".seacher_box2");
    console.log(button);
    
    button.onclick=function(){
    var text=button.innerHTML;
    if(text=="取消"){
        $(".location").css({"display":"none"});
    }
    else{
    var str1=document.querySelector("input").value;
    for(var i in city){
        for(var j in city[i]){
           if(j==str1){
              AJAX(str1);
              return;
           } 
        }
    }
    alert("城市不存在");
    }
    }
}