# CSS
We are learning about CSS this meeting! **CSS stands for Cascading StyleSheets.**

CSS is for stylizing your websites.

## Setup
1. Create a `styles.css` file
2. Add the following `<head>` tag to your html:
```html
<html>
    <head> <!--Section of HTML to make sure you can add links and references to files-->
        <link href="styles.css" type="text/css" rel="stylesheet"> <!--Links to another css file-->
    </head>
        ...
    <body>
        ...
    </body>
</html>
```

## Selectors
In CSS, you can apply "styling" to different elements, but in order to do that, you need a way to select the different items.

### ID's
To uniquely identify different HTML elements, you need to use ID's. 
```css
/* styles.css */
#div1 { /* # denotes ID, div1 is name of ID*/
    text-align: center; /* text-align is a property, center is a value */
}
```
```html
/* index.html */
<html>
    <body>
        ...
        <div id="div1">
            <!--Content!-->
        </div>
        ...
    </body>
</html>
```

### Classes
Classes are a way to group elements together. If you want to apply a set of styles to multiple elements, you'd want to use Classes vs IDs.

```css
/* styles.css */
.class1 { /* . denotes a class, class1 is the name of the class */
    color: blue;
}
```
```html
/* index.html */
<html>
    <body>
        ...
        <div class="class1">
            <!--Content!-->
            <div>
                <h1> I'm blue! </h1>
                <div> <h1>I'm blue too!</h1> </div>
            </div>
        </div>
        ...
    </body>
</html>
```

### Properties and values
| Property       | Value     | Description |
| -------------- | ----------| -------------- |
| text-align     | `center, left, right` | Align text a certain way |
| color          | `blue, red, #34E3B1`  | Set text color |
| background-color | `any color` | Set background color |

## Workshop
TODO!

## Resources
[CSS reference @ MSDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[Bootstrap](https://getbootstrap.com/css)