import { StyledButton } from "./styles";

export function TextButton ( { item, addPlaceHolder } ) {
	
	const clickHandler = () => {
		if ( !item.used ) {
			addPlaceHolder (item);
		}
	}
	
	return <StyledButton title="Click to add" added={ item.used } onClick={ clickHandler }>{ item.name }</StyledButton>;
}