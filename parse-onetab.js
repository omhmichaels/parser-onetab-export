// get-onetab-link.js

var fs = require("fs");



function prepOnetabExport(text_file='ontab.txt'){
    var data = []
    let data_format = {
        "link" : "",
        "description": ""
    }
    // Read file text
    var text = fs.readFileSync(text_file, 'utf8')

    // Test File Text: console.log("\n*************\n", text , "\n**********\n")

    // Get lines from text
    dirty_data = text.split('\r\n')
    
    // Check Split | console.log("\n############\n", dirty_data , "\n#########\n")
    // Loop through dirty data array and do stuff
    for (let sho of dirty_data){
        
        let gro = sho.split('|')
        
        data_format.link = gro[0]
        data_format.description = gro[1]
        //console.log(data_format)
        data.push(data_format)
        console.log(data)
    }
    //console.log(data)

    return data
}




let data = prepOnetabExport()
//console.log(data)








/*
for (let toe of prepped_data){
    try{
        let link = toe.match(/(^http.* )/)
        let description = toe.match(/(^ \w.*)/)


   // console.log("____________\n", description)
    //console.log("____________\n", link)
        data_format.description =  description[0]
    }
    catch (error){

    }

    try {
        data_format.link = link[0]
    }
    catch(error) {
        //console.log(error)
    }
    console.log("____________\n", data_format)
try{
    outfile.write(data_format)
}
catch (error){}
}
*/