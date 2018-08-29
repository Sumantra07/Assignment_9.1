/*
 *
 * function to create object using Object Constructor
 * 
 * 
 */
function createObject( ) {

    // using Object Constructor to create Object
    var testObj = new Object();
    // setting desired value for properties
    testObj.name = "Bala";
    testObj.height = "180 cm";
    testObj.aboutYourself = function() {
        var s ="I am "+ testObj.name + " I am " + testObj.height +" height";
        return s;
    }
    // returning created object
    return testObj;
}
// invoking createObject
 var me = createObject();
 // printing on console
 console.log(me.aboutYourself());

