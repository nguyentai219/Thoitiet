# 🌤️ Trời Hôm Nay — Dự Báo Thời Tiết

App dự báo thời tiết chi tiết theo đúng vị trí định vị của thiết bị đang mở, cài được lên máy như app thật (PWA), không cần đăng ký tài khoản hay API key nào.

## Tính năng

- **Định vị tự động** theo GPS của thiết bị, tự dò tên địa danh (xã/huyện/tỉnh) bằng tiếng Việt.
- **Hiện tại**: nhiệt độ, cảm giác thực tế, mô tả trời (nắng/mây/mưa/dông...), độ ẩm, tốc độ + hướng gió, lượng mưa hiện tại, áp suất.
- **Dải mây & mưa 24 giờ tới** — hình ảnh trực quan tự vẽ riêng cho từng giờ: hình mây (độ mờ/đậm theo đúng % che phủ mây thật) + cột mưa (chiều cao theo % khả năng mưa, độ đậm màu theo lượng mưa mm), kèm nhiệt độ và % khả năng mưa từng giờ.
- **Dự báo 7 ngày tới** với thanh nhiệt độ cao/thấp trực quan và % khả năng mưa mỗi ngày.
- **Ngày/đêm chính xác** — dùng đúng giờ mặt trời mọc/lặn thật của hôm đó (không đoán cố định 6h-18h) để hiện mặt trời hay trăng phù hợp.
- **Cài lên máy** như app thật qua "Thêm vào Màn hình chính" (PWA đầy đủ: có icon, chạy full màn hình, hoạt động cả khi mất mạng nhờ cache).

## Lịch tự động cập nhật

- **Lỗi** (chưa cấp quyền định vị, mất mạng...): tự thử lại **mỗi 10 giây**, lặp liên tục cho đến khi thành công.
- **Thành công**: tự làm mới lại dữ liệu **mỗi 10 phút**.
- Mở lại app sau khi ẩn đi một lúc (chuyển app khác, khoá màn hình...) → tự làm mới ngay lập tức.

## Dữ liệu từ đâu?

- Thời tiết: [Open-Meteo](https://open-meteo.com) — miễn phí, không cần đăng ký, không cần API key.
- Tên địa danh: [BigDataCloud Reverse Geocoding](https://www.bigdatacloud.com/) — miễn phí, không cần API key.

## Cách đưa lên GitHub Pages

1. Tạo 1 repository mới trên GitHub (ví dụ: `troi-hom-nay`).
2. Tải lên đúng 6 file này: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.
3. Vào **Settings → Pages**, chọn nhánh `main`, thư mục `/ (root)` → Save.
4. Đợi 1-2 phút, mở link dạng `https://<tên-tài-khoản>.github.io/troi-hom-nay/` bằng điện thoại.

## Cách cài lên máy (icon ngoài màn hình chính)

- **Android (Chrome)**: mở link trên → nhấn menu (⋮) góc phải → **"Thêm vào Màn hình chính"** (hoặc trình duyệt sẽ tự gợi ý cài đặt).
- **iPhone (Safari)**: mở link trên → nhấn nút Chia sẻ (hình vuông có mũi tên) → **"Thêm vào MH chính"**.

Sau khi cài, app sẽ có icon riêng ngoài màn hình, mở lên chạy như app thật (không còn thanh địa chỉ trình duyệt).

## Cập nhật số phiên bản (nếu sau này chỉnh sửa thêm)

Khi sửa file `index.html`, nhớ đổi số phiên bản cache trong `sw.js` (dòng `const CACHE = 'troi-hom-nay-v1.0.0'`) sang số mới (ví dụ `v1.0.1`) để máy người dùng tự tải lại bản mới thay vì dùng mãi bản cache cũ.

---

## 📋 Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
|-----------|------|----------|
| **v1.0.0** | 2026-08-11 | 🎉 Phiên bản đầu tiên — dự báo thời tiết chi tiết theo định vị thiết bị, dải mây/mưa 24 giờ tự vẽ, dự báo 7 ngày, tự cập nhật mỗi 10 phút (lỗi thì thử lại mỗi 10 giây), cài đặt được như PWA lên màn hình chính |
