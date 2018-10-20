var data = [];
<%
for (var i=0; ret2.length; i++){
%>
    data.push({ id:i,title:ret2[i].qa_title %>});
<%
}
%>

$("#qalist").jqGrid({
    colNames:["id","title"],
    colModel:[
        {name:"id",index:"id",width:150,align:'center'},
        {name:"title",index:"title",width:150,align:'center'},
    ],
    data:data,
    rowNum:10,
    height:200,
    width:500,
    datatype:'local',
});