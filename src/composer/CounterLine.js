import { Counter } from "./styles";
import { useMemo } from "react";

const CounterLine = ({editText, holdersLength}) => {
	const sum = useMemo(() => {
		const strippedText = editText.replaceAll(new RegExp("\\[.*?\\]","g"),"");
		return strippedText.length + holdersLength;
	}, [editText, holdersLength]);
	
	return (
		<Counter>Length: <strong>{sum}</strong> chars</Counter>
	);
};

export { CounterLine };