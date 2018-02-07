# Jquery Photo Random
**Query pugin photo Random**
#### Installation
```js
npm install --save jquery-rndm-full
````

##### You need to load jquery first
```html
<script src="/mode_module/jquery/dist/jquery.js"></script>
<script src="/mode_module/jquery-rndm-full/src/index.js"></script>
```
Before using pluging, you need to register as develop then you must put the **CLIENT_ID** to be able to get photos from unisplash API.

```JS
window.rndmFull.setup(clientId);
```

#### How it work?

```html
<div id="bg-random">
```
```js
$(document).ready(function(){
window.rndmFull.setup(clientId);
var options = {
minHeight: '700px', //by default is 800px
backgroundSize: 'contain', //by default is cover
backgroundPosition: 'top center', //by default is center
backgroundColor: 'red', //black
backgroundImage: 'path/img.jpg', //in the case that the end point responses with an error
}
$('bg-random').rndmFull(options);
});
```







