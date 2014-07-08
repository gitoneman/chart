define(function(require,exports,module){

	var chart = function(){ this.init.call(this,arguments)};

	chart.prototype = {
		init:function(data){
			var w = this;

			data = data[0];
			w.el = data.el;
			w.opt = data.opt;

			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.div = $("<div class='m-chart'>"+
							// "<div class='tit'>"+
							// 	"111"+
							// "</div>"+
							// "<div class='mn'>"+
								"111"+
							// "</div>"+
						"</div>");

			w.el.append(w.div);
			w.buildChart();
		},
		initEvent:function(){
			var w = this;

			$(window).resize(function(){
				w.chart.resize();
			});
		},
		buildChart:function(){
			var w = this;

			w.chart = echarts.init(w.div[0]);

			w.chart.setOption({
				title : {
				    text: w.opt.name,
				    subtext: '纯属虚构'
				},
				tooltip : {
				    trigger: 'axis'
				},
				legend: {
				    data:w.opt.legend
				},
				toolbox: {
				    show : true,
				    feature : {
				        mark : {show: true},
				        dataView : {show: true, readOnly: false},
				        magicType : {show: true, type: ['line', 'bar']},
				        restore : {show: true},
				        saveAsImage : {show: true}
				    }
				},
				calculable : true,
				xAxis : [
				    {
				        type : 'category',
				        data : w.opt.xAxis || []
				    }
				],
				yAxis : [
				    {
				        type : 'value'
				    }
				],
				series : w.opt.series				
			});


		}
	}

	return chart;
})