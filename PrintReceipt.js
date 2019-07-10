function printReceipt(barcodes){
    if(!isValid(barcodes)){
        return "[ERROR]:"
    }

    var items = getItems(barcodes);

    var sum = calculatePrice(items);

    return print(items, sum);
}

function isValid(barcodes){
    
    return typeof(barcodes) == Array && barcodes.length >0;
    
}


function getItems(barcodes){
    var items = new Array();
    const storeSet = new Set();

    storeItem.forEach((item)=>{
        storeSet.add(item.id);
    })
    
    for(var i in barcodes){
        if(storeSet.has(barcodes[i])){
            for(var j in storeItem){
                if(barcodes[i] == storeItem[j].id){
                    items.push(storeItem[j]);
                    break;
                }
            }
        }else{
            return "[ERROR]:";
        }
    }
    return items;
}

function calculateTotalPrice(items){
    var sum = 0;
    items.forEach((item)=>{
        sum += item.price;
    })
    return sum;
}

function createReceipt(items, sum){

    var receipt ='Receipts\n';
    receipt +="------------------------------------------------------------\n";
    const itemsSet = new Set();
    var goods = new Array();
    for(var index in items){
        if(!itemsSet.has(items[index].id)){
            var obj = {id:items[index].id,name:items[index].name,price:items[index].price,count:1};
            goods.push(obj);
            itemsSet.add(items[index].id);
        }else{
            goods.forEach((item)=>{
                if(item.id==items[index].id){
                    item.count++;
                }
            })
        }
    }
    
    goods.forEach((item)=>{
        receipt +=item.name+"\t"+item.price+"\t"+item.count+"\n";
    })

    receipt +="------------------------------------------------------------\n";
    receipt +="Price: "+sum;
    return receipt;
}

const storeItem = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

module.exports = {
    printReceipt,
    isValid,
    getItems,
    calculateTotalPrice,
    createReceipt
}