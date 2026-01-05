# Батаагийн Зөгийн Бал - Онлайн Сургалтын Платформ

Монгол хэл дээрх онлайн сургалт худалдаалах платформ. Next.js 16, MongoDB, AI функцууд болон Монголын төлбөрийн системүүдийг (QPay, Хаан банк) дэмждэг.

## Онцлог шинж чанарууд

### Хэрэглэгчийн функцууд
- Сургалт үзэх, хайх, шүүх
- Үнэгүй болон төлбөртэй сургалтуудад бүртгүүлэх
- Хичээл үзэх, явц хянах
- AI туслах чатбот
- AI-аар сургалт санал болгох
- Хичээлийн AI тойм үүсгэх

### Админы функцууд
- Сургалт үүсгэх, засах, устгах
- Хичээл нэмэх, удирдах
- Хэрэглэгчдийг удирдах
- Төлбөрийн түүх харах
- Аналитик дашбоард

### Төлбөрийн системүүд
- QPay (QR код)
- Хаан банк (шилжүүлэг)
- SocialPay
- Үнэгүй сургалтуудад шууд бүртгэл

### AI функцууд
- AI туслах чатбот (сурагчдад тусална)
- Сургалт санал болгох систем
- Хичээлийн автомат тойм үүсгэгч

## Технологиуд

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4
- **Backend:** Next.js API Routes, Server Actions
- **Database:** MongoDB
- **Auth:** JWT (jose), bcryptjs
- **AI:** Vercel AI SDK
- **UI:** shadcn/ui, Lucide Icons

## Локал орчинд ажиллуулах заавар

### 1. Шаардлагатай программууд

- Node.js 18+ (https://nodejs.org)
- MongoDB (https://mongodb.com/try/download/community)
- Git (https://git-scm.com)
- Visual Studio Code (https://code.visualstudio.com)

### 2. Төслийг татах

**Арга 1: v0-с ZIP татах**
1. v0 дээр баруун дээд буланд байрлах `...` товч дээр дарна
2. "Download ZIP" сонгоно
3. ZIP файлыг задлана

**Арга 2: GitHub-с clone хийх (хэрэв deploy хийсэн бол)**
```bash
git clone <your-repo-url>
cd bataa-honey
```

### 3. Dependencies суулгах

Visual Studio Code-д төслийн хавтсыг нээнэ. Дараа нь Terminal нээж:

```bash
npm install
```

### 4. Environment Variables тохируулах

Төслийн үндсэн хавтаст `.env.local` файл үүсгэнэ:

```env
# MongoDB холболт
MONGODB_URI=mongodb://localhost:27017/bataa-honey

# JWT нууц түлхүүр (өөрийн нууц үг оруулна)
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random

# QPay тохиргоо (бодит интеграцид шаардлагатай)
QPAY_USERNAME=your_qpay_username
QPAY_PASSWORD=your_qpay_password
QPAY_INVOICE_CODE=your_invoice_code

# Khan Bank тохиргоо
KHAN_BANK_ACCOUNT=your_account_number
KHAN_BANK_NAME=your_account_name
```

### 5. MongoDB ажиллуулах

MongoDB Compass эсвэл terminal ашиглан MongoDB-г ажиллуулна:

```bash
# macOS/Linux
mongod

# Windows (MongoDB service ажиллаж байгаа эсэхийг шалгана)
net start MongoDB
```

### 6. Өгөгдлийн сан бэлтгэх (Seed)

```bash
node scripts/seed-database.js
```

Энэ скрипт дараах өгөгдлийг үүсгэнэ:
- Админ: `admin@bataa.mn` / `admin123`
- Хэрэглэгч: `user@test.mn` / `user123`
- 6 жишээ сургалт
- Жишээ хичээлүүд

### 7. Хөгжүүлэлтийн сервер ажиллуулах

```bash
npm run dev
```

Браузерт `http://localhost:3000` хаягаар орно.

## Хуудсуудын бүтэц

```
/ - Нүүр хуудас
/courses - Сургалтуудын жагсаалт
/courses/[id] - Сургалтын дэлгэрэнгүй
/courses/[id]/learn - Хичээл үзэх
/login - Нэвтрэх
/register - Бүртгүүлэх
/dashboard - Хэрэглэгчийн самбар
/ai-tutor - AI туслах
/checkout/[courseId] - Төлбөр төлөх

/admin - Админ самбар
/admin/courses - Сургалт удирдах
/admin/courses/new - Шинэ сургалт
/admin/courses/[id]/edit - Сургалт засах
/admin/courses/[id]/lessons - Хичээл удирдах
/admin/users - Хэрэглэгчид
/admin/payments - Төлбөрүүд
/admin/analytics - Аналитик
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Бүртгүүлэх
- `POST /api/auth/login` - Нэвтрэх
- `POST /api/auth/logout` - Гарах
- `GET /api/auth/me` - Одоогийн хэрэглэгч

### Courses
- `GET /api/courses` - Сургалтуудын жагсаалт
- `GET /api/courses/[id]` - Сургалтын дэлгэрэнгүй
- `POST /api/courses` - Сургалт үүсгэх (админ)
- `PUT /api/courses/[id]` - Сургалт засах (админ)
- `DELETE /api/courses/[id]` - Сургалт устгах (админ)
- `POST /api/courses/enroll` - Сургалтад бүртгүүлэх

### Lessons
- `GET /api/courses/[id]/lessons` - Хичээлүүд
- `POST /api/courses/[id]/lessons` - Хичээл нэмэх (админ)

### Payments
- `POST /api/payment/create` - Төлбөр үүсгэх
- `GET /api/payment/check` - Төлбөр шалгах
- `POST /api/payment/callback` - Callback (QPay)

### AI
- `POST /api/ai/chat` - AI чат
- `POST /api/ai/recommend` - Сургалт санал болгох
- `POST /api/ai/summarize` - Хичээл тойм

### Admin
- `GET /api/admin/users` - Хэрэглэгчид
- `PUT /api/admin/users/[id]` - Хэрэглэгч засах
- `DELETE /api/admin/users/[id]` - Хэрэглэгч устгах
- `GET /api/admin/analytics` - Аналитик

## Бодит төлбөрийн интеграци

### QPay интеграци

1. QPay merchant бүртгэл үүсгэх (https://merchant.qpay.mn)
2. API credentials авах
3. `.env.local` файлд нэмэх
4. `lib/payment.ts` файл дахь `createQPayInvoice` функцийг бодит API дуудлагаар солих

### Хаан банк интеграци

1. Хаан банкны бизнес данс нээх
2. API хандалт авах (хэрэв боломжтой бол)
3. Эсвэл гар аргаар шилжүүлэг баталгаажуулах систем ашиглах

## Бакалаврын төсөлд тохиромжтой болгох

Энэ төсөл дараах шинэлэг технологиудыг ашигласан:

1. **AI интеграци** - Vercel AI SDK ашиглан чатбот, санал болгох систем
2. **Орчин үеийн tech stack** - Next.js 16, React 19, Tailwind CSS 4
3. **Монгол локализаци** - Бүх UI монгол хэл дээр
4. **Төлбөрийн интеграци** - QPay, Хаан банк дэмжлэг
5. **Responsive дизайн** - Гар утас, таблет, компьютерт тохирсон
6. **Админ систем** - Бүрэн CRUD үйлдлүүд

## Асуудал шийдвэрлэх

### MongoDB холбогдохгүй байвал
- MongoDB service ажиллаж байгаа эсэхийг шалгана
- `MONGODB_URI` зөв эсэхийг шалгана
- Firewall тохиргоог шалгана

### npm install алдаа гарвал
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 завгүй байвал
```bash
npm run dev -- -p 3001
```

## Лиценз

MIT License - Чөлөөтэй ашиглаж болно.

## Холбоо барих

Асуулт байвал GitHub Issues ашиглана уу.
