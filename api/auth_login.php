<?php
require_once __DIR__ . '/config.php';
sessionStart();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if (empty($email) || empty($password)) {
    jsonResponse(['success' => false, 'message' => 'Email dan password wajib diisi']);
}

$db = getDB();
$stmt = $db->prepare("SELECT * FROM users WHERE email = ? AND aktif = 1");
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || !password_verify($password, $user['password'])) {
    jsonResponse(['success' => false, 'message' => 'Email atau password salah']);
}

$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['nama'];
$_SESSION['user_role'] = $user['role'];

$redirect = $user['role'] === 'admin' ? 'admin/dashboard.php' : 'home.php';
jsonResponse(['success' => true, 'message' => 'Login berhasil', 'redirect' => $redirect, 'role' => $user['role']]);
