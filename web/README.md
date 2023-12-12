# Thư mục `api` chứa các file API của dự án

api/
│
├── app/ # Thư mục chính của ứng dụng Flask
│ ├── static/ # Chứa các tệp tĩnh như CSS, JS, images
│ ├── templates/ # Chứa các template HTML cho Flask
│ │
│ ├── models/ # Định nghĩa các model liên quan đến database
│ │ ├── **init**.py
│ │ ├── user_model.py # Ví dụ: Model User
│ │ └── ...
│ │
│ ├── services/ # Tầng xử lý logic nghiệp vụ
│ │ ├── **init**.py
│ │ ├── user_service.py # Ví dụ: Xử lý nghiệp vụ liên quan đến User
│ │ └── ...
│ │
│ ├── api/ # Tầng xử lý các API endpoint
│ │ ├── **init**.py
│ │ ├── user_api.py # Ví dụ: API endpoints cho User
│ │ └── ...
│ │
│ ├── utils/ # Các module tiện ích
│ │ ├── **init**.py
│ │ ├── http_client.py # Xử lý các yêu cầu HTTP, ví dụ sử dụng requests
│ │ └── ...
│ │
│ ├── database.py # Cấu hình và kết nối database
│ ├── config.py # Cấu hình ứng dụng
│ └── **init**.py # Khởi tạo ứng dụng Flask
│
├── migrations/ # Thư mục cho Alembic (nếu sử dụng Flask-Migrate)
│
├── tests/ # Thư mục cho các unit test
│ ├── **init**.py
│ ├── test_models.py
│ ├── test_services.py
│ ├── test_api.py
│ └── ...
│
├── requirements.txt # Các gói Python cần thiết
├── .env # Các biến môi trường (nếu sử dụng)
├── .gitignore # Danh sách các file không track bởi Git
└── run.py # Script chạy ứng dụng Flask

# thư mục `app` chứa các frontend của dự án

app/
│
├── public/ # Thư mục cho tài nguyên tĩnh như hình ảnh
│
├── src/ # Thư mục nguồn chính
│ ├── components/ # Reusable components
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ...
│ │
│ ├── pages/ # Các trang và routing (Next.js routing)
│ │ ├── \_app.js # Root component, cấu hình Redux và Saga
│ │ ├── index.js # Trang chủ
│ │ ├── about.js
│ │ └── ...
│ │
│ ├── store/ # Cấu hình Redux Toolkit và Saga
│ │ ├── slices/ # Redux slices
│ │ │ ├── userSlice.js
│ │ │ └── ...
│ │ ├── sagas/ # Redux sagas
│ │ │ ├── userSaga.js
│ │ │ └── ...
│ │ ├── store.js # Cấu hình và khởi tạo store
│ │ └── rootReducer.js # Root reducer
│ │
│ ├── hooks/ # Custom hooks
│ │
│ └── utils/ # Utility functions
│
├── styles/ # Global styles
│ ├── globals.css
│ └── ...
│
├── .env # Biến môi trường
├── next.config.js # Cấu hình Next.js
├── package.json
└── ...
