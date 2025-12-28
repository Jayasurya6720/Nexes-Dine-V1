<?php
// ===============================
// CORS & RESPONSE HEADERS
// ===============================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// ===============================
// BASIC VALIDATION
// ===============================
if (!isset($_POST['mediaType']) || !isset($_POST['category']) || !isset($_FILES['file'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Required data missing"
    ]);
    exit;
}

// ===============================
// GET DATA
// ===============================
$mediaType = $_POST['mediaType']; // image / video
$category  = $_POST['category'];
$file      = $_FILES['file'];

// ===============================
// SANITIZE CATEGORY NAME
// Event Video -> event-video
// ===============================
$category = strtolower(trim($category));
$category = str_replace(" ", "-", $category);

// ===============================
// ALLOWED MEDIA TYPES
// ===============================
$allowedImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
$allowedVideoTypes = ["video/mp4", "video/webm", "video/ogg"];

// ===============================
// FILE TYPE VALIDATION
// ===============================
if ($mediaType === "image" && !in_array($file['type'], $allowedImageTypes)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid image format"
    ]);
    exit;
}

if ($mediaType === "video" && !in_array($file['type'], $allowedVideoTypes)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid video format"
    ]);
    exit;
}

// ===============================
// FILE SIZE CHECK
// ===============================
$maxSize = ($mediaType === "image") ? 5 * 1024 * 1024 : 100 * 1024 * 1024;

if ($file['size'] > $maxSize) {
    echo json_encode([
        "status" => "error",
        "message" => "File size too large"
    ]);
    exit;
}

// ===============================
// UPLOAD PATH
// ===============================
$basePath = __DIR__ . "/uploads/$mediaType/$category/";

// CREATE FOLDER IF NOT EXISTS
if (!file_exists($basePath)) {
    mkdir($basePath, 0777, true);
}

// ===============================
// FILE NAME (SAFE)
// ===============================
$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$newFileName = time() . "_" . uniqid() . "." . $extension;
$targetFile = $basePath . $newFileName;

// ===============================
// MOVE FILE
// ===============================
if (move_uploaded_file($file['tmp_name'], $targetFile)) {
    echo json_encode([
        "status" => "success",
        "message" => "Upload successful",
        "file" => $newFileName
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Upload failed"
    ]);
}
?>
