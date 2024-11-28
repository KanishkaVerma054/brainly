import { IconProps, iconSizeVariants } from "./iconProps"


export const BrainIcon = (props: IconProps) => {
  return (
    <img src="icons8-mind-64.png" alt="Brain" className={iconSizeVariants[props.size]}/>
  )
}
