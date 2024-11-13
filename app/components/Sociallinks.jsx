export default function SocialLinks() {
  const socials = [
    { icon: 'github', url: 'https://github.com/yourhandle' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { icon: 'twitter', url: 'https://twitter.com/yourhandle' }
  ];

  return (
    <div className="fixed left-6 bottom-0 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {socials.map((social) => (
          <a
            key={social.icon}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-[#64ffda] transition-colors"
          >
            <i className={`fab fa-${social.icon}`} />
          </a>
        ))}
        <div className="w-px h-24 bg-white/20" />
      </div>
    </div>
  );
}