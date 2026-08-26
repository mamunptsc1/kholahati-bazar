"use client";

import { useMemo, useState } from "react";

type Product = {
  image: string;
  name: string;
  unit: string;
  price: number;
};

const WHATSAPP = "8801837289412";

const products: Product[] = [
  {
    "image": "sugar.webp",
    "name": "চিনি",
    "unit": "১ কেজি",
    "price": 90
  },
  {
    "image": "dal.webp",
    "name": "ডাল",
    "unit": "১ কেজি",
    "price": 120
  },
  {
    "image": "lobon.webp",
    "name": "লবণ",
    "unit": "১ কেজি",
    "price": 30
  },
  {
    "image": "chal.webp",
    "name": "চাল",
    "unit": "১ কেজি",
    "price": 68
  },
  {
    "image": "oil.webp",
    "name": "সয়াবিন তেল",
    "unit": "১ লিটার",
    "price": 175
  },
  {
    "image": "atta.webp",
    "name": "আটা",
    "unit": "১ কেজি",
    "price": 60
  },
  {
    "image": "mosolla.webp",
    "name": "মসলা",
    "unit": "১০০ গ্রাম",
    "price": 50
  },
  {
    "image": "nuduls.webp",
    "name": "নুডলস",
    "unit": "৭০ গ্রাম",
    "price": 20
  },
  {
    "image": "tea.webp",
    "name": "চা",
    "unit": "২০০ গ্রাম",
    "price": 180
  },
  {
    "image": "saban.webp",
    "name": "সাবান",
    "unit": "১২৫ গ্রাম",
    "price": 60
  },
  {
    "image": "poudar.webp",
    "name": "ডিটারজেন্ট পাউডার",
    "unit": "৫০০ গ্রাম",
    "price": 90
  },
  {
    "image": "complan.webp",
    "name": "কমপ্ল্যান",
    "unit": "৫০০ গ্রাম",
    "price": 450
  },
  {
    "image": "honey.webp",
    "name": "মধু",
    "unit": "২৫০ গ্রাম",
    "price": 250
  },
  {
    "image": "milks.webp",
    "name": "দুধ",
    "unit": "১ লিটার",
    "price": 90
  },
  {
    "image": "eggs.webp",
    "name": "ডিম",
    "unit": "১২টি",
    "price": 150
  },
  {
    "image": "tel.webp",
    "name": "তেল",
    "unit": "১ লিটার",
    "price": 180
  },
  {
    "image": "mosollaa.webp",
    "name": "মসলা (প্রিমিয়াম)",
    "unit": "১০০ গ্রাম",
    "price": 70
  }
];

export default function MudiProductsPage() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((product) => product.name.toLowerCase().includes(q));
  }, [search]);

  const totalItems = Object.values(qty).reduce(
    (total, value) => total + value,
    0
  );

  function add(name: string) {
    setQty((current) => ({
      ...current,
      [name]: (current[name] ?? 0) + 1,
    }));
  }

  function remove(name: string) {
    setQty((current) => {
      const next = { ...current };
      const value = Math.max((next[name] ?? 0) - 1, 0);

      if (value === 0) {
        delete next[name];
      } else {
        next[name] = value;
      }

      return next;
    });
  }

  function sendOrder() {
    const selected = products.filter((product) => (qty[product.name] ?? 0) > 0);

    if (selected.length === 0) {
      alert("আগে অন্তত একটি পণ্য অর্ডারে যোগ করুন।");
      return;
    }

    const lines = selected.map(
      (product) =>
        `• ${product.name} (${product.unit}) × ${qty[product.name] ?? 0}`
    );

    const message = [
      "🛒 খোলাহাটি বাজার — মুদি পণ্য অর্ডার",
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
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4">
          <a href="/" className="flex items-center gap-3 font-black text-xl">
            <img
              src="/logo.png"
              alt="খোলাহাটি বাজার"
              className="h-11 w-11 rounded-xl object-cover"
            />
            <span>খোলাহাটি বাজার</span>
          </a>

          <div className="mx-auto hidden max-w-xl flex-1 md:flex">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="পণ্য খুঁজুন..."
              className="w-full rounded-2xl border px-5 py-3 outline-none focus:border-green-700"
            />
          </div>

          <a
            href="tel:01837289412"
            className="rounded-xl border px-4 py-3 font-bold"
          >
            ☎ যোগাযোগ
          </a>

          <button
            type="button"
            onClick={sendOrder}
            className="rounded-xl bg-green-800 px-4 py-3 font-bold text-white"
          >
            🛒 অর্ডার ({totalItems})
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
        <a href="/" className="hover:text-green-800">
          হোম
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

            {[
              "সব পণ্য",
              "মুদি পণ্য",
              "চাল, ডাল ও আটা",
              "তেল ও ঘি",
              "মসলা",
              "চা, কফি ও পানীয়",
              "বিস্কুট ও নাস্তা",
              "সাবান ও ডিটারজেন্ট",
            ].map((item) => (
              <div
                key={item}
                className={`px-5 py-3 ${
                  item === "মুদি পণ্য"
                    ? "bg-green-50 font-black text-green-800"
                    : ""
                }`}
              >
                {item}
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
              <p className="mt-1 text-slate-500">
                প্রয়োজনীয় মুদি পণ্য, সেরা দামে
              </p>
            </div>

            <div className="md:hidden">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="পণ্য খুঁজুন..."
                className="w-full rounded-2xl border bg-white px-4 py-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {visible.map((product) => {
              const count = qty[product.name] ?? 0;

              return (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                >
                  <div className="aspect-square bg-white p-3">
                    <img
                      src={`/mudi/${product.image}`}
                      alt={product.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="font-black">{product.name}</h2>
                    <p className="text-sm text-slate-500">{product.unit}</p>
                    <p className="mt-1 text-xl font-black text-green-700">
                      ৳{product.price}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded-xl border">
                        <button
                          type="button"
                          onClick={() => remove(product.name)}
                          className="px-3 py-2"
                        >
                          −
                        </button>
                        <span className="min-w-7 text-center">{count}</span>
                        <button
                          type="button"
                          onClick={() => add(product.name)}
                          className="px-3 py-2"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => add(product.name)}
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

          {visible.length === 0 && (
            <div className="mt-6 rounded-2xl border bg-white p-8 text-center">
              কোনো পণ্য পাওয়া যায়নি।
            </div>
          )}

          <div className="mt-8 rounded-2xl border bg-white p-5 text-center">
            <p className="font-bold text-green-800">
              🛡️ সকল পণ্য মানসম্মত ও যত্নসহকারে সরবরাহ করা হয়
            </p>

            <button
              type="button"
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
