import { cn } from "@/shared/@common/utils/twMerge"

type ButtonTheme = "blue" | "mint" | "gradient"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme
  disabled?: boolean
  className?: string
}

const blue = "bg-blue01 text-white"
const mint = "bg-mint01 text-white"
const gradient = "bg-custom-gradient text-white"
const disableStyle = "disabled:bg-[#DBDBDB] disabled:text-[#B8B8B8]"

const color: Record<ButtonTheme, string> = {
  blue,
  mint,
  gradient,
}

const Button: React.FC<IButtonProps> = ({
  theme,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        disableStyle,
        color[theme],
        "h-[60px] w-[735px] rounded-[10px] text-[18px] font-bold leading-l tracking-[0.09px]",
        "mo:w-full",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
