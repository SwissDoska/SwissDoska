export default function Home() {
return (
<main className="min-h-screen bg-neutral-950 text-white">
<section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
<header className="flex items-center justify-between">
<div className="text-2xl font-bold">
🇨🇭 SwissDoska
</div>

<button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
Разместить объявление
</button>
</header>

<div className="flex flex-1 flex-col justify-center py-20">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
Русскоязычная Швейцария
</p>

<h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
Свои услуги, работа и объявления в Швейцарии
</h1>

<p className="mt-6 max-w-2xl text-lg text-neutral-300">
Найдите русскоязычных специалистов, компании, работу, жильё,
товары и полезные контакты рядом с вами.
</p>

<div className="mt-10 flex max-w-3xl flex-col gap-3 rounded-3xl bg-white p-3 shadow-2xl md:flex-row">
<input
className="flex-1 rounded-2xl px-5 py-4 text-black outline-none"
placeholder="Что ищете? Например: электрик, няня, работа..."
/>
<input
className="rounded-2xl px-5 py-4 text-black outline-none md:w-56"
placeholder="Город или кантон"
/>
<button className="rounded-2xl bg-red-600 px-8 py-4 font-semibold text-white">
Найти
</button>
</div>

<div className="mt-10 grid gap-4 md:grid-cols-4">
{[
"🛠 Услуги",
"💼 Работа",
"🏠 Жильё",
"🚗 Авто",
"🛒 Куплю / Продам",
"👶 Для детей",
"🐶 Животные",
"🏢 Компании",
].map((item) => (
<div
key={item}
className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-semibold"
>
{item}
</div>
))}
</div>
</div>
</section>
</main>
);
}