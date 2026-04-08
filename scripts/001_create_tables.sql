-- Create projects table for portfolio projects
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image_url TEXT,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact_messages table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Projects: Allow public read access (portfolio is public)
CREATE POLICY "Allow public read access to projects" 
  ON projects FOR SELECT 
  USING (true);

-- Contact messages: Allow public insert (anyone can submit contact form)
CREATE POLICY "Allow public insert to contact_messages" 
  ON contact_messages FOR INSERT 
  WITH CHECK (true);

-- Insert sample projects data
INSERT INTO projects (title, description, long_description, technologies, github_url, live_url, featured, display_order) VALUES
(
  'Cloud Infrastructure Automation',
  'Automated AWS infrastructure provisioning using Terraform and GitHub Actions CI/CD pipelines.',
  'Built a complete infrastructure-as-code solution that provisions and manages AWS resources including VPCs, EC2 instances, RDS databases, and S3 buckets. Implemented GitOps workflow with automatic deployment on merge to main branch.',
  ARRAY['Terraform', 'AWS', 'GitHub Actions', 'Docker', 'Python'],
  'https://github.com/anushka/cloud-infra',
  NULL,
  true,
  1
),
(
  'Kubernetes Deployment Platform',
  'Self-service Kubernetes deployment platform with automated scaling and monitoring.',
  'Developed a platform that enables developers to deploy containerized applications to Kubernetes with minimal configuration. Features include auto-scaling based on metrics, integrated logging with ELK stack, and Prometheus/Grafana monitoring.',
  ARRAY['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Go'],
  'https://github.com/anushka/k8s-platform',
  NULL,
  true,
  2
),
(
  'RESTful API Microservices',
  'Scalable microservices architecture with Node.js, Express, and PostgreSQL.',
  'Designed and implemented a microservices-based backend system with service discovery, API gateway, and message queuing. Includes comprehensive API documentation with Swagger and unit/integration testing.',
  ARRAY['Node.js', 'Express', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
  'https://github.com/anushka/api-microservices',
  NULL,
  true,
  3
),
(
  'CI/CD Pipeline Generator',
  'Tool that generates optimized CI/CD pipelines based on project structure and requirements.',
  'Created a CLI tool that analyzes project codebases and generates appropriate CI/CD configurations for various platforms including GitHub Actions, GitLab CI, and Jenkins. Supports multiple languages and frameworks.',
  ARRAY['Python', 'YAML', 'GitHub Actions', 'GitLab CI', 'Jenkins'],
  'https://github.com/anushka/cicd-generator',
  NULL,
  false,
  4
),
(
  'Log Aggregation System',
  'Centralized logging solution with real-time search and alerting capabilities.',
  'Built a log aggregation system that collects logs from multiple sources, processes them in real-time, and provides a searchable interface. Integrated with Slack and email for alert notifications.',
  ARRAY['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'Docker'],
  'https://github.com/anushka/log-aggregator',
  NULL,
  false,
  5
),
(
  'Database Migration Tool',
  'Automated database schema migration and version control system.',
  'Developed a tool for managing database schema changes across multiple environments. Supports rollback, dry-run mode, and generates migration scripts from schema diffs.',
  ARRAY['Go', 'PostgreSQL', 'MySQL', 'SQLite'],
  'https://github.com/anushka/db-migrate',
  NULL,
  false,
  6
);
