## Webpack Sample

This sample has cloudscribe Core and Simple Content using NoDb with pre-configured data.
You can login with admin@admin.com password is admin

There are a couple of great things about this sample. It shows how to use webpack for client development, with hot module reloading, and using the sass version of bootstrap which is great for doing custom bootstrap themes. You can more easily customize the colors, and you can leave out parts of bootstrap that you are not using to reduce the amount of css. I pretty much do all my client projects with bootstrap-sass. Best of all, I think this sample shows how you can easily integrate SPA (Single Page App) style apps into a larger MVC web site. When you need to have multiple apps all tied together in one web property this provides a great approach. SPA style apps usually have just a little markup for an app element like an empty div, and then some javascript that loads the app into the app element. In SimpleContent you can disable the CKeditor for individual pages, which makes it easier to put in your app markup because CKeditor doesn't let you put in an empty div. Then the developer tools for SimpleContent pages allow you to add any needed scripts and css. There are already several sample SPA apps setup that you can see just by running the WebApp.

This sample has webpack setup with typescript and with bootstrap-sass and it has webpack hot module reloading.

For example you can edit the sass such as changing colors in the _variables.scss file in the scss folder with the site runnning and just refresh the page to see your changes.

You can also edit the ClientApp1/Main.ts file which has a simple greeter, you can change the greeting and refresh the page and it appears immediately due to the hot module reloading. Similarly you can edit any of the typescript code in the react sample and refresh the page to see the changes immediately. Webpack hot module reloading rocks!

## Vanilla Typescript app sample

There is a basic hello world vanilla typescript client app. It is hosted in a simplecontent page and is already in the menu.


## React/Redux/Typescript sample

There is also a react/redux/typescript app also hosted in a simplecontent page, already in the menu when you run the app.

## Prerequisites

For webpack you need node and npm. Visual Studio 2017 ships with a really old version of Node that is not going to work with this solution. You can install the latest Node LTS version and then configure Visual Studio to use your newer version under Tools > Options > Projects and Solutions > Web Package Management > External Tools
You can add the path there for your newer installation of Node ie c:\Program Files\nodejs

I think you also need this visual studio extension https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner

I have this one on my machine as well https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebExtensionPack2017



