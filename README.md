Initial pass at searchable tiled list based off screenshot of a design.

Initial questions for designers:

- What is the purpose of this UI? ie. are we triggering a separate event, like the opening of a modal when one of the items is clicked (as buttons), or is this an elaborate multi-select which requires a11y considerations for custom form inputs?
- Is this list scrollable, & how do we expect to handle pagination/infinite scroll if there are many results returned?
- Do we want the search triggered when the input changes, or when enter key is pressed?
- Do we want to load an initial list up front?
- What is the empty state when there are no results?
- What does our loading state look like?
- Labels can be truncated, does this mean we want to include a tooltip to reveal any hidden text?
- What's the placeholder text?
- What do our hover & focus states look like?
- How are we handling different image sizes to make the tiles most useful to the user, ie tall & thin, or short & wide?


Basic behaviours:

- Searchable list based off user input
- Responsive - must be functional across a range of screen sizes

Advanced behaviours:

- Pagination if dealing with many search results, using IntersectionObserver or a "Load more" button.
- Debouncing user input to prevent arbitrary network calls.
- Caching to avoid arbitrary service calls.
- Loading & empty states


Initial basic implementation:
- Load & render initial list
- Update list on input change (debouced)
- No caching
- No pagination
- No loading or empty states
