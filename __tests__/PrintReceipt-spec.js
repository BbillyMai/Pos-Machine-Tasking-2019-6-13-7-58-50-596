const PrintReceipt = require("../PrintReceipt");

it ('should print error when invoke isValue given barcodes is null', ()=>{
    expect(PrintReceipt.isValid(null)).toBe(false);
});

it ('should return items when invoke getItems given barcodes', ()=>{
    const barcodes = ['0001', '0003', '0005', '0003'];
    const items = [{"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5}]
    expect(PrintReceipt.getItems(barcodes)).toStrictEqual(items);
});

it ('should return items when invoke getItems given barcodes', ()=>{
    const barcodes = ['0001', '0003', '0005', '00019'];
    
    expect(PrintReceipt.getItems(barcodes)).toStrictEqual("[ERROR]:");
});

it('should return sum when invoke calculate given items', ()=>{
    const items = [{"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5}]
    expect(PrintReceipt.calculatePrice(items)).toBe(20);
});


it('should return Receipts when invoke print given items', ()=>{
    const items = [{"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5}]
    
    const receipts = "Receipts\n"+
    "------------------------------------------------------------\n"+
    "Coca Cola\t3\t1\n"+
    "Pepsi-Cola\t5\t1\n"+
    //"Pepsi-Cola\t5\t2\n"+
    "Dr Pepper\t7\t1\n"+
    "Pepsi-Cola\t5\t1\n"+
    "------------------------------------------------------------\n"+
    "Price: 20";
    expect(PrintReceipt.print(items,20)).toBe(receipts);
});
