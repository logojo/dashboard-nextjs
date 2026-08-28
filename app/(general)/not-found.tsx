'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <div className="w-full max-w-xl text-center">
        {/* 404 */}
        <div className="relative mb-8">
          <span className="text-[9rem] font-black leading-none tracking-tighter text-slate-200 dark:text-slate-800">
            404
          </span>

          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-600">
            Oops!
          </span>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
          Parece que la página que estás buscando no existe, fue movida o ya
          no está disponible.
        </p>

        {/* Action */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-800 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            Volver al inicio
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950"
          >
            Volver atrás
          </button>
        </div>
      </div>
    </main>
  );
}
