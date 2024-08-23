import { forwardRef, InputHTMLAttributes } from 'react';

export const Autocomplete = () => {
  return <div>hello</div>;
};

Autocomplete.displayName = 'Autocomplete';
Autocomplete.Container = Autocomplete;

type AutocompleteInputProps = InputHTMLAttributes<HTMLInputElement> & {
  openOnFocus?: boolean;
  //disabled
  // aria-disabled
  //readOnly
};
const AutocompleteInput = forwardRef<HTMLInputElement, AutocompleteInputProps>(
  ({ ...props }, ref) => {
    return <input {...props} ref={ref} />;
  }
);

AutocompleteInput.displayName = 'AutocompleteInput';
Autocomplete.Input = AutocompleteInput;

/* Autocomplete component
Mui style: 
En input med en chevron som pekar up eller ner om listan är framme, samt om något finns i inputen så ska en clear (X) ikon finnas
samt att om något är selected ska den ha en annan färg

MUI Props:
disableCloseOnSelect = slå av att dropdownen försvinner när man väljer något
disableClearable = ta bort rensa knappen
blurOnSelect = när man valt så stänger man listan
disablePortal = använd inte en portal för listan

Mui variant:
färdig country lista
grouped: att listan kan ha olika kategorier
disabled options: att vissa saker i listan inte är valbara
loadOnOpen: ladda alla saker endast när listan öppnas (async)
multipleOptions: kunna välja flera olika saker som sparas som en liten knapp i komponent 
checkboxes: att de finns checkbox inputs i listan och inte bara text 
limitTags = gör en +6 more ifall flera saker är valda och man inte vill att listan ska overflowa
highlights = highlighta bokstäver som stämmer överens med inputen (endast om de är följande bokstäver)

ANT DESIGN Props:
caseSensitive = om de ska vara på eller ej
filterOption = tar emot en funktion som ändrar vilken typ av filter ska användas (måste skapas ett eget filter för komponent först dock)
defaultValue = om något val ska vara förvalt

PRIME REACT Props:
items = prop för alla items som ska vara med i listan
VirtualScroll = true false, om items i objectet ska laddas delvis för att förhindra långa söktider, måste ha en default siffra för hur många items som ska sökas per gång

Prime react accessability: ska finnas en label i inputen som floatar snyggt över för att få SR att va bra
Keyboard supports prime react ===
tab	Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element.
up arrow	Highlights the previous item if popup is visible.
down arrow	Highlights the next item if popup is visible.
enter	Selects the highlighted item and closes the popup if popup is visible.
home	Highlights the first item if popup is visible.
end	Highlights the last item if popup is visible.
escape	Hides the popup.

NextUI variants:
Att man ska kunna välja en placeholder och label om man vill
Required ska finnas också
Olika storlekar på inputen
Variants = outlined, underlined, none, filled

NEXTUI Props:
start/endContent = om man vill ha t.ex. en icon i inputen innan sökrutan eller efter
OM required är på så ska isInvalid finnas, samt ett error message
Information = en informativ text om vad autocompleten är till för

NextUI Data attributes:
data-invalid
data-open
data-visible (för clear button)
data-disabled
data-selected
data-hover
data-pressed
data-focus-visible

REACT SUITE Variants:
Grouped autocompletes, flera autocompletes som är i samma kategorier och som gör ett slutgiltigt value kombinerat

React suite aria:
aria-haspopup="listbox"
autocomplete="combobox"
aria-expanded
aria-controls = (id:et av dropdown listan)
aria-activedescendant = (id:et av den valda saken i listan)

Mantine UI == props
limit = används för att vid höga antal suggestions endast visa dem 5 första t.ex.
withScrollArea = används om man ska kunna scrolla listan eller inte */
