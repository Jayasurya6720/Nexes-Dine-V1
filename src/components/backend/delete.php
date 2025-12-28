<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"), true);

if (file_exists($data["path"])) {
  unlink($data["path"]);
}
echo json_encode(["status" => "deleted"]);
