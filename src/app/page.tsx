import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900">
      {/* Logo Container */}
      <div className="w-full max-w-[300px] mb-12">
        <Image
          src="/logo/logo-black-bg.svg"
          alt="Bodo Logo"
          width={907}
          height={481}
          priority
          className="w-full h-auto hidden dark:block"
        />
        <Image
          src="/logo/logo-white-bg.svg"
          alt="Bodo Logo"
          width={907}
          height={481}
          priority
          className="w-full h-auto dark:hidden"
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-geist-sans)]">
          Coming Soon
        </h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 font-[family-name:var(--font-geist-sans)]">
          A task runner with intuitive organization and powerful features
        </p>

        {/* Features List */}
        <div className="text-left space-y-3 mb-12 font-[family-name:var(--font-geist-mono)] text-sm">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">▲</span>
            <span>Task organization by directory</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">▲</span>
            <span>Powerful plugin system</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">▲</span>
            <span>Watch mode for development</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2">▲</span>
            <span>Environment variable management</span>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/bodo-run/bodo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-[family-name:var(--font-geist-sans)]"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}
