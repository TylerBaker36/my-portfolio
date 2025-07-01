import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../lib/projects'; // adjust if path differs
import PageWrapper from '../components/PageWrapper';

export default function ProjectsPage() {
  return (
    <PageWrapper>
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <Link href={`/projects/${project.slug}`} className="text-blue-400 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
    </PageWrapper>
  );
}
