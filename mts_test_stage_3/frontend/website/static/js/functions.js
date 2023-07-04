function get_curl_to_backends(n1, n2) {
        $.ajax({
                type: 'GET',
                url: 'static/js/curl_to_backends.php',
                data: {num_1: n1, num_2: n2},
                success: function(response) {
                        res_summ.innerHTML=response;
                },
                error: function(error) {
                        console.log(error);
                }
        });
}

function button_calculation() {
	var num_1 = document.getElementById("num_1").value;
	var num_1_bord = document.getElementById("num_1");
	var num_2 = document.getElementById("num_2").value;
	var num_2_bord = document.getElementById("num_2");
    
	if (validate_float(num_1, num_1_bord) &&
		validate_float(num_2, num_2_bord))
		{
		get_curl_to_backends(num_1, num_2);
       }
}

function validate_float(check_float, check_float_bord) {
	var float_re = /^-?[0-9]+(\.[0-9]+)?$/;
        if (!(float_re.test(check_float))) {
		var msg = "Неверное значение " + "'" + check_float + "'" + ". Введите целое число или число с плавающей точкой"
                $('#message_log').html(msg);
				info_msg.innerHTML=msg;
				check_float_bord.style.border = "red solid 3px";
				check_float_bord.focus();
                return false;
			}
			else {
				check_float_bord.style.border = "black solid 1px";
				info_msg.innerHTML="";
				return true;
        }
}
