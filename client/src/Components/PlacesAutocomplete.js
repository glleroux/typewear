import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import React, { useState } from "react";
import getAddressObject from "../utils/get_address_object";

const PlacesAutocomplete = ({ toggleGPlacesFocus, setAddressValue, addressValue, setAddressChosen }) => {
  const [currIndex, setCurrIndex] = useState(null);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description, place_id }) => async () => {

    const parameter = {
      placeId: place_id,
      // Specify return data
      fields: ["formatted_address", "address_components"]
    };

    try {
      const details = await getDetails(parameter)
      setValue(details.formatted_address);
      const inktAddress = getAddressObject(details.address_components)
      setAddressValue(Object.assign(addressValue,inktAddress))
      setValue(description, false);
      setAddressChosen(true)
      clearSuggestions();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleEnter = (index) => {
    setCurrIndex(index);
  };

  const renderSuggestions = () =>
    data.map((suggestion, index) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion, place_id)}
          className={
            index === currIndex ? "ex-list-item-darken" : "ex-list-item"
          }
          id={`ex-list-item-${index}`}
          onMouseEnter={() => handleEnter(index)}
          onMouseLeave={() => setCurrIndex(null)}
        >
          {main_text}{" "}
          <small className="sub-text">{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        id="listbox"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where do you live?"
        onFocus={toggleGPlacesFocus}
        onBlur={toggleGPlacesFocus}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul id="ex-list-box">{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;
