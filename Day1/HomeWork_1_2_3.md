# Quoc_Cocos_HomeWork3

// EX1 Build project trên Web Mobile, Web Desktop, Android trong thư mục ./Build_Web_Desktop_Android_AddLodash/build
- Web Mobile : Done.
- Web Desktop : Done.
- Android : Error compile!!!
Deploy web desktop : https://zoharr07.github.io/Deploy_CocosWebTest/

// Ex2 : cài đặt Module Lodash trong thư mục ./Build_Web_Desktop_Android_AddLodash/packages : Done.

// Ex3 Tìm hiểu các thông số trên Helo project:

- Frame Time - Khoảng thời gian mà một khung hình được kết xuất ra màn hình.

- Frame Rate - Là tần số quét(xuất hiện) các khung hình riêng lẻ được hiển thị trong một giây. Và FPS(Frames - per- second) là đơn vị tính thường được sử dụng. VD: các phim trong rạp chiếu phim sẽ là 24fps - 24 khung hình mỗi giây, màn hình máy tính thông thường là 60fps,...

- Draw call - là một lệnh của CPU gửi tới GPU là mesh cần vẽ (một dữ liệu duy nhất), lệnh này không chứa bất kỳ một thông tin gì về vertex, texture, color, shader...  Số lượt gọi lệnh và khối lượng dữ liệu sẽ ảnh hưởng đến frame per second.

- Game Logic - cũng là một lệnh của CPU gửi tới GPU (tương tự draw call), điều khiển các thay đổi trạng thái của đối tượng trong game.

- Renderer - là thời gian vẽ một hình ảnh hai chiều hoặc ba chiều, cung cấp quyền truy cập vào các APIs, và có thể dùng sau đó.

- WebGL - là một API JavaScript thực hiện nhiệm vụ hiển thị/tương tác đồ họa 2D và 3D có thể khởi chạy trong bất kỳ trình duyệt web tương thích nào mà không cần sử dụng các plug-in hỗ trợ. Đồng thời, WebGL được tích hợp tương thích với các tiêu chuẩn web khác, cho phép GPU sử dụng vật lý, xử lý hình ảnh/hiệu ứng như một phần của canvas trang web.