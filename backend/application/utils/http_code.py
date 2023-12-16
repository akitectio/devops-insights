class HttpCode:
    # Yêu cầu thành công. (The request was successful.)
    OK = 200
    # Tài nguyên đã được tạo thành công. (A resource was successfully created.)
    CREATED = 201
    # Yêu cầu đã được chấp nhận để xử lý, nhưng quá trình xử lý chưa hoàn thành. (The request has been accepted but processing is not complete.)
    ACCEPTED = 202
    # Yêu cầu thành công nhưng không có nội dung để trả về. (The request was successful but there is no content to return.)
    NO_CONTENT = 204

    # Yêu cầu không hợp lệ do cú pháp xấu. (The request cannot be processed due to bad syntax.)
    BAD_REQUEST = 400
    # Yêu cầu cần có xác thực. (Authentication is required and has failed or has not been provided.)
    UNAUTHORIZED = 401
    # Không có quyền truy cập vào tài nguyên. (Access was denied to the requested resource.)
    FORBIDDEN = 403
    # Tài nguyên yêu cầu không thể tìm thấy. (The requested resource could not be found.)
    NOT_FOUND = 404
    # Phương thức được yêu cầu không được hỗ trợ cho tài nguyên này. (The request method is not supported for the requested resource.)
    PERMISSION_DENIED = 405
    # Loại truyền thông không được hỗ trợ. (The request entity has a media type which the server or resource does not support.)
    UNSUPPORTED_MEDIA_TYPE = 415
    # Máy chủ hiểu loại nội dung của yêu cầu nhưng không thể xử lý dữ liệu. (The server understands the content type of the request entity, but was unable to process the contained instructions.)
    UNPROCESSABLE_ENTITY = 422

    # Lỗi máy chủ nội bộ. (A generic error message for unexpected server conditions.)
    INTERNAL_ERROR = 500
