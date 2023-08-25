<?php
// Get the origin from the request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// List of allowed origins
$allowedOrigins = array(
    '',
    'http://127.0.0.1:5500',
    'http://localhost:3050',
    'http://localhost:5000'
);

// Check if the requesting origin is in the allowed list
if (in_array($origin, $allowedOrigins)) {
    // Handle preflight request
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Max-Age: 3600");
} else {
    // Reject requests from other origins
    header("HTTP/1.1 403 Forbidden");
    exit();
}
