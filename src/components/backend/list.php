<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$base = "uploads";
$result = [];

foreach (["image", "video"] as $type) {
  foreach (glob("$base/$type/*") as $cat) {
    foreach (glob("$cat/*") as $file) {
      $result[] = [
        "type" => $type,
        "category" => basename($cat),
        "path" => "http://localhost:3000/backend/" . $file
      ];
    }
  }
}

echo json_encode($result);
