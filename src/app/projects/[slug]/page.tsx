import { notFound } from 'next/navigation';
import { projects } from '../../../../lib/projects';
import PageWrapper from '@/app/components/PageWrapper';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetail({ params }: Props) {
  const {slug} = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <PageWrapper>
      <section className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>

        {/* External link if available */}
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


        {/* Long-form content */}
        {project.content && (
          <div className="prose prose-invert max-w-none mb-8">
            <ReactMarkdown rehypePlugins={[rehypePrism]}>
              {project.content}
            </ReactMarkdown>
          </div>
        )}

        {/* Gallery */}
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
