<?php
$mahasiswa = [
    "nama" => "alfius stevanus",
    "nrp" => "162021018",
    "email" => "alfius@gmail.com"
];

$data = json_encode($mahasiswa);
var_dump($mahasiswa);
echo '<br/>';
echo $data;
