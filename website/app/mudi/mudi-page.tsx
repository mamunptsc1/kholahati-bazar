"use client";

import { useMemo, useState } from "react";

const WHATSAPP = "8801837289412";

const products = [("sugar.webp", "চিনি", "১ কেজি", 90), ("dal.webp", "ডাল", "১ কেজি", 120), ("chal.webp", "চাল", "১ কেজি", 68), ("lobon.webp", "লবণ", "১ কেজি", 30), ("oil.webp", "সয়াবিন তেল", "১ লিটার", 175), ("ata.webp", "আটা", "১ কেজি", 60), ("moyda.webp", "ময়দা", "১ কেজি", 65), ("suji.webp", "সুজি", "১ কেজি", 65), ("tea.webp", "চা", "২০০ গ্রাম", 180), ("biscuit.webp", "বিস্কুট", "২০০ গ্রাম", 60), ("noodles.webp", "নুডলস", "৭০ গ্রাম", 20), ("mosla.webp", "মসলা", "১০০ গ্রাম", 50), ("saban.webp", "সাবান", "১২৫ গ্রাম", 60), ("detergent.webp", "ডিটারজেন্ট", "৫০০ গ্রাম", 90), ("product-15.webp", "অন্যান্য মুদি পণ্য", "১ প্যাক", 50), ("product-16.webp", "অন্যান্য মুদি পণ্য", "১ প্যাক", 50), ("product-17.webp", "অন্যান্য মুদি পণ্য", "১ প্যাক", 50)];

export default function MudiProductsPage() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");

  const visible = useMemo(
    () =>
      products.filter((p) =>
        String(p[1]).toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const totalItems = Object.values(qty).reduce((a, b) => a + b, 0);

  function add(name: string) {
    setQty((old) => ({ ...old, [name]: (old[name] || 0) + 1 }));
  }

  function remove(name: string) {
    setQty((old) => {
      const next = { ...old, [name]: Math.max((old[name] || 0) - 1, 0) };
      if (!next[name]) delete next[name];
      return next;
    });
  }

  function sendOrder() {
    const selected = products.filter((p) => qty[String(p[1])]);
    if (!selected.length) {
      alert("আগে অন্তত একটি পণ্য অর্ডারে যোগ করুন।");
      return;
    }

    const lines = selected.map(
      (p) => `• ${p[1]} (${p[2]}) × ${qty[String(p[1])] || 0}`
    );

    const message = [
      "🛒 *খোলাহাটি বাজার — মুদি পণ্য অর্ডার*",
      "",
      ...lines,
      "",
      "দয়া করে অর্ডারটি নিশ্চিত করুন।",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf6] text-green-950">
      <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-3 font-black text-xl">
            <img src="/logo.png" alt="খোলাহাটি বাজার" className="h-11 w-11 rounded-xl object-cover" />
            <span>খোলাহাটি বাজার</span>
          </a>

          <div className="mx-auto hidden max-w-xl flex-1 md:flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="পণ্য খুঁজুন..."
              className="w-full rounded-2xl border px-5 py-3 outline-none focus:border-green-700"
            />
          </div>

          <a href="tel:01837289412" className="rounded-xl border px-4 py-3 font-bold">
            ☎ যোগাযোগ
          </a>

          <button
            onClick={sendOrder}
            className="rounded-xl bg-green-800 px-4 py-3 font-bold text-white"
          >
            🛒 অর্ডার ({totalItems})
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
        <a href="/" className="hover:text-green-800">হোম</a>
        <span className="mx-2">›</span>
        মুদি পণ্য
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 lg:grid-cols-[230px_1fr]">
        <aside className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl border bg-white">
            <div className="bg-green-800 px-5 py-4 font-black text-white">সকল বিভাগ</div>
            {["সব পণ্য","মুদি পণ্য","চাল, ডাল ও আটা","তেল ও ঘি","মসলা","চা, কফি ও পানীয়","বিস্কুট ও নাস্তা","সাবান ও ডিটারজেন্ট"].map((x) => (
              <div
                key={x}
                className={`px-5 py-3 ${x === "মুদি পণ্য" ? "bg-green-50 font-black text-green-800" : ""}`}
              >
                {x}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border bg-white p-5 text-sm">
            <p className="font-black">🚚 হোম ডেলিভারি</p>
            <p className="mt-1 text-slate-500">খোলাহাটি ও আশেপাশে</p>
            <hr className="my-4" />
            <p className="font-black">⚡ দ্রুত সেবা</p>
            <p className="mt-1 text-slate-500">সহজ অর্ডার প্রক্রিয়া</p>
            <hr className="my-4" />
            <p className="font-black">🛡️ বিশ্বস্ত সেবা</p>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-orange-500">🛍️ আমাদের পণ্য</p>
              <h1 className="text-3xl font-black">মুদি পণ্য</h1>
              <p className="mt-1 text-slate-500">প্রয়োজনীয় মুদি পণ্য, সেরা দামে</p>
            </div>

            <div className="md:hidden">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="পণ্য খুঁজুন..."
                className="w-full rounded-2xl border bg-white px-4 py-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {visible.map(([image, name, unit, price]) => {
              const n = qty[String(name)] || 0;

              return (
                <article
                  key={String(name)}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                >
                  <div className="aspect-square bg-white p-3">
                    <img
                      src={`/mudi/${image}`}
                      alt={String(name)}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="font-black">{String(name)}</h2>
                    <p className="text-sm text-slate-500">{String(unit)}</p>
                    <p className="mt-1 text-xl font-black text-green-700">৳{price}</p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded-xl border">
                        <button onClick={() => remove(String(name))} className="px-3 py-2">−</button>
                        <span className="min-w-7 text-center">{n}</span>
                        <button onClick={() => add(String(name))} className="px-3 py-2">+</button>
                      </div>

                      <button
                        onClick={() => add(String(name))}
                        className="rounded-xl bg-green-800 px-3 py-2 text-xs font-black text-white"
                      >
                        🛒 যোগ করুন
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-5 text-center">
            <p className="font-bold text-green-800">
              🛡️ সকল পণ্য মানসম্মত ও যত্নসহকারে সরবরাহ করা হয়
            </p>

            <button
              onClick={sendOrder}
              className="mt-4 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white"
            >
              🛒 WhatsApp-এ অর্ডার পাঠান ({totalItems}টি)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
