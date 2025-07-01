import { Mail, Linkedin, Github } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { contactInfo } from '../../../lib/contact';

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Let’s Connect</h1>
          <p className="text-gray-400">
            Have a project in mind or just want to chat? Reach out through any of the links below.
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
            <Mail className="text-blue-400" />
            <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:underline text-lg">
              {contactInfo.email}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
            <Linkedin className="text-blue-400" />
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              {contactInfo.linkedin.replace('https://', '')}
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
            <Github className="text-blue-400" />
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg"
            >
              {contactInfo.github.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

