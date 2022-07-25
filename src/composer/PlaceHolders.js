import { Bar } from "./styles";
import { TextButton } from "./TextButton";

const PlaceHolders = ({placeHolders, addPlaceHolder}) => {
	
	return (
		<Bar>{ placeHolders && Object.values(placeHolders).map(item => <li key={ item.id}><TextButton item={ item } addPlaceHolder={addPlaceHolder}/></li>)}</Bar>
	);
};

export { PlaceHolders };