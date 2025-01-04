# **Tổng quan dự án**

Dự án này tập trung vào việc thiết kế và quản lý cơ sở dữ liệu (CSDL) trong nhiều môi trường khác nhau, bao gồm cả CSDL 
phân tán và các hệ thống lưu trữ như MongoDB và Neo4j. Các bước thực hiện chính bao gồm:

---

## **1. Thiết kế CSDL và CSDL phân tán**
- Tạo mô hình dữ liệu logic và vật lý phù hợp cho các hệ thống phân tán.
- Phân tích cách lưu trữ dữ liệu hiệu quả, tối ưu hóa việc truy xuất dữ liệu và đảm bảo tính nhất quán trong môi trường CSDL phân tán.

---

## **2. Xây dựng metadata (JSON/BSON) và lưu trữ trên MongoDB**
- Tổ chức và lưu trữ thông tin mô tả dữ liệu (metadata) ở định dạng JSON hoặc BSON.
- Sử dụng MongoDB để quản lý và lưu trữ các metadata, hỗ trợ xử lý dữ liệu phi cấu trúc hoặc bán cấu trúc.

---

## **3. Thiết kế CSDL tích hợp truy xuất dữ liệu (RDB & MongoDB)**
- Kết hợp các hệ thống cơ sở dữ liệu quan hệ (RDB) và NoSQL (MongoDB) trong cùng một dự án.
- Phân tích cách thiết kế hệ thống để đảm bảo khả năng truy vấn hiệu quả từ nhiều nguồn dữ liệu khác nhau.

---

## **4. Thiết kế dữ liệu multimedia**
- Xây dựng hệ thống để lưu trữ và quản lý dữ liệu đa phương tiện (ảnh, video, âm thanh).
- Đề xuất các giải pháp lưu trữ và tối ưu hóa dữ liệu multimedia trong CSDL hiện đại.

---

## **Mục tiêu dự án**
- Nâng cao khả năng thiết kế và quản lý CSDL hiện đại, phù hợp với các nhu cầu ứng dụng thực tế.
- Tìm hiểu và áp dụng các công nghệ mới như MongoDB, Neo4j và các mô hình dữ liệu đa dạng (phân tán, phi cấu trúc).
- Xây dựng giải pháp tích hợp giữa các loại cơ sở dữ liệu khác nhau, phục vụ cho các bài toán phức tạp về truy vấn dữ liệu.

## **Cấu trúc dự án**
- gồm 3 source chạy song song nhau:
  - "Middleware Data query": dùng để kết nối cơ sở dữ liệu quan hệ, thực hiện chức năng quản lý truy vấn data từ database.
  - "Metadata_Storage": Dùng để lưu trữ metadata trong MongoDB và lưu trữ Multimedia trên Cloudinary.
  - "UI-digitalMarketing": Giao diện người dùng

## **Cách chạy dự án**
- Chạy lần lượt 3 project (có file hướng dẫn riêng trong từng project):
  - Sử dụng NVM để thay đổi các version của NodeJs (Backend và UI dùng 2 version khác nhau):
    Sau khi đã cài nvm và các version khác nhau của NodeJs (có hướng dẫn chi tiết trong file README của từng project)
    - Mở cmd trên máy tính, chạy với quyền quản trị viên.
    - Cách kiểm tra: nhập lệnh `nvm list` để xem danh sách các version đã cài trong máy tính. Nếu không có, tiến hành cài lại theo file hướng dẫn.
    - Bắt đầu chạy các dự án:
      - Nhập lệnh `nvm use 20.9.0` để dùng version 20.9.0 của NodeJS
      - Tiến hành chạy 2 project "Middleware_Data_query" và "Metadata_Storage" theo hướng dẫn trong file README.
      - Sau đó, nhập lệnh `nvm use 14.17.0` để chuyển sang version 14.17.0.
      - Chạy project còn lại "UI-digitalMarketing" để mở giao diện người dùng.
       
## **Các lỗi thường gặp:**
**1. Lỗi:**
- Chưa cài đúng các version của NodeJs
- Xảy ra xung đột giữa các project khi chạy song song
  
**2. Giải pháp:**
- Kiểm tra và cài lại các version của NodeJs đúng theo hướng dẫn.
- Vì dụng 2 version khác nhau để chạy các dự án, nên thường xảy ra xung đột giữa thư viện và môi trường,
  nên sau khi chạy UI bước cuối cùng, cần chuyển version NodeJs về lại v20.9.0 để tránh xảy ra lỗi.
  
  


