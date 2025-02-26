export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 row-start-3 flex gap-6 flex-wrap rounded-b-lg  items-center justify-center sm:p-5  bg-green-300/75  dark:bg-green-700/75 backdrop-blur-lg ">
      <a
        className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-300 dark:hover:bg-green-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="#projects"
        target="_blank"
        rel="noopener noreferrer"
      >
        Projects
      </a>
      <a
        className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-300 dark:hover:bg-green-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="#jobs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jobs
      </a>
      <a
        className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-300 dark:hover:bg-green-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="#store"
        target="_blank"
        rel="noopener noreferrer"
      >
        Store
      </a>
      <a
        className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-300 dark:hover:bg-green-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="#education"
        target="_blank"
        rel="noopener noreferrer"
      >
        Education
      </a>
    </div>
  );
}
