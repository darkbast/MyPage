//<script type="text/javascript">
$('#searchBtn').click(()=> {
    console.log('SeachBtn Click');
    var url = "";
    $.ajax({
        url: "demo_test.txt",
        type:post,
        success: function(result){
            console.log(result);
        }
    });
});

$('#writeBtn').click(()=> {
    console.log('writeBtn Click');
});

function executeGrid(initRet){
    $("#qalist").jqGrid({
        colNames:["title"],
        colModel:[
            {name:"title",index:"qa_title",width:150,align:'center'},
        ],
        rownumbers:true,
        multiselect:true,
        data:initRet,
        rowNum:10,
        height:200,
        width:500,
        gridview: true,
        rowList: [5, 10, 50, 100, 500],
        viewrecords: true,
        datatype:'local',
        pager: '#pager1',
    });

    $(function(){
        executeGrid(initRet);
    });
}



//</script>
// var data = [
//     {title:'1-1'},{title:'1-2'},{title:'1-3'},{title:'1-4'},{title:'1-5'},
//     {title:'2-1'},{title:'2-2'},{title:'2-3'},{title:'2-4'},{title:'2-5'},
//     {title:'3-1'},{title:'3-2'},{title:'3-3'},{title:'3-4'},{title:'3-5'},
//     {title:'4-1'},{title:'4-2'},{title:'4-3'},{title:'4-4'},{title:'4-5'},
//     {title:'5-1'},{title:'5-2'},{title:'5-3'},{title:'5-4'},{title:'5-5'},
// ];