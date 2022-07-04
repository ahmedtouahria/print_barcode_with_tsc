function Print(color,size,reference) {
    JsBarcode("#barcode", "barcode", {
        format: "code128",
        width: 1,
        height: 30,
        fontSize:14,
        marginTop:35,
        textMargin:5,
      // override barcode text 
        text: `${color}-${size}-${reference}`,
      });
    var printContents = document.getElementById("generate").innerHTML;
    for(let i=0;i<3;i++)
    printContents+=document.getElementById("generate").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
