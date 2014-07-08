define(function(require,exports,module){

	var chart = require("chart");
	var m = {
		init:function(data){
			var w = this;

			w.wrap = $(".J_layout");
			w.layout = data.layout;
			w.charts = data.charts;
			w.module = [];

			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.buildLayout();
		},
		buildLayout:function(){
			var w = this;

			$.ajax({
				url:"/views/layout-"+ w.layout + ".html",
				type:"get",
				dataType:"html",
				success:function(data){
					w.wrap.append(data);
					w.buildChart();
					// console.log($(".J_region1"))
				}
			})
		},
		initEvent:function(){
			var w = this;

			
		},
		buildChart:function(){
			var w = this;

			for (var i = 0; i < w.charts.length; i++) {
				var arr = w.charts[i];
				w.module[i] = [];

				for (var j = 0; j < arr.length; j++) {
					var obj = arr[j];

					if(obj.type != "table"){
						var obj1 = new chart({
							el:$(".J_region"+(i+1)),
							opt:obj
						});
						w.module[i].push(obj1);

					}
				};

			};

		}

	}

	m.init({
		layout:"100-50-50",
		charts:[
			[
				{
					name:"1",
					xAxis:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					legend:['蒸发量','降水量'],
					series:[
						{
							name:'蒸发量',
							type:'bar',
							data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
						},
						{
							name:'降水量',
							type:'bar',
							data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
						},
					]
				},
				{
					name:"未来一周气温变化",
					xAxis:['周一','周二','周三','周四','周五','周六','周日'],
					legend:['最高气温','最低气温'],
					series:[
						{
							name:'最高气温',
				            type:'line',
				            data:[11, 11, 15, 13, 12, 13, 10],
				            markPoint : {
				                data : [
				                    {type : 'max', name: '最大值'},
				                    {type : 'min', name: '最小值'}
				                ]
				            },
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
						},
						{
							name:'最低气温',
				            type:'line',
				            data:[1, -2, 2, 5, 3, 2, 0],
						},
					]
				},
				{
					name:"未来一周气温变化",
					xAxis:['周一','周二','周三','周四','周五','周六','周日'],
					legend:['最高气温','最低气温'],
					series:[
						{
							name:'最高气温',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[11, 11, 15, 13, 12, 13, 10],
						},
						{
							name:'最低气温',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[1, -2, 2, 5, 3, 2, 0],
						},
					]
				}				
			],
			[
				{
					name:"1",
					legend:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
					
					series:[
						{
							name:'访问来源',
				            type:'pie',
				            radius : ['50%', '70%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ]
						}
					]
				},
			],
			[]
		]
	});
})