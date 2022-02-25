import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

const TextMaskCustom = forwardRef(function (
  { onChange, mask = "(#00) 000-0000", ...props },
  ref
) {
  return (
    <IMaskInput
      {...props}
      mask={mask}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const CreditCardMask = forwardRef((p, r) => {
  return <TextMaskCustom ref={r} {...p} mask="#000 0000 0000 0000" />;
});

export default TextMaskCustom;
