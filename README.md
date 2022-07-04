# Print barcode labels on tsc printer
If you want to print barcode snippets through the web, you will surely face a problem
*Don't worry, this article will help you solve it  :smile:*
 Most of the time you will need a library to generate barcode in javascript
 [download library](http:https://lindell.me/JsBarcode/// "download library")
 We will define the place in html code
```html
<svg id="barcode"></svg>

```
and you need init() jsBarcode in your js file 
```javascript
JsBarcode("#barcode", "Hi world!");
//Check it looks like this
```
>![image](https://user-images.githubusercontent.com/62561354/177083668-fd277d6f-bf1a-478a-a87a-353593180ab3.png)

```javascript
// Then we add some features 
function Print(color,size,reference) {
    JsBarcode("#barcode", "{{product.barcode_num}}", {
        format: "code128",
        width: 1,
        height: 30,
        fontSize:14,
        marginTop:35,
        textMargin:5,
        text: `${color}-${size}-${reference}`,
      });
      //................Print().........
}
```
> then we add printing function
```javascript
// Then we add some features 
function Print(color,size,reference) {
//................Print().........
     var printContents = document.getElementById("generate").innerHTML;
    for(let i=0;i<3;i++)
    printContents+=document.getElementById("generate").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
```
### ```Result
