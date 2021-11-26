// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// ES5
// var 


// ES6 
// var      -> variable - global
// let      -> let      - local
// const    -> constant 

// let infoData = "Hello";
//  infoData = "Bello";
// console.log(infoData);




//global

// if(true){
// // local global

//     if (true) {
//     let infoData = "Hello1";
//     console.log(infoData);
//         // local global
//         if (true) {
//             // local
//         }
//     }

// }
// var a = 5;
// console.log(a);


// let infoData = "Hello";
// console.log(infoData);

// if (true) {
//     let a = 10;
// }

// if (true) {


//     if (true) {
//     const infoText = "Hello5";
//     console.log(infoText);

//     }
    
// }


// const infoDataText = 'Hello" JAvaScript';

// function a(params) {
    
// }



// console.log(infoDataText);


// const a = 5;
// const b = 10;

//             a>b ? console.log('a little') : console.log('b little');
//      const c = 5;
//      console.log(void(c));


// if        -> əgər
// else if   -> deyilsə əgər
// else      -> deyilsə


// const a = 20;
// if (a<10) {
//     console.log(true);
// }else if(a == 20){
//         console.log(a);
// }
// else{
//     console.log(false);
// }




const myTime =1;

if ((myTime>=1) && (myTime <=10) ) {
    console.log("Good Morning");
    if (myTime == 7) {
        console.log("Wake up");
    }else if(myTime == 10){
        console.log("Do breakfast");
    }
}

else if ((myTime>10) && (myTime <=15)){
    console.log("Good Afternoon");
}

else if((myTime>15) && (myTime <=22)){
    console.log("Good Evening");
}

else if((myTime>22) && (myTime <=23)){
    console.log("Good Night");
}else{
    console.log("No Time");
}