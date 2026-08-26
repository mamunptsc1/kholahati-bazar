"use client";

import { useMemo, useState } from "react";

const WHATSAPP = "8801837289412";

type Product = {
  image: string;
  name: string;
  unit: string;
  price: number;
};

const products: Product[] = [
  { image: "sugar.webp", name: "চিনি", unit: "১ কেজি", price: 90 },
  { image: "dal.webp", name: "ডাল", unit: "১ কেজি", price: 120 },
  { image: "lobon.webp", name: "লবণ", unit: "১ কেজি", price: 35 },
  { image: "chal.webp", name: "চাল", unit: "১ কেজি", price: 70 },
  { image: "atta.png", name: "আটা", unit: "১ কেজি", price: 65 },
  { image: "oil.webp", name: "সয়াবিন তেল", unit: "১ লিটার", price: 180 },
  { image: "tel.webp", name: "রান্নার তেল", unit: "১ লিটার", price: 180 },
  { image: "tea.webp", name: "চা", unit: "২০০ গ্রাম", price: 180 },
  { image: "nuduls.webp", name: "নুডলস", unit: "৭০ গ্রাম", price: 20 },
  { image: "saban.webp", name: "সাবান", unit: "১২৫ গ্রাম", price: 60 },
  { image: "poudar.webp", name: "পাউডার", unit: "৫০০ গ্রাম", price: 90 },
  { image: "milks.webp", name: "দুধ", unit: "প্যাকেট", price: 90 },
  { image: "eggs.webp", name: "ডিম", unit: "১২টি", price: 150 },
  { image: "honey.webp", name: "মধু", unit: "২৫০ গ্রাম", price: 220 },
  { image: "complan.webp", name: "কমপ্ল্যান", unit: "৫০০ গ্রাম", price: 650 },
  { image: "mosolla.webp", name: "মসলা", unit: "১০০ গ্রাম", price: 60 },
  { image: "mosollaa.webp", name: "মসলা", unit: "১০০ গ্রাম", price: 60 },
];

const categories = [
  "সব পণ্য",
  "মুদি পণ্য",
  "চাল, ডাল ও আটা",
  "তেল ও ঘি",
  "মসলা",
  "চা, কফি ও পানীয়",
  "বিস্কুট ও নাস্তা",
  "সাবান ও ডিটারজেন্ট",
];

export default function MudiProductsPage() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");

  const visible = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const totalItems = Object.values(qty).reduce((sum, value) => sum + value, 0);

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
    const selected = products.filter((p) => qty[p.name] > 0);

    if (!selected.length) {
      alert("আগে অন্তত একটি পণ্য অর্ডারে যোগ করুন।");
      return;
    }

    const lines = selected.map(
      (p) =>
        `• ${p.name} (${p.unit}) × ${qty[p.name]} = ৳${
          p.price * qty[p.name]
        }`
    );

    const total = selected.reduce(
      (sum, p) => sum + p.price * qty[p.name],
      0
    );

    const message = [
      "🛒 খোলাহাটি বাজার — মুদি পণ্য অর্ডার",
      "",
      ...lines,
      "",
      `💰 আনুমানিক মোট: ৳${total}`,
      "",
      "নাম:",
      "মোবাইল:",
      "ঠিকানা:",
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
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <a href="/" className="shrink-0 font-black text-xl">
            🛒 খোলাহাটি বাজার
          </a>

          <div className="mx-auto hidden max-w-xl flex-1 md:flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="পণ্য খুঁজুন..."
              className="w-full rounded-2xl border px-5 py-3 outline-none focus:border-green-700"
            />
          </div>

          <a
            href="tel:01837289412"
            className="hidden rounded-xl border px-4 py-3 font-bold sm:block"
          >
            ☎ যোগাযোগ
          </a>

          <button
            onClick={sendOrder}
            className="rounded-xl bg-green-800 px-4 py-3 font-bold text-white"
          >
            🛒 আমার অর্ডার ({totalItems})
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
        <a href="/" className="hover:text-green-800">
          🏠 হোম
        </a>
        <span className="mx-2">›</span>
        মুদি পণ্য
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 lg:grid-cols-[230px_1fr]">
        <aside className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl border bg-white">
            <div className="bg-green-800 px-5 py-4 font-black text-white">
              সকল বিভাগ
            </div>

            {categories.map((category) => (
              <div
                key={category}
                className={`px-5 py-3 ${
                  category === "মুদি পণ্য"
                    ? "bg-green-50 font-black text-green-800"
                    : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border bg-white p-5 text-sm">
            <p className="font-black">🚚 ফ্রি ডেলিভারি</p>
            <p className="mt-1 text-slate-500">শর্ত প্রযোজ্য</p>
            <hr className="my-4" />
            <p className="font-black">⚡ দ্রুত ডেলিভারি</p>
            <p className="mt-1 text-slate-500">খোলাহাটি ও আশেপাশে</p>
            <hr className="my-4" />
            <p className="font-black">🛡️ নিরাপদ সেবা</p>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-orange-500">🛍️ আমাদের পণ্য</p>
              <h1 className="text-3xl font-black">মুদি পণ্য</h1>
              <p className="mt-1 text-slate-500">
                প্রয়োজনীয় মুদি পণ্য, এক জায়গায়
              </p>
            </div>

            <select className="rounded-xl border bg-white px-4 py-3">
              <option>সাজানো: জনপ্রিয়</option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
            </select>

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
            {visible.map((product) => {
              const count = qty[product.name] || 0;

              return (
                <article
                  key={`${product.image}-${product.name}`}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-square bg-white p-3">
                    <img
                      src={`/products/mudi/${product.image}`}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="font-black">{product.name}</h2>
                    <p className="text-sm text-slate-500">{product.unit}</p>
                    <p className="mt-1 text-xl font-black text-green-700">
                      ৳{product.price}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex shrink-0 items-center rounded-xl border">
                        <button
                          onClick={() => remove(product.name)}
                          className="px-2.5 py-2"
                        >
                          −
                        </button>
                        <span className="min-w-7 text-center">{count}</span>
                        <button
                          onClick={() => add(product.name)}
                          className="px-2.5 py-2"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => add(product.name)}
                        className="flex-1 rounded-xl bg-green-800 px-2 py-2 text-xs font-black text-white"
                      >
                        🛒 অর্ডারে যোগ করুন
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visible.length === 0 && (
            <div className="rounded-2xl border bg-white p-10 text-center">
              <p className="text-lg font-bold">কোনো পণ্য পাওয়া যায়নি।</p>
            </div>
          )}

          <div className="mt-8 rounded-2xl border bg-white p-5 text-center">
            <p className="font-bold text-green-800">
              🛡️ সকল পণ্য যত্নসহকারে সরবরাহ করা হয়
            </p>
            <button
              onClick={sendOrder}
              className="mt-4 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white"
            >
              🛒 অর্ডার পাঠান ({totalItems}টি)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
