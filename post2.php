<?php


$file = dirname(__FILE__) . '/output.txt';

$data = date("d/m/Y H:i:s");

file_put_contents($file, $data, FILE_APPEND); 