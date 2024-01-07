import { contact, Contact } from './contact';
import { Course, courses } from './courses';
import { Project, projects } from './projects';
import { Portfolio, portfolio } from './portfolio';

interface Config {
  contact: Contact;
  projects: Project[];
  courses: Course[];
  portfolio: Portfolio[]; // Updated property name
}

const config: Config = {
  contact,
  projects,
  courses,
  portfolio,
};

export const POSTS_PER_PAGE = 10;

export default config;
