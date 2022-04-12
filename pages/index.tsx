export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center dark:bg-[#111827] dark:text-white">
      <div>
        <div className="text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          <a href="https://nextjs.org/">nextJs</a>
          <span className="mx-3">&</span>
          <a href="https://tailwindcss.com/" className="underline decoration-sky-500">
            tailwindcss
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
          a nextjs + tailwindcss <code className="font-mono font-medium text-sky-500 dark:text-sky-400">react</code> boilerplate
        </p>
      </div>
    </div>
  );
}
