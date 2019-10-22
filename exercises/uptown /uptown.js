var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"]

    // console.log(lyrics.toString());
    // var reversed = lyrics.reverse()
    // console.log('reversed: ', reversed);
    // console.log(lyrics.toString());
 
    functon everyOther(arr){
        for(let i = 0; i < lyrics.length; i++){
            if(i % 2 === 0){
                newArr.push(arr[i])
            }
        }
    }
