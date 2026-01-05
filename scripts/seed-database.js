// MongoDB Seed Script for Bataa's Honey Course Platform
// Run this script to populate initial data

const { MongoClient, ObjectId } = require("mongodb")
const bcrypt = require("bcryptjs")
require("dotenv").config()

// const MONGODB_URI = process.env.MONGODB_URI //|| "mongodb://localhost:27017"
// const MONGODB_URI = "mongodb+srv://etemuge_db_user:qNa6IOXu73A60vwL@cluster0.mrykt3h.mongodb.net/bataa-honey?retryWrites=true&w=majority"
const MONGODB_URI="mongodb+srv://etemuge_db_user:qNa6IOXu73A60vwL@cluster0.mrykt3h.mongodb.net/bataa-honey?retryWrites=true&w=majority"


async function seed() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("MongoDB-д холбогдлоо...")

    const db = client.db("bataa-honey")

    // Clear existing data
    await db.collection("users").deleteMany({})
    await db.collection("courses").deleteMany({})
    await db.collection("lessons").deleteMany({})
    await db.collection("enrollments").deleteMany({})
    await db.collection("payments").deleteMany({})

    console.log("Хуучин өгөгдлийг устгалаа...")

    // Create admin user
    const adminPassword = await bcrypt.hash("admin123", 12)
    const adminResult = await db.collection("users").insertOne({
      name: "Админ",
      email: "admin@bataa.mn",
      password: adminPassword,
      role: "admin",
      createdAt: new Date(),
    })
    console.log("Админ хэрэглэгч үүсгэлээ: admin@bataa.mn / admin123")

    // Create test user
    const userPassword = await bcrypt.hash("user123", 12)
    const userResult = await db.collection("users").insertOne({
      name: "Тест Хэрэглэгч",
      email: "user@test.mn",
      password: userPassword,
      role: "user",
      createdAt: new Date(),
    })
    console.log("Тест хэрэглэгч үүсгэлээ: user@test.mn / user123")

    // Create courses
    const courses = [
      {
        title: "Веб хөгжүүлэлтийн үндэс",
        description:
          "HTML, CSS, JavaScript-ийн үндсэн ойлголтуудыг сурах. Энэ сургалтаар та орчин үеийн веб хуудас хэрхэн бүтээх талаар суралцана.",
        price: 0,
        category: "programming",
        level: "beginner",
        thumbnail: "/web-development-coding.png",
        instructor: "Батаа багш",
        duration: "12 цаг",
        status: "published",
        featured: true,
        createdAt: new Date(),
      },
      {
        title: "React & Next.js мастер",
        description:
          "Орчин үеийн веб аппликейшн хөгжүүлэх технологиуд. React hooks, Next.js App Router, Server Components гэх мэт.",
        price: 89000,
        category: "programming",
        level: "intermediate",
        thumbnail: "/react-nextjs-framework.jpg",
        instructor: "Батаа багш",
        duration: "24 цаг",
        status: "published",
        featured: true,
        createdAt: new Date(),
      },
      {
        title: "Дижитал маркетинг",
        description: "Онлайн бизнес хөгжүүлэх, SEO, SMM, контент маркетинг зэрэг чухал ойлголтуудыг суралцана.",
        price: 65000,
        category: "marketing",
        level: "beginner",
        thumbnail: "/digital-marketing-social-media.png",
        instructor: "Маркетинг багш",
        duration: "16 цаг",
        status: "published",
        featured: false,
        createdAt: new Date(),
      },
      {
        title: "UI/UX дизайн",
        description: "Хэрэглэгчийн туршлага болон интерфэйс дизайны үндсэн зарчмууд. Figma програм дээр ажиллах.",
        price: 75000,
        category: "design",
        level: "beginner",
        thumbnail: "/ui-ux-design-figma.jpg",
        instructor: "Дизайн багш",
        duration: "20 цаг",
        status: "published",
        featured: true,
        createdAt: new Date(),
      },
      {
        title: "Python програмчлал",
        description: "Python хэлний үндсээс эхлэн дата шинжилгээ хүртэл. Эхлэгчдэд тохиромжтой.",
        price: 0,
        category: "programming",
        level: "beginner",
        thumbnail: "/python-programming-data.jpg",
        instructor: "Python багш",
        duration: "18 цаг",
        status: "published",
        featured: false,
        createdAt: new Date(),
      },
      {
        title: "Бизнес англи хэл",
        description: "Ажил мэргэжлийн англи хэлний сургалт. Бичиг баримт бэлтгэх, хурал уулзалтад оролцох.",
        price: 55000,
        category: "language",
        level: "intermediate",
        thumbnail: "/business-english-language.jpg",
        instructor: "Англи багш",
        duration: "30 цаг",
        status: "published",
        featured: false,
        createdAt: new Date(),
      },
    ]

    const courseResults = await db.collection("courses").insertMany(courses)
    console.log(`${courses.length} сургалт үүсгэлээ`)

    // Create lessons for first course
    const courseIds = Object.values(courseResults.insertedIds)

    const lessons = [
      {
        courseId: courseIds[0],
        title: "HTML-ийн танилцуулга",
        description: "HTML гэж юу вэ? Веб хуудасны бүтэц",
        content: "HTML (HyperText Markup Language) нь веб хуудасны бүтцийг тодорхойлдог markup хэл юм...",
        videoUrl: "https://example.com/video1.mp4",
        duration: "45 минут",
        order: 1,
        isFree: true,
      },
      {
        courseId: courseIds[0],
        title: "CSS стайл",
        description: "Веб хуудсыг загварчлах",
        content: "CSS (Cascading Style Sheets) нь веб хуудасны харагдах байдлыг тодорхойлдог...",
        videoUrl: "https://example.com/video2.mp4",
        duration: "60 минут",
        order: 2,
        isFree: true,
      },
      {
        courseId: courseIds[0],
        title: "JavaScript үндэс",
        description: "Веб хуудсыг интерактив болгох",
        content: "JavaScript нь веб хуудасд динамик функц нэмдэг програмчлалын хэл юм...",
        videoUrl: "https://example.com/video3.mp4",
        duration: "90 минут",
        order: 3,
        isFree: false,
      },
    ]

    await db.collection("lessons").insertMany(lessons)
    console.log(`${lessons.length} хичээл үүсгэлээ`)

    // Create sample enrollment
    await db.collection("enrollments").insertOne({
      userId: userResult.insertedId,
      courseId: courseIds[0],
      enrolledAt: new Date(),
      progress: 33,
      completedLessons: [0],
    })
    console.log("Жишээ бүртгэл үүсгэлээ")

    console.log("\n✅ Өгөгдлийн сан амжилттай бэлтгэгдлээ!")
    console.log("\nНэвтрэх мэдээлэл:")
    console.log("Админ: admin@bataa.mn / admin123")
    console.log("Хэрэглэгч: user@test.mn / user123")
  } catch (error) {
    console.error("Алдаа:", error)
  } finally {
    await client.close()
  }
}

seed()
