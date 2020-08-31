$(document).ready(function(){
    function SendQuery (p_type, p_url, p_data) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: p_url,
                type: p_type,
                crossDomain: true,
                data: p_data,
                contentType: "multipart/form-data",
                async: false,
                dataType: "json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Origin', '*');
                },
                // plop data
                success: function(data, status, jqXHR) {
                    resolve(data);
                },
                error: function(err) {
                    reject(err) // Reject the promise and go to catch()
                }

            })
        })
    }
    $("#send_form").click(function(){
        var name=$("#name").val();
        var city=$("#city").val();
        var area=$("#area").val();
        var street=$("#street").val();
        var house=$("#house").val();
        var form_desc=$("#form_desc").val();
        //путь к моему php скрипту когда развеврну вебсервер
        var url="http://localhost/markup/index.php";
        var data_url;
        if(!name){
            alert("введите имя!");
            return;
        }else if (!city){
            alert("введите город");
            return;
        }else if (!area) {
            alert("введите площадь!");
            return;
        }else{
        setTimeout("window.location.reload()",1000);
        }
        data_url={'p_name':name,'p_city':city,'p_area':area,'p_street':street,'p_house':house,'form_desc':form_desc};
        SendQuery('GET', url, data_url).then(function (resp) {
        }).catch(function (err) {

        });

    });
});