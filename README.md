# Shopify App

## Khởi đầu

### Môi trường

1. Node.js 20.x or higher
2. mariadb 10.4 or higher

### Chuẩn bị

Đầu tiên, hãy chạy lệnh sau để tải thư viện cần thiết.

```shell
npm install
```

1. Tạo tệp `shopify.app.toml` tương tự tệp `shopify.app.toml.sample`.

    > Ở đây viết những quyền mà App cần sử dụng.

2. Tạo tệp `.env` tương tự tệp `.env.sample`

    > Có thể để trắng tệp.

3. Tạo tệp `web/.env` tương tự tệp `web/.env.sample`
    >```shell
    >npm run prisma generate
    >```
    >```shell
    >npm run prisma db push
    >```
    >
    > Tệp này config database mà bạn sẽ lưu dữ liệu App.
    > Bạn cũng cần tạo database trước, nếu chưa có.
    > Sau đó vào thư mục ./web chạy lệnh sau để tạo các table được khai báo trong tệp `web/prisma/schema.prisma`


### Khởi động ứng dụng

```shell
npm run dev
```

Quá trình cài đặt App đã hoàn thành.