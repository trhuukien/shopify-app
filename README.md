# Shopify App

## Getting started

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
    > Có thể để trắng tệp. (Build production cho App mới cần setup.)

3. Tạo tệp `web/.env` tương tự tệp `web/.env.sample`
    > Tệp này config database mà bạn sẽ lưu dữ liệu App.
    >
    > Bạn cũng cần tạo database trước, nếu chưa có.
    >
    > Sau đó vào thư mục ./web chạy lệnh sau để tạo các table được khai báo trong tệp `web/prisma/schema.prisma`
    >
    >```shell
    >npm run prisma generate
    >```
    >```shell
    >npm run prisma db push
    >```


### Khởi động ứng dụng

```shell
npm run dev
```

Quá trình cài đặt App đã hoàn thành.


## Deployment

### Tạo mới ứng dụng

Bạn cần tạo mới 1 ứng dụng trên partners.

1. Đăng nhập vào partners shopify để tạo app. Ex: https://partners.shopify.com/3384498/apps/new.

2. Chọn loại App. Ex: https://partners.shopify.com/3384498/apps/190196449281/distribution

3. Truy cập vào `Client credentials`. Ex: https://partners.shopify.com/3384498/apps/190196449281/overview
    > Client ID: là SHOPIFY_API_KEY
    >
    > Client secret: là SHOPIFY_API_SECRET

Đã tạo xong App.

### Xây dựng giao diện người dùng

Chạy lệnh sau để build frontend.

> Bạn cần lấy được Client secret của App trong bước trên. Để thay thế vào câu lệnh bên dưới.
>
> Ví dụ: `37097f08c5f84f63b1d446df0z111201`.

```shell
cd web/frontend/
```
```shell
SHOPIFY_API_KEY=37097f08c5f84f63b1d446df0z111201 npm run build
```

> Nếu thành công. Tệp dist sẽ được tạo ra ở đây `web/frontend/dist`.

### Cài đặt tệp .env

```env
# See https://partners.shopify.com/3384498/apps/190196449281/overview
# SHOPIFY_API_KEY is Client ID
# SHOPIFY_API_SECRET is Client secret

SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SCOPES=write_products
HOST=https://my-domain.trycloudflare.com/
PORT=3000
```

> Nếu server của bạn chưa có domain thì có thể dùng trycloudflare.
> Nhưng nhược điểm của nó là mỗi lần reset server link sẽ bị thay đổi :>
>
>```shell
>cloudflared tunnel --url http://localhost:3000
>```
>
> Kiểm tra log bạn sẽ thấy 1 đường dẫn tương tự như thế này `https://my-domain.trycloudflare.com`.

HOST và PORT bạn có thể điền sau khi làm bước dưới. (nếu không biết phải điền gì).

### Khởi động ứng dụng

```shell
npm --workspace=@app/my_app-backend run serve
```

> Bạn có thể cài đặt PM2 để auto run lệnh này khi server reset. https://pm2.keymetrics.io/docs/usage/quick-start/

Sau khi chạy lệnh server NodeJS (Backend) sẽ được khởi động. Bạn có thể thấy port của nó trong log. Thông thườn port của NodeJS là `3000`.

```shell
...
> @app/my_app-backend@1.0.0 serve
> cross-env NODE_ENV=production node index.js

[shopify-api/WARNING] Loading REST resources for API version 2024-01, which doesn't match the default 2024-04
[shopify-api/INFO] version 10.0.0, environment Node v20.10.0
[shopify-api/INFO] Future flag lineItemBilling is disabled.

  Enable this flag to use the new billing API, that supports multiple line items per plan.

🚀 Server is running on port 3000
...
```

Bạn đã hoàn thành build product mode cho App.

### Cài đặt App

Truy cập url `https://domain?auth?shop={store}` để cài đặt App.

> Ex: https://my-domain.trycloudflare.com/auth?shop=kiz-store.myshopify.com

Truy cập link và cài đặt App.
