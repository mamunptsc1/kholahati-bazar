"use client";

const PHONE = "01837289412";
const WHATSAPP = "8801837289412";
const MESSENGER_URL = "https://m.me/kholahatibazar";

const categories = [
  ["🥬", "শাকসবজি", "তাজা ও প্রয়োজনীয় সবজি"],
  ["🍎", "ফলমূল", "প্রয়োজনীয় ফলমূল"],
  ["🛒", "মুদি পণ্য", "বাজার-সদাই ও নিত্যপ্রয়োজনীয় পণ্য"],
  ["💊", "ওষুধপত্র", "প্রয়োজনীয় ওষুধপত্র"],
];

const areas = [
  "সমগ্র খোলাহাটি",
  "বালাপাড়া",
  "বাঙালিপুর",
  "ডাঙ্গারহাট",
  "ফকিরবাজার",
];

const steps = [
  ["01", "📝", "পণ্যের তালিকা পাঠান", "পণ্যের নাম, পরিমাণ, নাম ও মোবাইল নম্বর দিন।"],
  ["02", "✅", "অর্ডার নিশ্চিত করুন", "মূল্য ও ডেলিভারি তথ্য জানিয়ে অর্ডার নিশ্চিত করা হবে।"],
  ["03", "🛵", "বাড়িতে ডেলিভারি", "আপনার ঠিকানায় পৌঁছে দেওয়ার ব্যবস্থা করা হবে।"],
];

export default function Home() {
  function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const products = String(data.get("products") || "").trim();
    const note = String(data.get("note") || "").trim();

    if (!name || !phone || !address || !products) {
      alert("অনুগ্রহ করে প্রয়োজনীয় সব তথ্য পূরণ করুন।");
      return;
    }

    const message = [
      "🛒 *নতুন অর্ডার — খোলাহাটি বাজার Home Delivery*",
      "",
      `👤 নাম: ${name}`,
      `📞 মোবাইল: ${phone}`,
      `📍 ঠিকানা: ${address}`,
      "",
      "🛍️ *প্রয়োজনীয় পণ্য:*",
      products,
      "",
      note ? `📝 অতিরিক্ত নির্দেশনা: ${note}` : "",
      "",
      "⏳ অর্ডারটি যাচাই করে মূল্য ও ডেলিভারি চার্জ জানিয়ে দেওয়া হবে।",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7faf5] text-slate-900">
      <div className="bg-[#003d22] px-4 py-2 text-center text-xs font-bold text-white">
        🛵 খোলাহাটি ও আশেপাশের এলাকায় Home Delivery • 📞 {PHONE}
      </div>

      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl shadow-md">
              <img
                src="/logo.png"
                alt="খোলাহাটি বাজার"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-black leading-tight text-green-950">
                খোলাহাটি বাজার
              </div>
              <div className="text-xs font-black tracking-[0.2em] text-orange-600">
                HOME DELIVERY
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-green-950 md:flex">
            <a href="#products" className="hover:text-orange-600">পণ্য</a>
            <a href="#order" className="hover:text-orange-600">অর্ডার</a>
            <a href="#areas" className="hover:text-orange-600">ডেলিভারি এলাকা</a>
            <a href="#about" className="hover:text-orange-600">আমাদের সম্পর্কে</a>
            <a href="#contact" className="hover:text-orange-600">যোগাযোগ</a>
          </nav>

          <a
            href={`tel:${PHONE}`}
            className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-black text-white shadow-md"
          >
            📞 কল
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#003d22] via-[#006b32] to-[#00a844]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="text-white">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
              🛵 আপনার বাজার, এখন আপনার বাড়িতে
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] sm:text-5xl md:text-6xl">
              আপনার বাজার,
              <span className="block text-orange-400">এখন আপনার বাড়িতে।</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-green-50 sm:text-lg">
              বাজার-সদাই ও প্রয়োজনীয় পণ্য সহজে অর্ডার করুন। খোলাহাটি বাজার
              থেকে আপনার দরজায় পৌঁছে দেওয়ার চেষ্টা করি আমরা।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#order"
                className="rounded-2xl bg-orange-500 px-7 py-4 text-center font-black text-white shadow-xl"
              >
                📦 অর্ডার করুন
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-2xl bg-white px-7 py-4 text-center font-black text-green-950 shadow-xl"
              >
                📞 কল করুন
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
              <span>✓ সহজ অর্ডার</span>
              <span>✓ দ্রুত ডেলিভারি</span>
              <span>✓ বিশ্বস্ত সেবা</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] bg-white/10 p-4 shadow-2xl ring-1 ring-white/20">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-white to-green-50 p-7">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-green-100 text-8xl">
                🛍️
              </div>
              <h2 className="mt-6 text-center text-2xl font-black text-green-950">
                খোলাহাটি বাজার
              </h2>
              <p className="mt-1 text-center font-black tracking-[0.2em] text-orange-600">
                HOME DELIVERY
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["🥬", "তাজা পণ্য"],
                  ["🛵", "ডেলিভারি"],
                  ["✓", "বিশ্বস্ত"],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-green-100"
                  >
                    <div className="text-2xl">{icon}</div>
                    <div className="mt-1 text-xs font-bold text-green-950">
                      {title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-green-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-4">
          {[
            ["⚡", "সহজ অর্ডার"],
            ["🛵", "হোম ডেলিভারি"],
            ["📍", "লোকাল সার্ভিস"],
            ["📞", "সরাসরি যোগাযোগ"],
          ].map(([icon, title]) => (
            <div key={title} className="text-center font-bold text-green-950">
              {icon} {title}
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
              <p className="font-black text-orange-600">🛒 আমাদের পণ্য</p>

                  <h2 className="mt-2 text-3xl font-black text-green-950 sm:text-4xl">
                        প্রয়োজনীয় পণ্য, এক জায়গায়
                            </h2>

                                <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
                                      আপনার প্রয়োজনীয় পণ্যের তালিকা পাঠান—আমরা খোলাহাটি বাজার থেকে
                                            সংগ্রহ করে ডেলিভারি দেওয়ার চেষ্টা করব।
                                                </p>
                                                  </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl">
                {icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-green-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              {title === "মুদি পণ্য" ? (
                  <a
                      href="/mudi"
                          className="mt-5 inline-block text-sm font-black text-orange-600"
                            >
                                মুদি পণ্য দেখুন →
                                  </a>
                                  ) : (
                                    <a
                                        href="#order"
                                            className="mt-5 inline-block text-sm font-black text-orange-600"
                                              >
                                                  অর্ডার করুন →
                                                    </a>
                                                    )}
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="font-black text-orange-600">📦 ONLINE ORDER</p>
            <h2 className="mt-2 text-3xl font-black text-green-950 sm:text-4xl">
              এখনই অর্ডার করুন
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              তথ্য ও প্রয়োজনীয় পণ্যের তালিকা দিন। Submit করলে অর্ডারটি সরাসরি
              আমাদের WhatsApp-এ চলে যাবে।
            </p>
          </div>

          <form
            onSubmit={submitOrder}
            className="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-[#f7faf5] p-6 shadow-sm ring-1 ring-green-100 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-green-950">
                  আপনার নাম *
                </span>
                <input
                  name="name"
                  required
                  placeholder="নাম লিখুন"
                  className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none focus:border-green-600"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black text-green-950">
                  মোবাইল নম্বর *
                </span>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none focus:border-green-600"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-black text-green-950">
                সম্পূর্ণ ঠিকানা *
              </span>
              <textarea
                name="address"
                required
                rows={3}
                placeholder="গ্রাম/এলাকা, বিস্তারিত ঠিকানা"
                className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none focus:border-green-600"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-black text-green-950">
                যে পণ্যগুলো লাগবে *
              </span>
              <textarea
                name="products"
                required
                rows={5}
                placeholder={"যেমন:\nচাল — ৫ কেজি\nআলু — ২ কেজি\nতেল — ১ লিটার"}
                className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none focus:border-green-600"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-black text-green-950">
                অতিরিক্ত নির্দেশনা (ঐচ্ছিক)
              </span>
              <textarea
                name="note"
                rows={3}
                placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন"
                className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 outline-none focus:border-green-600"
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-green-800 px-6 py-4 font-black text-white shadow-lg transition hover:bg-green-900"
            >
              💬 WhatsApp-এ অর্ডার পাঠান
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              অর্ডার পাঠানোর পর পণ্যের মূল্য ও ডেলিভারি চার্জ নিশ্চিত করার জন্য
              আপনার সাথে যোগাযোগ করা হবে।
            </p>
          </form>
        </div>
      </section>

      <section className="bg-[#f7faf5] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="font-black text-orange-600">⚡ খুব সহজ</p>
            <h2 className="mt-2 text-3xl font-black text-green-950">
              মাত্র ৩ ধাপে অর্ডার
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(([number, icon, title, text]) => (
              <div
                key={number}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-green-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 font-black text-white">
                    {number}
                  </div>
                  <div className="text-3xl">{icon}</div>
                </div>
                <h3 className="mt-6 text-xl font-black text-green-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-[#003d22] py-16 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="font-black text-orange-400">📍 DELIVERY ZONE</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            আমাদের ডেলিভারি এলাকা
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-green-100">
            বর্তমানে নিচের এলাকাগুলোতে Home Delivery সেবা দেওয়া হচ্ছে।
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-white/10 px-5 py-4 text-left font-bold ring-1 ring-white/10"
              >
                📍 {area}
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm text-green-100">
            আপনার এলাকা তালিকায় না থাকলেও Inbox করে জেনে নিন।
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-orange-50 to-green-50 p-7 sm:p-10">
          <p className="font-black text-orange-600">💚 আমাদের লক্ষ্য</p>
          <h2 className="mt-2 text-3xl font-black text-green-950 sm:text-4xl">
            আপনার প্রয়োজনের বাজার, আমাদের দায়িত্ব।
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            খোলাহাটি বাজার Home Delivery-এর লক্ষ্য হলো স্থানীয় মানুষের
            বাজার-সদাইকে আরও সহজ করে দেওয়া। আপনি প্রয়োজনীয় পণ্যের তালিকা
            পাঠাবেন, আমরা সংগ্রহ ও ডেলিভারির ব্যবস্থা করার চেষ্টা করব।
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-800 to-green-950 p-8 text-center text-white shadow-xl sm:p-12">
          <div className="text-5xl">🛵</div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            আজকের বাজারটা আমরা করে দিই?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-green-100">
            আপনার প্রয়োজনীয় পণ্যের তালিকা পাঠান। অর্ডার নিয়ে আমরা আপনার সাথে
            যোগাযোগ করব।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE}`}
              className="rounded-2xl bg-orange-500 px-7 py-4 font-black text-white shadow-lg"
            >
              📞 {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="rounded-2xl bg-white px-7 py-4 font-black text-green-950 shadow-lg"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://www.facebook.com/kholahatibazar"
                target="_blank"
                  rel="noopener noreferrer"
                    className="rounded-2xl bg-white px-7 py-4 font-black text-green-950 shadow-lg"
                    >
                      📘 Facebook Page
                      </a>
                      <a
                        href="https://m.me/kholahatibazar"
                          target="_blank"
                            rel="noopener noreferrer"
                              className="rounded-2xl bg-white px-7 py-4 font-black text-green-950 shadow-lg"
                              >
                                💬 Messenger
                                </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-black text-green-950">
                খোলাহাটি বাজার Home Delivery
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                আপনার বাজার, এখন আপনার বাড়িতে।
              </p>
            </div>

            <div>
              <div className="font-black text-green-950">📍 ডেলিভারি</div>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                খোলাহাটি, বালাপাড়া, বাঙালিপুর, ডাঙ্গারহাট ও ফকিরবাজার।
              </p>
            </div>

            <div>
              <div className="font-black text-green-950">📞 যোগাযোগ</div>
              <a
                href={`tel:${PHONE}`}
                className="mt-2 block text-sm font-bold text-green-700"
              >
                {PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="mt-1 block text-sm font-bold text-green-700"
              >
                WhatsApp
              </a>
              <p className="mt-1 text-sm text-slate-500">🕐 Always Open</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Kholahati Bazar Home Delivery. All
            rights reserved.
          </div>
        </div>
      </footer>

      <a
        href={`tel:${PHONE}`}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-2xl ring-4 ring-white"
        aria-label="Call"
      >
        📞
      </a>
    </main>
  );
}
