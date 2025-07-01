import PageWrapper from "./components/PageWrapper";

export default function Home() {


  return (
    <PageWrapper>
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
  <div className="text-center space-y-6 max-w-2xl">
    <h1 className="text-6xl font-extrabold">Tyler Baker</h1>
    <p className="text-2xl text-gray-300">
      Game Developer • Designer • QA Tester
    </p>
    <p className="text-lg text-gray-400">
      I build weird mechanics, chase clever ideas, and test everything like it’s broken (because it probably is).
    </p>
    <div className="space-x-4">
      <a
        href="/projects"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        View Projects
      </a>
      <a
        href="/contact"
        className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded"
      >
        Contact Me
      </a>
    </div>
  </div>
</main>


    </PageWrapper>
  );
}


