import { profile } from "../data/portfolio";

type ProfileAvatarProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-9 w-9 rounded-xl sm:h-10 sm:w-10",
  md: "h-20 w-20 rounded-2xl",
  lg: "h-28 w-28 rounded-3xl sm:h-32 sm:w-32",
};

export function ProfileAvatar({ size = "sm", className = "" }: ProfileAvatarProps) {
  return (
    <img
      src={profile.avatar}
      alt={`${profile.name} — profile photo`}
      width={size === "lg" ? 128 : size === "md" ? 80 : 40}
      height={size === "lg" ? 128 : size === "md" ? 80 : 40}
      className={`shrink-0 object-cover object-[center_18%] ring-2 ring-white/10 transition-transform duration-300 ease-smooth group-hover:scale-105 ${sizeClasses[size]} ${className}`}
      loading={size === "sm" ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
