<?php

function calc_on_backends($backend_service_name, $number_1, $number_2) {
	$get = array(
        	'num_1'  => $number_1,
        	'num_2'  => $number_2
	);

	$ch = curl_init("http://$backend_service_name/calc.php?" . http_build_query($get));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_HEADER, false);
	$result = curl_exec($ch);
	curl_close($ch);

	return $result;
}

//MAIN

if (isset($_GET['num_1']) and isset($_GET['num_2'])) {
        $number_1 = $_GET["num_1"];
	$number_2 = $_GET["num_2"];

	$res_summ = calc_on_backends("backend-summ", $number_1, $number_2);
	$res_mult = calc_on_backends("backend-mult", $number_1, $number_2);

	echo "$res_summ <br> $res_mult";
}
else {

        echo "Error: parameters num_1 and num_2 are empty!";
}

?>
