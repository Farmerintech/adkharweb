const APK_URL ="https://github.com/Farmerintech/adkharweb/releases/download/adkhar/adkhar.apk"
const userAgent = navigator.userAgent || navigator.vendor 

const isAndroid = /Android/i.test(userAgent);
export default function AdkarLandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#4A154B]">
      <StickyHeader />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

function StickyHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#4A154B]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#D4AF37] text-xl font-black text-[#4A154B]">
            أ
          </span>
          <span className="text-lg font-black text-white">Adkar App</span>
        </a>

        <a
          href={isAndroid ? APK_URL: "https://adkhar-lac.vercel.app"}
          download="adkar-app.apk"
          className="rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-black text-[#4A154B] shadow-lg shadow-black/20 transition hover:scale-[1.03]"
        >
          Download APK
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#4A154B] pt-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/masjidl-aqsoh.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#4A154B]/70" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#D4AF37]">
            Quran • Adhkar • Prayer Times
          </p>

          {/* <h1 className="max-w-3xl text-6xl font-black leading-none md:text-8xl">
            Adkar App
          </h1> */}

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F1E7F5] md:text-xl">
            A calm Islamic companion for daily adhkar, Quran reading, prayer
            times, Hijri dates, reminders, and a cleaner worship routine.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={isAndroid ? APK_URL: "https://adkhar-lac.vercel.app"}
              download="adkar-app.apk"
              className="rounded-full bg-[#D4AF37] px-7 py-4 text-base font-black text-[#4A154B] shadow-xl shadow-black/25 transition hover:scale-[1.03]"
            >
              Download APK
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/30 px-7 py-4 text-base font-black text-white transition hover:bg-white/10"
            >
              View Features
            </a>
          </div>
   
          <a href="https://adkhar-lac.vercel.app" className="mt-4 text-sm font-semibold text-white/70" >
            Use Adkhar on web
          </a>
        </div>

        <PhonePreview />
      </div>
    </section>
  );
}

function PhonePreview() {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[2.4rem] border-[8px] border-white/20 bg-[#FFFDF7] p-5 text-[#4A154B] shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between text-sm font-black">
        <span>Adkar</span>
        <span>12:45</span>
      </div>

      <div className="rounded-[1.7rem] bg-[#4A154B] p-6 text-white">
        <p className="text-sm font-bold text-[#E9DDF0]">Next Prayer</p>
        <h2 className="mt-2 text-4xl font-black">Maghrib</h2>
        <p className="mt-2 text-lg font-black text-[#D4AF37]">06:48 PM</p>
      </div>

      <div className="mt-4 rounded-[1.5rem] border border-[#EFE5D0] bg-white p-5">
        <p className="text-right text-3xl leading-[1.9] font-bold">
          فَاذْكُرُونِي أَذْكُرْكُمْ
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Remember Me, and I will remember you.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {["Quran", "Adhkar", "Prayer", "Asmaullah"].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#F8F1E6] px-4 py-5 text-center text-sm font-black"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Prayer Times",
      text: "Accurate daily prayer times based on the user's current location.",
    },
    {
      title: "Quran Reader",
      text: "Read Arabic, translation, or both together verse by verse.",
    },
    {
      title: "Daily Adhkar",
      text: "Morning, evening, and reminder-based adhkar for consistency.",
    },
     {
      title: "Prayer Calendar",
      text: "View prayer times for a full year with clear monthly timetables.",
    },
    {
      title: "Hijri Calendar",
      text: "Keep track of Islamic dates alongside the Gregorian calendar.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D4AF37]">
          Features
        </p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">
          Built for daily worship
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-[#F1E7D0] bg-white p-7 shadow-xl shadow-[#4A154B]/5"
          >
            <h3 className="text-xl font-black">{feature.title}</h3>
            <p className="mt-3 leading-7 text-zinc-600">{feature.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
                href={isAndroid ? APK_URL: "https://adkhar-lac.vercel.app"}
          download="adkar-app.apk"
          className="inline-flex rounded-full bg-[#4A154B] px-8 py-4 font-black text-white shadow-xl shadow-[#4A154B]/20 transition hover:scale-[1.03]"
        >
          Download Adkar App APK
        </a>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#4A154B] px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-white/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Adkar App. All rights reserved.</p>

        <a
          href={APK_URL}
          download="adkar-app.apk"
          className="font-black text-[#D4AF37]"
        >
          Download APK
        </a>
         <a
                href={ "https://adkhar-lac.vercel.app"}
          download="adkar-app.apk"
          className="inline-flex rounded-full bg-[#4A154B] px-8 py-4 font-black text-white shadow-xl shadow-[#4A154B]/20 transition hover:scale-[1.03]"
        >
          Use Adkhar on web
        </a>
      </div>
    </footer>
  );
}