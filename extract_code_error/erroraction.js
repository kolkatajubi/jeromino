$(document).ready(()=> {
    ;(async()=>{
        let err = await errorapi.getError()
        console.log(err)
        $(".error-label").html(err)
    })();

    // $(".errorItem").click(async()=>{
    //     let err=$(".errorItem").text()
    //     $(".errorLabel").html(err)
    //     let sol = await sol_api.solution(err)
    //     for(let i=0; i < sol.length; i++){
    //         var key = Object.keys(sol[i])[0]
    //         // console.log(sol[i][key])
    //         $(".solutionList").append(
    //             "<li class='listItem'>" + key + "</li>"
    //         )
    //     }
    // })

    // $(".listItem").click(async()=>{
    //     // console.log(val)
    //     $(".box2").html(val)
        

    // })
})
