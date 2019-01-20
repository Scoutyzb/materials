$(() => {
    //添加拖拽事件
    var dz = document.getElementById('drag-frame');
    dz.ondragover = function(ev) {
        //阻止浏览器默认打开文件的操作
        ev.preventDefault();
        //拖入文件后边框颜色变红
        this.style.borderColor = 'red';
    }

    dz.ondragleave = function() {
        //恢复边框颜色
        this.style.borderColor = 'gray';
    }
    dz.ondrop = function(ev) {
        ev.preventDefault();
        //恢复边框颜色
        this.style.borderColor = 'gray';
        //阻止浏览器默认打开文件的操作

        var drag_files = ev.dataTransfer.files;
        var frag = document.createDocumentFragment(); //为了减少js修改dom树的频度，先创建一个fragment，然后在fragment里操作
        var tr, time, size;
        for(var file of drag_files) {
            tr = document.createElement('tr');
            //获取文件大小
            size = Math.round(file.size * 100 / 1024) / 100 + 'KB';
            //获取格式化的修改时间
            time = file.lastModifiedDate.toLocaleDateString() + ' ' + file.lastModifiedDate.toTimeString().split(' ')[0];
            tr.innerHTML = '<td>' + file.name + '</td><td>' + time + '</td><td>' + size + '</td><td>删除</td>';
            console.log(size + ' ' + time);
            frag.appendChild(tr); //?
            dragFiles.set(file.name,file);
        }
        this.childNodes[1].childNodes[1].appendChild(frag);
        //为什么是‘1'？文档里几乎每一样东西都是一个节点，甚至连空格和换行符都会被解释成节点。而且都包含在childNodes属性所返回的数组中.不同于jade模板
    }
    // 用事件委托的方法为‘删除'添加点击事件，使用jquery中的on方法
    $(".tbody").on('click', 'tr td:last-child', function() {
        //删除拖拽框已有的文件
        var key = $(this).prev().prev().prev().text();
        console.log(key);
        dragFiles.delete(key)
        $(this).parent().remove();
    });

    $("#clear").click(clearAll);
});
// 使用map的好处是可以去重
let dragFiles = new Map();

//清空所有内容
function clearAll() {
    $("#drag-frame tbody").html('');

    dragFiles.clear();
}

/**
 * 获取FormData对象
 */
function getFormData() {
    var formDate = new FormData();
    dragFiles.forEach(function(item) {
        formDate.append("files",item);
    })

    return formDate;
}

function commit1(){
        alert("进入上传方法");
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
        }else{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //构造FormData对象
        var formData = new FormData();
        var files = document.getElementById("files").files;
        //添加文件数据
        for(var i=0;i<files.length;i++) {
            formData.append("files", files[i]);
        }

        //使用POST方法发送数据
        xmlHttp.open("POST","/multifileUpload",true);
        xmlHttp.send(formData)
        //返回的数据
        xmlHttp.onreadystatechange=function(){
            if (xmlHttp.readyState==4 && xmlHttp.status==200){
                console.log(xmlHttp.responseText);
            }
        }
        alert("完成上传");
    }

