import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.language": "Language",
      
      // Introduction Section
      "intro.greeting": "Hello! I'm",
      "intro.title": "Full Stack Developer",
      "intro.viewResume": "View My Resume",
      "intro.tabs.about": "About Me",
      "intro.tabs.experience": "Experience",
      "intro.tabs.education": "Education & Certificates",
      "intro.about.title": "About Me",
      "intro.about.description": "I’m Ben, a backend-leaning full-stack dev who values clarity, ownership, and steady iteration. I like building straightforward, fast web experiences and collaborating with kind, detail-oriented people. When I log off, you’ll catch me going to the Gym, Gaming and Exloring new places.",
      "intro.experience.title": "Experience",
      "intro.experience.years": "1+ Year Professional Experience",
      "intro.experience.description": "Previously an intern at LEAD INNOVATIONZ (Feb–Jun 2025), where I built microservices with RabbitMQ/MQTT, added Redis caching, and dockerized services for reliable environments. I co-designed Bookme.com booking flows, analyzed Odoo ERP workflows, and shipped AI chatbot integrations and automated AI workflows.\n\nEarlier at Chameleon (Oct 2023–Mar 2024), I turned Figma designs into responsive React components, implemented secure JWT + refresh token auth, and improved performance across the stack (bundle size, lazy loading, query efficiency, caching).\n\nStack: Node.js, TypeScript, Express, React, Next.js, Docker, RabbitMQ, MQTT, Redis, REST APIs, SQL/NoSQL, Odoo, AI Integration, Git.",
      "intro.education.title": "Education",
      "intro.education.degree": "Bachelor of Computer Science",
      "intro.education.university": "University of Technology",
      "intro.certificates.title": "Certifications",
      "intro.certificates.clickToView": "Click to view certificate",
      
      // Projects Section
      "projects.title": "My Projects",
      "projects.subtitle": "Here are some of the projects I've worked on",
      "projects.tools": "Tools Used",
      "projects.viewProject": "View Project",
      "projects.github": "GitHub",
      
      // Sample Projects
      "project1.title": "Timeless E-commerce",
      "project1.description": "Architected a full-stack, containerized (Docker) e-commerce platform using Next.js 16 and Node.js. It delivers a rich user experience with Stripe payments, a persistent Redux cart, and multi-language support. The backend leverages PostgreSQL, Prisma, and Redis for a robust and cached data layer, secured by JWT. A comprehensive admin dashboard enables management of products, users, and sales analytics.",
      "project1.tools": "Frontend: Next.js 16 (React 19), TypeScript, Tailwind CSS, Redux Toolkit, React Hook Form, Framer Motion, Stripe React SDK, Lucide React\n\nBackend: Node.js, Express, PostgreSQL, Prisma, Redis, JWT, bcrypt, Stripe API, Express Validator\n\nDevOps: Docker, Docker Compose",   

      "project2.title": "Real-Time Chat Application",
      "project2.description": "Full-stack real-time chat application inspired by Discord.  Users can create accounts, build server communities, organize conversations in channels, and chat instantly using WebSocket connections. Features secure JWT authentication, password hashing, and a PostgreSQL database with Prisma ORM for robust data management.",
      "project2.tools": "React, TypeScript, Node.js, Express, Socket.io, PostgreSQL, Prisma ORM, Tailwind CSS, JWT, bcrypt",
      
      // "project3.title": "Weather Dashboard",
      // "project3.description": "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Displays hourly and 7-day forecasts.",
      // "project3.tools": "React, OpenWeather API, Chart.js, Leaflet",
      
      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "I'd love to hear from you! Feel free to reach out.",
      "contact.phone": "Phone",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Email",
      "contact.form.title": "Send Me a Message",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Your Message",
      "contact.form.send": "Send Message",
      "contact.form.emailSubject": "Worker reach out to you",
      "contact.form.success": "Message sent successfully!",
      "contact.form.error": "Please fill in all fields.",
      
      // Footer
      "footer.text": "© 2024 All rights reserved. Built with 💚 using React"
    }
  },
  vi: {
    translation: {
      // Navigation
      "nav.home": "Trang chủ",
      "nav.projects": "Dự án",
      "nav.skills": "Kỹ năng",
      "nav.about": "Giới thiệu",
      "nav.contact": "Liên hệ",
      "nav.language": "Ngôn ngữ",
      
      // Introduction Section
      "intro.greeting": "Xin chào! Mình là Đạt",
      "intro.title": "Lập trình viên Full Stack",
      "intro.viewResume": "Xem Hồ Sơ",
      "intro.tabs.about": "Giới thiệu",
      "intro.tabs.experience": "Kinh nghiệm",
      "intro.tabs.education": "Học vấn & Chứng chỉ",
      "intro.about.title": "Giới thiệu",
      "intro.about.description": "Mình là Ben, một dev full-stack thiên về backend, coi trọng sự rõ ràng, tinh thần sở hữu và nhịp cải tiến đều đặn. Mình thích xây những trải nghiệm web đơn giản, nhanh và dễ dùng, và thích cộng tác với mọi người, chú trọng chi tiết. Khi tắt máy, bạn thường sẽ thấy mình đi gym, chơi game và khám phá những nơi mới.",
      "intro.experience.title": "Kinh nghiệm",
      "intro.experience.years": "Hơn 1 Năm Kinh Nghiệm Chuyên Nghiệp",
      "intro.experience.description": "LEAD INNOVATIONZ — Thực tập Backend (02/2025 – 06/2025)\nXây dựng & bảo trì microservices; dùng RabbitMQ/MQTT cho messaging và Redis cho cache/trạng thái tạm. Docker hóa dịch vụ để đồng nhất môi trường và triển khai mượt hơn. Thiết kế luồng đặt chỗ cho Bookme.com (tìm kiếm → kiểm tra khả dụng → thanh toán) và phân tích quy trình Odoo ERP. Phát triển tích hợp AI chatbot và tự động hóa workflow AI để cải thiện trải nghiệm người dùng.\n\nChameleon — Thực tập Kỹ sư (10/2023 – 03/2024)\nChuyển Figma thành các component React responsive và xây dựng design system nhẹ. Triển khai xác thực JWT với refresh token an toàn và cookie bảo mật. Tối ưu hiệu năng: Frontend (giảm bundle, lazy loading) và Backend (tối ưu truy vấn, caching).\n\nStack: Node.js, TypeScript, Express, React, Next.js, Docker, RabbitMQ, MQTT, Redis, REST APIs, SQL/NoSQL, Odoo, tích hợp AI, Git.",
      "intro.education.title": "Học vấn",
      "intro.education.degree": "Tốt nghiệp Cử nhân Công nghệ Thông tin, chuyên ngành Phát triển Ứng dụng.",
      "intro.education.university": "Đại học Deakin University",
      "intro.certificates.title": "Chứng chỉ",
      "intro.certificates.clickToView": "Nhấp để xem chứng chỉ",
      
      // Projects Section
      "projects.title": "Dự án của tôi",
      "projects.subtitle": "Đây là một số dự án tôi đã thực hiện",
      "projects.tools": "Công cụ sử dụng",
      "projects.viewProject": "Xem dự án",
      "projects.github": "GitHub",
      
      // Sample Projects
      "project1.title": "Timeless E-commerce",
      "project1.description": "Đang xây dựng ứng dụng thương mại điện tử thời trang hiện đại với Next.js 14 (App Router) và API Node.js/Express. Người dùng có thể duyệt và tìm kiếm sản phẩm, lưu danh sách yêu thích, thanh toán qua Stripe, và theo dõi đơn hàng. Quản trị viên có bảng điều khiển với phân quyền để quản lý danh mục, xem xu hướng bán hàng, và giám sát mục yêu thích. Stack nhấn mạnh vào strong typing (TypeScript), form được xác thực schema (Zod), và lớp dữ liệu mạnh mẽ với PostgreSQL + Prisma.",
      "project1.tools": "Frontend: Next.js 14, TypeScript, TailwindCSS, Redux Toolkit, React Query, Axios, React Hook Form, Zod, Framer Motion, Lucide React\n\nBackend: Node.js, Express, PostgreSQL, Prisma ORM, JWT, bcrypt, Stripe, OpenAI APIs, AWS S3, Nodemailer, Joi",
      
      "project2.title": "Ứng dụng nhắn tin",
      "project2.description": "Ứng dụng chat thời gian thực full-stack lấy cảm hứng từ Discord. Người dùng có thể tạo tài khoản, xây dựng cộng đồng máy chủ, tổ chức các cuộc trò chuyện theo kênh, và nhắn tin ngay lập tức thông qua kết nối WebSocket. Tích hợp xác thực JWT bảo mật, mã hóa mật khẩu, và cơ sở dữ liệu PostgreSQL",
      "project2.tools": "React, TypeScript, Node.js, Express, Socket.io, PostgreSQL, Prisma ORM, Tailwind CSS, JWT, bcrypt",
      
      // "project3.title": "Bảng điều khiển Thời tiết",
      // "project3.description": "Ứng dụng thời tiết theo thời gian thực với dự báo dựa trên vị trí, bản đồ tương tác và cảnh báo thời tiết. Hiển thị dự báo theo giờ và 7 ngày.",
      // "project3.tools": "React, OpenWeather API, Chart.js, Leaflet",
      
      // Contact Section
      "contact.title": "Liên lạc",
      "contact.subtitle": "Tôi rất muốn nghe từ bạn! Đừng ngần ngại liên hệ.",
      "contact.phone": "Điện thoại",
      "contact.linkedin": "LinkedIn",
      "contact.email": "Email",
      "contact.form.title": "Gửi tin nhắn cho tôi",
      "contact.form.name": "Tên của bạn",
      "contact.form.email": "Email của bạn",
      "contact.form.message": "Tin nhắn của bạn",
      "contact.form.send": "Gửi tin nhắn",
      "contact.form.emailSubject": "Người làm việc liên hệ với bạn",
      "contact.form.success": "Tin nhắn đã được gửi thành công!",
      "contact.form.error": "Vui lòng điền đầy đủ thông tin.",
      
      // Footer
      "footer.text": "© 2024 Bản quyền. Được xây dựng với 💚 bằng React"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

