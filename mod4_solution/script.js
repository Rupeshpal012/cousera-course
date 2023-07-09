var names=new Array();
names[0]="Rupesh";
names[1]="Joy";
names[2]="Jason";
names[3]="jay";
names[4]="avinash";
names[5]="kunal";
names[6]="sahil";
names[7]="jayesh";
names[8]="manish";
names[9]="jagdeep";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}