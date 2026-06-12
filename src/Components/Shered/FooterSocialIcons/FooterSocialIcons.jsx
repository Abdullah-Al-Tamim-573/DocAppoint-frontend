import Link from "next/link";

 let  FooterSocialIcons =({ labelName, icon: Icon }) => {
  return (
    <Link
      href="/"
      aria-label={labelName}
      className="w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 rounded-full bg-gray-800/60 text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#005f54] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[#005f54]/30"
    >
      <Icon size={13} className="flex xl:hidden" />
      <Icon size={16} className="hidden xl:flex" />
    </Link>
  );
}

export default FooterSocialIcons