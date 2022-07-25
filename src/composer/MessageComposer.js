import { useCallback, useEffect, useState, useRef } from "react";
import { get_place_holders } from "../fakeAPI/placeholders";
import { Title, Wrapper } from "./styles";
import { TextEditor } from "./TextEditor";
import { PlaceHolders } from "./PlaceHolders";
import { PreviewDisplay } from "./PreviewDisplay";
import { CounterLine } from "./CounterLine";

const editTextInitialValue      = "";
const holdersLengthInitialValue = 0;

const MessageComposer = () => {
	const textBoxRef                         = useRef ();
	const [placeHolders, setPlaceHolders]   = useState ();
	const [holdersLength, setHoldersLength] = useState (holdersLengthInitialValue);
	const [editText, setEditText]           = useState (editTextInitialValue);
	
	const getTemplateString = itemKey => "[".concat (itemKey, "]");
	
	const processData = useCallback (data => {
		const processed = {};
		for ( let itemKey in data ) {
			processed[ itemKey ] = {
				...data[ itemKey ],
				templateString: getTemplateString (itemKey),
				used:           false,
				key: itemKey,
			}
		}
		return processed;
	}, []);
	
	useEffect (() => {
		const getPlaceholders = async () => {
			const data = await get_place_holders ();
			setPlaceHolders (processData (data));
		}
		getPlaceholders ();
	}, [processData]);
	
	const addPlaceHolder = item => {
		setHoldersLength (prevState => prevState + item.max_length);
		setPlaceHolders (prevState => ( {
			...prevState,
			[ item.key ]: { ...prevState[ item.key ], used: true }
		} ))
		
		const insertIndex = textBoxRef.current.selectionStart;
		const newText = editText.substring(0, insertIndex).concat(item.templateString, editText.substring(insertIndex));
		setEditText(newText);
	}
	
	const handleTyping = evt => {
		setEditText (evt.target.value);
	};
	
	const reset = () => {
		setEditText (editTextInitialValue);
		setHoldersLength (holdersLengthInitialValue);
		setPlaceHolders(prevState => {
			const newState = {};
			for (let key in prevState) {
				newState[key] = {...prevState[key], used: false};
			}
			return newState;
		})
	}
	
	return (
		<Wrapper>
			<Title>Commpeak ReactJS practical task</Title>
			<TextEditor textBoxRef={ textBoxRef } reset={ reset } handleTyping={ handleTyping } editText={ editText }/>
			<CounterLine editText={ editText } holdersLength={ holdersLength }/>
			<PlaceHolders placeHolders={ placeHolders } addPlaceHolder={ addPlaceHolder }/>
			{ placeHolders && <PreviewDisplay editText={ editText } placeHolders={ placeHolders }/> }
		</Wrapper>
	);
};

export { MessageComposer };