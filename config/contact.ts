export enum ContactType {
  linkedin = 'linkedin',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@karan_6864',
  site: 'karanpratapsingh.com',
  calendly: 'https://calendly.com/karanpratapsingh',
  links: {
    linkedin: 'https://www.linkedin.com/in/fakhrul-syahmi-0b9bb42a8',
    email:
      'https://mail.google.com/mail/?view=cm&fs=1&to=fakhrulsyahmiwork46@gmail.com', // Gmail compose link
  },
};
