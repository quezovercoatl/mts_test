<?php

$num_1 = $_GET['num_1'];
$num_2 = $_GET['num_2'];
$summ = (float)$num_1 + (float)$num_2;
$hostname = gethostname();
echo "$hostname: $num_1 + $num_2 = $summ";

?>
