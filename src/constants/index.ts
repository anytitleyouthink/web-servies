// src/constants.ts

export const NAV_LINKS = [
    { id: "about", title: "Giới thiệu", link: null },
    { id: "service", title: "Dịch vụ", link: null }, 
    { id: "news", title: "Tin tức", link: null },
    { id: "contact", title: "Liên hệ", link: null }, // Đã sửa "Lien hệ" -> "Liên hệ"
] as const;

export const ABOUT_CONTENT = {
  title: "Dịch vụ đa cấp xuyên quốc gia TaiTien xin hân hạnh tài trợ",
  description: `Hơn 10 năm kinh nghiệm đưa hàng Việt vươn ra biển lớn. Chúng tôi không chỉ vận chuyển hàng hóa, chúng tôi vận chuyển cả 'giấc mơ đổi đời' của bạn đi khắp 5 châu. Với mạng lưới kho bãi phủ sóng từ Đông Nam Á sang Tây Bắc Mỹ, TaiTien cam kết: Hàng đi đến nơi, tiền về đến chốn, chốt đơn mỏi tay, vận hành siêu tốc.`,
  buttonText: "Liên hệ ngay",
  buttonLink: "#contact",
  
  // ID video từ link: https://www.youtube.com/shorts/_pclsnpCsaY
  videoId: "_pclsnpCsaY" 
} as const;
// src/constants.ts

export const ABOUT_STATS = {
  title: "Những con số ấn tượng",
  stats: [
    { 
      value: 4, 
      label: "Năm kinh nghiệm", 
      suffix: "" // Không có hậu tố
    },
    { 
      value: 500, 
      label: "Khách hàng", 
      suffix: "+" // Hậu tố dấu cộng
    },
    { 
      value: 2000000, // Lưu ý: Để số nguyên, không có dấu phẩy
      label: "Đơn hàng được gửi đi", 
      suffix: "+" 
    },
    { 
      value: 500, 
      label: "Đánh giá 5 sao", 
      suffix: "+" 
    }
  ]
} as const;

