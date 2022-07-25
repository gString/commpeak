import { LabelText, ResetButton, TextEdit, TextEditLabel } from "./styles";

export function TextEditor ( {handleTyping, editText, reset, textBoxRef} ) {
	return <TextEditLabel>
		<LabelText>Variant 1</LabelText>
		<TextEdit ref={ textBoxRef } onChange={handleTyping} value={editText}/>
		<ResetButton onClick={() => reset()} title="Click to reset">&#128465;</ResetButton>
	</TextEditLabel>;
}