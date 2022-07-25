import { Preview, PreviewTitle } from "./styles";
import { useMemo } from "react";

export function PreviewDisplay ({editText, placeHolders}) {
	
	const holders = useMemo(() =>  Object.values(placeHolders) || [], [placeHolders]);
	const previewMsg = useMemo(() => {
		let text = editText;
		holders.forEach(item => {
			text = text.replace (item.templateString, item.example);
		});
		return text;
	}, [editText, holders]);
	return <>
		<PreviewTitle>Preview:</PreviewTitle>
		<Preview>{previewMsg}</Preview>
	</>;
}