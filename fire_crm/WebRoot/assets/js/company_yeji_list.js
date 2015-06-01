$(function(){
	$("#searchYji").click(function(){
		showDialog();
	});
});

function showDialog(){
	$("#dd").show();
	$("#dd").dialog({
		title:"查询条件",
		modal:true,
		buttons:[{
			text:"清楚查询条件",
			handler:function(){
				alert("ok");
			}
		},{
			text:"查询",
			handler:function(){
				$("#dd").dialog("close");
			}
		},{
			text:"返回",
			handler:function(){
				$("#dd").dialog("close");
			}
		}]
	});
	$("#dd").dialog("open");
}