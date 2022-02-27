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
        "#": /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export const CreditCardMask = forwardRef((p, ref) => (
  <TextMaskCustom {...p} ref={ref} mask="#000 0000 0000 0000" />
));

export const ExpiryMask = forwardRef((p, ref) => (
  <TextMaskCustom {...p} mask="#0/00" ref={ref} />
));

export default TextMaskCustom;
