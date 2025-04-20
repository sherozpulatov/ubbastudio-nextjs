import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ubba Studio</title>
        <meta name="description" content="Ubba Studio - Digital Design Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        <header className="p-6 text-center text-4xl font-bold">Ubba Studio</header>

        <section className="p-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl mb-4">We create stylish digital experiences</h2>
          <p className="text-gray-400 mb-6">
            Welcome to Ubba Studio — we design & build unique websites, brands, and creative experiences that connect.
          </p>

          <Image
            src="/hero.webp"
            alt="Ubba Studio Preview"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
            priority
          />
        </section>

        <footer className="p-4 text-center text-sm text-gray-600 border-t border-gray-800 mt-10">
          © {new Date().getFullYear()} Ubba Studio. All rights reserved.
        </footer>
      </main>
    </>
  );
}
