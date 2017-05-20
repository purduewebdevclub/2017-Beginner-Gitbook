# Introduction
WDC is here to provide the knowledge to those who are interested. However, some of that work must be taken up from you, as a student. ** As a student we expect you to attend meetings and complete parts of your project.**

## Why do you need to put in work?
Web Development isn't just writing a few lines of HTML & CSS. It requires a large amount of work, and it's like many skills; you need to practice, practice, practice.

## Who is this for?
This course is for anyone who'd like to learn.

## Development/Setup

All you need is a code editor.
Steps:
1. Go download an editor like [Sublime Text](https://www.sublimetext.com). 
2. Create a folder on your computer for web development
3. Create a folder for each meeting

# What is Web?
Web Development is development that involves a website (also referred to as a ** web app **).
Web Development involves two things: a *client* and a *server*.

## Client/Server Model
Client: Sends requests to your server. 

Server: Accepts requests from client. Most of the security and asset/resource management happens here.

**Context**: When you visit https://google.com, there are computers that figure out that google.com refers to a server with a specific internet address. Based on this, it (your browser, the client) talks to the server and tells it you need the route "/". Your server realizes you want index.html and sends that info back to the browser and you're able to search. Most of the security happens at the server-side!

## HTML

HTML stands for **HyperText Markup Language**. It's basically the skeleton of your website. To further understand what it does, let's write our own site.

## Tags

In HTML you have starting and ending **tags**. Tags are used for indicating where an element starts and ends. **Elements** are basically parts of the page that give different functionalities. 

Create an `index.html` file with the following contents:
```html
<html>
    <body>
        <div> Hello World! </div>
    </body>
</html>
```

Go ahead and open this up in your browser!

### HTML Tag
`<html>` is so that your browser understands that this is where your site will start.
`</html` is so that your browser knows where your site's HTML will end. `<element-name>` indicates the starting `element-name` tag. `</element-name>` indicates the ending `element-name` tag.

```html
<html>
    <!--This is a comment-->
    <!--This is where the code of your webpage goes-->
</html>
```

### Body Tag
`<body>` tag is used so that the browser knows where the main content of your application/website lies. This is where you want to show all of your info.
```html
<html>
    <body>
        <!--This is where the heart of your content goes!-->
    </body>
</html>
```


### Div Tag
`<div>` is a container for other tags or information. 

**Notice: You can have other elements between the starting and ending tags, or text**
```html
<html>
    <body>
        <div>
        <!--Contain elements here!-->
        </div>
    </body>
</html>
```
When would you want to use `div`s?
Good question! A good website is written with proper organization in mind. Your web page is going to be complicated at some points and it's a good idea to divide it up. That's what `div` tags are for. For example, if you have a page with a left column and right column, you would have a setup like this:
```html
<html>
    <body>
        <div> <!--Global container-->
            <div> <!--Left container--> </div>
            <div> <!--Right container--> </div>
        </div>
    </body>
</html>
```

### Header tags
Header tags (`<h1>...<h2>...<h3>...until <h6>`) are to show bolded titles. For example, you need to write a new page and would like to show your name in bold, you would use a header tag. There are multiple different headers ranging from `h1` to `h6`. The larger the number, the smaller the header. For example, `h1` is a lot larger than an `h5`.

#### Example:


### Paragraph tag
The paragraph tag is when you'd like to display large blocks of text. 
#### Example: 
