<?php
// Tên các file cần giữ lại (không được xóa)
$exclude_list = ['.ftp-deploy-sync-state.json','deploy.php', 'deploy.zip', '.htaccess', 'cgi-bin', 'logs', 'tmp'];

/**
 * Hàm xóa đệ quy mọi thứ trong thư mục
 */
function clean_directory($dir, $exclude) {
    if (!is_dir($dir)) return;
    
    $items = scandir($dir);
    foreach ($items as $item) {
        if ($item == '.' || $item == '..') continue;
        if (in_array($item, $exclude)) continue;

        $path = $dir . DIRECTORY_SEPARATOR . $item;

        if (is_dir($path)) {
            clean_directory($path, $exclude);
            // Xóa thư mục rỗng sau khi đã dọn dẹp bên trong
            @rmdir($path);
        } else {
            // Xóa file
            @unlink($path);
        }
    }
}

// 1. Kiểm tra xem có file deploy.zip không
if (file_exists('deploy.zip')) {
    
    echo "Bắt đầu dọn dẹp server...\n";
    // 2. Xóa toàn bộ ngoại trừ các file trong danh sách loại trừ
    clean_directory('.', $exclude_list);
    echo "Đã dọn dẹp sạch sẽ!\n";

    // 3. Giải nén
    $zip = new ZipArchive;
    if ($zip->open('deploy.zip') === TRUE) {
        $zip->extractTo('./');
        $zip->close();
        echo "Giải nén thành công!\n";

        // 4. Xóa file zip sau khi xong
        unlink('deploy.zip');
        echo "Đã xóa file deploy.zip.\n";
    } else {
        echo "Lỗi: Không thể mở file deploy.zip!\n";
    }
} else {
    echo "Lỗi: Không tìm thấy file deploy.zip trên server!\n";
}
?>