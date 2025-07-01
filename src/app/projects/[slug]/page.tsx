import { notFound } from 'next/navigation';
import { projects } from '../../../../lib/projects';
import PageWrapper from '@/app/components/PageWrapper';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <PageWrapper>
      <section className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline mb-6 inline-block"
          >
            View Live Project ↗
          </a>
        )}

        {project.content && (
          <div className="prose prose-invert max-w-none mb-8">
            <ReactMarkdown rehypePlugins={[rehypePrism]}>
              {project.content}
            </ReactMarkdown>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                width={800}
                height={500}
                className="rounded-lg border"
              />
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}


