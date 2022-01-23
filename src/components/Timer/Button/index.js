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
        backColor={backColor}
      >
        {label}
      </StyledButton>
    )
}