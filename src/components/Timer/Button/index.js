import { StyledButton } from "./Button.style";

export default function Button ({
  label,
  onClick,
  frontColor,
  backColor
  }) {
    return (
      <StyledButton
        onClick={onClick}
        frontColor={frontColor}
        backColor={backColor}
      >
        {label}
      </StyledButton>
    )
}