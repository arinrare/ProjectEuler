<?php
include('../../secrets.php');

$webhook_secret = $deploySecret;

// Get the signature sent by GitHub
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// Calculate the expected signature
$payload = file_get_contents('php://input');
$expected_signature = 'sha256=' . hash_hmac('sha256', $payload, $webhook_secret);

// Verify the signature
if (!hash_equals($expected_signature, $signature)) {
    header("HTTP/1.1 403 Forbidden");
    die("Invalid signature");
}

// Create a flag file
file_put_contents('../../.deploy_trigger', 'euler');
echo "Deployment queued.";
?>