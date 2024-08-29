import { type FC } from 'react';

const Footer: FC<{ author: string }> = ({ author }) => {
  return <div>Made with ❤️ by {author}</div>;
};

export default Footer;
