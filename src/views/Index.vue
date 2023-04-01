<template>
  <div class="container">
    <h1 class="title">Chức năng cơ bản</h1>
    <h2 class="subtitle" style="font-weight:bold">
      1. Create Wallet
    </h2>
    <pre>
      - Để tạo một wallet mới, người dùng cần cung cấp password của họ.

      - Dựa trên library ethereumjs ta lần lượt tạo được privateKey và newAddress 
      thông qua 2 functions : getHexPrivateKey và getHexAddress.

      - Convert thông tin về định dạng v3 thông qua hàm tov3string và user có thể download file json để lưu trữ
    </pre>
    <h2 class="subtitle" style="font-weight:bold">
      2. Transaction
    </h2>
     <pre>
      - Để thực hiện 1 transaction. Đầu tiên user cần cung cấp thông tin wallet của họ.

      Có thể sử dụng file json và password ở step tạo wallet để load wallet của mình.

      - Chọn host : main network hay testnetwork. Lúc này sẽ connect tới host để lấy balance của wallet.
      (Số lượng confirm được lưu trong file config để xác định số lượng confirmation cần thiết)

      - Cần cung cấp địa chỉ nhận cũng như amount cho giao dịch.

      - Sau đó cần sign transaction và send transacion.
      
    </pre>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
.panel-block .column {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
