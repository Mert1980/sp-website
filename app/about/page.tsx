import { Icons } from "@/components/icons";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className=" font-black text-4xl lg:text-5xl flex items-center">
            About
            <Icons.logoS className="stroke-purple-500 stroke-2 w-16 h-16 ml-4 -mr-1" />
            marty<span className="text-purple-500">P</span>ro
            <span className="text-purple-500">X</span>
          </h1>
        </div>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="/images/sp-logo-mini.png"
              alt={siteConfig.author.name}
            />
            <AvatarFallback>SPX</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center">
            Smart Business Solutions
          </h2>
          <h2 className="text-xl font-bold text-center text-muted-foreground">
            {siteConfig.author.email}
          </h2>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          {/* 1 paragraph of Lorem text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis, nisl in tincidunt ultricies, turpis nisi fermentum sapien,
          vitae ultricies libero nulla nec nulla. Nulla facilisi. Phasellus nec
          ex auctor, fermentum nunc sed, vestibulum nisl. Curabitur nec nunc nec
          erat tincidunt vehicula. Sed sit amet vestibulum odio. Nullam nec eros
          ac sapien tincidunt cursus.
        </p>
      </div>
    </div>
  );
}
