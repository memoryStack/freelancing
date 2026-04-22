how to customize an SVG ?
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-heart" style="
    /* fill: red; */
    /* stroke: red; */
    ">
        <path d=""></path>
    </svg>

    i noticed that an svg has all of these attributes like "fill", "stroke" etc.
    how these color related attributes impact the styling ?
        And are these css properties like fill & stroke only svg specific ?

how to increase the touch area of an element for mobile devices?
    the solution is in this article and it inspired me to learn more about
    responsive web design.
    https://web.dev/articles/accessible-tap-targets

how to properly use the ::after & ::before pseudo elements ?
    usecases:
        1. increase the touch area of small elements to make them more accessible
        2. use these to add feedback layers like when user presses then show some color
            via updating color of this element
        both of these use-cases are used in the IconButton component.
