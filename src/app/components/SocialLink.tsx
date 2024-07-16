import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
}

const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className="p-4 bg-secondary rounded-full flex items-center justify-center text-2xl text-primary hover:bg-turquoise hover:text-darker transition duration-400"
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
