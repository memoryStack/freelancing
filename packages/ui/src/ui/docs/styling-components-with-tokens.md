this ui library will follow a design system based theme and the tokens will be used to
style the components.

what are design tokens ?
Design tokens are small, reusable design decisions that make up a design system's visual style. Tokens replace static values with self-explanatory names.

what kind of tokens we have, follow src/styles/theme.css file to see that

types of tokens and relationship between them

1. Palette tokens
tokens like "--md-ref-palette-neutral-variant50" are paletter tokens, these have a
specific concrete value assigned to them.

2. system tokens
tokens like "--md-sys-color-primary" are called system tokens. these refer to a particular palette color and these tokens have a semantic meaning attached to them
for example "--md-sys-color-primary: var(--md-ref-palette-primary40);"
here primary color is palette's primary color's 40th shade version

3. component tokens
the tokens that will customize a component. these tokens will take their fallback value
from system tokens 
for example see below, it's taken from "icon-button.scss"
&--tonal {
    --_container-color: var(--md-filled-tonal-icon-button-container-color, 
    var(--md-sys-color-secondary-container));
}

here the container color will be customized by component token "--md-filled-tonal-icon-button-container-color" and if it's not defined then we fallback to a system token "--md-sys-color-secondary-container"

now read the files like icon-button.scss in ui layer and see that none of the palette tokens get mentined while styling these files at all. And all of the aspects of an element get styled by the component tokens and if these component tokens are not defined then we fallback to sys tokens.
this is how design systems work, by having this hierarchy we achieve below
1. allow a specific customization in a component if system tokens doesn't suit properly
    we achieve this by defining component tokens with a custom value
2. change the look and feel of components on the fly
    this is achieved by just changing the color palette tokens values and whole component changes
so this system enables us to easily update the theme of a website and also allows to customize the components easily.

now all the aspects of all the components in the ui layer will follow this kind of pattern to style.

And also notice that how the customization is happening when variants are defined or when pseudo classes are applied
so on top level we define some local css variables and these local css variables are applied to the elements inside actual element or inside the pseudo elements like ::after or ::before.

NOTE: ::after pseudo element is used as a state layer to show the feedback to the user on hover or pressed changes.

And these local CSS variables will change their values when a variant is applied or when a pseudo class is applicable to the elements. and the whole look and feel of the element/component changes.
We are going to follow the same pattern for all the components. so understand it completely and follow that for next components.
